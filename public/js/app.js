fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => {
    // Do something with the response data
    console.log(data);
    const ul = document.querySelector('.userList');
    console.log(ul)
    data.map((user) => {
        let li = document.createElement('li');
        let fullName = user.firstName + ' ' + user.lastName;
        li.textContent = fullName;
        ul.append(li)
    })
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
  });

 