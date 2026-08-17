/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOOL: string
  readonly VITE_TEXT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
