import { createUser, findUserById, findUserByUsernameOrEmail, toPublicUser } from '../models/user.model.js'
import { HttpError } from '../utils/httpError.js'
import { signToken } from '../utils/jwt.js'
import { comparePassword } from '../utils/password.js'
import { validateLogin, validateSignup } from '../utils/validators.js'

function authPayload(user) {
  const safeUser = toPublicUser(user)
  return { token: signToken(safeUser), user: safeUser }
}

export async function signup(req, res, next) {
  try {
    const payload = req.body || {}
    const error = validateSignup(payload)
    if (error) {
      throw new HttpError(400, error)
    }

    const user = await createUser(payload)
    return res.status(201).json({ ok: true, ...authPayload(user) })
  } catch (error) {
    return next(error)
  }
}

export async function login(req, res, next) {
  try {
    const payload = req.body || {}
    const error = validateLogin(payload)
    if (error) {
      throw new HttpError(400, error)
    }

    const user = await findUserByUsernameOrEmail(payload.username)
    if (!user || !(await comparePassword(payload.password, user.passwordHash))) {
      throw new HttpError(401, 'Invalid username or password')
    }

    return res.json({ ok: true, ...authPayload(user) })
  } catch (error) {
    return next(error)
  }
}

export async function me(req, res, next) {
  try {
    const user = await findUserById(req.auth.sub)
    if (!user) {
      throw new HttpError(401, 'Account no longer exists')
    }

    return res.json({ ok: true, user: toPublicUser(user) })
  } catch (error) {
    return next(error)
  }
}
