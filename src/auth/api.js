export const AUTH_KEY = 'payvang_auth'
export const TOKEN_KEY = 'payvang_token'

export const homePathByRole = {
  admin: '/admin/dashboard',
  customer: '/customer/dashboard',
}

export function homePathForRole(role) {
  return homePathByRole[role] || '/'
}

export function getStoredToken() {
  return localStorage.getItem(TOKEN_KEY)
}

export async function apiRequest(path, { method = 'GET', body, token } = {}) {
  const headers = { 'Content-Type': 'application/json' }
  const authToken = token ?? getStoredToken()
  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`
  }

  let response
  try {
    response = await fetch(path, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    })
  } catch {
    throw new Error('Cannot reach the server. Start it with npm run server.')
  }

  const data = await response.json().catch(() => ({}))
  if (!response.ok || data.ok === false) {
    throw new Error(data.error || 'Request failed')
  }

  return data
}
