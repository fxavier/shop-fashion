import { Button } from "@/components/ui/button";
import { FeaturedProducts } from "@/components/featured-products";
import { AllProducts } from "@/components/all-products";
import { NewArrivals } from "@/components/new-arrivals";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative h-[80vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full container">
          <div className="flex flex-col justify-center h-full max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Descubra Seu Estilo
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explore nossa última coleção de peças de moda premium projetadas para o guarda-roupa moderno.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/products">Comprar Agora</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm" asChild>
                <Link href="/new-arrivals">Novidades</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />
      <NewArrivals />
      <AllProducts />
    </div>
  );
}