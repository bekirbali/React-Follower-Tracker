import { useEffect } from "react";
import MustUnfList from "../components/MustUnfList";
import FollowersList from "../components/FollowersList";
import FollowingsList from "../components/FollowingsList";
import MustFollowList from "../components/MustFollowList";

const Home = ({ getFollowers, getFollowing, followings, followers, text }) => {
  useEffect(() => {
    getFollowers();
    getFollowing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="list">
      <FollowersList followers={followers} />
      <FollowingsList followings={followings} />
      {/* they are not following me */}
      <MustUnfList followers={followers} followings={followings} />

      {/* these I forgot to follow */}
      <MustFollowList followers={followers} followings={followings} />
    </div>
  );
};

export default Home;
