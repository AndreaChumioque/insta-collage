const init = () => {
  const handleDragStart = (event) => {
    if (event.target.matches('img')) {
      event.dataTransfer.setData('text', event.target.getAttribute('src'));
    }
  };

  const allowDrop = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    return false;
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.target.classList.contains('collage')) {
      let imagePath = event.dataTransfer.getData('text');
      event.target.style.backgroundImage = `url(${imagePath})`;
    }
  };

  document.addEventListener('dragstart', handleDragStart, false);
  document.addEventListener('dragover', allowDrop, false);
  document.addEventListener('drop', handleDrop, false);
};

window.addEventListener('load', init);