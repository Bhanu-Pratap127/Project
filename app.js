const email = document.getElementById("email")
const emailerror = document.getElementById("email-err")

email.addEventListener("input",()=>{
    const emailValue = email.value;

    if(emailValue.length>3 && emailValue.includes('@') && emailValue.includes('.'))
    {
        emailerror.textContent=""
    }
    else
    {
        emailerror.textContent="Make sure email is more than 3 characters and has @ and a ."
        emailerror.style.color="red"
    }
})

const password = document.getElementById("pass")
const passworderror = document.getElementById("pass-err")
const passwordsuccess = document.getElementById("pass-success")

password.addEventListener("input",()=>{
    const passwordValue = password.value

    if(passwordValue.length>=8)
    {
        passworderror.textContent=""
        passwordsuccess.style.display="block"
        passwordsuccess.style.color="green"
    }
    else 
    {
        
        passworderror.textContent="Make sure password is more than 8 characters."
        passworderror.style.color="red"
        passwordsuccess.style.display="none"
    }
})


const submit = document.getElementById("submit")

submit.addEventListener("click",()=>{
    if(email && password)
    {
        const confirm = window.confirm("Confirm to submit")

        if(confirm){
            alert("Successfull SignUp!")
        }
    }

    else{
        document.getElementById("validation").requestFullscreen();
    }
})