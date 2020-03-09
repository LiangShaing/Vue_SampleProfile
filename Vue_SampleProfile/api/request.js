import axios from 'axios'


export const request = axios.create({
  baseURL: 'http://localhost:8080/'
});

export function getJson (url) {
  return request({
    url: url,
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
};

export function postJson (url,data) {
  return request({
    url: url,
    method: "POST",
    data: data,
    headers: { "Content-Type": "application/json" }
  })
};

