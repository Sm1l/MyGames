import axios from "axios";

//*api
const baseUrl = process.env.REACT_APP_API_URL_BASE;
const key = process.env.REACT_APP_KEY;
export const pageSize: number = 12;
const currentDate: string = new Date().toLocaleDateString().split(".").reverse().join("-");
const firstDate: string = "2023-01-01";

export const getGames = (ordering: string) =>
  axios(`${baseUrl}games?key=${key}&page_size=${pageSize}&ordering=${ordering}&dates=${firstDate},${currentDate}`);

export const searchGames = (search: string, pageNumber: number) =>
  axios(`${baseUrl}games?key=${key}&page=${pageNumber}&page_size=${pageSize}&search=${search}`);
