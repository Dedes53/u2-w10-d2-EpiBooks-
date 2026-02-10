import { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = (props) => {

  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    setIsLoading(true)

    fetch('https://striveschool-api.herokuapp.com/api/comments/' + props.asin, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTg5ZjQwNjI4NzNjYjAwMTUwZjAyOGUiLCJpYXQiOjE3NzA3Mjg4OTAsImV4cCI6MTc3MTkzODQ5MH0.UQ_2FPPUSwTlJvbw3eYi7VSPpgpsIZj4EFNJO5yhyeA"
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Qualcosa è andato storto')
        }
      })
      .then((data) => {
        setComments(data)
        setIsLoading(false)
        setIsError(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      })
  }, [props.asin]) // ← Solo props.asin nelle dipendenze

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )

}

export default CommentArea