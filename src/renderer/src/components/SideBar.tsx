import React from 'react'
import { Material } from '@shared/types/material'
type SideBarProps = {
  setCategory: (category: string) => void
  category: string
  materials: Material[] | undefined
}

const SideBar: React.FC<SideBarProps> = ({ setCategory, category, materials }) => {
  const handleClickSetCategory = (category: string) => (e) => {
    setCategory(category)
    e.preventDefault
  }

  const changeBtnStyle = (btnName: string): string => {
    return category === btnName
      ? 'rounded-md px-2 bg-red-600 cursor-pointer text-xl '
      : 'rounded-md text-xl px-2 cursor-pointer text-white hover:hover:bg-slate-200 hover:text-black'
  }

  const categories: Array<string> = []

  materials?.forEach((element) => {
    if (!element.material_family || categories.includes(element.material_family)) {
      console.log('caneporco')
      return
    } else {
      console.log('porcocane')
      categories.push(element.material_family)
    }
  })
  console.log(categories)

  return (
    <div className="flex-col ps-4 py-1 w-[20%] border-2 border-black rounded-lg">
      <h3 className="text-xl">CATEGORY</h3>
      <ul className="mt-6">
        {materials && (
          <li>
            <button className={changeBtnStyle('all')} onClick={handleClickSetCategory('all')}>
              All
            </button>
          </li>
        )}

        {categories?.map((categoryEl, index) => (
          <li key={index}>
            <button
              className={changeBtnStyle(categoryEl)}
              onClick={handleClickSetCategory(categoryEl.toLowerCase())}
            >
              {categoryEl[0].toUpperCase() + categoryEl.slice(1, categoryEl.length)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
