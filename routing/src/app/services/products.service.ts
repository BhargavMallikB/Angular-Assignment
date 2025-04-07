import { Injectable } from '@angular/core';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
        {
          "id": 1,
          "name": "Samsung Galaxy S23",
          "image": "https://th.bing.com/th/id/OIP.5QMkXIlusvZfEUm50okfbAHaHa?rs=1&pid=ImgDetMain",
          "price": "$799",
          "buyLink": "https://buy.samsung.com/galaxy-s23",
          "category": "Mobiles",
          "description": "A sleek smartphone with a 6.1-inch AMOLED display, 50MP camera, and 128GB storage."
        },
        {
          "id": 2,
          "name": "iPhone 14",
          "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505109_sd.jpg",
          "price": "$999",
          "buyLink": "https://buy.apple.com/iphone-14",
          "category": "Mobiles",
          "description": "Apple's latest with a 6.1-inch Super Retina XDR display and advanced dual-camera system."
        },
        {
          "id": 3,
          "name": "OnePlus 11",
          "image": "https://th.bing.com/th/id/OIP.EmIWR9UD0xYyng1TaXN1RwHaNK?rs=1&pid=ImgDetMain",
          "price": "$749",
          "buyLink": "https://buy.oneplus.com/oneplus-11",
          "category": "Mobiles",
          "description": "High-performance phone with a 6.7-inch AMOLED screen and 80W fast charging."
        },
        {
          "id": 4,
          "name": "Google Pixel 7 Pro",
          "image": "https://www.91-cdn.com/hub/wp-content/uploads/2022/10/Pixel-7-Pro-review-0005.jpg",
          "price": "$899",
          "buyLink": "https://buy.google.com/pixel-7-pro",
          "category": "Mobiles",
          "description": "AI-driven smartphone with a 6.7-inch OLED display and 50MP triple-camera setup."
        },
        {
          "id": 5,
          "name": "Xiaomi Mi 13",
          "image": "https://th.bing.com/th/id/OIP.lZ7nn0Vcatsp7ox5MElAlgHaHa?rs=1&pid=ImgDetMain",
          "price": "$699",
          "buyLink": "https://buy.mi.com/mi-13",
          "category": "Mobiles",
          "description": "Compact phone with a 6.36-inch AMOLED screen and a 108MP main camera."
        },
        {
          "id": 6,
          "name": "Sony Xperia 1 IV",
          "image": "https://th.bing.com/th/id/OIP.ilKXThWznunSCWsTeaD0mwHaHa?rs=1&pid=ImgDetMain",
          "price": "$1099",
          "buyLink": "https://buy.sony.com/xperia-1-iv",
          "category": "Mobiles",
          "description": "Multimedia-focused phone with a 6.5-inch 4K OLED display and pro-grade cameras."
        },
        {
          "id": 7,
          "name": "Motorola Edge 30",
          "image": "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge-30-1.jpg",
          "price": "$649",
          "buyLink": "https://buy.motorola.com/edge-30",
          "category": "Mobiles",
          "description": "Slim phone with a 6.55-inch OLED screen and 144Hz refresh rate."
        },
        {
          "id": 8,
          "name": "MacBook Pro 14",
          "image": "https://th.bing.com/th/id/OIP.FMSfdWx7p8EZAEfILSPhNAHaEK?rs=1&pid=ImgDetMain",
          "price": "$1999",
          "buyLink": "https://buy.apple.com/macbook-pro-14",
          "category": "Laptops",
          "description": "Powerful laptop with a 14.2-inch Liquid Retina XDR display and M2 Pro chip."
        },
        {
          "id": 9,
          "name": "Dell XPS 13",
          "image": "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2016/12/dell-xps-13-hero.jpg?itok=jb5S1VbE",
          "price": "$1499",
          "buyLink": "https://buy.dell.com/xps-13",
          "category": "Laptops",
          "description": "Premium ultrabook with a 13.4-inch 4K display and Intel i7 processor."
        },
        {
          "id": 10,
          "name": "HP Spectre x360",
          "image": "https://i.pcmag.com/imagery/reviews/00uwiwERhM15aoADGVjjUUy-1.jpg",
          "price": "$1499",
          "buyLink": "https://buy.hp.com/spectre-x360",
          "category": "Laptops",
          "description": "Convertible laptop with a 13.5-inch OLED touchscreen and 16GB RAM."
        },
        {
          "id": 11,
          "name": "Lenovo ThinkPad X1 Carbon",
          "image": "https://www.windowscentral.com/sites/wpcentral.com/files/styles/larger_wm_blb/public/field/image/2017/04/thinkpad-x1-carbon-hero2.jpg?itok=f9d-zg94",
          "price": "$1799",
          "buyLink": "https://buy.lenovo.com/thinkpad-x1-carbon",
          "category": "Laptops",
          "description": "Business-grade laptop with a 14-inch WQHD display and 1TB SSD."
        },
        {
          "id": 12,
          "name": "Asus ZenBook Flip 14",
          "image": "https://th.bing.com/th/id/OIP.I2IQu0i120GYKLDAUg-cAQHaHh?rs=1&pid=ImgDetMain",
          "price": "$1099",
          "buyLink": "https://buy.asus.com/zenbook-flip-14",
          "category": "Laptops",
          "description": "Versatile 2-in-1 laptop with a 14-inch Full HD touchscreen and AMD Ryzen 7."
        },
        {
          "id": 13,
          "name": "Microsoft Surface Laptop 5",
          "image": "https://sm.pcmag.com/t/pcmag_uk/review/m/microsoft-/microsoft-surface-laptop-5-15-inch_595b.1920.jpg",
          "price": "$1199",
          "buyLink": "https://buy.microsoft.com/surface-laptop-5",
          "category": "Laptops",
          "description": "Sleek laptop with a 13.5-inch PixelSense touchscreen and Intel i5 processor."
        },
        {
          "id": 14,
          "name": "Acer Predator Helios 300",
          "image": "https://images.idgesg.net/images/article/2018/03/acer-predator-helios-300-1-100753274-orig.jpg",
          "price": "$1299",
          "buyLink": "https://buy.acer.com/predator-helios-300",
          "category": "Laptops",
          "description": "Gaming laptop with a 15.6-inch 144Hz display and NVIDIA RTX 3060 GPU."
        },
        {
          "id": 15,
          "name": "LG OLED 65-inch",
          "image": "https://www.lg.com/us/images/tvs/md05913436/gallery/OLEDC8-Z3.jpg",
          "price": "$2499",
          "buyLink": "https://buy.lg.com/oled-65-inch",
          "category": "TVs",
          "description": "65-inch OLED TV with stunning 4K resolution and self-lit pixels."
        },
        {
          "id": 16,
          "name": "Samsung QLED 55-inch",
          "image": "https://www.lg.com/us/images/tvs/md05913436/gallery/OLEDC8-Z3.jpg",
          "price": "$1799",
          "buyLink": "https://buy.samsung.com/qled-55-inch",
          "category": "TVs",
          "description": "55-inch QLED TV with vibrant colors and Quantum HDR technology."
        },
        {
          "id": 17,
          "name": "Sony Bravia XR 65-inch",
          "image": "https://images.samsung.com/is/image/samsung/p6pim/uk/qe55q75catxxu/gallery/uk-qled-q70c-qe55q75catxxu-536638584?$650_519_PNG$",
          "price": "$2299",
          "buyLink": "https://buy.sony.com/bravia-xr-65-inch",
          "category": "TVs",
          "description": "65-inch 4K OLED TV with XR Cognitive Processor and immersive sound."
        },
        {
          "id": 18,
          "name": "TCL 6-Series 55-inch",
          "image": "https://th.bing.com/th/id/OIP.gLeq5rPThl-6CJbAuxu7lQHaEM?rs=1&pid=ImgDetMain",
          "price": "$899",
          "buyLink": "https://buy.tcl.com/6-series-55-inch",
          "category": "TVs",
          "description": "55-inch 4K TV with Mini-LED and Roku smart platform."
        },
        {
          "id": 19,
          "name": "Vizio 70-inch 4K",
          "image": "https://m.media-amazon.com/images/I/814Y+lzC5eS.jpg",
          "price": "$1199",
          "buyLink": "https://buy.vizio.com/70-inch-4k",
          "category": "TVs",
          "description": "Large 70-inch 4K UHD TV with Dolby Vision and smart streaming."
        },
        {
          "id": 20,
          "name": "Samsung The Frame 65-inch",
          "image": "https://estliving.com/wp-content/uploads/2022/09/Est-living-winnings-samsung-65-inch-the-frame-qled-4k-smart-tv-02.jpg",
          "price": "$1799",
          "buyLink": "https://buy.samsung.com/the-frame-65-inch",
          "category": "TVs",
          "description": "65-inch QLED TV with art mode and customizable bezels."
        }
  ];

  constructor() { }

  getProducts() : Product[] {
    return this.products;
  }

  getProductById(productId : number) : any {
    for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id == productId ) {
          return this.products[i];
        }      
      }
  }

  getProductsByCategory(productCategory: string) : Product[] {
    const productsByCategory: Product[] = [];
    for (let i = 0; i < this.products.length; i++){
      if (this.products[i].category == productCategory){
        productsByCategory.push(this.products[i]);
      }
    }
    return productsByCategory;
  }

  getCategories(){
    const categories : string[] = [...new Set(this.products.map(item => item.category))];
    return categories;
  }
  
}
