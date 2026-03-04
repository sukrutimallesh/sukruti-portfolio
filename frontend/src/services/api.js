/**
 * API service for communicating with the FastAPI backend.
 */

import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const fetchPortfolio = async () => {
  const response = await apiClient.get("/portfolio");
  return response.data;
};

export const submitContact = async (formData) => {
  const response = await apiClient.post("/contact", formData);
  return response.data;
};
