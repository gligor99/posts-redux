import React, { useEffect } from "react";
import "./postsPage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSelector } from "../slices/posts";
import { Link } from "react-router-dom";
// Components
import Post from "../components/Post";

const PostsPage = () => {
  const dispatch = useDispatch();
  const { loading, posts, hasErrors } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(posts);

  const renderPosts = () => {
    if (loading) return <p className="loading">Loading posts...</p>;
    if (hasErrors) return <p>Error. Unable to display posts</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <div className="posts_container">
      <div className="posts_wrapper">
        <Link className="posts-button" to="/">
          Back to Dashboard
        </Link>
        <h1 className="posts-title">Posts</h1>
      </div>
      {renderPosts()}
    </div>
  );
};

export default PostsPage;
