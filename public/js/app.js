console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
// response.json().then((data)=>{
//       console.log(data)
//     })
// })



const weatherForm = document.querySelector('form') // use to take a html name and use it to make modification
                                                //like we do in css
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e)=>{
    const result = search.value

    e.preventDefault()

    messageOne.textContent = 'Loding...'
    messageTwo.textContent = ''
    
fetch('http://localhost:3000/weather?address='+result).then((response)=>{
    response.json().then((data)=>{ 
        if(data.error){
            return messageOne.textContent = data.error
        }
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
       })
    })
})
 
