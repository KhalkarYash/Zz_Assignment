export const mockProducts = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 999.99,
    stock: 15,
    status: "Active",
    description: "High performance laptop with 16GB RAM and 1TB SSD.",
  },
  {
    id: 2,
    name: "Desk Chair",
    category: "Furniture",
    price: 199.99,
    stock: 8,
    status: "Active",
    description: "Ergonomic office chair with lumbar support.",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 149.99,
    stock: 25,
    status: "Active",
  },
  {
    id: 4,
    name: "Coffee Maker",
    category: "Appliances",
    price: 89.99,
    stock: 12,
    status: "Inactive",
  },
];

export const mockShopkeepers = [
  {
    id: 1,
    name: "John Doe",
    shopName: "Tech Gadgets",
    phone: "123-456-7890",
    city: "New York",
  },
  {
    id: 2,
    name: "Jane Smith",
    shopName: "Home Comfort",
    phone: "098-765-4321",
    city: "Los Angeles",
  },
  {
    id: 3,
    name: "Robert Johnson",
    shopName: "Electro World",
    phone: "555-123-4567",
    city: "Chicago",
  },
  {
    id: 4,
    name: "Emily Davis",
    shopName: "Fashion Hub",
    phone: "444-555-6666",
    city: "Miami",
  },
];

export const mockOrders = [
  {
    id: 1,
    buyer: "Alice Johnson",
    items: "Laptop, Mouse",
    amount: 1050.99,
    status: "Completed",
  },
  {
    id: 2,
    buyer: "Bob Brown",
    items: "Desk Chair",
    amount: 199.99,
    status: "Processing",
  },
  {
    id: 3,
    buyer: "Charlie Wilson",
    items: "Headphones, Charger",
    amount: 179.98,
    status: "Shipped",
  },
  {
    id: 4,
    buyer: "Diana Miller",
    items: "Coffee Maker, Filters",
    amount: 110.5,
    status: "Completed",
  },
];
