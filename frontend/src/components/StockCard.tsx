import type { Stock } from '../types/stock'

interface Props {
  stock: Stock
}

function StockCard({ stock }: Props) {
  const isUp = stock.change >= 0

  return (
    <div className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition">
      <div className="text-sm text-gray-400">{stock.code}</div>
      <div className="font-bold mt-1">{stock.name}</div>
      <div className="text-lg font-bold mt-2">
        {stock.price.toLocaleString()}원
      </div>
      <div className={`text-sm mt-1 ${isUp ? 'text-red-400' : 'text-blue-400'}`}>
        {isUp ? '▲' : '▼'} {Math.abs(stock.changeRate)}%
      </div>
    </div>
  )
}

export default StockCard