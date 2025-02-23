let form = document.getElementById('signup');

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let country = document.getElementById('country').value
    let phone = document.getElementById('phone').value

    let password = document.getElementById('password').value
    
    let data = {
        name : name,
        email : email,
        country : country,
        phone : phone ,
        password : password

    }
    console.log(data)
})

let signin = document.getElementById('signin');

signin.addEventListener('submit',(success)=>{
    success.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    
    let signindata = {
        name : name,
        email : email,
        password : password

    }
    console.log(signindata)
})