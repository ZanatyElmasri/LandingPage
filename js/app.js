// Most of comments are tests only (me) not for reviewers  
//Global 
const dFragment = document.createDocumentFragment(); // reusable fragment element
const prgrphs = document.querySelectorAll('p');      // 4 further manupulating parag..s and its contents
const mainSelector = document.querySelector('main');  // container inlater code 
const uList = document.querySelector('ul');           // to append list to for shorter code below 
const prgrph1Cont = prgrphs[0].textContent;         // for purpose of copying contents
document.querySelector('h1').setAttribute('class', 'mainHeading')       /// to match css styling 

for (let i = 2; i <= 7; i++) { //section iteration with content and class for css styling-codes
    const sectionMk = document.createElement('section');
    const h2Mk = document.createElement('h2');
    const pMk = document.createElement('p');
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    h2Mk.textContent = 'section ' + i;
    pMk.textContent = prgrph1Cont
    dFragment.appendChild(sectionMk);
    sectionMk.appendChild(div)
    div.appendChild(div2)
    sectionMk.appendChild(h2Mk);
    sectionMk.appendChild(pMk);
    h2Mk.setAttribute('id', 'header' + i)
    sectionMk.setAttribute('id', 'section' + i)
    sectionMk.setAttribute('data-nav', h2Mk.textContent)
    div.setAttribute('class', 'container')
    div2.setAttribute('class', 'circle')
}
mainSelector.appendChild(dFragment);    //appending sections 

for (sc of document.querySelectorAll('h2')) {       //list item making iteration 
    //  console.log(sc.getAttribute('data-nav'));  // mid-test only 
    const navMenu = sc.textContent;
    const navAnc = sc.getAttribute('id')
    const listItem = document.createElement('li');
    const anchorEl = document.createElement('a');
    anchorEl.setAttribute('href', '#' + navAnc)
    listItem.setAttribute('id',navAnc)
    anchorEl.textContent = navMenu;
    dFragment.appendChild(listItem)
    listItem.appendChild(anchorEl)
    anchorEl.addEventListener('click', function(event) {
        event.preventDefault();             //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_preventdefault
    })
    //console.log(anchorEl.textContent);        //mid-test onle 
}
uList.appendChild(dFragment);
                   //appending links to the unordered lis element



if ("IntersectionObserver" in window) {         //the code is obvious for testing whether the method is supported by the browser! 
    console.log('yes');
} else {
    console.log('not-supported')
}


function trial() {          // could be done less coding but playing with functions 
    const listItem = document.querySelectorAll('li');
    listItem[0].setAttribute('class', 'item-active-class');
}
trial();



document.addEventListener('DOMContentLoaded', () => {           // listening to dom-loaded faster than scroll for sake of performance 
    let options = {         

        threshold: 0.3
    };

    const observer = new IntersectionObserver(callback, options);           //observer based on sections' entry into view 
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
        //console.log(section); // mid-test only 
    });
});

function callback(entries, ob) {
    entries.forEach(entry => {      //IntersectionObserver  parameter 
        if (entry.isIntersecting) { // condition loop entry = section into veiw-port 
            entry.target.classList.add('your-active-class')
        } else {
            entry.target.classList.remove('your-active-class')
        }
    })
}


document.addEventListener('DOMContentLoaded', () => {       // further distinction for header h2 just like up code exactly except 70% and observing h2 instead 
    let options = {

        threshold: 0.7
    };

    const observer = new IntersectionObserver(callback, options);
    document.querySelectorAll('h2').forEach(heading => {
        observer.observe(heading);
    });
});

function callback(entries, ob) {
    entries.forEach(entry => {
        const menuList = document.querySelectorAll('li')        
        if (entry.isIntersecting) {
            console.log();
            entry.target.classList.add('your-active-class')

        } else {
            entry.target.classList.remove('your-active-class')
        }

    })
}
icon();             //the navMenu manupulating for smaller screen views via function with click event inside as trigger

function icon() {
    const headselector = document.querySelector('header');
    const barDivSelector = document.querySelector('.barDiv');
    barDivSelector.addEventListener('click', () => {
        headselector.classList.toggle('header');        
    })
}

scrollToView();

function scrollToView() { // scrollintoView w3schools
    let header = document.querySelectorAll('h2');
    let items = document.querySelectorAll('li');
    items[0].addEventListener('click', () => {
        header[0].scrollIntoView();
    })
    items[1].addEventListener('click', () => {
        header[1].scrollIntoView();
    })
    items[2].addEventListener('click', () => {
        header[2].scrollIntoView();
    })
    items[3].addEventListener('click', () => {
        header[3].scrollIntoView();
    })
    items[4].addEventListener('click', () => {
        header[4].scrollIntoView();
    })
    items[5].addEventListener('click', () => {
        header[5].scrollIntoView();
    })
    items[6].addEventListener('click', () => {
        header[6].scrollIntoView();
    })
}