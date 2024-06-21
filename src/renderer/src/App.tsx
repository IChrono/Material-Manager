import { ReactElement, useState } from 'react'
import './App.css'
import { Header, Main } from './components/index'
import { Material } from 'src/shared/types/material'

function App(): ReactElement<Element> {
  const [materials, setMaterials] = useState<Material[] | undefined>(undefined)
  const [folderPath, setFolderPath] = useState<string>('Choose materials root folder')

  // If user select a folder with jsons, check if the structure matches with type Material[]
  function isMaterialArray(data: any): data is Material[] {
    return (
      Array.isArray(data) &&
      data.every((item) => {
        if (typeof item === 'object' && item.name) {
          return true
        } else {
          return false
        }
      })
    )
  }

  // Call main context and open a window dialogue in order to select the root material folder
  const handleClickOpenFolder = async (): Promise<void> => {
    try {
      const result = await window.electronAPI.openFolder()

      if (result) {
        const { materials, filePaths } = result
        setFolderPath(filePaths)

        if (isMaterialArray(materials)) {
          setMaterials(materials)
        } else {
          alert("This folder doesn't contain materials")
          setMaterials(undefined)
        }
      } else {
        alert("This folder doesn't contain materials")
        setMaterials(undefined)
      }
    } catch (error) {
      console.error('Error opening folder:', error)
      alert('An error occurred while trying to open the folder. Please try again.')
    }
  }

  return (
    <>
      <Header openFolder={handleClickOpenFolder} folderPath={folderPath} />
      <Main materials={materials} />
    </>
  )
}

export default App
