import axios, { AxiosInstance, AxiosPromise } from "axios";
import { TriviaCategory, TriviaQuestion } from "../types";
import qs from "qs";

const triviaAPI: AxiosInstance = axios.create({
  baseURL: "https://opentdb.com",
  timeout: 10000,
  withCredentials: false,
});

export const getTriviaCategories: () => Promise<TriviaCategory[]> = () =>
  triviaAPI({
    url: "/api_category.php",
    method: "GET",
  }).then((response) => response.data.trivia_categories);

export const getTriviaQuestions: (req: {
  category: number;
  amount: number;
}) => AxiosPromise<[TriviaQuestion]> = (req) =>
  triviaAPI({
    url: `/api.php${qs.stringify(req, { addQueryPrefix: true })}`,
    method: "GET",
  });
