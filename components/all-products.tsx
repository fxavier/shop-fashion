'use client';

import { Product } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/store/features/cartSlice';
import { addToWishlist } from '@/lib/store/features/wishlistSlice';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const ALL_PRODUCTS: Product[] = [
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
	{
		id: '8',
		name: 'Lenço de Seda',
		description: 'Lenço de seda luxuoso com estampa moderna',
		price: 899.99,
		images: [
			'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&auto=format',
		],
		categories: [{ id: '2', name: 'Acessórios', icon: 'scarf' }],
		brand: 'LuxeAccessories',
		reviews: [],
		rating: 4.7,
		stock: 20,
		createdAt: new Date().toISOString(),
	},
	{
		id: '9',
		name: 'Tênis Esportivo Premium',
		description: 'Tênis confortável para corrida e academia',
		price: 2799.99,
		images: [
			'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format',
		],
		categories: [{ id: '5', name: 'Calçados', icon: 'shoe' }],
		brand: 'SportFit',
		reviews: [],
		rating: 4.8,
		stock: 25,
		createdAt: new Date().toISOString(),
	},
	{
		id: '10',
		name: 'Camiseta Básica Premium',
		description: 'Camiseta de algodão de alta qualidade',
		price: 599.99,
		images: [
			'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format',
		],
		categories: [{ id: '6', name: 'Camisetas', icon: 'shirt' }],
		brand: 'BasicLuxe',
		reviews: [],
		rating: 4.5,
		stock: 50,
		createdAt: new Date().toISOString(),
	},
	{
		id: '11',
		name: 'Vestido de Festa',
		description: 'Vestido elegante para ocasiões especiais',
		price: 4999.99,
		images: [
			'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format',
		],
		categories: [{ id: '4', name: 'Vestidos', icon: 'dress' }],
		brand: 'ElegantDress',
		reviews: [],
		rating: 4.9,
		stock: 8,
		createdAt: new Date().toISOString(),
	},
	{
		id: '12',
		name: 'Botas de Couro',
		description: 'Botas resistentes e estilosas',
		price: 3599.99,
		images: [
			'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&auto=format',
		],
		categories: [{ id: '5', name: 'Calçados', icon: 'boot' }],
		brand: 'BootMaster',
		reviews: [],
		rating: 4.7,
		stock: 15,
		createdAt: new Date().toISOString(),
	},
	{
		id: '13',
		name: 'Calça Social',
		description: 'Calça social de alfaiataria premium',
		price: 2299.99,
		images: [
			'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&auto=format',
		],
		categories: [{ id: '3', name: 'Calças', icon: 'pants' }],
		brand: 'TailorMade',
		reviews: [],
		rating: 4.6,
		stock: 20,
		createdAt: new Date().toISOString(),
	},
	{
		id: '14',
		name: 'Carteira de Couro',
		description: 'Carteira elegante em couro legítimo',
		price: 899.99,
		images: [
			'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format',
		],
		categories: [{ id: '2', name: 'Acessórios', icon: 'wallet' }],
		brand: 'LuxeLeather',
		reviews: [],
		rating: 4.8,
		stock: 30,
		createdAt: new Date().toISOString(),
	},
	{
		id: '15',
		name: 'Chapéu Panamá',
		description: 'Chapéu artesanal estilo panamá',
		price: 1299.99,
		images: [
			'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=500&auto=format',
		],
		categories: [{ id: '2', name: 'Acessórios', icon: 'hat' }],
		brand: 'HatCraft',
		reviews: [],
		rating: 4.7,
		stock: 12,
		createdAt: new Date().toISOString(),
	},
	{
		id: '16',
		name: 'Saia Midi Plissada',
		description: 'Saia midi com design plissado moderno',
		price: 1599.99,
		images: [
			'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&auto=format',
		],
		categories: [{ id: '7', name: 'Saias', icon: 'skirt' }],
		brand: 'ModernStyle',
		reviews: [],
		rating: 4.6,
		stock: 18,
		createdAt: new Date().toISOString(),
	},
];

const ITEMS_PER_PAGE = 8;

const formatPrice = (price: number) => {
	return `${price.toFixed(2)} MZM`;
};

export function AllProducts() {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);

	// Calculate pagination
	const totalPages = Math.ceil(ALL_PRODUCTS.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const paginatedProducts = ALL_PRODUCTS.slice(
		startIndex,
		startIndex + ITEMS_PER_PAGE
	);

	return (
		<section className='py-16 bg-background'>
			<div className='container'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Todos os Produtos
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{paginatedProducts.map((product) => (
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
									<p className='text-sm text-muted-foreground mb-2'>
										{product.description}
									</p>
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

				{totalPages > 1 && (
					<div className='flex justify-center gap-2 mt-8'>
						<Button
							variant='outline'
							onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
							disabled={currentPage === 1}
						>
							Anterior
						</Button>
						{Array.from({ length: totalPages }, (_, i) => (
							<Button
								key={i + 1}
								variant={currentPage === i + 1 ? 'default' : 'outline'}
								onClick={() => setCurrentPage(i + 1)}
							>
								{i + 1}
							</Button>
						))}
						<Button
							variant='outline'
							onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
							disabled={currentPage === totalPages}
						>
							Próximo
						</Button>
					</div>
				)}
			</div>
		</section>
	);
}
