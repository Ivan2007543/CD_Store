// En components/Navbar.jsx
export default function Navbar({ cantidadCarrito }) {
  return (
    <nav className="w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-black tracking-wider text-xl text-white">
          <span>💿</span> CD-STORE
        </div>
        
        {/* Carrito */}
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
          🛒 Carrito: <span className="bg-black/20 px-1.5 py-0.5 rounded">{cantidadCarrito}</span>
        </button>
      </div>
    </nav>
  );
}