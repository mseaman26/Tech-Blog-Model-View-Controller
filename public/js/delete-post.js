const deletePostHandler = async (event) => {
    console.log(event.target)
    event.preventDefault()
    const id = event.target.id
    console.log(id)
    const deletePost = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
 
    // deletePost()

    // document.location.reload()

    setTimeout(() => {
        document.location.reload()
    }, 100);
    document.location.reload()
}


//   document
//   .querySelector('.delete-post-button')
//   .addEventListener('click', deletePostHandler);

document.addEventListener('click', function (e) {
    // But only alert for elements that have an alert-button class
    if (e.target.classList.contains('delete-post-button')) {
      deletePostHandler(e);
    }
  });