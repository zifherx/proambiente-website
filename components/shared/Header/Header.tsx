import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-40 h-12">
            <Image src="" alt="Pro Ambiente" fill className="object-contain" />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/nosotros" className="text-gray-600 hover:text-gray-900">
            Inicio
          </Link>
          <Link href="/nosotros" className="text-gray-600 hover:text-gray-900">
            Nosotros
          </Link>
          <Link href="/servicios" className="text-gray-600 hover:text-gray-900">
            Servicios
          </Link>
          <Link href="/clientes" className="text-gray-600 hover:text-gray-900">
            Productos
          </Link>
          <Link href="/contacto" className="text-gray-600 hover:text-gray-900">
            Contacto
          </Link>
        </nav>

        <Button className="bg-verdePro/50 hover:bg-verdePro">
          Cliente Ruppiest
        </Button>
      </div>
    </header>
  );
}
