


const editPostHandler = async (event) => {
    event.preventDefault()
    const id = document.querySelector('.edit-post-title').id
    
    console.log(id)
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