import React from 'react'
import { Material } from '@shared/types/material'
type SideBarProps = {
  changeCategory: (category: string) => void
  category: string
  materials: Material[] | undefined
}

const SideBar: React.FC<SideBarProps> = ({ changeCategory, category, materials }) => {
  // type category = {
  //   render: string
  //   key: string
  // }

  const handleClickSetCategory = (category: string) => (e) => {
    changeCategory(category)
    e.preventDefault
  }

  const categories: Array<string> = []

  materials?.forEach((element) => {
    if (categories.includes(element.material_family)) {
      return
    } else {
      categories.push(element.material_family)
    }
  })

  return (
    <div className="flex-col ps-4 py-1 w-[20%] border-2 border-black rounded-lg">
      <h3 className="text-xl">CATEGORY</h3>
      <ul className="mt-6">
        {categories.map((categoryEl, index) => (
          <li key={index}>
            <button
              className={
                category === categoryEl
                  ? 'rounded-md px-2 bg-red-600 cursor-pointer text-xl '
                  : 'rounded-md text-xl px-2 cursor-pointer text-white hover:hover:bg-slate-200 hover:text-black'
              }
              // className="rounded-md px-2  hover:bg-red-600"
              onClick={handleClickSetCategory(categoryEl.toLowerCase())}
            >
              {categoryEl}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
