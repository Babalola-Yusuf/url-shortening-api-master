getLinkShortner();
async function getLinkShortner(){
    url = 'facebook.com'
    const res0 = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const res1 = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const res2 = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    let res = await Promise.all([res0, res1, res2]);
    const data = await res.json();
    let jsonShortlink = data.result.short_link;
    console.log(jsonShortlink[0]);
    return jsonShortlink;
};

/* getLinkShortner().then(d => {
    console.log(d)
    console.log(d)
    });
console.log(getLinkShortner());
 */
let shortenIt = document.querySelector('.shorten-it');
shortenIt.addEventListener("click", () => {
    showForm();
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
    
if("content" in document.createElement("template")) {
    function showForm() {
        // Selecting the elements
        const template = document.getElementById("shortened-result");
        const clone = template.content.cloneNode(true);
        document.querySelector('.shorten-wrapper').appendChild(clone);
    }
} else {
    alert("Your browser does not support template element!");
}

