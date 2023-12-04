const AUTH_API_URL = 'http://localhost:3000';

const login = async (email, password) => {
  const response = await fetch(`${AUTH_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: { email, password } }),
  });
  if (!response.ok) {
    throw new Error('Failed to login');
  }
  const data = await response.json();
  return data;
};

const register = async (email, password, passwordConfirmation) => {
  const response = await fetch(`${AUTH_API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: { email, password, password_confirmation: passwordConfirmation },
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to register');
  }
  const data = await response.json();
  return data;
};

const logout = async () => {
  const response = await fetch(`${AUTH_API_URL}/logout`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to logout');
  }
};

const AuthService = {
  login,
  register,
  logout,
};

export default AuthService;
