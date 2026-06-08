export default function Navbar({ cantidadCarrito }) {
  return (
    <nav className="bg-neutral-900 p-4 sticky top-0 z-50 border-b border-neutral-800 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Texto blanco con acento rojo en el emoji */}
        <h1 className="text-2xl font-black tracking-widest text-white">
          <span className="text-red-500">💿</span> CD-STORE
        </h1>
        {/* Botón de carrito en tonalidades rojas */}
        <div className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-bold text-sm tracking-wide transition-colors duration-200 shadow-lg shadow-red-900/40">
          🛒 Carrito: {cantidadCarrito}
        </div>
      </div>
    </nav>
  );
}