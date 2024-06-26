import SideBar from './SideBar'
import MaterialSection from './MaterialSection'
import React from 'react'
import { useState } from 'react'
import { Material } from 'src/shared/types/material'

type AppProps = {
  materials: Material[] | undefined
  category: string
  setCategory: (string) => void
}

const Main: React.FC<AppProps> = ({ materials, setCategory, category }) => {
  // const [category, setCategory] = useState<string>('')
  const [manualFilter, setManualFilter] = useState<string>('')

  let filteredMaterials: Material[] | undefined

  // Handler for set Category
  const handleClickSetCategory = (category: string): void => {
    if (!materials || materials === undefined) {
      return
    }
    setCategory(category)
  }

  // Handler for set filter from user input
  const handleChangeInputFilter = (manualFilter: string): void => {
    if (!materials || materials === undefined) {
      return
    }
    setManualFilter(manualFilter)
  }

  filteredMaterials = materials

  // Filter materials by category

  category === 'all' || category === ''
    ? (filteredMaterials = materials)
    : (filteredMaterials = materials?.filter(
        (material) => material.material_family?.toLowerCase() === category.toLowerCase()
      ))

  // Filter materials by user input
  if (manualFilter !== '') {
    filteredMaterials = filteredMaterials?.filter((material: Material) => {
      for (const key in material) {
        if (
          key !== 'mat_folder' &&
          material[key].toLowerCase().includes(manualFilter.toLowerCase())
        )
          return true
      }
    })
  }

  return (
    <main className=" w-[100vw] h-[90vh] flex mt-4  ">
      <SideBar category={category} setCategory={handleClickSetCategory} materials={materials} />
      <MaterialSection materials={filteredMaterials} inputFilter={handleChangeInputFilter} />
    </main>
  )
}

export default Main
