import React from 'react'
import { MatCard } from './index'
import { Material } from '../../../shared/types/material'

type MatGridProps = {
  materials: Material[] | undefined
}

const MatGrid: React.FC<MatGridProps> = ({ materials }) => {
  return (
    <div className="pb-10 flex w-full h-[100%] overflow-y-auto justify-center">
      <div className="flex w-full flex-wrap h-fit align-top mt-5 ">
        {materials ? (
          materials.map((mat: Material, index: number) => (
            <MatCard key={mat.name + index.toString()} material={mat} />
          ))
        ) : (
          <p></p>
        )}
        {/* <img src="C:\Users\RED\Desktop\mat.png" alt="" /> */}
      </div>
    </div>
  )
}

export default MatGrid

//mat.properties.matPrev, mat.name, mat.name
