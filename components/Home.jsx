import { useContext, useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { context } from '../context/Context'


export default function Home() {
  const [query, setQuery] = useState('')
  const [isDark] = useContext(context)
  return (
    <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {<CountriesList query={query} />}
    </main>
  )
}
