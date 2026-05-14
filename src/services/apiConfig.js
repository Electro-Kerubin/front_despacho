// Configuración centralizada de URLs de APIs
const API_CONFIG = {
  VENTAS_API: '',    // relativo — pasa por Nginx
  DESPACHOS_API: '', // relativo — pasa por Nginx
};

export const ENDPOINTS = {
  // Endpoints Ventas Backend
  GET_VENTAS: `/api/v1/ventas`,
  UPDATE_VENTA: `/api/v1/ventas`,
  
  // Endpoints Despachos Backend
  GET_DESPACHOS: `/api/v1/despachos`,
  CREATE_DESPACHO: `/api/v1/despachos`,
  UPDATE_DESPACHO: `/api/v1/despachos`,
};

export const API_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

export default API_CONFIG;