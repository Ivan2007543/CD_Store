import { useState } from 'react';
// Importamos correctamente el icono del vinilo que guardaste en assets
import iconoVinilo from '../assets/vinilo.png'; 

export default function CDDetail({ cd, alRegresar, alCalificar }) {
  // Estado local para manejar el "hover" visual de la calificación antes de hacer clic
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="bg-neutral-950 rounded-lg border border-neutral-800 p-6 md:p-10 max-w-4xl mx-auto my-8 shadow-2xl">
      
      {/* Botón de Regresar */}
      <button 
        onClick={alRegresar}
        className="mb-8 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-red-500 transition-colors duration-200 flex items-center gap-2 cursor-pointer"
      >
        ← Volver al catálogo
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Portada Grande */}
        <div className="bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 shadow-xl shadow-black">
          <img src={cd.portada} alt={cd.titulo} className="w-full h-80 object-cover" />
        </div>

        {/* Información Detallada */}
        <div className="flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-950/40 px-2 py-1 rounded w-fit">
            {cd.genero}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4 tracking-tight">
            {cd.titulo}
          </h2>
          <p className="text-neutral-400 text-lg mt-1">{cd.artista}</p>
          <p className="text-neutral-500 text-sm mt-4 font-light leading-relaxed">
            Edición especial remasterizada. Incluye librillo con el arte original y letras de las canciones. Un artículo imprescindible para coleccionistas del formato físico.
          </p>

          <div className="text-2xl font-black text-neutral-200 mt-6">
            ${cd.precio}
          </div>

          {/* SECCIÓN DE CALIFICACIÓN CON LOS NUEVOS VINILOS */}
          <div className="mt-8 pt-6 border-t border-neutral-900">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
              Tu Calificación:
            </h4>
            <div className="flex gap-3 items-center">
              {[1, 2, 3, 4, 5].map((estrella) => (
                <button
                  key={estrella}
                  type="button"
                  onClick={() => alCalificar(cd.id, estrella)}
                  onMouseEnter={() => setHoverRating(estrella)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transform hover:scale-110 transition-transform duration-150 cursor-pointer focus:outline-none"
                >
                  <img 
                    src={iconoVinilo} 
                    alt={`Puntuación ${estrella}`} 
                    className={`w-8 h-8 object-contain transition-all duration-150 ${
                      estrella <= (hoverRating || cd.calificacion || 0)
                        ? 'opacity-100 filter-none drop-shadow-[0_0_6px_rgba(239,68,68,0.5)]'
                        : 'opacity-20 grayscale brightness-75'
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs font-bold text-neutral-500 ml-2 uppercase tracking-wider">
                {cd.calificacion ? `(${cd.calificacion}/5)` : '(Sin calificar)'}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}