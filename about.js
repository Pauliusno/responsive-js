const animalId = localStorage.getItem('animalId')
console.log (animalId)


const addAnimalToScreen = (animal)=>{
    const title = document.getElementById('title')
    title.innerHTML = animal.Title
    const description = document.getElementById('description')
    description.innerHTML= animal.Description
    const ration = document.getElementById('ration')
    ration.innerHTML = animal.Ration
    const image = document.getElementById('animal-image')
    image.src= animal.img_url;
}


const getoneAnimal = async()=>{
    const response = await fetch('https://64e5f51209e64530d17f5203.mockapi.io/Animals/'+animalId);
    const animal = await response.json();
    console.log (animal)
    addAnimalToScreen (animal)
}

getoneAnimal()

const deleteButton = document.getElementById('delete-button')
deleteButton.addEventListener('click',async()=>{
    try{
    const response = await fetch('https://64e5f51209e64530d17f5203.mockapi.io/Animals/'+ animalId,{
        method: 'DELETE',
       
    
    })
    const data = await response.json()
    if(data){
        const infomsg = document.getElementById('infomsg')
        infomsg.innerHTML = 'animal was deleted!!!!'
        setTimeout(()=>{
            window.location.replace("./index.html")
        },3000)
    }
} catch(err){
    const infomsg = document.getElementById('infomsg')
        infomsg.innerHTML = 'animal was not deleted!!!!'
}
})
