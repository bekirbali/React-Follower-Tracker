import axios from "axios";

export const getUserFollowers = async (text) => {
  const { data } = await axios(
    `https://api.github.com/users/${text}/followers?per_page=100`
  );
  return data;
};
