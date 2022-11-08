

const addCommentHandler = async (event) => {
    event.preventDefault()

    const commentBody = document.querySelector('#add-comment-body').value.trim();
    if(commentBody){
        const response = fetch ('/api/comments', {
            method: "POST",
            body: JSON.stringify({
                body: commentBody,
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.ok){
            document.location.reload()
        }
    }
}

  document
  .querySelector('#add-comment-submit')
  .addEventListener('click', addCommentHandler);