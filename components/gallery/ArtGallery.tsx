import React from 'react'
import styles from './ArtGallery.module.css'
import {fetchArtData} from '../../utils/utils'
import Featured from '../featured/Featured'
  
export default async function ArtGallery() {  
    const artData = await fetchArtData()
    return (
        <div className={styles.gallery}>
            {
                artData.map(
                    ({objectID, primaryImage, title, artistDisplayName, objectDate}) => {
                        return <
                            Featured 
                            key = {objectID}
                            objectID={objectID }
                            primaryImage={primaryImage} 
                            title={title}
                            artistDisplayName={artistDisplayName}
                            objectDate={objectDate}
                        />
                    }
                )
            }
        </div>
    )
}  