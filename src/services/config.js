import axios from "axios";

export const http = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api/",
  timeout: 3000,
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgNDQiLCJIZXRIYW5TdHJpbmciOiIxOS8wMy8yMDI1IiwiSGV0SGFuVGltZSI6IjE3NDIzNDI0MDAwMDAiLCJuYmYiOjE3MjUwMzcyMDAsImV4cCI6MTc0MjQ5MDAwMH0.nbEph8KdTvn_H60497RoqnxhgRx2jw3GA6Va7WN9aZY",
  },
});


export const auth = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn/api/",
  timeout: 3000,
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgNDQiLCJIZXRIYW5TdHJpbmciOiIxOS8wMy8yMDI1IiwiSGV0SGFuVGltZSI6IjE3NDIzNDI0MDAwMDAiLCJuYmYiOjE3MjUwMzcyMDAsImV4cCI6MTc0MjQ5MDAwMH0.nbEph8KdTvn_H60497RoqnxhgRx2jw3GA6Va7WN9aZY",
  },
});