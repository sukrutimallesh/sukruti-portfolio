/**
 * Custom hook for fetching and managing portfolio data.
 */

import { useEffect, useState } from "react";
import { fetchPortfolio } from "../services/api";

export const usePortfolio = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const portfolio = await fetchPortfolio();
        setData(portfolio);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};
