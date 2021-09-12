let app = new Vue({
  el: "#app",
  data: {
    products: {
      product: "Socks",
      description: "It is very comfortable, quality",
      image: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
      image_alt: "Socks img",
      inStock: true,
      onSale: true,
      link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks'
    }
  }
})