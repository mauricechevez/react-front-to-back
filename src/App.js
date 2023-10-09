// This is our main App components
import {useState} from 'react';
import Header from "./components/Header";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    // you MUST have 1 parent element in order to display more than one element on the page
    <>
    <Header />
    <div className="container">
      <FeedbackList feedback={feedback}/>
    </div>

    </>
  );
}

export default App;