import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [text, setText] = useState("");
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);

  const getUserFollowers = async () => {
    const { data } = await axios(
      `https://api.github.com/users/${text}/followers`
    );
    setFollowers(data.map((follower) => follower.login));
    console.log(followers);
  };

  const getUserFollowing = async () => {
    const { data } = await axios(
      `https://api.github.com/users/${text}/following`
    );
    setFollowings(data.map((following) => following.login));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserFollowers();
    getUserFollowing();
    const scumBag = () => {
      const x = followings.filter((person) => !followers.includes(person));
      console.log(x);
    };
    console.log(scumBag());
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
      <div>
        <ul>
          {followers.sort().map((follower, index) => (
            <p key={follower}>
              {index + 1} - {follower}
            </p>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
