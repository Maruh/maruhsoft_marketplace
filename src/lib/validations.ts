import { z } from 'zod';

export const SignupSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const PasswordResetSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export const ProductSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  short_description: z.string().max(160, 'Short description must be less than 160 characters').optional(),
  price: z.number().positive('Price must be greater than 0'),
  category_id: z.string().min(1, 'Category is required'),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
});

export const CheckoutSchema = z.object({
  email: z.string().email('Invalid email address'),
  customer_name: z.string().min(2, 'Name is required'),
  payment_method: z.enum(['paystack', 'manual']),
});

export const ReviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, 'Comment must be at least 10 characters').max(1000),
});

export type SignupInput = z.infer<typeof SignupSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
export type ProductInput = z.infer<typeof ProductSchema>;
export type CheckoutInput = z.infer<typeof CheckoutSchema>;
export type ReviewInput = z.infer<typeof ReviewSchema>;
