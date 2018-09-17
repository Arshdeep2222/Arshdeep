const profile ={
   "avatar_url": 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0004.gif',
  "login": "profx",
  "name": "Prof. Xavier",
  
    "savatar_url": 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0008.gif',
  "slogin": "spidey",
  "sname": "Spiderman",
  
  
    "savatar_url": 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0008.gif',
  "slogin": "spidey",
  "sname": "Spiderman",
  
  
  'wname' : 'Wolverine', 
  'wpic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0011.gif', 
  'wtwitter' : 'logan'
  
}
const codename = document.querySelector('#deep');
codename.innerHTML = `<a href="${profile.url}">@${profile.login}</a>`;
const img = document.querySelector('img');
img.src = profile.avatar_url;
const name = document.querySelector('#singh');
singh.textContent = profile.name;




const scodename = document.querySelector('#sst');
scodename.innerHTML = `<a href="${profile.url}">@${profile.slogin}</a>`;
const simg = document.querySelector('#ssimg');
simg.src = profile.savatar_url;
const sname = document.querySelector('#ss');
ss.textContent = profile.sname;



const wcodename = document.querySelector('#wsst');
wcodename.innerHTML = `<a href="${profile.url}">@${profile.wtwitter}</a>`;
const wpic = document.querySelector('#wssimg');
wpic.src = profile.wpic;
const wname = document.querySelector('#wss');
wss.textContent = profile.wname;


  

const button=document.getElementById('submit');
  
button.addEventListener('click',function(event){
  event.preventDefault();
if(this.textContent === '+ Follow'){
   this.textContent='- Following';
  console.info('Following User');
  console.table(profile);
   }
  else{
   this.textContent='+ Follow';
  console.info('Unfollowing User');
    
  }
});