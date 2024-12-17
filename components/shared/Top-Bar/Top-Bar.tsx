import Link from "next/link";

import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export function TopBar() {
  return (
    <div className="w-full bg-gray-100 text-sm py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center gap-2 text-negroPro">
          <MapPin className="h-5 w-5" />
          <span>
            Oficina Principal: Cucardas Mz Z Lt 3 - El Golf - Trujillo
          </span>
        </div>
        <div className="flex items-center gap-4 text-negroPro">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+51 966 188 038 / +51 44 383 519</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>ventas@proambiente.com.pe</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="https://instagram.com"
              className="text-gray-400 hover:text-negroPro"
            >
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-gray-400 hover:text-negroPro"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-gray-400 hover:text-negroPro"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
