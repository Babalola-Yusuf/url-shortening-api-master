let input = document.querySelector('.input');

async function getLinkShortner(){
    
    let url = input.value;
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await res.json();    
    let jsonShortlink = data.result.short_link;

    
    let shortenedResultTemplate = document.createElement('div');
    shortenedResultTemplate.setAttribute('class', 'shortened-result-template');    
    template.appendChild(shortenedResultTemplate);

    let fullLink = document.createElement('p');
    fullLink.innerHTML = `${url}`;
    fullLink.classList.add('full-link');
    shortenedResultTemplate.appendChild(fullLink);

    let rightLink = document.createElement('div');
    rightLink.setAttribute('class', 'right-link');    
    shortenedResultTemplate.appendChild(rightLink);

    let shortLink = document.createElement('p'); 
    shortLink.innerHTML = jsonShortlink; 
    shortLink.classList.add('short-link');
    rightLink.appendChild(shortLink);

    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.innerHTML = 'copy';
    rightLink.appendChild(button);

    button.addEventListener('click', ()=>{
        copy();
    })

let copy = () => {
    navigator.clipboard.writeText(jsonShortlink);
    button.innerHTML = 'copied!'
    button.style.backgroundColor = 'hsl(260, 8%, 14%)';
    button.style.borderColor = 'hsl(260, 8%, 14%)';
}
};


let shortenIt = document.querySelector('.shorten-it');
shortenIt.addEventListener("click", () => {
    getLinkShortner();
})



let bars = document.querySelector('.bars');
let nav = document.querySelector('nav');
bars.addEventListener('click', () =>{
    hideNav();
})

hideNav = () =>{
    nav.classList.toggle ('show') ;
}
showNav = ( ) =>{
    nav.classList.remove('hide');
}
    
const template = document.getElementById("shortened-result");
