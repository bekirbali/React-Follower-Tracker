const MustUnfList = ({ followings, followers }) => {
  return (
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
  );
};

export default MustUnfList;
