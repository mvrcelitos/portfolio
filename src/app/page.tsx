import { Link } from "next/link";
import { Coffee, Sprout } from "lucide-react";
import { Header } from "@/components/header";

export default function Page() {
	return (
		<main className="relative grid">
			<div className="grid">
				<div className="sticky top-0 grid min-h-[100svh] place-items-center bg-zinc-900 px-6">
					<div>
						<h4 className="text-center font-semibold text-zinc-200">
							Welcome to my main page.
						</h4>
						<p className="text-center text-sm text-zinc-400">
							This is just a page that i made for portfolio.
						</p>
					</div>
				</div>
				<div
					className={`sticky top-0 grid min-h-[100dvh] animate-bg-colors place-items-center px-6 duration-200`}>
					{/* <div className="checkered opacity-5" />                                                                                              */}
					<div>
						<h4 className="text-center font-semibold text-zinc-800">
							I really really like some color palettes.
						</h4>
						<p className="text-center text-sm text-zinc-600">
							Appreciate it {"( "}don&apos;t have blue in this palette 😊{" )"}.
						</p>
					</div>
				</div>
				{/* <div className="grid place-items-center min-h-[100dvh] px-6 bg-zinc-200 z-10">
					<div>
						<h4 className="text-center font-semibold text-zinc-800">
							This is just the last page.
						</h4>
						<p className="text-center text-sm text-zinc-600">
							I putted on white for contrast, i think is kinda cool :art:.
						</p>
					</div>
				</div> */}
				<div className="relative z-10 grid min-h-[100dvh] place-items-center bg-zinc-200 px-6">
					<div className="checkered opacity-5" />
				</div>
				<footer className="relative z-10 grid min-h-[20rem] place-items-center bg-zinc-800 px-6">
					<div>
						<div className="flex items-center justify-center gap-1">
							<Coffee className="h-6 w-6 animate-text-colors text-[var(--color)] duration-200" />
							<Link href="https://github.com/mvrcelitos" className="text-center text-zinc-200 hover:underline underline-offset-2">mvrcelo</span>
						</div>
						<p className="text-center text-sm text-zinc-400">In construction.</p>
					</div>
				</footer>
			</div>
		</main>
	);
}
