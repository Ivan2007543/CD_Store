// En components/Hero.jsx
export default function Hero() {
  return (
    // Asegúrate de usar w-full, px-4 para que respire en móvil y text-center
    <div className="w-full bg-black text-center py-12 px-4">
      <h1 className="text-3xl md:text-5xl font-black text-white uppercase mb-2">
        El Templo del <span className="text-red-600">Formato Físico</span>
      </h1>
      <p className="text-xs md:text-sm text-neutral-400 max-w-md mx-auto">
        Colecciones exclusivas en CD y Vinilo. Sonido puro, arte real.
      </p>
    </div>
  );
}