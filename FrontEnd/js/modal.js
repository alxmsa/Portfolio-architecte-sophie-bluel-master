async function modal(){
    const reponse = await fetch('http://localhost:5678/api/works');
    const projets = await reponse.json();

    for(let i = 0; i < projets.length; i ++){
        const figure = projets[i];
        // Récupération de l'élément du DOM qui accueillera les fiches dans la modale
        const sectionProjets = document.querySelector(".modal__body");
        // Création d'une balise dédiée à un projet de l'architecte
        const projetsElement = document.createElement("article");
        // Création des balises
        const suppGallery = document.createElement("button");
        suppGallery.innerHTML = '<i class="fa-solid fa-trash"></i>';
        const imageElement = document.createElement("img");
        imageElement.src = figure.imageUrl;
        
        sectionProjets.appendChild(projetsElement);
        projetsElement.appendChild(suppGallery);
        projetsElement.appendChild(imageElement);
        
    }
}

modal();

function openModal() {
    const openModal = (document.querySelector(".overlay").style.display =
      "block");
    const openModal2 = (document.querySelector(".modal").style.display =
      "block");
  }
  function closeModal() {
    const closeModal2 = (document.querySelector(".modal").style.display =
      "none");
  }
  function closeOverlay() {
    const closeOverlay = (document.querySelector(".overlay").style.display =
      "none");
  }
  function ajoutPhoto() {
    const openAjoutPhoto = (document.querySelector(
      ".modal__ajoutPhoto"
    ).style.display = "block");
    const openOverlay = (document.querySelector(".overlay").style.display =
      "block");
  }
  function closeAjoutPhoto() {
    const closeAjoutPhoto = (document.querySelector(
      ".modal__ajoutPhoto"
    ).style.display = "none");
  }

