import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

export default function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center min-h-[70vh] px-4'>
			<h1 className='text-9xl font-bold text-primary'>404</h1>
			<h2 className='text-2xl md:text-3xl font-semibold mt-4 mb-2 text-center'>
				Página ainda em construção
			</h2>
			<p className='text-muted-foreground text-center mb-8'>
				Desculpe, a página que você está procurando ainda não existe.
			</p>
			<Button asChild>
				<Link href='/'>
					<ShoppingBag className='mr-2 h-4 w-4' />
					Voltar às Compras
				</Link>
			</Button>
		</div>
	);
}
