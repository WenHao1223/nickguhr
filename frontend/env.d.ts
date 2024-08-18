interface ImportMetaEnv {
  readonly VITE_APP_NETWORK: string;
  // Add other environment variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}