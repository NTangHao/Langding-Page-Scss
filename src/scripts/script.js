const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
    menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".nav__toggle")) {
        menu.classList.remove(activeClass);
    }
});


const pattern = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';
const text = document.querySelector('.text');
const text2 = document.querySelector('.text2');
const buttonPrimary = document.querySelector('.button--primary');
const buttonSecondary = document.querySelector('.button--secondary');

 function checkEmail(){
    const emailInput = document.querySelector('#email')
    if(emailInput.value.match(pattern) )
    {
    
        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
        text.innerHTML= "Send succes"
         text.style = 'margin-top: 15px;\n' +
            '    color: #86e7ad;\n' +
            '    font-size: 11px;'
        
    }
    else{
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
        text.innerHTML= "Please check your email";
          text.style = 'margin-top: 15px;\n' +
            '    color: red;\n' +
            '    font-size: 11px;'
    }
    if (emailInput.value ==="")
    {
        emailInput.classList.remove('valid');
        emailInput.classList.remove('invalid');
        text.innerHTML= "";
         
    }



}


function checkEmail2(){
    const emailInput = document.querySelector('#email2')
    if(emailInput.value.match(pattern) )
    {

        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
        text2.innerHTML= "Send succes"
        text2.style = 'margin-top: 15px;\n' +
            '    color: #86e7ad;\n' +
            '    font-size: 11px;'

    }
    else{
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
        text2.innerHTML= "Please check your email";
        text2.style = 'margin-top: 12px;\n' +
            '    color: red;\n' +
            '    font-size: 11px;'
    }
    if (emailInput.value ==="")
    {
        emailInput.classList.remove('valid');
        emailInput.classList.remove('invalid');
        text2.innerHTML= "";

    }



}
buttonPrimary.addEventListener('click',checkEmail)
buttonSecondary.addEventListener('click',checkEmail2)
