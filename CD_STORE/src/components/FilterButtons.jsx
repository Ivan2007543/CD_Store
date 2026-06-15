export default function FilterButtons({ generoSeleccionado, setGeneroSeleccionado }) {
  const generos = ['Todos', 'Rock', 'Pop', 'NuMetal', 'Emo', 'Alternativo', 'Punk'];

  return (
    // Agregamos flex-wrap y un pequeño padding lateral
    <div className="flex flex-wrap gap-3 mb-10 justify-center px-4">
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