
const deletePostHandler = async (event) => {
    event.preventDefault()
    const id = document.querySelector('.delete-post-button').id
    console.log(id)
  
  }

  document
  .querySelector('.delete-post-button')
  .addEventListener('click', deletePostHandler);