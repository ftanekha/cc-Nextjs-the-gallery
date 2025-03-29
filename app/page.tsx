import React from 'react'  
import ArtGallery from '../components/gallery/ArtGallery'

import styles from './page.module.css'

export default function Home() {  
  return (  
    <main className={styles.main}>  
      <ArtGallery />  
    </main>  
  );  
}  
