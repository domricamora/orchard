
 // Modal functionality - handles image clicks to open modal with @3x version
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const close = document.getElementsByClassName('close')[0];

  document.querySelectorAll('img.galleryImg').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      const filename = img.id; // Use the img element's ID to get the filename
      modalImg.src = '../src/images/' + filename + '@3x.png';      
      modalImg.alt = img.alt; // ensure accessible alt in modal
      modal.focus();
    });
  });

  close.onclick = () => {
    modal.style.display = 'none';
  };

  modal.onclick = (e) => {
    if (e.target === modal) modal.style.display = 'none';
  };

  // Allow closing modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });

  // Card Links output link to console on click
  document.querySelectorAll('a.cardLink').forEach(a => {
    a.addEventListener('click', () => {
      const elementLink = a.id;  
      event.preventDefault();  
      console.log("Anchor Element Id is " +elementLink);
    });
  });