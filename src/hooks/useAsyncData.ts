import { useEffect, useState } from "react";

interface AsyncDataState<T> {
  data: T;
  isLoading: boolean;
  error: Error | null;
}

// Hook genérico para consumir funciones de src/lib/api.ts.
// Aísla a los componentes del hecho de que hoy los datos vienen hardcodeados
// y mañana pueden venir de un fetch real: la forma del estado no cambia.
export function useAsyncData<T>(fetcher: () => Promise<T>, fallback: T): AsyncDataState<T> {
  const [data, setData] = useState<T>(fallback);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetcher()
      .then((result) => {
        if (isMounted) setData(result);
      })
      .catch((err) => {
        if (isMounted) setError(err instanceof Error ? err : new Error("Error desconocido"));
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error };
}
