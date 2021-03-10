import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'
import ReadMoreLink from "../../../UI/ReadMoreLink/ReadMoreLink";
import PostDate from '../../PostDate/PostDate'
import FirstParagraph from './FirstParagraph/FirstParagraph'

import styles from "./PostShort.module.css";

const PostShort = ({ post }) => {
  const title = RichText.asText(post.data.title) ? RichText.asText(post.data.title) : 'Untitled'

  return (
    <div className={styles.postShort}>
      <NextLink
        as={`/blogi/${post.uid}`}
        href='/blogi/[uid]'
      >
        <a>
          <h2 className={styles.blogTitle}>{title}</h2>
        </a>
      </NextLink>

      <PostDate date={post.data.date} />
      
      <FirstParagraph
        sliceZone={post.data.body}
        textLimit={300}
      />
      <ReadMoreLink hoverGreen flexStart path={`/blogi/${post.uid}`}>Read More</ReadMoreLink>
    </div>
  );
};

export default PostShort;
