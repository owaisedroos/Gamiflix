//Gamiflix title animation//
const letters = "abcdefghijklmnopqrstuvwxyz";
      
      document.addEventListener('DOMContentLoaded', () => {
        const headerText = document.querySelector("h1");
        headerText.onmouseover = event => {
            const originalText = event.target.dataset.value;
            let iterations = 0;

            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText.split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                if (iterations >= originalText.length) {
                    clearInterval(interval);
                }

                iterations += 1 / 3;
            }, 50);
        };
      });
      //Swiper slider logic//
      document.addEventListener('DOMContentLoaded', function() {
      var swiper = new Swiper(".trending-content ", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',},
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1068: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      });
    });
    //bg img logic//
    const bgImages = ["/img/bg1.jpg", "/img/bg2.jpg", "/img/bg3.jpg", "/img/bg4.jpg","/img/bg6.jpeg"];
    let currentBgIndex = 0;
    
    // Function to change background image every 5 seconds
    function changeBackground() {
        currentBgIndex = (currentBgIndex + 1) % bgImages.length;
        document.getElementById('bg-image').src = bgImages[currentBgIndex];
    }
    
    setInterval(changeBackground, 5000);
    // Back to top button
document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const backToTopBtn = document.querySelector(".back-to-top");
  if (scrollY > 500) {
      backToTopBtn.style.display = "block";
  } else {
      backToTopBtn.style.display = "none";
  }
});
    //Search bar logic//
    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById("search-bar");
  
      // Event listener for search input
      searchInput.addEventListener("keyup", function() {
          const filter = searchInput.value.toLowerCase();
          const games = document.querySelectorAll(".swiper-slide, .top-game, .genres");
  
          // Loop through all game items and hide those that don't match the search query
          games.forEach((game) => {
              let title = game.querySelector("h3") ? game.querySelector("h3").innerText.toLowerCase() : "";
              if (title.includes(filter)) {
                  game.style.display = "";
              } else {
                  game.style.display = "none";
              }
          });
      });
  });