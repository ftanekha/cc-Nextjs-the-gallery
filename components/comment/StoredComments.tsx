import React from 'react'
import styles from './Comment.module.css'
import {fetchCommentData} from '../../utils/utils'

export type StoredCommentsProps = {
  id: number
}

export default async function  StoredComments ({ id }: StoredCommentsProps) {
  const commentData = await fetchCommentData(id)
  return (
    <div>
      {
        commentData.map(
          ({id, body, timestamp}) => {
            return (
              <div key={id} className={styles.comments}>
                <p>{body}</p>
                <p className={styles.comments_date}>
                  {
                    new Date(timestamp).toLocaleDateString('en-US', { timeZone: 'UTC' })
                  }
                </p>
              </div>
            )
          }
        )
      }
    </div>
  )
}