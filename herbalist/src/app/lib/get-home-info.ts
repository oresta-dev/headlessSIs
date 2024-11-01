import { query } from "./strapi";

export async function  getHomeInfo() {
    try {
        const response = await query('home');
        if (!response.data) {
          throw new Error('No data received from API');
        }
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching home info:', error);
        throw error;
      }
}