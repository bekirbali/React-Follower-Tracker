import React from "react";

const Form = ({
  getFollowing,
  getFollowers,
  followings,
  followers,
  setText,
  text,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getFollowers();
    getFollowing();
    const scumBags = followings.filter((scum) => !followers.includes(scum));
    console.log(scumBags);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a user"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
