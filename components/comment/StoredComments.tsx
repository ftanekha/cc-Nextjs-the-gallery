import React from 'react'
import styles from './Comment.module.css'
import {fetchCommentData, formatTime} from '../../utils/utils'

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
                    formatTime(timestamp)
                  }
                </p>
              </div>
            )
          }
        )
      }
      <p className='bg-black w-full h-6 text-gray-100 text-small' style={{paddingLeft: 10, margin: '1rem 0'}}>New comments:</p>
    </div>
  )
}