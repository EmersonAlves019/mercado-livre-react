import axios, { AxiosInstance } from 'axios';

export default async function mercadoLivreApi(): Promise<AxiosInstance> {
  return  axios.create({
    baseURL: `https://api.mercadolibre.com/`,
  });
}
