
const CommentCard = (props) => {
  console.log(props)
  return (
    <>
    <div className='card '>
      <div className='PostCard'>
        <div className="card-body">
          <p className="card-text">{props.comment.body}</p>
          <p>Created: {props.comment.created_at}</p>
        </div>
      </div>
    </div>
    <br />
    </>
  );
}


export default CommentCard;
