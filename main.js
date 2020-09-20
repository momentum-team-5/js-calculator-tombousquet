let str = ''
let buttonDiv = document.querySelector('.container')
buttonDiv.addEventListener('click' , function (event) {
    console.log('the box you clicked was ', event.target.id)
let messageDiv = document.querySelector('.message')
let messagePara = document.createElement('p')
messagePara.classList.add('msg-p')
messagePara.innerText = str += event.target.id
messageDiv.appendChild(messagePara)


if (event.target === '.number') {
        innerText = (str += event.target.id)
        console.log(str)
    }
if (event.target === '.operator') {
        str += 'event.target.id'
        console.log(str)
} 
if (event.target.id === '.equals') {
    
}

})  

//display shows the button click (besides C/=,
// adds to string in display, eval function) if clr str is set to 0.
