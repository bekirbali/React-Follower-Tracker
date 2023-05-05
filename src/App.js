import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const App = () => {
  const [text, setText] = useState("");
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);

  const getUserFollowers = async () => {
    const { data } = await axios(
      `https://api.github.com/users/${text}/followers?per_page=100`
    );
    setFollowers(data.map((follower) => follower.login));
    console.log(followers);
  };

  const getUserFollowing = async () => {
    const { data } = await axios(
      `https://api.github.com/users/${text}/following?per_page=100`
    );
    setFollowings(data.map((following) => following.login));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserFollowers();
    getUserFollowing();
    console.log(followers.includes("AbdeenM"));
    const scumBags = followings.filter((scum) => !followers.includes(scum));
    console.log(scumBags);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a user"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="list">
        <ul>
          {followers.sort().map((follower, index) => (
            <p key={follower}>
              {index + 1} - {follower}
            </p>
          ))}
        </ul>
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
      </div>
    </div>
  );
};

export default App;
