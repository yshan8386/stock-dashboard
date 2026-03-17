import Header from './components/Header'
import StockCard from './components/StockCard'
import WatchList from './components/WatchList'
import type { Stock } from './types/stock'

const mockStocks: Stock[] = [
  { code: '005930', name: '삼성전자', price: 72000, change: 1000, changeRate: 1.41 },
  { code: '000660', name: 'SK하이닉스', price: 189000, change: -2000, changeRate: -1.05 },
  { code: '035420', name: 'NAVER', price: 215000, change: 3000, changeRate: 1.42 },
  { code: '051910', name: 'LG화학', price: 312000, change: -1500, changeRate: -0.48 },
]

const mockWatchList: string[] = [
  '삼성전자', 'SK하이닉스', 'NAVER'
]

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <main className="p-8">
        <h2 className="text-lg font-bold mb-4 text-gray-300">관심종목</h2>
        <div className="grid grid-cols-4 gap-4">
          {mockStocks.map(stock => (
            <StockCard key={stock.code} stock={stock} />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          <WatchList items={mockWatchList} />
        </div>
      </main>
    </div>
  )
}

export default App