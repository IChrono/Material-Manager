import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    api: unknown
    electronAPI: {
      openFolder: () => Promise<void>
      getMaterial: (matPath: string) => void
    }
  }
}
