import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { FoodData } from '../interface/FoodData';

const fetchData = async (): AxiosPromise<FoodData[]> => {
  return axios.get('https://fiap-cardapio-digital-server.onrender.com/food');
}

export function useFoodData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['food-data'],
    retry: 2
  })

  return {
    ...query,
    data: query.data?.data
  }
}