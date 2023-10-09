function Card({children}) {
  // NOTE: you're passing in the child elements of the Card component from the parent component (FeedbackItem)
    return (
    <div className="card">{children}</div>
  )
}

export default Card