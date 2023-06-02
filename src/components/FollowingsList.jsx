import React from "react";

const FollowingsList = ({ followings }) => {
  return (
    <>
      <h2>Followings</h2>
      <ul>
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
