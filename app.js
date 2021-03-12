const ovals = document.querySelectorAll('.oval');
ovals.forEach(oval => addEventListener('click', ovalHandler));


function yesHandler(ovalId) {
  console.log('You clicked Yes');
  console.log(ovalId);
  hideModal();
}

function noHandler(ovalId) {
  console.log('You clicked No');
  console.log(ovalId);
  hideModal();
}

function ovalHandler(event) {
  const ovalId = event.target.id;
  if (event.target.id === "c2" || event.target.id === "c4") {
    showModal(ovalId);
  } 
}

const addYesHandler = yesHandler(ovalId)

function showModal(ovalId) {
    document.getElementById("modal").style = 'display:block;'
    document.getElementById("overlay").style = 'display:block;'
    document.getElementById('yesButton').addEventListener('click', addYesHandler);
    document.getElementById('noButton').addEventListener('click', addNoHandler);    
}

function hideModal() {
    document.getElementById("yesButton").removeEventListener('click', yesHandler)
    document.getElementById("noButton").removeEventListener('click', noHandler)
    document.getElementById("modal").style = 'display:none;'
    document.getElementById("overlay").style = 'display:none;'
}

