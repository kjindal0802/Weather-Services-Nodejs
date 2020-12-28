const weatherForm = document.querySelector('form')
const searchValue = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchValue.value;
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            messageOne.textContent = "Result : "
            if (data.error)
                messageTwo.textContent = data.error;
            else
                messageTwo.textContent = "The weather in " + data.location + " is " + data.forecast
        })
    })
})