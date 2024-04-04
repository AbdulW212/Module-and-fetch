// Fetch Request -> JSON placeholder
// https://jsonplaceholder.typicode.com/
export async function getComments() {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        json.forEach((element,index) => {
        let comma = document.querySelector(".commentsContainer");    
        let comments = document.createElement('div')
        comments.setAttribute('class', 'comment')
        comments.innerHTML = `${index + 1}: ${element.name}- ${element.body}`;
        comma.append(comments)
        });
      });
  }

  