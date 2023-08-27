const animalFormbutton = document.getElementById("button");

animalFormbutton.addEventListener("click", async()=>{
const animalTitle = document.getElementById('Animal-title').value
const animalDescription = document.getElementById('Animal-description').value
const animalRation = document.getElementById('Animal-ration').value
const animalImage = document.getElementById('Animal-image').value


const animalio = {
    Title: animalTitle,
    Description: animalDescription,
    Ration : animalRation,
    img_url: animalImage
}

try{

const response = await fetch('https://64e5f51209e64530d17f5203.mockapi.io/Animals',{
    method: 'POST',
    headers:{
        Accept: 'aplication/json',
        'Content-type': 'application/json'
    },
    body: JSON.stringify(animalio)

})
const data = await response.json()
if(data){
    const messageWrapper = document.getElementById("message")
    messageWrapper.innerHTML = 'Animal was added succsesfully'

    setTimeout(()=>(
         window.location.replace('./index.html')
    ),3000)
}
 } catch (err){
    const messageWrapper = document.getElementById("message")
    messageWrapper.innerHTML = 'Animal was not added, error happened'
    console.log("err", err)
 }
})


