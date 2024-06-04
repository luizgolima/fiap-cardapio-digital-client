import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { FoodData } from '../interface/FoodData';

const API_URL = 'http://localhost:8080';

const postData = async (data: FoodData): AxiosPromise<any> => {
  return axios.post(API_URL + '/food', data);
}

export function useFoodDataMutate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(['food-data']).then(r => console.log(r))
    }
  });
}