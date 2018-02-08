window.addEventListener('load', () => {
  let collageSection = document.getElementById('collage-section');
  let photos = document.querySelectorAll('#images-container img');
  // console.log(images);

  const handleDragStart = (event) => {
    // if(event.target.getAttribute('draggable') )
    console.log(event.target);
    
  }

  const allowDrop = (event) => {
    event.preventDefault();
  }

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.target.id === 'collage-section') {

    }
  }

  document.addEventListener('dragstart', handleDragStart, false);
  document.addEventListener('dragover', allowDrop);
  document.addEventListener('drop', handleDrop);
});