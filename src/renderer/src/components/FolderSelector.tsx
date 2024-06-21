import React from 'react'
import addBtn from '../assets/addBtn.png'
type HeaderProps = {
  openFolder: () => void
  folderPath: string
}

const FolderSelector: React.FC<HeaderProps> = ({ openFolder, folderPath }) => {
  const handleClickOpenFolder = (): void => openFolder()

  return (
    <div className=" flex items-center">
      <p className=" px-4">{folderPath}</p>
      <button onClick={handleClickOpenFolder} className="w-[2rem] h-[2rem] ">
        <img src={addBtn} alt="addBtn" />
      </button>
    </div>
  )
}

export default FolderSelector
