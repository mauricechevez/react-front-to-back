// Import the Feedback Item
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback}) {
// If no feedback, display something else
    if(!feedback || feedback.length === 0){
        return <p>No Feedback yet</p>
    }
    return (
    <div className="feedback-list">
        {feedback.map((item)=>(
            <FeedbackItem key={item.id} item={item}/>
        ))}
    </div>
    )
}

export default FeedbackList