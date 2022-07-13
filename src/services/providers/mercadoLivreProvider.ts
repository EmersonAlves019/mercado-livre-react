import mercadoLivreApi from '../api/mercadoLivreApi';
import { IApiResult } from '../http/@types';
import request from '../http/request';


export const getProducts = async (): Promise<IApiResult> => {
  const result = await request(mercadoLivreApi, `/sites/MLB/search?category=${"MLB1246"}&q=`);

  return result;
}

export const getProductInfos = async (id: string): Promise<IApiResult> => {
  const result = await request(mercadoLivreApi, `/items/${id}`);
  return result;
}

// export const getAllCategories = async () => {
//   const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
//    return await customAxios(URL)
// }

// export const getByCategoryAndQuery = async (id, query) => {
//   const URL = `https://api.mercadolibre.com`
//   return await customAxios(URL)
// }

// export const getProductInfo = async (id) => {
//   const URL = `https://api.mercadolibre.com/items/${id}`
//   return await customAxios(URL)
// }