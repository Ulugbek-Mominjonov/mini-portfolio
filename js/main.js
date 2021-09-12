let elAlterable = document.querySelector('.alterable-text');
const textVariants = ['Frontend'];

window.addEventListener('DOMContentLoaded', wordChanger)
let i = 0;
let j = 0;
function wordChanger() {
  if(i < textVariants[j].length){
    elAlterable.textContent += textVariants[j][i];
    i++;
    setTimeout(wordChanger, 180)
  }else{
    setTimeout(() => {
      elAlterable.textContent = "";
      if(j < textVariants.length - 1){
        j++;
      } else j = 0;
      i = 0;
      wordChanger()
    }, 900)
  }
  
}
let app = new Vue ({
  el: '#app',
  data: {
    myProjects: [
      {
        name: "Planets by vuejs",
        demo: "https://planets-vuejs.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/planets-by-vuejs",
        img: "img/planets.png"
      },
      {
        name: "Chopar Pitsa",
        demo: "https://chopmas-pitsa-order.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/chopmas-pitsa",
        img: "img/chopar_pitsa.png"
      },
      {
        name: "Mini chat programm",
        demo: "https://mini-telegram.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/sending-message-with-js",
        img: "img/chat.png"
      },
      {
        name: "Auto type",
        demo: "https://ulugbek-mominjonov.github.io/auto-type/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/Ulugbek-Mominjonov.github.io/tree/master/auto-type",
        img: "img/auto_type.png"
      },
      {
        name: "3D Card",
        demo: "https://ulugbek-mominjonov.github.io/3d-card/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/Ulugbek-Mominjonov.github.io/tree/master/3d-card",
        img: "img/3d-card.png"
      },
      {
        name: "Random switches",
        demo: "https://ulugbek-mominjonov.github.io/random-switches/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/Ulugbek-Mominjonov.github.io/tree/master/random-switches",
        img: "img/random-switches.png"
      },
      {
        name: "Progress Navigation 2",
        demo: "https://ulugbek-mominjonov.github.io/progress-navigation-2/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/Ulugbek-Mominjonov.github.io/tree/master/progress-navigation-2",
        img: "img/progress-navigation.png"
      },
      {
        name: "Progress Navigation",
        demo: "https://ulugbek-mominjonov.github.io/progress-navigation/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/Ulugbek-Mominjonov.github.io/tree/master/progress-navigation",
        img: "img/progress-navigation0.png"
      },
      {
        name: "Cats gallery",
        demo: "https://cats-gallery.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/cat-gallery",
        img: "img/cat.png"
      },
      {
        name: "Bookmark",
        demo: "https://bookmark-page-sass.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/bookmark-with-Sass",
        img: "img/bookmark.png"
      },
      {
        name: "To do list",
        demo: "https://to-do-list-with-checkbox.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/to-do-list-with-checkbox",
        img: "img/todolist.png"
      },
      {
        name: "Korzina",
        demo: "https://korzina.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/korzina-with-js",
        img: "img/korzina.png"
      },
      {
        name: "Executive landing page",
        demo: "https://executive-study-free-landing-page.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/executive-study-free-landing-page",
        img: "img/executive.jpg"
      },
      {
        name: "Scoot site",
        demo: "https://scoot-site.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/Scoot",
        img: "img/scoot.jpg"
      },
      {
        name: "Pixer landing page",
        demo: "https://pixer-landing-page.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/PIXER",
        img: "img/pixer.png"
      },
      {
        name: "Ecommerce",
        demo: "https://ecommerce-online-web-site.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/eCommerce",
        img: "img/e_commerce.png"
      },
      {
        name: "Easybank landing page",
        demo: "https://easybank-with-bootstrap.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/Easybank-bootsrap",
        img: "img/easybank.png"
      },
      {
        name: "WD landing page",
        demo: "https://wd-landing-page.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/wd",
        img: "img/wd.png"
      },
      {
        name: "Blogr landing page",
        demo: "https://blogrhome-page.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/blog-landing-page",
        img: "img/blogr.png"
      },
      {
        name: "Food delivery landing page",
        demo: "https://landing-food-delivery.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/landing-food-delivery",
        img: "img/food.png"
      },
      {
        name: "Namanganliklar",
        demo: "https://namanganliklar24home.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/namanganliklar24-web-sayti-header-part",
        img: "img/namanganliklar.png"
      },
      {
        name: "Rest api landing page",
        demo: "https://rest-api-countries-page.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/REST-COUNTRIES-API",
        img: "img/restapi.png"
      },
      {
        name: "Zendit landing page",
        demo: "https://zendit-page.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/ZENDIT",
        img: "img/zendit.png"
      },
      {
        name: "Portfolio Ui landing page",
        demo: "https://portfolio-ui-site.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/Portfolio-UI",
        img: "img/portfolio-ui.png"
      },
      {
        name: "My Wallet landing page",
        demo: "https://gallant-kowalevski-377aed.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/ASSETS9",
        img: "img/mywallett.png"
      },
      {
        name: "Crowdfounding landing page",
        demo: "https://crowdfunding-product-page-main.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/ASSETS9",
        img: "img/crowdfounding.jpg"
      },
      {
        name: "Message chat landing page",
        demo: "https://messages-chats.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/assets4",
        img: "img/message.png"
      },
      {
        name: "Single price grid landing page",
        demo: "https://single-price-grid-section-page.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/single-price-grid-component-master",
        img: "img/single.jpg"
      },
      {
        name: "Four card feature landing page",
        demo: "https://frontend-mentor-four-card-feature.netlify.app/",
        gitHub: "https://github.com/Ulugbek-Mominjonov/FOUR-CARD-FEATURE-SECTION",
        img: "img/fourcard.jpg"
      },
    ]
  }
})