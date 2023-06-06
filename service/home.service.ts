import axios from "axios";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const client = axios.create({
  baseURL: "http://localhost:8080",
});

export const getHomeData = async () => {
  let result: any[] = [];
  try {
    const resposne = await client.get("/posts");

    if (resposne.data) {
      result.push(resposne.data.hot);
      result.push(resposne.data.article);
      result.push(resposne.data.retrospect);
      result.push(resposne.data.review);
      return result;
    } else {
      // console.log("something wrong!");
    }
  } catch (error) {
    // console.error(error);
    return [];
  }
};
