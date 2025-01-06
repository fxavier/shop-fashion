'use client';

import { Product } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/store/features/cartSlice';
import { addToWishlist } from '@/lib/store/features/wishlistSlice';
import Image from 'next/image';
import Link from 'next/link';

const NEW_ARRIVALS: Product[] = [
	{
		id: '4',
		name: 'Vestido Floral de Verão',
		description: 'Vestido leve e fresco com estampa floral',
		price: 1299.99,
		images: [
			'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format',
		],
		categories: [{ id: '4', name: 'Vestidos', icon: 'dress' }],
		brand: 'Summer Bloom',
		reviews: [],
		rating: 4.7,
		stock: 12,
		createdAt: new Date().toISOString(),
	},
	{
		id: '5',
		name: 'Relógio Minimalista',
		description: 'Relógio elegante com pulseira de couro',
		price: 3499.99,
		images: [
			'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format',
		],
		categories: [{ id: '2', name: 'Acessórios', icon: 'watch' }],
		brand: 'TimeStyle',
		reviews: [],
		rating: 4.9,
		stock: 8,
		createdAt: new Date().toISOString(),
	},
	{
		id: '6',
		name: 'Bolsa Transversal',
		description: 'Bolsa de couro elegante transversal',
		price: 2499.99,
		images: [
			'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format',
		],
		categories: [{ id: '2', name: 'Acessórios', icon: 'bag' }],
		brand: 'LuxeBags',
		reviews: [],
		rating: 4.8,
		stock: 15,
		createdAt: new Date().toISOString(),
	},
	{
		id: '7',
		name: 'Blazer de Linho',
		description: 'Blazer casual de linho para o verão',
		price: 3299.99,
		images: [
			'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format',
		],
		categories: [{ id: '1', name: 'Casacos', icon: 'jacket' }],
		brand: 'ModernFit',
		reviews: [],
		rating: 4.6,
		stock: 10,
		createdAt: new Date().toISOString(),
	},
];

const formatPrice = (price: number) => {
	return `${price.toFixed(2)} MZM`;
};

export function NewArrivals() {
	const dispatch = useDispatch();

	return (
		<section className='py-16'>
			<div className='container'>
				<h2 className='text-3xl font-bold text-center mb-12'>Novidades</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{NEW_ARRIVALS.map((product) => (
						<Card key={product.id}>
							<CardContent className='p-0'>
								<div className='relative aspect-square'>
									<Image
										src={product.images[0]}
										alt={product.name}
										fill
										className='object-cover rounded-t-lg'
									/>
								</div>
								<div className='p-4'>
									<h3 className='font-semibold'>{product.name}</h3>
									<p className='text-primary font-bold'>
										{formatPrice(product.price)}
									</p>
								</div>
							</CardContent>
							<CardFooter className='flex flex-col gap-2'>
								<div className='flex gap-2 w-full'>
									<Button
										onClick={() =>
											dispatch(
												addToCart({
													id: crypto.randomUUID(),
													productId: product.id,
													name: product.name,
													price: product.price,
													quantity: 1,
													image: product.images[0],
												})
											)
										}
										className='flex-1'
									>
										<ShoppingCart className='w-4 h-4 mr-2' />
										Adicionar ao Carrinho
									</Button>
									<Button
										variant='outline'
										size='icon'
										onClick={() => dispatch(addToWishlist(product))}
									>
										<Heart className='w-4 h-4' />
									</Button>
								</div>
								<Button variant='secondary' className='w-full' asChild>
									<Link href={`/products/${product.id}`}>Ver Produto</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
