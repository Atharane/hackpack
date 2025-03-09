import { GithubAnimated } from '@/components/github';

import { FramerMotion, NextJs, ShadcnUI, BetterAuth, TanstackQuery } from '@/components/icons';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import type { Metadata } from 'next';
import { Lightning, SignIn, SignOut } from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
	title: 'the hackpack',
	description: 'The complete batteries-included framework.'
};

export default function Home() {
	const batteries = [
		{ id: 'next.js', icon: NextJs },
		{ id: 'betterauth', icon: BetterAuth },
		// { id: "firebase", icon: Firebase },
		{ id: 'tanstack-query', icon: TanstackQuery },
		{ id: 'shadcn-ui', icon: ShadcnUI },
		{ id: 'framer-motion', icon: FramerMotion }
	];

	return (
		<div className="flex h-screen items-center justify-center">
			<div className="-rotate-2 space-y-3 rounded-[2rem] border-2 border-dashed border-slate-600/60 p-2 dark:border-white/20">
				<div className="flex w-full justify-between gap-1">
					<div className="relative flex-grow">
						<div className="rounded-3xl bg-white p-2 shadow-2xl shadow-slate-400 dark:shadow-slate-800">
							<div className="rounded-2xl bg-[#176A3A] p-4 text-5xl font-bold tracking-tight text-nowrap text-white shadow-inner shadow-green-900">
								<Lightning className="relative bottom-1 mr-2 inline-block h-10 w-10 text-green-200" />
								Build kickass products
							</div>
						</div>
						<div className="absolute -right-6 bottom-16 flex rotate-12">
							<Tooltip>
								<TooltipTrigger>
									<div className="group w-fit rounded-3xl bg-white p-2 shadow-2xl shadow-slate-800">
										<a
											href="https://github.com/Atharane/hackpack"
											target="_blank"
											rel="noreferrer"
											className="block w-fit rounded-2xl bg-slate-800 p-2 text-5xl font-bold text-white hover:bg-slate-900"
										>
											<GithubAnimated className="size-8" />
										</a>
									</div>
								</TooltipTrigger>
								<TooltipContent className="font-mono">https://github.com/atharane/hackpack</TooltipContent>
							</Tooltip>
						</div>
					</div>
					<div className="group ml-1 w-fit rounded-3xl bg-white p-2 shadow-2xl shadow-slate-400 dark:shadow-slate-800">
						<div className="flex w-fit rounded-2xl bg-[#f31551] p-4 text-5xl font-bold tracking-tight text-white shadow-inner shadow-red-800">
							<span>fasta</span>
							<div className="group-hover:rotate-12">!</div>
						</div>
					</div>
				</div>
				<div className="bg-foreground/10 rounded-xl px-4 py-6 font-serif text-2xl font-semibold shadow-xl backdrop-blur-sm selection:bg-[#2bc36a]/60">
					The&nbsp;
					<span className="text-[#2bc36a] underline selection:bg-[#2bc36a]/60 selection:text-white">
						complete batteries-included framework
					</span>
					<br />
					Get building instantly with everything you need.
					<br />
					Authentication, Styling, Data Fetching—pre-configured
				</div>
				<div className="flex w-full gap-1">
					{batteries.map(({ id, icon: Icon }) => {
						return (
							<div
								key={id}
								className="w-fit rounded-3xl bg-white p-2 shadow-2xl shadow-slate-400 dark:shadow-slate-800"
							>
								<div className="w-fit rounded-2xl bg-[#7977fb] p-5 text-5xl font-bold text-nowrap text-white shadow-inner shadow-[#716ffc] hover:bg-[#716ffc]">
									<Icon className="size-10" />
								</div>
							</div>
						);
					})}
					<div className="w-fit rounded-full bg-white p-2 shadow-2xl shadow-slate-400 dark:shadow-slate-800">
						<Tooltip>
							<TooltipTrigger>
								<button
									type="button"
									className="group flex w-fit cursor-pointer items-center space-x-2 rounded-full bg-[#f31551] px-8 py-6 font-serif text-2xl font-bold text-nowrap text-white shadow-inner shadow-rose-700 hover:bg-rose-600"
								>
									<span>logout</span>
									<SignOut className="size-6 group-hover:rotate-6" />
								</button>
							</TooltipTrigger>
							<TooltipContent className="font-mono">until next time, voyager</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<button
									type="button"
									className="group flex w-fit cursor-pointer items-center space-x-2 rounded-full bg-amber-400 px-10 py-6 font-serif text-2xl font-bold text-nowrap text-white shadow-inner shadow-amber-600 hover:bg-amber-500"
								>
									<span>login</span>
									<SignIn className="size-6 group-hover:rotate-6" />
								</button>
							</TooltipTrigger>
							<TooltipContent className="font-mono">welcome back, time traveler</TooltipContent>
						</Tooltip>
					</div>
					<div
						style={{
							backgroundImage: `url("/topography.svg")`
						}}
						className="rounded-br-3x grow"
					/>
				</div>
			</div>
		</div>
	);
}
