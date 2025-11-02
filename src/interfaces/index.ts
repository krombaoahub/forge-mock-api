import type React from "react"
import type { FieldErrors, UseFormRegister } from "react-hook-form"
import type { NavigateFunction } from "react-router-dom"

// Form
export interface LoginFormProps {
    email: string
    password: string
}

export interface RegisterFormProps {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    inputs: FormInputProps[]
    children: React.ReactNode
    handleSubmit: (data: any) => void
}

export interface FormInputProps {
    className?: string
    keyId?: string
    register: UseFormRegister<any>
    errors?: FieldErrors<any>
    type?: string
    placeholder?: string
    label?: string
    field?: string
    passwordMeter?: boolean
}

export interface PasswordMeterProps {
    targetElement: string
}

// User
export interface AuthContextProps {
    currentUser: any | null
    loading: boolean
    errorMsg: string
    handleRegister: (data: RegisterFormProps, navigate: NavigateFunction) => {}
    handleLogin: (loginField: LoginFormProps, navigate: NavigateFunction) => {}
    handleLogout: (navigate: NavigateFunction) => void
}

export interface SaveUserProfileProps {
    email: string
    name: string
    phoneNumber?: string
    photoURL?: string
}

export interface AppLogoProps extends React.HTMLAttributes<HTMLDivElement> {
    logoOnly?: boolean
}

export interface HeaderProps {
    dashboardHeader?: boolean
}