// src/types/stock.ts
export interface Stock {
  symbol: string      // 종목코드
  name: string      // 종목명
  name_en: string
  market: string
  sector: string
  price: number     // 현재가
  change: number    // 전일대비
  changeRate: number // 등락률
}