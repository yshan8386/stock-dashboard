
function WatchList({items, onSelect} : { items: string[], onSelect: (item: string)=>void}){
   return (
    <ul className="space-y-2">
        {items.map(item => (
            <li className="p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition" key={item}
                onClick={()=> onSelect(item)}>{item}</li>
        ))}
    </ul>
   )
}

export default WatchList;