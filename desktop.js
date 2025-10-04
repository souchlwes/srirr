function toggleWindow(id) {
  const win = document.getElementById(id);
  win.style.display = win.style.display === 'block' ? 'none' : 'block';
}

document.querySelectorAll('.window').forEach(win => {
  const title = win.querySelector('.titlebar');
  let offsetX, offsetY, isDragging = false;

  title.addEventListener('mousedown', e => {
    isDragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });

  document.addEventListener('mousemove', e => {
    if (isDragging) {
      win.style.left = `${e.clientX - offsetX}px`;
      win.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
});