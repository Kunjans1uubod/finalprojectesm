export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = (price) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
};
