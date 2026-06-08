export default function FilterButtons({ generoSeleccionado, setGeneroSeleccionado }) {
  const generos = ['Todos', 'Rock', 'Pop', 'NuMetal', 'Emo', 'Alternativo', 'Punk']; // Lista de géneros disponibles

  return (
    <div className="flex gap-3 mb-10 justify-center">
      {generos.map(genero => (
        <button
          key={genero}
          onClick={() => setGeneroSeleccionado(genero)}
          className={`px-5 py-2 rounded-md text-xs font-bold uppercase tracking-widest border transition-all duration-200 ${
            generoSeleccionado === genero 
              ? 'bg-red-950/40 border-red-500 text-red-500 shadow-md shadow-red-950' 
              : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
          }`}
        >
          {genero}
        </button>
      ))}
    </div>
  );
}