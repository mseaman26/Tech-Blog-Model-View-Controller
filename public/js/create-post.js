
const createPostHandler = async (event) => {
    event.preventDefault()
    console.log("create post submit button")
    const title = document.querySelector('#create-post-title').value.trim();
    const body = document.querySelector('#create-post-body').value.trim();

    if(title && body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title, body}),
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.ok) {
            document.location.replace('/')
        } else {
            alert('failed to create post')
        }
    }
}




  document
  .querySelector('#create-post-submit')
  .addEventListener('click', createPostHandler);


  //create-post-title
  //create-post-body
  //create-post-submit
  //public/js/create-post.js