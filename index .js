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

function initialize(){
    animals.forEach((animal)=>{
        renderOneAnimal(animal)
    })
}

initialize();