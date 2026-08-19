export const PORT = Number(process.env.PORT) || 4000
export const JWT_SECRET = process.env.JWT_SECRET || 'payvang-dev-secret-change-me'
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'
export const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb://admin:LivePayVang%401375%21@127.0.0.1:27017/PVSiteLoginDB?authSource=admin'
export const CORS_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5174',
]
