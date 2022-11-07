const createPostHandler = async (event) => {
    event.preventDefault();
    console.log("create post button")
    const title = document.querySelector('#create-post-title').value.trim();
    const body = document.querySelector('#create-post-body').value.trim();

    if(postTitle && postBody){
        const response = await fetch('api/posts',{
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace('/dashboard')
        }else{
            alert('Failed to create post')
        }
    }

}






  document
  .querySelector('#create-post-submit')
  .addEventListener('submit', createPostHandler);