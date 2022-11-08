const selectPostHandler = async (event) => {
    event.preventDefault()
    console.log("click")
    
   
}





const doc = document.querySelectorAll('body')
doc.forEach((el) => {el.addEventListener("click", selectPostHandler)})

