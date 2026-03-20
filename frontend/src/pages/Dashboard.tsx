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

function App() {
  const [selectedStock, setSelectedStock] = useState('');
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setStocks([
      { code: '005930', name: '삼성전자', price: 72000, change: 1000, changeRate: 1.41 },
      { code: '000660', name: 'SK하이닉스', price: 189000, change: -2000, changeRate: -1.05 },
      { code: '035420', name: 'NAVER', price: 215000, change: 3000, changeRate: 1.42 },
      { code: '051910', name: 'LG화학', price: 312000, change: -1500, changeRate: -0.48 },
    ]);
  }, []);

  return (
        <KeywordContext.Provider value={{ keyword, setKeyword }}>
          <div className="bg-gray-900 min-h-screen text-white">
            <Header/>
            <main className="p-8">
              <h2 className="text-lg font-bold mb-4 text-gray-300">관심종목</h2>
              <div className="grid grid-cols-4 gap-4">
                {stocks.map(stock => (
                  <StockCard key={stock.code} stock={stock} />
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

export default App