import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Post from "../components/Post";
import { fetchPosts } from "../reducers/postsActions";
import "./postsPage.css";

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

export default connect(mapStateToProps)(PostsPage);
