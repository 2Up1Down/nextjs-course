import Head from "next/head";

import AllPosts from "./../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>All my posts</title>
        <meta
          name="description"
          content="A list of all programming tutorials...."
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
