'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
	return (
		<footer className='border-t bg-background'>
			<div className='container py-8 md:py-12'>
				<div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
					<div>
						<h3 className='mb-4 text-lg font-semibold'>Loja</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/products'
									className='text-muted-foreground hover:text-foreground'
								>
									Todos os Produtos
								</Link>
							</li>
							<li>
								<Link
									href='/new-arrivals'
									className='text-muted-foreground hover:text-foreground'
								>
									Novidades
								</Link>
							</li>
							<li>
								<Link
									href='/categories'
									className='text-muted-foreground hover:text-foreground'
								>
									Categorias
								</Link>
							</li>
							<li>
								<Link
									href='/brands'
									className='text-muted-foreground hover:text-foreground'
								>
									Marcas
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='mb-4 text-lg font-semibold'>Supporte</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/contact'
									className='text-muted-foreground hover:text-foreground'
								>
									Contacte-nos
								</Link>
							</li>
							<li>
								<Link
									href='/faq'
									className='text-muted-foreground hover:text-foreground'
								>
									FAQs
								</Link>
							</li>
							<li>
								<Link
									href='/shipping'
									className='text-muted-foreground hover:text-foreground'
								>
									Informações da Loja
								</Link>
							</li>
							<li>
								<Link
									href='/returns'
									className='text-muted-foreground hover:text-foreground'
								>
									Devoluções
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='mb-4 text-lg font-semibold'>Companhia</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/about'
									className='text-muted-foreground hover:text-foreground'
								>
									Sobre nós
								</Link>
							</li>
							<li>
								<Link
									href='/careers'
									className='text-muted-foreground hover:text-foreground'
								>
									Carreiras
								</Link>
							</li>
							<li>
								<Link
									href='/privacy'
									className='text-muted-foreground hover:text-foreground'
								>
									Politicas de Privacidade
								</Link>
							</li>
							<li>
								<Link
									href='/terms'
									className='text-muted-foreground hover:text-foreground'
								>
									Termos de Serviço
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className='mb-4 text-lg font-semibold'>Connecte-se</h3>
						<div className='flex space-x-4'>
							<Link
								href='https://facebook.com'
								className='text-muted-foreground hover:text-foreground'
							>
								<Facebook className='h-5 w-5' />
							</Link>
							<Link
								href='https://instagram.com'
								className='text-muted-foreground hover:text-foreground'
							>
								<Instagram className='h-5 w-5' />
							</Link>
							<Link
								href='https://twitter.com'
								className='text-muted-foreground hover:text-foreground'
							>
								<Twitter className='h-5 w-5' />
							</Link>
						</div>
					</div>
				</div>
				<div className='mt-8 border-t pt-8 text-center text-sm text-muted-foreground'>
					<p>
						© {new Date().getFullYear()} Fashion Shop. Todos os direitos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
