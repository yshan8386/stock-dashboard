function Header() {
  return (
    <header className="bg-gray-800 px-8 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-green-400">📈 Stock Dashboard</h1>
      <input
        type="text"
        placeholder="종목 검색 (예: 삼성전자)"
        className="bg-gray-700 text-white px-4 py-2 rounded-lg w-72 outline-none focus:ring-2 focus:ring-green-400"
      />
    </header>
  )
}

export default Header