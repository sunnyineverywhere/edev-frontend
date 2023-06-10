import axios from "axios";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const client = axios.create({
  baseURL: NEXT_PUBLIC_API_URL,
});

const jwtUtil = () => {
  return localStorage.getItem("jwt");
};

export const getUserInfo = async () => {
  const jwt = jwtUtil();
  try {
    const resposne = await client.get("/members", {
      headers: {
        Authorization: jwt,
      },
    });

    if (resposne.data) {
      return resposne.data;
    } else {
      console.log("something wrong!");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

/*
export default function addPost(req) {
  const jwt = jwtUtil();
  if (jwt) {
    try {
      const response = client.post(
        "/posts",
        {
          title: req.title,
          contents: req.detail,
          url: req.url,
          category: req.category,
          isPublic: req.isPublic,
        },
        {
          headers: {
            Authorization: jwt,
          },
        }
      );
    } catch (error) {
      console.log(error);
      return;
    }
    return true;
  }
}
*/
