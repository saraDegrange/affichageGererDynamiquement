let suppression = document.getElementById('a-supprimer');
suppression.remove();

let header = document.createElement('header');
header.textContent = 'Bienvenue';
header.style.backgroundColor = '#e3b04b';
header.style.color = 'white';
header.style.textAlign = 'center';
header.style.fontSize = '32px';
header.style.padding = '5px'
document.body.append(header);

// let sousHeader = document.createElement('div'); 
// sousHeader.innerHTML = 
// <div class = 'sousHeader'>
//     <a href="index.html">Accueil</a>
//     <a href="#">Une autre page</a>
// </div>
// document.body.append(sousHeader);