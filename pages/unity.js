function   helloWorld1(){
    alert("Thank you! Please check your email")
}
<div class="comments">
  <h2>Comments</h2>
  <div id="commentList"></div>
  <form id="commentForm">
    <textarea id="commentInput" placeholder="Write your comment here..." required></textarea>
    <button type="submit">Post Comment</button>
    <style>
      .comments {
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 10px;
}

#commentInput {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 5px;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
    </style>
   <script>
    document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('commentForm');
  const commentInput = document.getElementById('commentInput');
  const commentList = document.getElementById('commentList');

  commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the value of the comment input
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
      // Create a new comment element
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.textContent = commentText;

      // Append the new comment to the comment list
      commentList.appendChild(commentElement);

      // Clear the comment input
      commentInput.value = '';
    }
  });
});

   </script>
  </form>
</div>