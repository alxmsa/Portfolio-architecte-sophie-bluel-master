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


  // on recup le token
  if (storedUser) {
    const userObject = JSON.parse(storedUser);
    token = userObject.token;
  } else {
    console.error("pas de token");
    return;
  }


  // on stock les données du formulaire avec new FormDATA la 
  const formEl = document.querySelector("#addNewForm");
  const formData = new FormData(formEl);


  // TODO verifier que les champs sont pas vide ici stp (À FAIRE)
  const select = document.querySelector("#selectOption0");
  const checkTitle = document.querySelector("#title");
  const checkImage = document.querySelector('#image');
  if (select.value ==="0" || checkTitle.value === "" || checkImage.value === ""){
    alert("Erreur, un des champs n'est pas complété !")
    /* const erreur = document.querySelector("#msg-error-category");
    erreur.style.display="block";  */
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
        alert('Succès, votre projet a bien été enregistrer !')
        resetForm();
        erreur.style.display='none';
        await modal(); 
        await init();

    }/*  else {
      alert("Erreur lors de l'ajout du projet.");
    } */
  } catch (error) {
    console.error("Erreur lors de l'ajout du projet:", error);
  }
}

document.querySelector("#addNewForm").addEventListener('submit', ajouterProjet);

// APERCU DE L'IMAGE
/* const uploadImageInput = document.querySelector("#image");
const uploadContent = document.querySelector(".modal__ajoutPhoto__body__div");
const projectUpload = document.querySelector('#previewImage');

uploadImageInput.addEventListener("change", function () {
  uploadImage();
});

function previewImage() {
  if(uploadImageInput.files && uploadImageInput.files[0]) {
    const reader = new FileReader();
    const image2 = new Image();
    const fileName = uploadImageInput.files[0].name;

    reader.onload = event => {
      image2.src = event.target.result;
      image2.alt = fileNAme.split(".")[0];
    };

    uploadContent.style.display='none';
    projectUpload.style.display='block';
    reader.readAsDataURL(uploadImageInput.files[0]);
    projectUpload.appendChild(image2);
  }
}
 */

