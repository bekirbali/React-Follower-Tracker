const MustFollowList = ({ followers, followings }) => {
  return (
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
  );
};

export default MustFollowList;
