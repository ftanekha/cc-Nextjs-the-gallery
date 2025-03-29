import { Artwork, artData } from '../data/local-art-data'
import { UserComment, CommentData, commentData } from '../data/local-comment-data'

//In a production app, data would be fetched from a server-side database or an API endpoint.

export const fetchArtData = async (): Promise<Artwork[]> => {
  // There is an artificial timer here to simulate latency.
  await new Promise((resolve) => setTimeout(resolve, 100))
  return artData
}
 
export const fetchCommentData = async (id: number): Promise<UserComment[]> => {  
  // There is an artificial timer here to simulate latency.  
  await new Promise((resolve) => setTimeout(resolve, 100))
  return commentData[id] || [] 
}

export function formatTime(timestamp: number){
  //format time info
  const time = new Date(timestamp);
  const date = time.toDateString()
  const hours = time.toLocaleTimeString()

  return `${date}  => ${hours}`
}

export type { Artwork, UserComment, CommentData }