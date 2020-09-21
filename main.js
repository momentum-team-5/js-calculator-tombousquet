let input = ''



let buttonDiv = document.querySelector('.container')
buttonDiv.addEventListener('click' , function (event) {

if (event.target = '.number') {
let displayDiv = document.querySelector('.message')
let displayPara = document.createElement('p')
displayPara.classList.add('.result')
   input += event.target.id
   displayDiv.appendChild(displayPara) 
   displayPara.innerText = input
   displayDiv.replaceChild()
   console.log('so far we have ' + input)  

  
}
if (event.target = '.operator') {
    
    }
if (event.target = '.decimal') {
    
    }
if (event.target = 'clear') {
    
}
if (event.target ='.equals') {
    
    
}
}

)
