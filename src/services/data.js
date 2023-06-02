import axios from "axios";

export const getUserFollowers = async (text) => {
  return await axios(
    `https://api.github.com/users/${text}/followers?per_page=100`
  );
};

export const getUserFollowings = async (text) => {
  return await axios(
    `https://api.github.com/users/${text}/following?per_page=100`
  );
};
