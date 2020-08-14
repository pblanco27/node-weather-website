const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')
const img = document.querySelector('#img1')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const address = search.value;
    const url = '/weather?address=' + address

    msg1.textContent = "Loading..."
    msg2.textContent = ""
    img.setAttribute('src', '')

    fetch(url).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                return msg1.textContent = data.error
            }
            msg1.textContent = data.location
            msg2.textContent = data.forecast.forecastInfo
            img.setAttribute('src', data.forecast.forecastImgUrl)
        })
    })
})