import Dashboard from './pages/Dashboard'
import StockDetail from './pages/StockDetail'
import type { Stock } from './types/stock'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/stock/:code" element={<StockDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App