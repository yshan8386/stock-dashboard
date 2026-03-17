
function WatchList({items} : { items: string[] }){
   return (
    <ul>
        {items.map(item => (
            <li key={item}>{item}</li>
        ))}
        </ul>
   )
}

export default WatchList