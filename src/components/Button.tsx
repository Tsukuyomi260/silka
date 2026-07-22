import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "success";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-indigo text-cream hover:bg-indigo-hover disabled:opacity-40",
  secondary:
    "bg-transparent text-indigo border-[1.5px] border-indigo/35 hover:bg-indigo/5",
  success: "bg-trust text-white disabled:opacity-40",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`w-full cursor-pointer rounded-btn px-4 py-4 text-center font-sans text-[15px] font-semibold transition-colors disabled:cursor-not-allowed ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    />
  );
}
