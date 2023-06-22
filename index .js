function renderOneAnimal(animal){
    const card=document.createElement("div")
    card.className="box";
    card.innerHTML=`
    <h3 class="heading">${animal.name}</h3>
    <img src="${animal.imageUrl}" alt="${animal.name}"/>
    <p>${animal.description}</p>
    <p>${animal.donations}</p>
    <button class="btn">Read More</button>
    `
    console.log(card)
    document.querySelector(".box-container").appendChild(card)
}
const getData = () =>{
   fetch("http://localhost:3000/animals")
   .then((res) =>{
    res.json()
    .then(animals => animals.forEach(animal => renderOneAnimal(animal)))
   })
}




function initialize(){
   /* animals.forEach((animal)=>{
        renderOneAnimal(animal)
    })*/
    getData(); 
    console.log("after data has been fetched and un packed")
}

initialize();