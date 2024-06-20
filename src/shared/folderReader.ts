import * as fs from 'fs'
import * as path from 'path'
import { Material } from './types/material'
// Path of the read folder
// const directoryPath: string = path.join(__dirname, "/testMateriali");

//
// const proxy: string = 'http://127.0.0.1:5500/public'

// Read Recursively folders, check if there is a material json and return a json with all the materials
function readDirectory(dirPath: string): Material[] {
  let jr: Material[] = []
  const files = fs.readdirSync(dirPath)
  files.forEach((file) => {
    const filePath = path.join(dirPath, file)
    // console.log(filePath);

    if (fs.statSync(filePath).isDirectory()) {
      jr = jr.concat(readDirectory(filePath))
    } else if (fs.statSync(filePath).isFile() && path.extname(file) === '.json') {
      const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
      const parsedData: Material = JSON.parse(data)
      parsedData.mat_folder = path.dirname(filePath)
      jr.push(parsedData)
    }
  })
  console.log(jr)
  return jr
}

// function getRelativePath(baseDir: string, filePath: string): string {
//   return path.relative(baseDir, path.dirname(filePath)).replace('\\', '/')
// }

export default readDirectory
