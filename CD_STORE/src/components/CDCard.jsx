export default function CDCard({ cd, agregarAlCarrito, alSeleccionar }) {
  return (
    <div className="bg-neutral-950 rounded-lg overflow-hidden border border-neutral-800 hover:border-red-900/60 transition-all duration-300 group shadow-lg">
      
      {/* Hacer clic en la imagen te lleva al detalle */}
      <div 
        onClick={() => alSeleccionar(cd)} 
        className="relative overflow-hidden bg-neutral-900 h-52 cursor-pointer"
      >
        <img 
         src={cd.portada} 
        className="w-full h-52 object-cover"
          alt={cd.titulo} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
        />
      </div>
      
      <div className="p-5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-red-500 bg-red-950/50 px-2 py-0.5 rounded">
          {cd.genero}
        </span>
        
        {/* Hacer clic en el título también te lleva al detalle */}
        <h3 
          onClick={() => alSeleccionar(cd)}
          className="text-lg font-bold mt-3 truncate text-neutral-100 group-hover:text-red-500 transition-colors duration-200 cursor-pointer"
        >
          {cd.titulo}
        </h3>
        <p className="text-neutral-500 text-xs mt-0.5">{cd.artista}</p>

        {/* Pequeño indicador si el disco ya fue calificado en el catálogo */}
        {cd.calificacion && (
          <div className="text-[11px] text-red-500/80 mt-2 font-bold uppercase tracking-wider">
            ⚡ {cd.calificacion} / 5
          </div>
        )}
        
        <div className="flex justify-between items-center mt-5 pt-3 border-t border-neutral-900">
          <span className="text-xl font-black text-neutral-200">${cd.precio}</span>
          <button 
            onClick={() => agregarAlCarrito(cd)}
            className="bg-neutral-900 hover:bg-red-600 text-neutral-300 hover:text-white border border-neutral-800 hover:border-red-600 px-4 py-2 rounded font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}