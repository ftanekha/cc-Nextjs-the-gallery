import React from 'react'

import { Comment } from '../../utils/utils'
import styles from './Comment.module.css'


export default function Comment() {

  const addComment = (newCommentBody: string) => {

  };

  return (
    <div className={styles.comments_section}>
      <div>
        {newComments.map((comment) => (
          <div className={styles.comments} key={comment.id}>
            <p>{comment.body}</p>
            <p className={styles.comments_date}>
              {new Date(comment.timestamp).toLocaleDateString('en-US', { timeZone: 'UTC' })}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}
