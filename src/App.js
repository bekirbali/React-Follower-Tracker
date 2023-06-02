import React, { useState } from "react";
import "./style.css";
import Home from "./pages/Home";
import { getUserFollowers, getUserFollowings } from "./services/data";
import Form from "./components/Form";

const App = () => {
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

  return (
    <>
      <Form
        getFollowers={getFollowers}
        getFollowing={getFollowing}
        followers={followers}
        followings={followings}
        text={text}
        setText={setText}
      />
      <Home
        getFollowers={getFollowers}
        getFollowing={getFollowing}
        followers={followers}
        followings={followings}
      />
    </>
  );
};

export default App;
