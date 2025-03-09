export function ViewportIndicator() {
	if (process.env.NODE_ENV === 'production') return null;

	return (
		<div className="bg-foreground/10 fixed right-2 bottom-2 z-50 rounded-md p-4 font-mono text-xs font-bold">
			<div className="block sm:hidden">xs</div>
			<div className="hidden sm:block md:hidden">sm</div>
			<div className="hidden md:block lg:hidden">md</div>
			<div className="hidden lg:block xl:hidden">lg</div>
			<div className="hidden xl:block 2xl:hidden">xl</div>
			<div className="hidden 2xl:block">2xl</div>
		</div>
	);
}
