import React from 'react'
import Image from 'next/image'
import {Artwork} from '../../utils/utils'
import styles from './Featured.module.css'
import StoredComments from '../comment/StoredComments'
  
export default function Featured({objectID, primaryImage, title, artistDisplayName, objectDate}: Artwork) {
  return (  
    <div className={styles.featured}>  
      <Image  
        className={styles.featuredImage}  
        src={primaryImage == '' ? '/blank.jpg' : primaryImage}  
        alt={title}  
        width={500}  
        height={500}  
      /> 
      <p className={styles.title}>{artistDisplayName}</p>
      <p className={styles.title}>{objectDate}</p>
      <div className={styles.comments_section}>
        <StoredComments id={objectID}/>
      </div>
    </div>  
  );  
}  