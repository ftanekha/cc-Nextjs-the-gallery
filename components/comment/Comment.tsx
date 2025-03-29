'use client'
import React, {useState} from 'react'

import { UserComment } from '../../utils/utils'
import styles from './Comment.module.css'
// import { timeStamp } from 'console'
import NewCommentForm from './NewCommentForm'


export default function Comment() {
  const [newComments,setNewComments] = useState<UserComment[]>([])

  const addComment = (newCommentBody: string) => {
    const currentTimeStamp = (new Date()).getTime()

    setNewComments(
      [
        ...newComments, 
        {//random id generation could use improvement
          id: currentTimeStamp, 
          body: newCommentBody,
          timestamp: currentTimeStamp
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
                    new Date(comment.timestamp).toLocaleDateString('en-US', { timeZone: 'UTC' })
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
