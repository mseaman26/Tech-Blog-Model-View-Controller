


const editPostHandler = async (event) => {
    event.preventDefault()

    document.querySelector('.edit-post-title').value = "hello"
}

  document
  .querySelector('#edit-post-submit')
  .addEventListener('click', editPostHandler);

  const init = () => {
    const title = document.querySelector('.edit-post-submit').id
    console.log(title)
    // const currentPost = Post.findOne({
    //     where: {
    //         id: re
    //     }
    // })
    document.querySelector('#edit-post-title').value = "hello"
  }

  init()