async function init(){
    const sectionProjets = document.querySelector(".fiches");
    sectionProjets.innerHTML = "";
    
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

async function btnObjets (){
    const reponse = await fetch('http://localhost:5678/api/works');
    const projets = await reponse.json();

    // Ajout du listener pour trier les projets par objets
    const boutonObjets = document.querySelector(".btn-objets");
    
    // Création d'évènements pour les boutons
    boutonObjets.addEventListener("click", function() {
        const genererObjets = projets.filter(function(projet){
            return projet.categoryId === 1;
        });
        console.log(genererObjets);
    // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
        document.querySelector(".fiches").innerHTML = "";
        for(let i = 0; i < genererObjets.length; i ++){
            const figure = genererObjets[i];
            // Récupération de l'élément du DOM qui accueillera les fiches
            const genererProjets = document.querySelector(".fiches");
            // Création d'une balise dédiée à un projet de l'architecte
            const projetsObjets = document.createElement("article");
            // Création des balises
            const imageElement = document.createElement("img");
            imageElement.src = figure.imageUrl;
            const titreElement = document.createElement("figcaption");
            titreElement.innerText = figure.title;
            
            genererProjets.appendChild(projetsObjets);
            projetsObjets.appendChild(imageElement);
            projetsObjets.appendChild(titreElement);
        }
    });
}

async function btnTous(){
    const reponse = await fetch('http://localhost:5678/api/works');
    const projets = await reponse.json();

    const boutonTous = document.querySelector('.btn-out');

    boutonTous.addEventListener("click", function(){
        document.querySelector('.fiches').innerHTML = "";
        init();
    });
}

async function btnAppart (){
    const reponse = await fetch('http://localhost:5678/api/works');
    const projets = await reponse.json();

    // Ajout du listener pour trier les projets par objets
    const boutonAppartement = document.querySelector(".btn-appartement");
    
    // Création d'évènements pour les boutons
    boutonAppartement.addEventListener("click", function() {
        const genererboutonAppartement = projets.filter(function(projet){
            return projet.categoryId === 2;
        });
    // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
        document.querySelector(".fiches").innerHTML = "";
        for(let i = 0; i < genererboutonAppartement.length; i ++){
            const figure = genererboutonAppartement[i];
            // Récupération de l'élément du DOM qui accueillera les fiches
            const genererProjets = document.querySelector(".fiches");
            // Création d'une balise dédiée à un projet de l'architecte
            const projetsObjets = document.createElement("article");
            // Création des balises
            const imageElement = document.createElement("img");
            imageElement.src = figure.imageUrl;
            const titreElement = document.createElement("figcaption");
            titreElement.innerText = figure.title;
            
            genererProjets.appendChild(projetsObjets);
            projetsObjets.appendChild(imageElement);
            projetsObjets.appendChild(titreElement);
        }  
    });
}

async function btnResto(){
    const reponse = await fetch('http://localhost:5678/api/works');
    const projets = await reponse.json();

    const boutonResto = document.querySelector('.btn-resto');

    boutonResto.addEventListener("click", function(){
        const genererBtnResto = projets.filter(function(projet){
            return projet.categoryId === 3;
        });
            // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
        document.querySelector(".fiches").innerHTML = "";
        for(let i = 0; i < genererBtnResto.length; i ++){
            const figure = genererBtnResto[i];
            // Récupération de l'élément du DOM qui accueillera les fiches
            const genererProjets = document.querySelector(".fiches");
            // Création d'une balise dédiée à un projet de l'architecte
            const projetsObjets = document.createElement("article");
            // Création des balises
            const imageElement = document.createElement("img");
            imageElement.src = figure.imageUrl;
            const titreElement = document.createElement("figcaption");
            titreElement.innerText = figure.title;
            
            genererProjets.appendChild(projetsObjets);
            projetsObjets.appendChild(imageElement);
            projetsObjets.appendChild(titreElement);
        }  
        
    });
}


// Premier affichage de la page
init();
btnTous();
btnObjets();
btnAppart();
btnResto();