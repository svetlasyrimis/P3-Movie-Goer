import React from 'react'
import Layout from '../components/shared/Layout'
import CommentCreate from '.././screens/CommentCreate'
import Comments from './Comments'
import Comment from './Comment'


import ItemCreate from './ItemCreate'
import Items from './Items'





const pic = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg'


const MovieDetail = (props) => {
  const { movieData, index, user, addComment, comments } = props

  console.log('movie detail props', props)

  console.log('addComment', addComment)

  const movie = movieData.find( movie => movie.id == props.match.params.id)

  return (
    <Layout className="Movie" key={index}>
          {/* need to figure out a way to add the correct "intro" portion to the img call, so for now I wouldnt worry about actually getting the image */}
          <img src={pic} />
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
      <button>Favorite</button>
      <button>Go Back to Explore</button>
      <div className='comment-container'>
        <CommentCreate user={user} movie_id={props.match.params.id} addComment={addComment} comments={comments} />
        {/* <Comment /> */}
        <Comments user={user} omdb_movie_id={props.match.params.id} comments={comments}/>
      </div>
    </Layout>
  )
}

export default MovieDetail