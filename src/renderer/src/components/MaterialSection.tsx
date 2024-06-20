import React from 'react'
// import SearchBar from  "./SearchBar";
import { Material } from '../../../shared/types/material.js'
import { SearchBar, MatGrid } from './index.js'

type MaterialSectionProps = {
  materials: Material[] | undefined
  inputFilter: (manualFilter: string) => void
}

const MaterialSection: React.FC<MaterialSectionProps> = ({ materials, inputFilter }) => {
  return (
    <div className="px-4 w-full h-full  overflow-y">
      <SearchBar inputFilter={inputFilter} />
      <MatGrid materials={materials} />
    </div>
  )
}

export default MaterialSection
