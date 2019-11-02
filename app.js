/*
var backdrop = document.querySelector('.backdrop');
//var modal = document.querySelector('.modal');
//var modalNoButton = document.querySelector('.modal__action--negative');
//var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);

// use this code only once I've figured out
// which button I'm using 

/*for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open'; // This will actually overwrite the complete class list
    //modal.classList.add("open");
    backdrop.classList.add('open');
  });
}*/

/*backdrop.addEventListener('click', function() {
   mobileNav.style.display = 'none';
  
  //mobileNav.classList.remove('open');
  
  //closeModal();
});

/*if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}*/




/*toggleButton.addEventListener('click', function() {
   mobileNav.style.display = 'close';
   backdrop.style.display = 'close';
}
  
//mobileNav.classList.add('open');
//backdrop.classList.add('open');
});
*/







// code from earlier lecture

var backdrop = document.querySelector(".backdrop");
//var modal = document.querySelector(".modal");
//var modalNoButton = document.querySelector(".modal__action--negative");
//var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop);
/*for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}*/

backdrop.addEventListener("click", function() {
    mobileNav.style.display = 'none';
    closeModal();
});

//modalNoButton.addEventListener("click", closeModal);



//needed for backdrop to close upon clicking on viewport
function closeModal() {
  backdrop.style.display = "none";
  //modal.style.display = "none";
}

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'close';
    backdrop.style.display = 'close';
});
 
//mobileNav.classList.add('open');
//backdrop.classList.add('open');
});