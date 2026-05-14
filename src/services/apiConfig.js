// Configuración centralizada de URLs de APIs
const API_CONFIG = {
  VENTAS_API: 'http://10.0.156.240:8082',
  DESPACHOS_API: 'http://10.0.134.20:8081',
};

export const ENDPOINTS = {
  // Endpoints Ventas Backend
  GET_VENTAS: `${API_CONFIG.VENTAS_API}/api/v1/ventas`,
  UPDATE_VENTA: `${API_CONFIG.VENTAS_API}/api/v1/ventas`,
  
  // Endpoints Despachos Backend
  GET_DESPACHOS: `${API_CONFIG.DESPACHOS_API}/api/v1/despachos`,
  CREATE_DESPACHO: `${API_CONFIG.DESPACHOS_API}/api/v1/despachos`,
  UPDATE_DESPACHO: `${API_CONFIG.DESPACHOS_API}/api/v1/despachos`,
};

export const API_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

export default API_CONFIG;
