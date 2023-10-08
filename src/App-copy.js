// Just a backup for notes

function App() {
  const title = "Blog Post";
  const body = "This is my blog post! 😀";
  const comments = [
    { id: 1, text: "Post #1" },
    { id: 2, text: "Post #2" },
    { id: 3, text: "Post #3" },
    { id: 4, text: "Post #4" },
  ];

  const loading = false;
  const showComments = true;

// Could also put the JSX in a variable
 const commentBlock = (
    <div className="comments">
          <h3>Comments: {comments.length}</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index} id={comment.id}>
                {comment.text}
              </li>
            ))}
          </ul>
        </div>
 )

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    // you MUST have 1 parent element in order to display more than one element on the page
    <div className="container">
      {/* <h1>My App!</h1> */}
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      <hr />
      {showComments && commentBlock}
    </div>
  );
}

export default App;

/* What is React doing under the hood here?

I think if you do it this way you have to import React

import 'React' from 'react';

function App(){
    return React.createElement(
        'div',{className:'container'},
        React.createElement('h1',{},'My App!')
    )
}
*/
