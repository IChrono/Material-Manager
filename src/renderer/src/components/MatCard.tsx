import React, { useState } from 'react'
import { Material } from '../../../shared/types/material'
import fallbk from '../assets//fallBack.png'
// import BtnDownload from "./BtnDownload";

type MatCardProps = {
  material: Material
}

const MatCard: React.FC<MatCardProps> = ({ material }) => {
  const [fallbackIndex, setFallbackIndex] = useState(0)
  const { name, mat_folder } = material
  const fallbacks: Array<string> = [`${mat_folder}/prev.png`, fallbk]

  // put a png or a default img if the png does not exist
  const addDefaultSrc = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    e.currentTarget.src = fallbacks[fallbackIndex]
    setFallbackIndex(fallbackIndex + 1)
  }

  const sendMatToBackend = (path): void => {
    window.electronAPI.getMaterial(path)
  }

  console.log(material)
  return (
    <div
      onClick={() => {
        sendMatToBackend(mat_folder)
        console.log(mat_folder)
      }}
      className="w-[25%] p-1"
    >
      <div className="w-full  p-5 rounded-2xl hover:bg-neutral-600">
        <img
          className="w-full aspect-square h-auto rounded-lg"
          src={`${mat_folder}/prev.jpg`}
          onError={(e) => addDefaultSrc(e)}
          alt={name}
        />
        <p className="w-full text-center">{name}</p>
      </div>
    </div>
  )
}

export default MatCard
// C:/Users/RED/Desktop/testMateriali/Acetate/Black/prev.png
