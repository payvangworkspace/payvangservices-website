import { HttpError } from '../utils/httpError.js'

export function notFound(_req, _res, next) {
  next(new HttpError(404, 'Route not found'))
}

export function errorHandler(error, _req, res, _next) {
  const status = error.status || 500
  const message = error.status ? error.message : 'Something went wrong'

  return res.status(status).json({
    ok: false,
    error: message,
  })
}
