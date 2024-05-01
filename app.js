const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')

//add event listener
closedFace.addEventListener('click', () => {
    if (openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});


openFace.addEventListener('click', () => {
    if (closedFace.classList.contains('closed')) {
        closedFace.classList.add('active');
        openFace.classList.remove('active');

   }
});

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
  
