import { useState } from 'react';
import { listadoCDs } from './data/cds';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterButtons from './components/FilterButtons';
import CDCard from './components/CDCard';
import CDDetail from './components/CDDetail'; // Importamos la nueva vista

export default function App() {
  // ESTADOS
  const [cds, setCds] = useState(listadoCDs); // Cambiado a useState dinámico para poder actualizar las calificaciones
  const [carrito, setCarrito] = useState([]);
  const [generoSeleccionado, setGeneroSeleccionado] = useState('Todos');
  const [cdSeleccionado, setCdSeleccionado] = useState(null); // Nuevo estado de navegación

  // FUNCIONES
  const agregarAlCarrito = (cd) => {
    setCarrito([...carrito, cd]);
  };

  // Función para guardar la calificación de un CD específico
  const calificarCD = (id, puntuacion) => {
    const cdsActualizados = cds.map(cd => {
      if (cd.id === id) {
        return { ...cd, calificacion: puntuacion }; // Le agregamos la propiedad calificación
      }
      return cd;
    });
    
    setCds(cdsActualizados);
    
    // Sincronizar la vista de detalle actual con la nueva calificación
    setCdSeleccionado(cdsActualizados.find(cd => cd.id === id));
  };

  // FILTRADO
  const cdsFiltrados = generoSeleccionado === 'Todos' 
    ? cds 
    : cds.filter(cd => cd.genero === generoSeleccionado);

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-red-600 selection:text-white">
      
      <Navbar cantidadCarrito={carrito.length} />

      {/* RENDERIZADO CONDICIONAL */}
      {cdSeleccionado ? (
        // VISTA A: DETALLE DEL DISCO
        <main className="container mx-auto p-6 max-w-7xl">
          <CDDetail 
            cd={cdSeleccionado} 
            alRegresar={() => setCdSeleccionado(null)} 
            alCalificar={calificarCD}
          />
        </main>
      ) : (
        // VISTA B: EL CATÁLOGO COMPLETO
        <>
          <Hero />
          <main className="container mx-auto p-6 max-w-7xl">
            <FilterButtons 
              generoSeleccionado={generoSeleccionado} 
              setGeneroSeleccionado={setGeneroSeleccionado} 
            />

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cdsFiltrados.map(cd => (
                <CDCard 
                  key={cd.id} 
                  cd={cd} 
                  agregarAlCarrito={agregarAlCarrito} 
                  alSeleccionar={setCdSeleccionado} // Enviamos la función para abrir el disco
                />
              ))}
            </section>
          </main>
        </>
      )}
    </div>
  );
}