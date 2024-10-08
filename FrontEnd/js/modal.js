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
      suppGallery.addEventListener('click', () => supprimerProjet(figure.id, projetsElement));

      const imageElement = document.createElement("img");
      imageElement.src = figure.imageUrl;
      
      sectionProjets.appendChild(projetsElement);
      projetsElement.appendChild(suppGallery);
      projetsElement.appendChild(imageElement);
      
  }
}
async function supprimerProjet(projetId, projetsElement) {
const storedUser = localStorage.getItem('user');
let token;

if (storedUser) {
  const userObject = JSON.parse(storedUser);
  token = userObject.token;
} else {
  console.error("No user token found in localStorage.");
  return;
}

const confirmation = confirm("Voulez-vous vraiment supprimer ce projet ?");
if (confirmation) {
  try {
    const response = await fetch(`http://localhost:5678/api/works/${projetId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {

      projetsElement.remove();  
      alert("Projet supprimé avec succès !");

      await init();
    } else {
      alert("Erreur lors de la suppression du projet.");
    }
  } catch (error) {
    console.error("Erreur:", error);
    alert("Erreur lors de la suppression du projet.");
  }
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

function resetForm(){
document.querySelector("#addNewForm").reset();
}

async function ajouterProjet(event) {
event.preventDefault();

const storedUser = localStorage.getItem('user');
let token;

// On récupère le token
if (storedUser) {
  const userObject = JSON.parse(storedUser);
  token = userObject.token;
} else {
  console.error("Pas de token trouvé");
  return;
}


const formEl = document.querySelector("#addNewForm");
const formData = new FormData(formEl);


const checkImage = document.querySelector('#image');  

if (checkImage.files.length === 0) {
  alert("Erreur, un fichier n'a pas été sélectionné !");
  return;
}

try {
  const response = await fetch('http://localhost:5678/api/works', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  });

  if (response.ok) {
    const newProject = await response.json();
    alert('Succès, votre projet a bien été enregistré !');
    ajouterProjetDOM(newProject); 
    resetForm();  
  } else {
    alert("Erreur lors de l'ajout du projet.");
  }
} catch (error) {
  console.error("Erreur lors de l'ajout du projet:", error);
}
}


function ajouterProjetDOM(projet) {
const sectionProjets = document.querySelector(".fiches");

const projetsElement = document.createElement("article");
const imageElement = document.createElement("img");
imageElement.src = projet.imageUrl;

const titreElement = document.createElement("figcaption");
titreElement.innerText = projet.title;

projetsElement.appendChild(imageElement);
projetsElement.appendChild(titreElement);

sectionProjets.appendChild(projetsElement);
}
document.querySelector("#addNewForm").addEventListener('submit', ajouterProjet);

