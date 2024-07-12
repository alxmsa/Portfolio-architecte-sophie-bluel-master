async function init(){
const reponse = await fetch('http://localhost:5678/api/works');
const projets = await reponse.json();

for(let i = 0; i < projets.length; i ++){
    const figure = projets[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionProjets = document.querySelector(".fiches");
    // Création d'une balise dédiée à un projet de l'architecte
    const projetsElement = document.createElement("article");
    // Création des balises
    const imageElement = document.createElement("img");
    imageElement.src = figure.imageUrl;
    const titreElement = document.createElement("figcaption");
    titreElement.innerText = figure.title;
    
    sectionProjets.appendChild(projetsElement);
    projetsElement.appendChild(imageElement);
    projetsElement.appendChild(titreElement);
}


}

init();