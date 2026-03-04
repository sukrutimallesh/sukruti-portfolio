/**
 * Custom hook for fetching and managing portfolio data.
 * Falls back to static data when the backend API is unavailable.
 */

import { useEffect, useState } from "react";
import { fetchPortfolio } from "../services/api";
import staticData from "../data/portfolio.json";

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
        setData(staticData);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};
