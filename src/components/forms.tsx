import type { FormInputProps, FormProps } from "@/interfaces";
import { cn } from "@/libs/utils";
import type React from "react";
import { PasswordMeter } from "./password-meter";
import uuid from "react-uuid";

export const FormField: React.FC<FormProps> = ({ handleSubmit, inputs, className, children, ...props }) => {
    return (
        <form onSubmit={handleSubmit} {...props} className={cn(`flex flex-col gap-5`, className)} >
            {inputs.map((input, key) => <FormInput key={key} {...input} />)}
            {children}
        </form>
    )
}

export const FormInput: React.FC<FormInputProps> = ({ passwordMeter = false, className = '', register, errors, keyId = 'id-' + uuid().toString(), type = 'text', placeholder, label, field = '' }) => {
    const hasError = errors ? errors[field] : false
    return (
        <div className="input-floating max-w-sm">
            <input type={type} placeholder={placeholder} id={keyId}
                {...register(field)}
                className={cn(`input`, className)} />
            <label htmlFor={keyId} className="input-floating-label" >{label}</label>
            <small className="text-red-400">{hasError && <>{hasError.message}</>}</small>
            {(passwordMeter && type === 'password') && <PasswordMeter targetElement={keyId} />}
        </div>
    )
}