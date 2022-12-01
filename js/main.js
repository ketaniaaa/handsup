const header = document.createElement('header');
const navImg = document.createElement('a');
navImg.href = '../index.html';

const navPic = document.createElement("img");
navPic.src = "../assets/IMG_5473.PNG";
navPic.className = "navImgA";
navImg.appendChild(navPic);
header.appendChild(navImg);


const navTitle = document.createElement('a');
navTitle.href ='../index.html';
navTitle.innerText = "Hands Up!";
navTitle.className = "navTitle"
header.appendChild(navTitle);


const navBar = document.createElement('nav');
navBar.className = "navigation";
header.appendChild(navBar);

const navList = document.createElement('ul');
navList.className="ulNav";
//simple list of items to create navigation
const navItems =[
  
    {title: 'Learn' , link: '../pages/learn.html'},
    {title:'Test' , link: '../pages/quizhome.html'},
    {title: 'Translate', link: '../pages/translate.html'},
];

for(let item of navItems){
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.className = "liNav";
    a.className ="aNav";
    a.innerText = item.title;
    a.href = item.link;
    li.appendChild(a);
    navList.appendChild(li);
}
navBar.appendChild(navList);
//dynamically creating a footer that is universal
const footer = document.createElement('footer');
footer.className = 'universalFoot';


const credits =document.createElement('p');
credits.innerText = "ketania govender 2022";
credits.className = "credits";
footer.appendChild(credits);
const credLinks = document.createElement('ul');
credLinks.className ="ulFoot";

const footItems = [
    {ftitle: 'design and development', flink: '../pages/dandd.html'},
    {ftitle: 'reflection and rubric', flink: '../pages/reflection.html'},
    {ftitle: 'github files', flink: 'https://github.com/ketaniaaa/swiftify'},
    {ftitle: 'references', flink: '../pages/refs.html'}

];

for(let item of footItems){
    const fli = document.createElement('li');
    const fa = document.createElement('a');
    fli.className = "liFoot";
    fa.className = "aFoot";

    fa.innerText = item.ftitle;
    fa.href = item.flink;
    fli.appendChild(fa);
    credLinks.appendChild(fli);
}
footer.appendChild(credLinks);






//appending the items to the document body via tags so the navbar will be inserted before any element that has the id "main" 

document.body.prepend(header);

const end = document.getElementById("end");

document.body.insertBefore(footer, end );
