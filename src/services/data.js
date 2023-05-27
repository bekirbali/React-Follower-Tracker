export const getUserFollowers = async () => {
  const { data } = await axios(
    `https://api.github.com/users/${text}/followers?per_page=100`
  );
  setFollowers(data.map((follower) => follower.login));
  console.log(followers);
};
