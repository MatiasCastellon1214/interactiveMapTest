const footerContent = `
<div class="container-fluid fs-6 d-flex justify-content-around align-items-center">
  <p style="color: #ccc" class="mb-0">CEICAAL - FACULTAD DE CIENCIAS AGRARIAS - UNJu </p>
  <a href="https://www.instagram.com/ceicaal.unju/" target="_blank" class="me-4">
    <i class="fa-brands fa-instagram fa-2x" style="color: #ccc"></i>
  </a>  
</div>
`



const footerContainer = document.querySelector('#footer-section');

footerContainer.innerHTML += footerContent;