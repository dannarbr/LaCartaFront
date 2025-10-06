import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from "./LoadingContext";

const RouteListener = () => {
  const location = useLocation();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);

    // Desactivar después de tantos milisegundos 
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // tiempo de carga

    // limpia el timer
    return () => clearTimeout(timer);
  }, [location, setIsLoading]);

  return null;
};

export default RouteListener;