"use strict";

import axios from "axios";

const API_URL = "https://dad-jokes.p.rapidapi.com/random/joke";

export const getRandomJoke = () => {
  return axios.get(API_URL, {
    headers: {
      'X-RapidAPI-Key': '43d0e2f68emsh904add7228c16e8p117ddbjsnf90dbf453aac',
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }});
}
