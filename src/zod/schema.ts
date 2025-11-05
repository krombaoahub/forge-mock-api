// src/schemas.ts
import { z } from 'zod';

// rules
export const registerFormSchema = z.object({
    name: z.string().min(1, { message: "This field cannot be empty." }),
    email: z.email(),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Must include an uppercase letter')
        .regex(/[a-z]/, 'Must include a lowercase letter')
        .regex(/[0-9]/, 'Must include a number')
        .regex(/[^A-Za-z0-9]/, 'Must include a special character'),
    confirmPassword: z.string().min(8, { message: "TPassword must be at least 8 characters." }),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
})

export const loginFormSchema = z.object({
    email: z.email(),
    password: z.string().min(1, { message: 'Password must not be empty.' })
})

export const createProjectFormSchema = z.object({
    name: z.string().min(1, { message: "This field cannot be empty." }),
})

// type
export type RegisterFormFields = z.infer<typeof registerFormSchema>;
export type LoginFormFields = z.infer<typeof loginFormSchema>;
export type CreateProjectFormSchema = z.infer<typeof createProjectFormSchema>;