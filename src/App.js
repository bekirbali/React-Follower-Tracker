import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Home from "./pages/Home";

const App = () => {
  const [text, setText] = useState("bekirbali");
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);

  const getUserFollowers = async () => {
    const { data } = await axios(
      `https://api.github.com/users/${text}/followers?per_page=100`
    );
    setFollowers(data.map((follower) => follower.login));
  };

  const getUserFollowing = async () => {
    const { data } = await axios(
      `https://api.github.com/users/${text}/following?per_page=100`
    );
    setFollowings(data.map((following) => following.login));
    setText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserFollowers();
    getUserFollowing();
    const scumBags = followings.filter((scum) => !followers.includes(scum));
    console.log(scumBags);
  };
  useEffect(() => {
    getUserFollowers();
    getUserFollowing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
      <Home />
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
    </div>
  );
};

export default App;
