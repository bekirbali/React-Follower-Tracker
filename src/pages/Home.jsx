import React, { useEffect, useState } from "react";

import { getUserFollowers, getUserFollowings } from "../services/data";

import "../style.css";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [text, setText] = useState("bekirbali");
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);

  const getFollowers = async () => {
    const { data } = await getUserFollowers(text);
    setFollowers(data.map((follower) => follower.login));
  };

  const getFollowing = async () => {
    const { data } = await getUserFollowings(text);
    setFollowings(data.map((following) => following.login));
    setText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getFollowers();
    getFollowing();
    const scumBags = followings.filter((scum) => !followers.includes(scum));
    console.log(scumBags);
  };
  useEffect(() => {
    getFollowers();
    getFollowing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="home-page">
        {userData?.map((user) => (
          <p>{user.login} </p>
        ))}
      </div>
      <div className="list">
        <h2>Followers</h2>
        <ul>
          {followers.sort().map((follower, index) => (
            <p key={follower}>
              {index + 1} - {follower}
            </p>
          ))}
        </ul>
        <h2>Followings</h2>
        <ul>
          {followings.sort().map((following, index) => (
            <p key={following}>
              {index + 1} - {following}
            </p>
          ))}
        </ul>
        {/* the they are not following me */}
        <ul className="second">
          <h3>You are following but they don't follow you back.</h3>
          {followings
            .filter((scum) => !followers.includes(scum))
            .map((scums, index) => (
              <p key={scums}>
                {index + 1} - {scums.toLowerCase()}
              </p>
            ))}
        </ul>

        {/* these I forgot to follow */}
        <ul className="second">
          <h3>You are not following but they are following you.</h3>
          {followers
            .filter((follower) => !followings.includes(follower))
            .map((follower, index) => (
              <p key={follower}>
                {index + 1} - {follower.toLowerCase()}
              </p>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
