async function init(){
    const sectionProjets = document.querySelector(".fiches");
    sectionProjets.innerHTML = "";
    
    const reponse = await fetch('http://localhost:5678/api/works');
    const projets = await reponse.json();

    for(let i = 0; i < projets.length; i ++){
        const figure = projets[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        /* const sectionProjets = document.querySelector(".fiches"); */
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

async function filterBtn(){
    const boutons = document.querySelector('#boutonFiltre');
    boutons.innerHTML = "";

    const reponse = await fetch('http://localhost:5678/api/categories');
    const btn = await reponse.json();

    const buttonTous = document.createElement('button');
        buttonTous.classList.add('btn-filter');
        buttonTous.innerText = "Tous";

    boutons.appendChild(buttonTous);

    buttonTous.addEventListener('click', () => btnEvent());

    btn.forEach(category => {
        const btnElement = document.createElement('button');
        btnElement.classList.add("btn-filter");
        btnElement.innerText = category.name;
        btnElement.dataset.categoryId = category.id;

        boutons.appendChild(btnElement);

        btnElement.addEventListener('click', () => btnEvent(category.id));
    });
}

async function btnEvent(categoryId = null){
    const reponse = await fetch('http://localhost:5678/api/works');
    const projets = await reponse.json();

   const filtreProjets = categoryId ? projets.filter(projet => projet.categoryId === categoryId) : projets;
   
   const fichesContainer = document.querySelector('.fiches');
   fichesContainer.innerHTML = "";

   filtreProjets.forEach(projet => {
    const article = document.createElement('article');
    const img = document.createElement('img');
    img.src = projet.imageUrl;
    const figcaption = document.createElement('figcaption');
    figcaption.innerText = projet.title;

    article.appendChild(img);
    article.appendChild(figcaption);
    fichesContainer.appendChild(article);

   });
}
// Premier affichage de la page
init();
filterBtn()
btnEvent();