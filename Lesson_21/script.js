// https://jsonplaceholder.typicode.com/guide/

//CRUD

// C - Create - method POST
// R - Read - method GET
// U - Update - methods (PUT & PATCH)
// D - Delete - method DELETE


// POST
// const options = {
//     method: 'POST',
//     body: JSON.stringify({
//         name: 'Artem',
//         email: 'test@gmail.com',
//         password: 'qwerty111'
//     }),
//     headres: {
//         "Content-type": 'application/json',
//         Authorization: 'Bearer 18aEQHs2_l3sCMmPg1yk'
//     }
// }
// fetch('someURL',options)

// GET

// const options = {
//     headers: {
//         Authorization: 'Bearer 18aEQHs2_l3sCMmPg1yk'
//     }
// }
// const BASE_URL = 'https://jsonplaceholder.typicode.com'
// fetch(`${BASE_URL}/posts/1`, options);


// UPDATE - PATCH
// const user = {
//     name: 'Den',
//     email: 'test@gmail.com',
//     password: 'qwerty111',
//     city: 'Lviv'
// }

// const options = {
//     method: 'PATCH',
//     body: JSON.stringify({
//         name: 'Den',
//         city: ''
//     }),
//     headers: {
//         "Content-type": 'application/json'
//     }
// }

// fetch('someURL/1', options)

// PUT

// const user = {
//     id: 1,
//     name: 'Den',
//     email: 'test@gmail.com',
//     password: 'qwerty111',
//     city: 'Lviv'
// }

// const options = {
//     method: 'PUT',
//     body: JSON.stringify({
//         name: 'Artem',
//         email: 'test@gmail.com',
//         password: 'qwerty111',
//     }),
//     headers: {
//         "Content-type": 'application/json'
//     }
// }

// fetch('someURL/1', options)


// DELETE
// const options = {
//     method: 'DELETE'
// }
// fetch('someURL/1', options)



// POST
// const options = {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'Test Group 81',
//         body: 'CRUD lesson',
//         userId: 81
//     }),
//     headers: {
//         "Content-type": "application/json"
//     }
// }
// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText);
//         }

//         return resp.json();
//     })
//     .then(data => console.log(data))



// PUT

// const options = {
//     method: 'PUT',
//     body: JSON.stringify({
//         body: 'Test PUT method'
//     }),
//     headers: {
//         "Content-type": "application/json"
//     }
// };


// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//     .then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText);
//         }
//         return resp.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// PATCH
// const options = {
//     method: 'PATCH',
//     body: JSON.stringify({
//         body: 'Test PATCH method',
//         title: 'Group 81'
//     }),
//     headers: {
//         "Content-type": "application/json"
//     }
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//     .then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText);
//         }
//         return resp.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// DELETE
// const options = {
//     method: 'DELETE',
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//     .then(resp => {
//         if (!resp.ok) {
//             throw new Error(resp.statusText);
//         }
//         return resp.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// TASK QUESTION FORM


const form = document.querySelector('.js-question');
const getQuestions = document.querySelector('.js-get-all-question');
form.addEventListener('submit', handlerForm);
getQuestions.addEventListener('click', handlerGetQuestions)


function handlerForm(evt) {
    evt.preventDefault();
    const { comment, email, telNumber, userName, password } = evt.currentTarget.elements;
    const data = {
        name: userName.value,
        phone: telNumber.value,
        email: email.value,
        password: password.value,
        comment: comment.value
    }

    serviceQuestion(data);
}

function handlerGetQuestions() {
    serviceGetQuestion()
}



function serviceQuestion(obj) {
    const options = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json'
        }
    }

    fetch('http://127.0.0.1:3000/api/question', options)
        .then(resp => {
            console.log(resp)
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }

            return resp.json()
        })
        .then(data => console.log(data))
}


function serviceGetQuestion() {
    fetch('http://127.0.0.1:3000/api/getAll')
        .then(resp => {
            console.log(resp);
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }

            return resp.json()
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
}



// дадати всі файли 
// git add .
// зробити комміт
// git commit -m "SOME COMMIT"
// запушити файли на репо
// git push