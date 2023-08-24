import Link, { LinkProps } from "next/link";
import { VariantProps, cva } from "class-variance-authority";
import { Github } from "lucide-react";

import { cn } from "@/lib/utils";

const headerVariants = cva(
	"fixed left-1/2 top-8 z-30 flex -translate-x-1/2 items-center justify-center gap-2 rounded-lg p-1 shadow",
	{
		variants: {
			variant: {
				white: "bg-zinc-50",
				dark: "bg-zinc-900",
			},
		},
		defaultVariants: {
			variant: "white",
		},
	},
);

const navLinkVariants = cva(
	"inline-flex h-7 items-center rounded-lg bg-transparent px-3 text-sm font-semibold outline-none transition-colors",
	{
		variants: {
			variant: {
				white: "text-zinc-500 hover:bg-zinc-300 hover:text-zinc-800 focus-visible:bg-zinc-300 focus-visible:text-zinc-800",
				dark: "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300 focus-visible:bg-zinc-800 focus-visible:text-zinc-300",
			},
		},
		defaultVariants: {
			variant: "white",
		},
	},
);

export interface HeaderProps
	extends React.HTMLAttributes<HTMLElement>,
		VariantProps<typeof headerVariants> {}

export function Header({ variant }: HeaderProps) {
	return (
		<header className={cn(headerVariants({ variant }))}>
			<NavLink variant={variant} href="/">
				Home
			</NavLink>
			<NavLink variant={variant} href="/forms">
				Forms
			</NavLink>
			<NavLink variant={variant} href="/about">
				About
			</NavLink>
			<NavLink variant={variant} href="github.com/mvrcelitos">
				<Github/>Github
			</NavLink>
		</header>
	);
}

interface NavLinkProps
	extends LinkProps,
		React.PropsWithChildren,
		VariantProps<typeof navLinkVariants> {}
const NavLink = ({ href, variant, ...rest }: NavLinkProps) => {
	return <Link href={href} className={cn(navLinkVariants({ variant }))} {...rest} />;
};
