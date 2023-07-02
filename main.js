class ProductManager {
    constructor() {
      this.products = [];
      this.productId = 1;
    }
  
    addProduct(product) {
      // Valida que todos los campos sean obligatorios
      if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail ||
        !product.code ||
        !product.stock
      ) {
        console.log('Todos los campos son obligatorios');
        return;
      }
  
      // Valida que el campo "code" no se repita
  for (const p of this.products) {
    if (p.code === product.code) {
      console.log('El código del producto ya existe');
      return;
    }
      }
  
      // Agregar el producto al array 
      product.id = this.productId++;
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((producto) => producto.id === id);
      if (product) {
        return product;
      } else {
        console.log('Not found');
      }
    }
  }

  const productManager = new ProductManager();

// Agregar productos
    productManager.addProduct({
    title: 'Producto 1',
    description: 'Banana',
    price: 10.99,
    thumbnail: 'ruta/imagen1.jpg',
    code: 'A01',
    stock: 100,
    });

    productManager.addProduct({
    title: 'Producto 2',
    description: 'Manzana',
    price: 19.99,
    thumbnail: 'ruta/imagen2.jpg',
    code: 'A02',
    stock: 50,
    });

  

// Obtener todos los productos
const products = productManager.getProducts();
console.log('estos son los productos disponibles',products);

// Obtener producto por ID
const product = productManager.getProductById(1);
console.log('el id del producto corresponde a:',product);

// Intentar obtener producto con un ID inexistente
const nonexistentProduct = productManager.getProductById(5);

  



