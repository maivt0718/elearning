import axios from "axios";

export const http = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api/",
  timeout: 3000,
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMiIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNzUwNDAwMDAwMCIsIm5iZiI6MTcxMjk0MTIwMCwiZXhwIjoxNzM3NjUxNjAwfQ.QIS-5ejbLk-ly0KkZrtV0hoyQXSL9wqIkbziyg_m8hg",
  },
});


export const auth = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn/api/",
  timeout: 3000,
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMiIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNzUwNDAwMDAwMCIsIm5iZiI6MTcxMjk0MTIwMCwiZXhwIjoxNzM3NjUxNjAwfQ.QIS-5ejbLk-ly0KkZrtV0hoyQXSL9wqIkbziyg_m8hg",
  },
});