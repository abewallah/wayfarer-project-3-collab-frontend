import CommentCard from './CommentCard';

const CommentsList = (props) => {
  return (
    props.comments.slice(0).reverse().map((comment, i) => {
      return <CommentCard key={comment._id} comment={comment}/>
    })
  )
}

export default CommentsList;