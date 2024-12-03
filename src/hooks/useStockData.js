import { useState, useEffect } from 'react';

export const useStockData = (symbol) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!symbol) return;
      
      try {
        setLoading(true);
        // Replace with actual API call
        const response = await fetch(`/api/stocks/${symbol}`);
        const json = await response.json();
        
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol]);

  return { data, loading, error };
};