import React from "react";
import Location from "./Location";
import Post from "./Post";
import WritingButton from './WritingButton';

export default function Meeting() {
  return (
    <>
      <Location />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
			<WritingButton />
    </>
  );
}
