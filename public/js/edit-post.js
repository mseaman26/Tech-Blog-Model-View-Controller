const editPostHandler = async (event) => {
    event.preventDefault()

    document.querySelector('#edit-post-title').value = "hello"
}

  document
  .querySelector('#edit-post-submit')
  .addEventListener('click', editPostHandler);