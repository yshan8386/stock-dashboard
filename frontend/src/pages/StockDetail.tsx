import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function StockDetail(){
    const {symbol} = useParams()
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        const fetchDetail = async() =>{
            const res = await fetch(`http://localhost:8001/api/stocks/${symbol}`)
            const data = await res.json()
            setDetail(data)
        }
        fetchDetail()
    }, [symbol])

    return (
        <div>
            {detail ? <pre>{JSON.stringify(detail, null, 2)}</pre> : <p>로딩 중...</p>}
        </div>
    )
}

export default StockDetail