import axios from "axios";

const COINS_BASE_URL = "https://coinranking1.p.rapidapi.com/";

const NEWS_BASE_URL = "https://bing-news-search1.p.rapidapi.com/";

export const publicRequestCoins = axios.create({
  baseURL: COINS_BASE_URL,
  headers: {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '1949def5a6mshe08a7595a46a945p105d64jsn94c7b31f3264'
  }
})

export const publicRequestNews = axios.create({
  baseURL: NEWS_BASE_URL,
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '1949def5a6mshe08a7595a46a945p105d64jsn94c7b31f3264'
  }
})
