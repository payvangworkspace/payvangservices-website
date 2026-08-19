import mongoose from 'mongoose'
import { connectDb } from '../db/connect.js'
import { HttpError } from '../utils/httpError.js'
import { hashPassword } from '../utils/password.js'

export const ROLE_LABELS = {
  admin: 'Administrator',
  customer: 'Customer',
}

const SEED_USERS = [
  {
    username: 'admin',
    email: 'admin@payvang.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
  },
  {
    username: 'customer',
    email: 'customer@payvang.com',
    password: 'customer123',
    name: 'Rahul Sharma',
    role: 'customer',
  },
]

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, lowercase: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, required: true, trim: true },
    role: { type: String, enum: ['admin', 'customer'], default: 'customer' },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true },
)

export const User = mongoose.models.User || mongoose.model('User', userSchema)

export function toPublicUser(user) {
  if (!user) return null

  const plain = typeof user.toObject === 'function' ? user.toObject() : user

  return {
    id: String(plain._id),
    username: plain.username,
    email: plain.email,
    name: plain.name,
    role: plain.role,
    roleLabel: ROLE_LABELS[plain.role] || 'Customer',
  }
}

function isDuplicateKey(error) {
  return error?.code === 11000
}

function duplicateMessage(error) {
  const key = Object.keys(error.keyPattern || {})[0]
  if (key === 'email') return 'Email is already registered'
  return 'Username is already taken'
}

export async function seedUsers() {
  await connectDb()

  const count = await User.countDocuments()
  if (count > 0) return

  const docs = await Promise.all(
    SEED_USERS.map(async (user) => ({
      username: user.username,
      email: user.email,
      name: user.name,
      role: user.role,
      passwordHash: await hashPassword(user.password),
    })),
  )

  await User.insertMany(docs)
}

export async function findUserByUsernameOrEmail(value) {
  const needle = value.trim().toLowerCase()
  return User.findOne({
    $or: [{ username: needle }, { email: needle }],
  })
}

export async function findUserById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) return null
  return User.findById(id)
}

export async function createUser({ username, email, password, name }) {
  try {
    return await User.create({
      username: username.trim().toLowerCase(),
      email: email.trim().toLowerCase(),
      name: name.trim(),
      role: 'customer',
      passwordHash: await hashPassword(password),
    })
  } catch (error) {
    if (isDuplicateKey(error)) {
      throw new HttpError(409, duplicateMessage(error))
    }
    throw error
  }
}
