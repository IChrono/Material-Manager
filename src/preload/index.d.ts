import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    // electronAPI: ElectronAPI
    api: unknown
    electronAPI: {
      openFolder: () => Promise<void>
      getMaterial: (matPath: string) => void
    }
  }
}
