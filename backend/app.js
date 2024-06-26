// Sample array of products
const products = [
    {
      positionId: "1",
      objectId: "flan_51872502",
      brand: "STONE ISLAND",
      webCategory: "Trousers",
      colourName: "Beige 250",
      // Other product details...
    },
    {
      positionId: "2",
      objectId: "flan_51872503",
      brand: "STONE ISLAND",
      webCategory: "Trousers",
      colourName: "Med Beige 260",
      // Other product details...
    },
    // Add more product objects here...
  ];
  
  // List of possible colors
  const possibleColors = [
    "Beige", "Black", "Blue", "Brown", "Clear", "Cream", "Gold", "Green",
    "Grey", "Metallics", "Multi", "Neutral", "None", "Nude", "Orange",
    "Pink", "Purple", "Red", "Silver", "White", "Yellow"
  ];
  
  // Initialize filters object
  const filters = {
    brands: {},
    categories: {},
    colors: {},
  };
  
  // Function to initialize color filters
  function initializeColorFilters() {
    possibleColors.forEach(color => {
      filters.colors[color.toLowerCase()] = 0;
    });
  }
  
  // Function to process products and update filters
  function updateFilters(products) {
    products.forEach((product) => {
      // Update brand count
      if (filters.brands[product.brand]) {
        filters.brands[product.brand]++;
      } else {
        filters.brands[product.brand] = 1;
      }
  
      // Update category count
      if (filters.categories[product.webCategory]) {
        filters.categories[product.webCategory]++;
      } else {
        filters.categories[product.webCategory] = 1;
      }
  
      // Update color count
      const productColor = product.colourName.toLowerCase();
      possibleColors.forEach(color => {
        if (productColor.includes(color.toLowerCase())) {
          filters.colors[color.toLowerCase()]++;
        }
      });
    });
  }
  
  // Initialize color filters
  initializeColorFilters();
  
  // Call the function with the products array
  updateFilters(products);
  
  // Output the filters object
  console.log(filters);
  