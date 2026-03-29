/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_URL: string
  readonly VITE_COMPANY_EMAIL: string
  readonly VITE_COMPANY_PHONE: string
  readonly VITE_COMPANY_ADDRESS: string
  readonly VITE_COMPANY_GSTIN: string
  readonly VITE_DEV_MODE: string
  readonly VITE_GA_TRACKING_ID?: string
  readonly VITE_HOTJAR_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
