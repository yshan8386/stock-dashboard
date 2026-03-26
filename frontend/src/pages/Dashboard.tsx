import Header from '../components/Header'
import StockCard from '../components/StockCard'
import WatchList from '../components/WatchList'
import type { Stock } from '../types/stock'
import { useState } from 'react'
import { useEffect } from 'react'
import { KeywordContext } from '../context/KeywordContext'

const mockWatchList: string[] = [
  '삼성전자', 'SK하이닉스', 'NAVER', 'LG화학'
]

function Dashboard() {
  const [selectedStock, setSelectedStock] = useState('');
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStocks = async() =>{
        setLoading(true)
        try{
            const res = await fetch('http://127.0.0.1:8001/api/stocks')
            const data = await res.json()
            setStocks(data);
        }catch(e){
            setError('데이터를 불러오지 못함');
        }finally{
            setLoading(false)
        }
    }
    fetchStocks()
  }, []);

  if (loading) return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white text-xl">
      로딩 중...
    </div>
  )
  if (error) return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center text-red-400 text-xl">
      {error}
    </div>
  )
  return (
        <KeywordContext.Provider value={{ keyword, setKeyword }}>
          <div className="bg-gray-900 min-h-screen text-white">
            <Header/>
            <main className="p-8">
              <h2 className="text-lg font-bold mb-4 text-gray-300">주식 종목 리스트</h2>
              <div className="grid grid-cols-4 gap-4">
                {stocks.map(stock => (
                  <StockCard key={stock.symbol} stock={stock} />
                ))}
              </div>
              <div className="mt-6">
                <WatchList items={mockWatchList.filter(item => item.includes(keyword))} onSelect={(item)=> setSelectedStock(item)}/>
              </div>
              <div className="mt-6">
                {selectedStock? <p>선택된 종목: {selectedStock}</p> : <p>종목을 선택해주세요</p>}
              </div>
            </main>
          </div>
        </KeywordContext.Provider>
  )
}

export default Dashboard