import PostCard from "./BlogPostCard/BlogPostCard";
import ReadMoreLink from "../../UI/ReadMoreLink/ReadMoreLink";
import styles from "./BlogPostCards.module.css";

const BlogPostCards = ({ posts }) => {
  const fourNewestPosts = posts.slice(0, 4);
  console.log(fourNewestPosts);

  return (
    <section className={styles.blogPostCards}>
      <h1 className={styles.title}>Blogi</h1>
      <ReadMoreLink hoverGreen bold path="/blogi">
        Kaikki Postaukset
      </ReadMoreLink>
      {fourNewestPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default BlogPostCards;
