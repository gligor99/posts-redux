import React from "react";
import "./post.css";

const Post = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p className="post-paragraph">{post.body}</p>
    </article>
  );
};

export default Post;
