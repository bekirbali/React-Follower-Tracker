import { useEffect, useRef } from "react";

const Form = ({
  getFollowing,
  getFollowers,
  followings,
  followers,
  setText,
  text,
}) => {
  const ref = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    getFollowers();
    getFollowing();
    const scumBags = followings.filter((scum) => !followers.includes(scum));
    console.log(scumBags);
  };

  useEffect(() => {
    ref.current.focus();
  }, [followers]);
  return (
    <form onSubmit={handleSubmit} className="my-form">
      <input
        type="text"
        placeholder="Search for a user"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={ref}
      />
      <button onClick={() => ref.current.focus()} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
