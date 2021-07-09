import React from "react";

import PostsGrid from "./../posts/posts-grid";
import styles from "./featured-posts.module.css";

function FeaturedPosts(props) {
  const { posts } = props;

  return (
    <section className={styles.latest}>
      <h2>FeaturedPosts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
