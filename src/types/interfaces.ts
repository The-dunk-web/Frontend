export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  profilePicture?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  password: string;
}

// NOTE: Articles

export interface ArticleType {
  id: string;
  title: string;
  content: string;
  authorId: string;
  image?: string;
  createdAt: string;
  author: {
    firstName: string;
    lastName: string;
  };
  likes: number;
  readTime?: number;
}

// NOTE: Products
export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  photos: string[];
}

// NOTE: Orders

export interface OrderType {
  id: string;
  quantity: number;
  status: string;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  userId: string;
  productId: string;
  product: ProductType;
}

// NOTE: Services

export interface ServicesType {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  overallRating: number;
  user: {
    firstName: string;
    lastName: string;
    profile: string;
  };
  userId: string;
}

// NOTE: User

export interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  profile: string | null;
  phone: string;
  email: string;
  verified: boolean;
  balance: number;
  resetPasswordToken: string | null;
  resetPasswordExpires: string | null;
  visaCards: {
    cardNumber: string;
    cvv: string;
    expiryDate: string;
  }[];
}

// NOTE: Auth State

export interface AuthStateType {
  isAuthenticated: boolean;
  user: {
    id: number;
    firstName: string;
    email: string;
    profile?: string;
  } | null;
  initializeAuth: () => void;
  login: (user: { id: number; firstName: string; email: string; profile?: string }) => void;
  logout: () => void;
  updateUser: (updatedUser: {
    firstName?: string;
    email?: string;
    profile?: string;
    lastName?: string;
  }) => void;
}
