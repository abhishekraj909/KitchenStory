import { Injectable } from '@angular/core';
import Product from 'src/app/models/product';
import { Tag } from 'src/app/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Properties
  private products: Array<Product> = [];
  private productCount:number;
  //Constructor
  constructor() {
    this.products = this.setAllProducts();
    this.productCount = this.products.length;
  }

  //Methods
  addProduct(product:Product){
    this.products.push(product);
    this.productCount = this.products.length;
  }

  removeProductById(productId:number){
    this.products = this.products.filter(item => item.productId !== productId);
    this.productCount = this.products.length;
  }

  getProductById(id:number):Product{
    return this.getAllProducts().find(product => product.productId == id)!;
  }
  getAllProductsBySearchTerm(searchTerm:string):Product[]{
    return this.getAllProducts().filter(product =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{

    return [
        {name:"All", count:this.productCount},
        {name: "herbs", count: 1},
        {name: "produce", count: 7},
        {name: "vegetables", count: 7},
        {name: "bread", count: 1},
        {name: "pantry", count: 3},
        {name: "dressing", count: 1},
        {name: "milk", count: 2},
        {name: "non-dairy", count: 1},
        {name: "plant-based", count: 1},
        {name: "fruit", count: 2},
        {name: "nuts", count: 2},
        {name: "bulk", count: 1},
        {name: "salad greens", count: 1},
        {name: "beverages", count: 2},
        {name: "dairy", count: 1},
        {name: "snack", count: 6},
        {name: "dried goods", count: 1},
        {name: "rice", count: 1}
    ];
  }


  getAllProductsByTag(tag:string):Product[]{

    //let's use the ternary operator :-)
    return (tag == "All") ?
            this.getAllProducts() :
            this.getAllProducts().filter(product => product.tags?.includes(tag));
  }


  getAllProducts(): Product[]{
    return this.products;
  }

  getAllProductsCount():number{
    return this.products.length;
  }

  setAllProducts(): Product[]{
    return [
      {
        productId:1,
        imageUrl: '/assets/images/Atta.jpg',
        productName: "Aashirvaad Organic Atta",
        price: 230,
        brand: "Aashirvaad",
        rating: 4,
        numOfReviews: 715,
        description: "Nature's Superfoods Organic Atta is whole wheat Atta that is certified organic. at AASHIRVAAD we have stringent checks to deliver the best quality authentic Organic Atta so that you get great taste and nutrition.",
        organic: true,
        tags: ["flour"]
    },
    {
        productId:2,
        imageUrl: '/assets/images/Cauliflower.jpg',
        productName: 'Cauliflower',
        price: 20,
        brand: 'AbhiFarm',
        rating: 4,
        numOfReviews: 645,
        description: "Firm but soft textured, the cauliflower is mild and crispy when cooked. It goes well with bright, vibrant ingredients such as lemons and capers. This flower-shaped vegetable is widely used in North Indian dishes, such as 'Gobhi ka paratha' and 'Aloo Gobhi' due to its versatility.",
        organic: true,
        tags: ['vegetables', 'produce']
    },
    {
        productId:3,
        imageUrl: '/assets/images/bread.jpg',
        productName: 'English Oven Bread - Sandwich',
        price: 50,
        brand: "English Oven",
        rating: 4,
        numOfReviews: 235,
        description: "Perfectly baked white bread Wheat Flour(Maida), Water,Yeast,Sugar,Iodised Salt, Edible Vegetable Oil,",
        organic: true,
        tags: ['bread']
    },
    {
        productId:4,
        imageUrl: '/assets/images/olive.jpg',
        productName: 'Figaro Extra Virgin Olive Oil',
        price: 300,
        brand: 'Figaro',
        rating: 5,
        numOfReviews: 542,
        description: "Ideal for Cold Cooking The superior flavour and oil comes from the first pressing of the finest olives. Turn your boring healthy meals into a mouth-watering affair with salad dressings, dips, marinades and chutneys prepared in the goodness of Figaro extra virgin olive oil",
        organic: false,
        tags: ['pantry', 'dressing']
    },
    {
        productId:5,
        imageUrl: '/assets/images/canned coconut milk.jpeg',
        productName: 'Real Thai Lite Coconut Milk',
        price: 160,
        brand: 'Thai Kitchen',
        rating: 4,
        numOfReviews: 785,
        description: "Thai Kitchen Organic Unsweetened Coconut Milk is made from pressed, ripe coconut meat. It’s a versatile ingredient for adding delicate flavor and rich texture in curries, sauces, soups, smoothies, beverages and more. Endless meals are just waiting to be made with this milk substitute. In fact, it’s not a substitute at all - we like to think of it as more of an upgrade as some of your favorite meals can be made just with this can. This organic coconut milk is also dairy-free, gluten-free and preservative-free, adding body and character right where you need it. It’s especially helpful for Asian cooking, decadent desserts and creamy beverages.",
        organic: true,
        tags: ['milk', 'non-dairy', 'plant-based', 'beverages']
    },
    {
        productId:6,
        imageUrl: '/assets/images/cara cara oranges.webp',
        productName: 'Fresh Oranges',
        price: 100,
        brand: '',
        rating: 3.5,
        numOfReviews: 213,
        description: "Mini Orange - Imported is a seedless fruit with a sweet and naturally juicy flesh. These oranges can be eaten out of hand, juiced, used in fruit salads, or turned into jams and preserves.",
        organic: false,
        tags: ['fruit', 'snack']
    },
    {
        productId:7,
        imageUrl: '/assets/images/cashew.jpg',
        productName: 'Nutty Gritties Lightly Salted Jumbo Roasted Cashew',
        price: 420,
        brand: 'Nutty Gritties ',
        rating: 3.5,
        numOfReviews: 302,
        description: "Roasted cashew nuts without a single drop of oil. Lightly salted with iodized salt. Highly rich in Energy and protein. Grab a handful and snack on it at any time of the day.",
        organic: false,
        tags: ['pantry', 'nuts', 'bulk', 'snack']
    },
    {
        productId:8,
        imageUrl: '/assets/images/cilantro.jpg',
        productName: 'Coriander Bunch (Dhaniya)',
        price: 10,
        brand: 'AbhiFarm',
        rating: 4,
        numOfReviews: 475,
        description: "Coriander leaves, also known as cilantro, Aromatic green leaves that are largely used to flavour and garnish food. When added to heated dishes, the leaves lose their flavour, and are often used raw or garnished just before serving.",
        organic: true,
        tags: ['herbs', 'vegetables', 'produce']
    },
    {
        productId:9,
        imageUrl: '/assets/images/mushroom.jpg',
        productName: 'Fresh Mushroom',
        price: 60,
        brand: '',
        rating: 4.5,
        numOfReviews: 96,
        description: "A mushroom is the fleshy, spore-bearing fruiting body of a fungus, typically produced in compost and plucked when get mature, so black colour compost can be seen on it.",
        organic: false,
        tags: ['vegetables', 'produce', 'snack']
    },
    {
        productId:10,
        imageUrl: '/assets/images/amul_taza.jpg',
        productName: 'Amul Moti Toned Milk',
        price: 24,
        brand: 'Amul',
        rating: 4.2,
        numOfReviews: 754,
        description: "Amul Moti Toned Milk (Polypack) is packed with the goodness of essential nutrients. It is popularly used in the preparation of sweets, curd, tea, coffee etc. or can even be consumed directly.",
        organic: false,
        tags: ['milk', 'dairy', 'beverages']
    },
    {
        productId:11,
        imageUrl: '/assets/images/beetroot.jpg',
        productName: 'Beetroot (Chukandar)',
        price: 30,
        brand: 'AbhiFarm',
        rating: 4,
        numOfReviews: 642,
        description: "Beetroot pulp has a sweet taste and it is usually of a dark crimson red colour with purple tinges. The rich flesh of this vegetable is naturally sweet and nutritious, and adds its own touch to dishes ranging from Salads to Soups.",
        organic: true,
        tags: ['vegetables', 'salad greens']
    },
    {
        productId:12,
        imageUrl: '/assets/images/apple.jpg',
        productName: 'Organic Red Delicious Apple',
        price: 180,
        brand: '',
        rating: 4.5,
        numOfReviews: 872,
        description: "Apples contain small amounts of many vitamins and minerals and are well known for their vitamin C and potassium contents. One medium-sized apple provides more than 3% of the Daily Value (DV) for both ( 2 ). This fruit also boasts vitamin K, vitamin B6, manganese, and copper ( 2 ).Ten attributes were selected to describe the apple characteristics: fruitiness, acidity, sweetness, juiciness, crispness, hardness, toughness, mealiness, vegetativeness, and astringency.",
        organic: true,
        tags: ['fruit', 'produce', 'snack']
    },
    {
        productId:13,
        imageUrl: '/assets/images/rice.jpg',
        productName: 'India Gate Mogra Basmati Rice (Broken)',
        price: 335,
        brand: 'Golden Star',
        rating: 4,
        numOfReviews: 714,
        description: "Convert your everyday simple recipes into a delight with perfect and aromatic India Gate Mogra Basmati Rice. A perfect fit for everyday consumption, it is popularly used in the preparation of pulao, biryani, kheer, and other delectable dishes. Carefully chosen from the choicest crops to give you an authentic taste and flavour. Slender grains that add to the texture of your food. Rich impeccable taste with characteristic fragrance that lightens up your taste buds.",
        organic: false,
        tags: ['pantry', 'rice', 'dried goods']
    },
    {
        productId:14,
        imageUrl: '/assets/images/carrot.jpg',
        productName: 'Organic Orange Carrot (Gajar)',
        price: 20,
        brand: 'AbhiFarm',
        rating: 4,
        numOfReviews: 452,
        description: "Carrots are healthy and crunchy vegetables, perfect for serving raw in salads. Sweet in taste, they can also be cooked and used in a number of dishes like rice preparations, soups and noodles.",
        organic: true,
        tags: ['vegetables', 'produce']
    },
    {
        productId:15,
        imageUrl: '/assets/images/organic heirloom tomatoes.webp',
        productName: 'Desi Tomato (Desi Tamatar)',
        price: 20,
        brand: 'AbhiFarm',
        rating: 5,
        numOfReviews: 1500,
        description: "Tomatoes are a significant source of umami flavor.The tomato is consumed in diverse ways, raw or cooked, in many dishes, sauces, salads, and drinks. While tomatoes are fruits—botanically classified as berries—they are commonly used culinarily as a vegetable ingredient or side dish.",
        organic: true,
        tags: ['vegetables', 'produce', 'snack']
    },
    {
        productId:16,
        imageUrl: '/assets/images/organic sweet yellow onion.jpg',
        productName: 'Organic Onion (Pyaz)',
        price: 40,
        brand: 'AbhiFarm',
        rating: 3.5,
        numOfReviews: 793,
        description: "Onion is a staple in India and are commonly chopped and used as an ingredient in various hearty warm dishes. They are versatile and can be baked, boiled, braised, grilled, fried, roasted, sautéed, or eaten raw in salads.",
        organic: false,
        tags: ['vegetables', 'produce']
    },
    {
        productId:17,
        imageUrl: '/assets/images/Raw-Food-Almond-food-Nut-Snack.webp',
        productName: 'Tata Sampann 100% Pure California Almonds',
        price: 564,
        brand: 'Tata Sampann',
        rating: 3,
        numOfReviews: 413,
        description: "Tata Sampann California Almonds (Whole)! Each pack contains the choicest selection of handpicked nuts with a promise to consistently deliver premium quality. Enjoy 100% pure California Almonds that are crunchy, flavourful, and of uniform colour and deluxe size. As a consumer, you seek freshness, nutrition, and quality in everything you buy. Premium packaging keeps goodness and quality intact ensuring crunch and great flavor. ",
        organic: false,
        tags: ['nuts', 'snack']
    },


    ]
  }
  getAllProductsOld():String[]{
    return [
    '/assets/images/Atta.jpg',
    '/assets/images/Cauliflower.jpg',
    '/assets/images/bread.jpg',
    '/assets/images/olive.jpg',
    '/assets/images/canned coconut milk.jpeg',
    '/assets/images/cara cara oranges.webp',
    '/assets/images/cashew.jpg',
    '/assets/images/cilantro.jpg',
    '/assets/images/mushroom.jpg',
    '/assets/images/amul_taza.jpg',
    '/assets/images/beetroot.jpg',
    '/assets/images/apple.jpg',
    '/assets/images/rice.jpg',
    '/assets/images/carrot.jpg',
    '/assets/images/organic heirloom tomatoes.webp',
    '/assets/images/organic sweet yellow onion.jpg',
    '/assets/images/Raw-Food-Almond-food-Nut-Snack.webp'
    ]
  }

}
