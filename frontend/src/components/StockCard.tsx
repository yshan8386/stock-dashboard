import type { Stock } from '../types/stock'
import { useNavigate } from 'react-router-dom'

function StockCard({ stock }: {stock: Stock}) {
  const navigate = useNavigate()
  const isUp = stock.change >= 0

  return (
    <div
      className="bg-gray-800 p-4 rounded-xl cursor-pointer hover:bg-gray-700 transition border border-gray-700 hover:border-green-400"
      onClick={() => navigate(`/stock/${stock.symbol}`)}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xs text-gray-400">{stock.symbol}</div>
          <div className="font-bold mt-1">{stock.name}</div>
          <div className="text-xs text-gray-500 mt-1">{stock.sector}</div>
        </div>
        <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">{stock.market}</span>
      </div>
    </div>
  )
}

export default StockCard