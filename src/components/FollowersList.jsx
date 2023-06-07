const FollowersList = ({ followers }) => {
  return (
    <>
      <ul className="follows">
        <h2>Followers ({followers.length})</h2>
        {followers?.sort().map((follower, index) => (
          <p key={follower}>
            {index + 1} - {follower}
          </p>
        ))}
      </ul>
    </>
  );
};

export default FollowersList;
