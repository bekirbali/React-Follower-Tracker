import "./style.css";
import { useState } from "react";
import Home from "./pages/Home";
import Form from "./components/Form";
import { getUserFollowers, getUserFollowings } from "./services/data";

const App = () => {
  const [text, setText] = useState("bekirbali");
  const [followings, setFollowings] = useState([]);
  const [followers, setFollowers] = useState([]);

  const getFollowers = async () => {
    if (text) {
      const { data } = await getUserFollowers(text);
      setFollowers(data.map((follower) => follower.login));
    }
    return;
  };

  const getFollowing = async () => {
    if (text) {
      const { data } = await getUserFollowings(text);
      setFollowings(data.map((following) => following.login));
      setText("");
    }
    return;
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
