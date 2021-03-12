import BackButton from "./BackButton/BackButton";
import SliceZone from "../SliceZone/SliceZone";
import PostDate from "../PostDate/PostDate";
import PostAuthor from "../PostAuthor/PostAuthor";
import styles from "./FullPost.module.css";

const FullPost = ({ post, title }) => {
  return (
    <>
      <BackButton />
      <section className={styles.fullPost}>
        <div className={styles.wrapper}>
          <h1 className={styles.fullPostTitle}>{title}</h1>
          <PostAuthor author={post.data.author} />
          <PostDate date={post.data.date} />
        </div>
        <SliceZone body={post.data.body} />
      </section>
    </>
  );
};

export default FullPost;
