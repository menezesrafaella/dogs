import React from "react";
import { ReactComponent as Send } from "../../Assets/send.svg";
import { COMMENT_POST } from "../../env";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({ id, setComments, single }) => {
    const {request, error} = useFetch();
  const [comment, setComment] = React.useState("");

  async function handleSubmit(event) {
      event.preventDefault();
      const {url, options} = COMMENT_POST(id, {comment})
      const {response, json} = await request(url, options)
      if(response.ok) {
          setComment('')
          setComments((comments) => [...comments,json])
      }
  }
  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        value={comment}
        id="comment"
        name="comment"
        placeholder="Comente..."
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Send />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
