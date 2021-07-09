import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    ...data,
    content: content,
  };
}

function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  //sort posts by date
  return allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

function getFeaturedPosts() {
  const allPosts = getAllPosts();

  // filter by isFeatured
  return allPosts.filter((post) => post.isFeatured);
}

export { getPostsFiles, getPostData, getAllPosts, getFeaturedPosts };
