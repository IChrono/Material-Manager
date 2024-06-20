import FolderSelector from './FolderSelector'

type HeaderProps = {
  openFolder: () => void
  folderPath: string
}

const Header: React.FC<HeaderProps> = ({ openFolder, folderPath }) => {
  return (
    <header className=" px-4 flex space-btw items-center justify-between border-2 border-black h-[10vh] w-[100vw] font-poppins">
      <h1 className="text-[2rem] min-w-10">MATERIAL MANAGER</h1>
      <FolderSelector openFolder={openFolder} folderPath={folderPath} />
    </header>
  )
}

export default Header
