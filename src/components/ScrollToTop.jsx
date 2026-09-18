import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Buscamos el header para calcular su altura
    const header = document.getElementById('main-header');
    const headerHeight = header ? header.offsetHeight : 0;

    // Si es Home ("/"), el destino es 0 (arriba del todo). 
    // Para cualquier otra ruta, el destino es la altura del header.
    const targetTop = pathname === '/' ? 0 : headerHeight;

    window.scrollTo({
      top: targetTop,
      left: 0,
      behavior: 'smooth' 
    });
  }, [pathname]);

  return null;
}