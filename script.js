let suppression = document.getElementById('a-supprimer');
suppression.remove();

let header = document.createElement('header');
header.textContent = 'Bienvenue';
header.style.backgroundColor = '#e3b04b';
header.style.color = 'white';
header.style.textAlign = 'center';
header.style.fontSize = '32px';
header.style.padding = '20px';
document.body.append(header);

let sousHeader = document.createElement('div'); 
sousHeader.innerHTML = 
"<div class = 'sousHeader'> <a href='index.html'>Accueil</a> / <a href=''>Une autre page</a> </div>";
sousHeader.style.background = '#f1d6ab';
sousHeader.style.padding = '10px';
document.body.append(sousHeader);

let paragraphe = document.createElement('p');
paragraphe.textContent = "Ceci est un paragraphe crée avec Javascript ! ";
paragraphe.style.padding = '10px';
document.body.append(paragraphe);