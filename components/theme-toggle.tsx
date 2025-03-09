'use client';

import * as React from 'react';

import { useTheme } from 'next-themes';
import { useHotkeys } from 'react-hotkeys-hook';
import { MoonStars, SunHorizon } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';

type Theme = 'light' | 'dark' | 'system';

const KEYS = ['ctrl+u', 'meta+u'];

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();

	const handleChangeTheme = (theme: Theme) => {
		if (!document.startViewTransition) return setTheme(theme);
		document.startViewTransition(() => setTheme(theme));
	};

	useHotkeys(KEYS, () => handleChangeTheme(theme === 'light' ? 'dark' : 'light'), { preventDefault: true });

	return (
		<div className="fixed bottom-2 left-2 z-50">
			<Button
				variant="outline"
				onKeyDown={() => handleChangeTheme(theme === 'dark' ? 'light' : 'dark')}
				onClick={() => handleChangeTheme(theme === 'dark' ? 'light' : 'dark')}
				size="icon"
			>
				{theme === 'dark' ? <MoonStars className="size-5" /> : <SunHorizon className="size-5" />}
			</Button>
		</div>
	);
}
