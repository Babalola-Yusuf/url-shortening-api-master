let input = document.querySelector('.input');

async function getLinkShortner(){
    
    let url = input.value;
    const inputBody = '{"url": "' + url + '","expiry": "5m"}';
    const headers = {
    'Content-Type':'application/json',
    'Accept':'application/json',
    'x-api-key':'sk_3a948739e65f47a6904039ba4ce825c1'
  };
  
  const res = await fetch('https://api.manyapis.com/v1-create-short-url',
  {
    method: 'POST',
    body: inputBody,
    headers: headers
  })

    const data = await res.json();    
    console.log(data);
    let jsonShortlink = data.shortUrl;

    
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


/* ++++++++ navigation bar for mobile ++++++++++++++*/
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
