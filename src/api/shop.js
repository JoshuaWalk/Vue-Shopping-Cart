const _products = [
    {"id": 1, "title": "Shrek T-shirt", "price": 40, "inventory": 2},
    {"id": 2, "title": "Shrek Sountrack", "price": 10, "inventory": 10},
    {"id": 3, "title": "Yeezys", "price": 250, "inventory": 20}
  ]
  
  export default {
    getProducts (cb) {
      setTimeout(() => cb(_products),  1000)
    },
  
    buyProducts (products, cb, errorCb) {
      setTimeout(() => {
        // simulate random checkout failure.
        (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
          ? cb()
          : errorCb()
      }, 100)
    }
  }