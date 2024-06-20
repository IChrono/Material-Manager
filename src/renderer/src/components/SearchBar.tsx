import React from 'react'
import searchImg from '../assets/search-svgrepo-com.png'

type SearchBarProps = { inputFilter: (manualFilter: string) => void }

const SearchBar: React.FC<SearchBarProps> = ({ inputFilter }) => {
  return (
    <>
      <div className="flex h-7">
        <img src={searchImg} alt="search" />
        <input
          onChange={(e) => inputFilter(e.target.value)}
          className=" px-2 w-full rounded-md bg-black focus:outline-0"
          placeholder="search"
          type="text"
        />
      </div>
    </>
  )
}

export default SearchBar
