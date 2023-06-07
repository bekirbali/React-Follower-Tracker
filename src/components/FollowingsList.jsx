const FollowingsList = ({ followings }) => {
  return (
    <>
      <ul className="follows">
        <h2>Followings ({followings.length})</h2>
        {followings.sort().map((following, index) => (
          <p key={following}>
            {index + 1} - {following}
          </p>
        ))}
      </ul>
    </>
  );
};

export default FollowingsList;
