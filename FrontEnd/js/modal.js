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

// AJOUT DE PHOTOS
/* async function addWork(data) {
  const postAddWorkUrl = 'http://localhost:5678/api/works';

  const reponse = await fetch(postAddWorkUrl, {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: data
  });


  return reponse.json();
}; */

// ENVOI DU FORMULAIRE 
/* const submitButtonAjoutPhoto = document.querySelector('#submitForm'); */
const formEl = document.querySelector("#addNewForm");

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(formEl);
  console.log(formData.get('title'));
  console.log(formData.get('image'));
  console.log(formData.get('category'));
  const data = Object.fromEntries(formData);

 fetch(`http://localhost:5678/api/works`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getAuthorization()
      },
      body: JSON.stringify(data)
    });

})
/* 
submitButtonAjoutPhoto.addEventListener("click", function (event){
  event.preventDefault();
  const newProjet = {
    title : form.addTitle.value,
    category : form.addCategory.value,
  }
  const newProjetData = JSON.stringify(newProjet);

  fetch('http://localhost:5678/api/works', {
    method: "POST",
    headers: {
      'Authorization': getAuthorization()
    },
    body: newProjet
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

}) */


/* async function addFormSubmit(event){
  event.preventDefault();

  const addProjectForm = document.querySelector("#addNewForm");
  const addPhotoForm = document.querySelector('#addFile')

  if(!addProjectForm.checkValidity()){
    alert("Veuillez remplir tous les champs obligatoires.");
    return;
  }

  // Valeur formulaire
  const title = addProjectForm.querySelector("#addTitle").value;
  const category = addProjectForm.querySelector("#addCategory").value;
  const file = addPhotoForm.files[0];

  console.log(title, category, file);
  console.log('titre');

  const formData = new FormData();
  formData.append("title", title);
  formData.append("category", category);
  formData.append('image', file);

  // Confirmation de l'ajout d'image
  try {
    const response = await addWork(formData);

    console.log(response);
    const alert = document.getElementById('alert');
    alert.innerHTML = "Votre photo a été ajouté avec succès";
    alert.style.display = "block";
    setTimeout(function(){ alert.style.display = "none"; }, 5000);
  
  } catch (error){
    console.log("Erreur : ", error);
  }
};
const submitProjet = document.querySelector("#submitForm");
submitProjet.addEventListener("click", ()=>{
  closeModal();
  closeOverlay();
});

const addProjectForm = document.querySelector("#addNewForm");
addProjectForm.addEventListener("submit", function () {
  addFormSubmit();
});
 */
/* fetch("http://localhost:5678/api/works").then(response => {
 return response.json();
}).then((json) => {
  console.log(json);
}) */
