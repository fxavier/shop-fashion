'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Heart, Sun, Moon, Menu, Search } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from '@/components/ui/sheet';
import { NavigationMenu } from '@/components/ui/navigation-menu';

export function Header() {
	const { theme, setTheme } = useTheme();
	const cart = useSelector((state: RootState) => state.cart.items);
	const wishlist = useSelector((state: RootState) => state.wishlist.items);

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-16 items-center'>
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant='ghost'
							className='mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden'
						>
							<Menu className='h-6 w-6' />
							<span className='sr-only'>Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='left' className='w-[300px] sm:w-[400px]'>
						<SheetTitle>Menu de Navegação</SheetTitle>
						<nav className='flex flex-col gap-4'>
							<Link href='/' className='text-lg font-semibold'>
								Home
							</Link>
							<Link href='/products' className='text-lg font-semibold'>
								Produtos
							</Link>
							<Link href='/categories' className='text-lg font-semibold'>
								Categorias
							</Link>
						</nav>
					</SheetContent>
				</Sheet>

				<Link href='/' className='mr-6 flex items-center space-x-2'>
					<span className='hidden font-bold sm:inline-block'>FASHION</span>
				</Link>

				<div className='hidden md:flex md:flex-1'>
					<NavigationMenu className='hidden md:flex'>
						{/* Add navigation items */}
					</NavigationMenu>
				</div>

				<div className='flex flex-1 items-center justify-end space-x-4'>
					<div className='w-full max-w-lg lg:max-w-xs'>
						<form className='relative'>
							<Input
								className='h-9 w-full rounded-md bg-background px-4 py-2'
								placeholder='Pesquisar produtos...'
								type='search'
							/>
							<Button
								type='submit'
								size='sm'
								variant='ghost'
								className='absolute right-0 top-0 h-full px-2'
							>
								<Search className='h-4 w-4' />
								<span className='sr-only'>Pesquisar</span>
							</Button>
						</form>
					</div>

					<Button variant='ghost' size='icon' className='relative' asChild>
						<Link href='/wishlist'>
							<Heart className='h-5 w-5' />
							{wishlist.length > 0 && (
								<span className='absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-xs font-bold text-primary-foreground'>
									{wishlist.length}
								</span>
							)}
						</Link>
					</Button>

					<Button variant='ghost' size='icon' className='relative' asChild>
						<Link href='/cart'>
							<ShoppingCart className='h-5 w-5' />
							{cart.length > 0 && (
								<span className='absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-xs font-bold text-primary-foreground'>
									{cart.length}
								</span>
							)}
						</Link>
					</Button>

					<Button
						variant='ghost'
						size='icon'
						onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					>
						<Sun className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
						<Moon className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
						<span className='sr-only'>Toggle theme</span>
					</Button>
				</div>
			</div>
		</header>
	);
}
