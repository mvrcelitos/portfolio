import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
	"flex items-center max-w-full px-3 rounded-md text-sm outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 dark:focus-visible:outline-gray-600 disabled:cursor-not-allowed disabled:opacity-50 file:bg-transparent text-gray-600 dark:text-gray-100",
	{
		variants: {
			variant: {
				none: "",
				default: "border border-gray-300 dark:border-gray-500",
				opaque: [
					"bg-gray-300 enabled:hover:bg-gray-400 focus:bg-gray-50",
					"dark:bg-gray-500 enabled:dark:hover:bg-gray-400 enabled:dark:focus:bg-gray-200",
					,
				],
			},
			size: {
				sm: "h-8 px-2",
				default: "h-10 py-2 px-3",
				lg: "h-12 py-3 px-4",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
		VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ variant: variant, size, className, ...props }, ref) => {
		return (
			<input ref={ref} className={cn(inputVariants({ variant, size, className }))} {...props} />
		);
	},
);
Input.displayName = "Input";

export { Input, inputVariants };
