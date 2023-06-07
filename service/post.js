import axios from "axios";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const client = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
});

export const getPostsInMain = async () => {
  let result = [];
  try {
    const resposne = await client.get("/posts");

    if (resposne.data) {
      result.push(resposne.data.hot);
      result.push(resposne.data.article);
      result.push(resposne.data.retrospect);
      result.push(resposne.data.review);
      return result;
    } else {
      console.log("something wrong!");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
