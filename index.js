let dog_image = document.getElementById("dog-image")
const popup = document.getElementById("open")
const close_btn = document.getElementById("close")

const image_url = `https://dog.ceo/api/breeds/image/random`

//Fetch Dog Image
fetch(image_url).then((response) => response.json())
    .then((data) => {
        let img = data['message']
        dog_image.src = img
    })

// Open PopUp to Display the Results
const openPopup = () => {
    popup.classList.add('open-popup')
}

// Open PopUp
const closePopup = () => {
    popup.classList.remove('open-popup')
}

predict_btn.addEventListener('click', openPopup)
close_btn.addEventListener('click', closePopup)