const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateSignup({ name, username, email, password }) {
  if (!name?.trim() || !username?.trim() || !email?.trim() || !password) {
    return 'Name, username, email and password are required'
  }

  if (username.trim().length < 3) {
    return 'Username must be at least 3 characters'
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return 'Enter a valid email address'
  }

  if (password.length < 6) {
    return 'Password must be at least 6 characters'
  }

  return null
}

export function validateLogin({ username, password }) {
  if (!username?.trim() || !password) {
    return 'Username and password are required'
  }

  return null
}
