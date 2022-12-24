// // JavaScript file
// document.querySelector('#upload-form').addEventListener('submit', event => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     fetch('http://localhost:5004/upload-image', {
//       method: 'POST',
//       body: formData
//     })
//       .then(response => response.blob())
//       .then(blob => {
//         const imageUrl = URL.createObjectURL(blob);
//         const imageElement = document.createElement('img');
//         imageElement.src = imageUrl;
//         document.querySelector('#image-container').appendChild(imageElement);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   });
  

document.querySelector('#upload-form').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const serverUrl = document.querySelector('#server-url').value;
    fetch(serverUrl + '/upload-image', {
      method: 'POST',
      body: formData
    })
      .then(response => response.blob())
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        document.querySelector('#image-container').appendChild(imageElement);
      })
      .catch(error => {
        console.error(error);
      });
  });
  