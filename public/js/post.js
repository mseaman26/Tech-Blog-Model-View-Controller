

const addCommentHandler = async (event) => {
    event.preventDefault()

    const commentBody = document.querySelector('#add-comment-body').value.trim();

    if(commentBody){
        const response = await fetch ('/api/comments', {
            method: "POST",
            body: JSON.stringify({
                body: commentBody,
            }),
            headers: { 'Content-Type': 'application/json' },

        })
        if(response.ok){
            console.log("reload")
            document.location.reload()
        }
    }
}

  document
  .querySelector('#add-comment-submit')
  .addEventListener('click', addCommentHandler);