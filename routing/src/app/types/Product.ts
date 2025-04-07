export interface Product {
    id: number,          // Unique identifier for the product
    name: string,        // Name of the product
    image: string,       // URL of the product image
    price: string,       // Price of the product (as a string to include currency symbols)
    buyLink: string,     // Link to purchase the product
    category: string,    // Category the product belongs to (e.g., "Mobiles", "Laptops")
    description: string  // Brief description of the product
}
