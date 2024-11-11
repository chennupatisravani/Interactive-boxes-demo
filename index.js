
export default {
  data() {
    return {
      // Bundle options for the user to select
      bundleOptions: [
        { label: "1 Pair", price: "DKK 195.00", discount: "50%" },
        { label: "2 Pairs", price: "DKK 345.00", discount: "40%", popular: true },
        { label: "3 Pairs", price: "DKK 520.00", discount: "60%" },
      ],
      sizes: ["S", "M", "L", "XL"],        // Size options
      colors: ["Red", "Blue", "Green"],    // Color options
      selectedBundle: null,                // Currently selected bundle
      selectedSize: "",                    // Selected size
      selectedColor: ""                    // Selected color
    };
  },
  methods: {
    // Set selected bundle
    selectBundle(option) {
      this.selectedBundle = option;
    },
    // Add to cart function
    addToCart() {
      if (this.selectedBundle && this.selectedSize && this.selectedColor) {
        alert(`Added ${this.selectedBundle.label} of size ${this.selectedSize} and color ${this.selectedColor} to cart!`);
      } else {
        alert("Please select a bundle, size, and color.");
      }
    }
  }
};



