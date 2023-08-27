const animalWrapper = document.getElementById('Animals')

const getAllAnimals = async()=>{
const response = await fetch('https://64e5f51209e64530d17f5203.mockapi.io/Animals');
const animals = await response.json();
animals.forEach(animal=>{
const wrapper = document.createElement("a")
wrapper.setAttribute('class', 'animals-wrapper')
wrapper.href = './about.html'
wrapper.addEventListener('click', ()=>{
    localStorage.setItem('animalId',animal.id)
})
const title = document.createElement("h1")
title.innerHTML = animal.Title
const description = document.createElement('p')
description.innerHTML = animal.Description
const image = document.createElement('img')
image.setAttribute('class', 'animals-image')
image.src=animal.img_url

wrapper.append(image)
wrapper.append(title)
wrapper.append(description)

animalWrapper.append(wrapper)
})
}

getAllAnimals();