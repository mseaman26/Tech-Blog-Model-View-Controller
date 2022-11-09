
const createPostHandler = async (event) => {
    event.preventDefault()
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
        }
    }
}




  document
  .querySelector('#create-post-submit')
  .addEventListener('click', createPostHandler);

