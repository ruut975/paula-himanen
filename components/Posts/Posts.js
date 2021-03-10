import styles from "./Posts.module.css";

import PostShort from "./PostShort/PostShort";

const Posts = ({ posts }) => {
  return (
    <section className={styles.posts}>
      {posts.map(post => (
        <PostShort key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Posts;
