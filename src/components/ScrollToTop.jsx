import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Buscamos el header principal en el DOM
    const header = document.getElementById('main-header');
    
    // 2. Calculamos su altura total. Si por alguna razón no se encuentra, usamos 0.
    const headerHeight = header ? header.offsetHeight : 0;

    // 3. Ejecutamos el scroll suave hacia la coordenada Y equivalente a la altura del header
    window.scrollTo({
      top: headerHeight,
      left: 0,
      behavior: 'smooth' 
    });
  }, [pathname]);

  return null;
}