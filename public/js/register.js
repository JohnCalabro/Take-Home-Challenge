

// const email = document.querySelector('#em').value;
// const firstName = document.querySelector('#fn').value;
// const lastName = document.querySelector('#ln').value;
// const state = document.querySelector('#st').value;

// console.log(email)
const form = document.querySelector('.registerForm');
console.log(form)
// email" id="em" />
//     First Name: <input class="allInputs"type="text" name="firstName" id="fn" />
//     Last Name: <input class="allInputs"type="text" name="lastName" id="ln" />
//     State: <input class="allInputs" type="text" name="state" id="st"/>
//     <button type="submit">Submit</button>

form.addEventListener('submit', (e) => {
    e.preventDefault();


const email = document.querySelector('#em').value;
const firstName = document.querySelector('#fn').value;
const lastName = document.querySelector('#ln').value;
const state = document.querySelector('#st').value;

    const formData = {
    email,
    firstName,
    lastName,
    state
}

console.log(formData)

fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

})



  





