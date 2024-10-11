function getAuthorization() {
    const token = JSON.parse(localStorage.getItem('user')).token;
    return 'Bearer' + token;
  }
  

  function isConnected() {
    const connecting = getAuthorization() ? true : false;
    return connecting;
  }

  document.getElementById('image').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const previewImage = document.getElementById('previewImage');
    const close = document.querySelector(".modal__ajoutPhoto__body__div");
  
  
    previewImage.innerHTML = '';
  
    
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.alt = 'Aperçu de l\'image';
          img.style.maxWidth = '150px';
          img.style.maxHeight = '150px';
          previewImage.appendChild(img);
        };
        reader.readAsDataURL(file);
     if (file){
      close.style.display="none";
     }
    
  });
  