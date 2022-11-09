const deletePostHandler = async (event) => {
    event.preventDefault()
    const id = document.querySelector('.delete-post-button').id
    console.log(id)
    const deletePost = () => fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    deletePost()


}


  document
  .querySelector('.delete-post-button')
  .addEventListener('click', deletePostHandler);