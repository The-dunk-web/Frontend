import { ForgotPasswordData, LoginData, ResetPasswordData, SignupData } from '../types/interfaces';

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const signup = async (formData: FormData): Promise<SignupData> => {
  const response = await fetch(`${API_URL}/api/auth/signup`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Signup failed');
  }

  return response.json();
};

export const login = async (data: LoginData) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }

  return response.json();
};

export const logout = async () => {
  const response = await fetch(`${API_URL}/api/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Logout failed');
  }

  return response.json();
};

export const forgotPassword = async (data: ForgotPasswordData) => {
  const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to send reset link');
  }

  return response.json();
};

export const resetPassword = async (token: string, data: ResetPasswordData) => {
  const response = await fetch(`${API_URL}/api/auth/reset-password/${token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to reset password');
  }

  return response.json();
};

export const getAllArticles = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`);
  return res.json();
};

export const getArticleById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${id}`);
  return res.json();
};
