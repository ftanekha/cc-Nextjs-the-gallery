'use client'
import React, {useState} from 'react'

import { UserComment, formatTime } from '../../utils/utils'
import styles from './Comment.module.css'
import NewCommentForm from './NewCommentForm'


export default function Comment() {
  const [newComments,setNewComments] = useState<UserComment[]>([])

  const addComment = (newCommentBody: string) => {
    setNewComments(
      [
        ...newComments, 
        {
          id: newComments.length, 
          body: newCommentBody,
          timestamp: (new Date()).getTime()
        }
      ]
    )
  }

  return (
    <div className={styles.comments_section}>
      <div>
        {
          newComments.map(
            (comment) => (
              <div className={styles.comments} key={comment.id}>
                {/* too much padding on p elements */}
                <p>{comment.body}</p>
                <p className={styles.comments_date}>
                  {
                    formatTime(comment.timestamp)
                  }
                </p>
              </div>
            )
          )
        }
      </div>
      <NewCommentForm addComment={addComment}/>
    </div>
  );
}
