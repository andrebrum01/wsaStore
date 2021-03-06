// Trigger de abrir e fechar o menubar
function menuShow(){
    let navbar = document.getElementById("nav-list");
    if(navbar.style.visibility === 'visible'){
        navbar.style.visibility = 'hidden';
        navbar.style.display = 'none';
    }
    else{
        navbar.style.visibility = 'visible';
        navbar.style.display = 'initial';
    }
}

// Adiciona função de rolamento nos links
const menuItems = document.querySelectorAll('.nav-list a[href^="#"]');
menuItems.forEach(item => {
	item.addEventListener('click', scrollTo);
});

// Realiza um rolamento até uma id
function scrollTo(e){
    e.preventDefault();
    menuItems.forEach(item => {
        item.classList.remove("active");;
    });
    e.currentTarget.classList.add("active");

    console.log(e.currentTarget);
    var id = e.currentTarget.getAttribute('href');
    var pos = document.querySelector(id).offsetTop;
    pos-=75;
   

    smoothScrollTo( 0 , pos);
}

// Rolamento Suave baseado em 60 fps, obs não fui eu que fiz codigo externo
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };

// adiciona uma caixa para ver a inspeção de skins
function fullBox(){
  let full = document.querySelectorAll(".boxFull")[0];
  if(full.style.visibility === 'visible'){
    full.style.visibility = 'hidden';
    full.style.display = 'none';
  }
  else{
    full.style.visibility = 'visible';
    full.style.display = 'flex';
  }
}


