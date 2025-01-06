'use client';

import { Product } from '@/types';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/store/features/cartSlice';
import { addToWishlist } from '@/lib/store/features/wishlistSlice';
import Image from 'next/image';
import Link from 'next/link';

const FEATURED_PRODUCTS: Product[] = [
	{
		id: '1',
		name: 'Jaqueta de Couro Clássica',
		description: 'Jaqueta de couro atemporal com acabamento premium',
		price: 7999.99,
		images: [
			'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format',
		],
		categories: [{ id: '1', name: 'Casacos', icon: 'jacket' }],
		brand: 'Couro Premium',
		reviews: [],
		rating: 4.5,
		stock: 10,
		createdAt: new Date().toISOString(),
	},
	{
		id: '2',
		name: 'Óculos de Sol Designer',
		description: 'Óculos elegantes com proteção UV',
		price: 2999.99,
		images: [
			'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format',
		],
		categories: [{ id: '2', name: 'Acessórios', icon: 'sunglasses' }],
		brand: 'LuxeEyewear',
		reviews: [],
		rating: 4.8,
		stock: 15,
		createdAt: new Date().toISOString(),
	},
	{
		id: '3',
		name: 'Calça Jeans Premium',
		description: 'Jeans de alta qualidade com ajuste perfeito',
		price: 1899.99,
		images: [
			'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format',
		],
		categories: [{ id: '3', name: 'Calças', icon: 'pants' }],
		brand: 'DenimCo',
		reviews: [],
		rating: 4.6,
		stock: 20,
		createdAt: new Date().toISOString(),
	},
];

const formatPrice = (price: number) => {
	return `${price.toFixed(2)} MZM`;
};

export function FeaturedProducts() {
	const dispatch = useDispatch();

	return (
		<section className='py-16 bg-muted/50'>
			<div className='container'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Produtos em Destaque
				</h2>
				<Carousel
					opts={{
						align: 'start',
						loop: true,
					}}
					className='w-full'
				>
					<CarouselContent>
						{FEATURED_PRODUCTS.map((product) => (
							<CarouselItem
								key={product.id}
								className='md:basis-1/2 lg:basis-1/3'
							>
								<Card className='mx-2'>
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
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
}
