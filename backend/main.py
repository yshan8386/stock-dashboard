from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os
import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5174", "http://localhost:5174"],
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))


#전역변수로 토큰 저장
cached_token = None;
kis_api_url = os.getenv("KIS_API_URL")
kis_appkey = os.getenv("KIS_APPKEY")
kis_appsecret = os.getenv("KIS_APPSECRET")

async def get_access_token():
    global cached_token
    if cached_token:
        return cached_token
    
    #토큰 없을 때만 발급
    url = kis_api_url + "/oauth2/tokenP"

    body = {
        "grant_type" : "client_credentials",
        "appkey" : kis_appkey,
        "appsecret" : kis_appsecret
    }
    async with httpx.AsyncClient() as client:
        res = await client.post(url, json=body)
        data = res.json();
        print(data);
        cached_token = data["access_token"]
    return cached_token

@app.get("/api/stocks")
async def get_stocks():
    url = os.getenv("COFFEETREE_URL")+"?market=KOSPI&is_etf=false&limit=500&order_by_market_cap=true";
    api_key = os.getenv("COFFEETREE_API_KEY");

    async with httpx.AsyncClient() as client:
        res = await client.get(url, headers={
                "X-API-Key": api_key
            })
        data = res.json();
        stocks = None;
        if data["success"]:
            stocks = data["data"]
        print(stocks);

    return stocks;

@app.get("/api/stocks/{symbol}")
async def get_stock_detail(symbol: str):
    url = kis_api_url +"/uapi/domestic-stock/v1/quotations/inquire-price"
    token = await get_access_token()
    
    async with httpx.AsyncClient as client:
        res = await client.get(url, headers={
            "authorization": f"Bearer {token}",
            "appkey": kis_appkey,
            "appsecret": kis_appsecret,
            "tr_id": "FHKST01010100"
        }, params={
            "FID_COND_MRKT_DIV_CODE": "J",
            "FID_INPUT_ISCD": symbol
        })
        data = res.json()
        print(data)
        return data


