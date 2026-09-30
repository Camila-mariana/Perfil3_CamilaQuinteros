import { useEffect, useState } from 'react';

// Custom Hook: se encarga de consumir la API y manejar datos, carga y errores.
export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Error ' + response.status);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      setError('No se pudieron cargar los datos. Revisa tu conexión a internet.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}
