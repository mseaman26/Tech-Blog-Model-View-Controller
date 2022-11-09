
const editPostHandler = async (event) => {
    event.preventDefault()
    const id = document.querySelector('.edit-post-title').id
    const postToUpdate = await fetch(`/api/posts/${id}`, {
      method: 'GET'
    })
    const title = document.querySelector('.edit-post-title').value.trim()
    const body = document.querySelector('#edit-post-body').value.trim()
    const updatedPost = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({title: title, body: body}),
      headers: { 'Content-Type': 'application/json' },
    })

    console.log(updatedPost)
}



  // const init = () => {
  //   const title = document.querySelector('.edit-post-submit').id
  //   console.log(title)
  //   // const currentPost = Post.findOne({
  //   //     where: {
  //   //         id: re
  //   //     }
  //   // })
  //   document.querySelector('#edit-post-title').value = "hello"
  // }

  // init()
  document
  .querySelector('#edit-post-submit')
  .addEventListener('click', editPostHandler);