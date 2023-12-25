const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
  const header = document.getElementById('header');
  window.onscroll = function() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > 100) {
          header.classList.add('header-scrolled');
      } else {
          header.classList.remove('header-scrolled');
      }
  };
});

// document.addEventListener('scroll', () => {
// 	var scroll_position = window.scrollY;
// 	if (scroll_position > 100) {
// 		// header.style.backgroundImage = 'linear-gradient(45deg, #3269fd 15%, #fd8770 50%, #fff64b 80%)'; //#fd8770, #c1c1c0
//     // header.style.backgroundImage = 'linear-gradient(45deg, #ef854a 15%, #3269fd 50%, #fff64b 80%)'; //option 2
//     // header.style.backgroundImage = 'linear-gradient(45deg, #fff64b 15%, #3269fd 50%, #ef854a 80%)'; //option 3
//     header.style.backgroundImage = 'linear-gradient(45deg, #fff64b, #ddbbe1, #c1c1c0, #feafa1, #3269fd)'; //#cdb5e7, #ddbbe1


// 	} else {
// 		header.style.backgroundImage = 'none';  // Reset the background image
//     header.style.backgroundColor = 'transparent';
// 	}
// });

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  const header = document.getElementById('header'); // Make sure to have the correct selector for your header
  const isMobile = window.innerWidth <= 768; // Adjust the value according to your mobile breakpoint

  if (scroll_position > 100) {
      if (isMobile) {
          // Apply mobile-specific gradient
          header.style.backgroundImage = 'linear-gradient(45deg, #fff64b, #c1c1c0, #ddbbe1, #3269fd)';
      } else {
          // Apply desktop-specific gradient
          header.style.backgroundImage = 'linear-gradient(45deg, #fff64b, #feafa1, #c1c1c0, #ddbbe1, #3269fd)';
      }
  } else {
      header.style.backgroundImage = 'none'; // Reset the background image
      header.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


  function downloadCV() {
    var pdfURL = "CV/Tejodhay_Bonam.pdf";

    var link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);

    link.href = pdfURL;

    link.download = "Tejodhay_Bonam.pdf";

    link.click();

    document.body.removeChild(link);
  }

  document.getElementById("downloadLink").addEventListener("click", function(event) {
    event.preventDefault(); 
    downloadCV(); 
  });


