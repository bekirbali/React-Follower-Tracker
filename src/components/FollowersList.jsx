import React from "react";

const FollowersList = ({ followers }) => {
  return (
    <>
      <h2>Followers</h2>
      <ul>
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
