import { verifyToken } from '../utils/jwt.js'
import { HttpError } from '../utils/httpError.js'

export function requireAuth(req, _res, next) {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null

  if (!token) {
    return next(new HttpError(401, 'Not signed in'))
  }

  try {
    req.auth = verifyToken(token)
    return next()
  } catch {
    return next(new HttpError(401, 'Session expired. Please log in again.'))
  }
}
