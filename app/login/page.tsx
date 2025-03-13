import Image from 'next/image';
import Link from 'next/link';
import { Barcode, GithubLogo, InstagramLogo, TwitterLogo } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Google, Microsoft } from '@/components/icons';

const LoginPage = () => {
	return (
		<div className="grid h-screen grid-cols-9 gap-4 p-4">
			<div className="relative col-span-4">
				<div className="absolute inset-x-0 bottom-0 h-1/4 rounded-b-md">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='green' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
						}}
					/>
					<div className="from-background to-background/90 absolute inset-0 bg-gradient-to-b" />
				</div>

				<div className="relative flex h-full flex-col items-center rounded-md bg-gradient-to-b from-[#E7F0FE] to-transparent p-6 pt-8 pb-2 dark:from-[#27322D]/40">
					<Barcode size={32} className="text-muted-foreground/40 mt-12" />

					<div className="mt-8 rounded-md bg-[#82a7ff] px-2 py-1 text-xs text-white dark:bg-[#263C34]">Login</div>

					<h1 className="mt-2 text-4xl font-semibold">Welcome Back</h1>
					<p className="text-muted-foreground mt-2 max-w-md text-center text-sm text-pretty">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, laboriosam vero? Ullam esse ex mollitia
						facilis consequatur sit
					</p>

					<Input className="mt-24 h-12 p-4 text-lg" placeholder="harold@united.uk" type="email" />
					<Input type="password" className="mt-4 h-12 p-4 text-lg" placeholder="∗∗∗∗∗∗∗∗∗∗" />

					<div className="mt-6 flex w-full items-center justify-between">
						<div className="flex items-center space-x-2">
							<Checkbox id="remember-me" />
							<label
								htmlFor="remember-me"
								className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Remember me
							</label>
						</div>
						<Link href="/forgot-password" className="text-muted-foreground text-sm hover:underline">
							Forgot password?
						</Link>
					</div>

					<Button
						size="lg"
						className="hover:bg-primary/90 dark:bg-muted-foreground/30 dark:hover:bg-muted/60 bg-primary mt-6 w-full font-semibold text-white shadow-none hover:text-white"
					>
						Login
					</Button>

					<div className="mt-8 flex w-full items-center gap-2 p-2">
						<div className="bg-muted-foreground/20 h-px w-full" />
						<span className="text-muted-foreground font-mono text-xs">OR</span>
						<div className="bg-muted-foreground/20 h-px w-full" />
					</div>

					<div className="mt-8 grid w-full grid-cols-2 gap-2">
						<Button
							size="lg"
							variant="secondary"
							className="dark:bg-muted-foreground/30 dark:hover:bg-muted/60 w-full font-semibold shadow-none dark:text-white"
						>
							<Google className="size-3" />
							Continue with Google
						</Button>
						<Button
							size="lg"
							variant="secondary"
							className="dark:bg-muted-foreground/30 dark:hover:bg-muted/60 w-full font-semibold shadow-none dark:text-white"
						>
							<Microsoft className="size-3" />
							Continue with Microsoft
						</Button>
					</div>

					<footer className="text-muted-foreground mt-auto flex w-full items-center justify-between text-xs">
						<div>
							<Link href="/docs" className="hover:underline">
								Documentation
							</Link>
						</div>
						<div className="flex items-center space-x-2">
							{[
								{ href: 'https://x.com', icon: TwitterLogo },
								{ href: 'https://instagram.com', icon: InstagramLogo },
								{ href: 'https://github.com', icon: GithubLogo }
							].map(({ href, icon: Icon }) => (
								<Link key={href} href={href} className="bg-muted/40 hover:bg-muted/80 rounded-md p-2">
									<Icon size={16} />
								</Link>
							))}
						</div>
					</footer>
				</div>
			</div>

			<div className="col-span-5 h-full w-full overflow-hidden rounded-md">
				<Image
					src="https://pbs.twimg.com/media/GlNesEzXgAQFpOK?format=jpg&name=4096x4096"
					alt="login background"
					className="h-full w-full object-cover opacity-90"
					width={1920}
					height={1080}
					priority
				/>
			</div>
		</div>
	);
};

export default LoginPage;
