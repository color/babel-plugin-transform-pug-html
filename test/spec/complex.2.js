var spec = {
  template: pug`
    .product-item
      .product-title {{ product.title }}
      .product-details
        .inventory In Stock: {{ product.inventory }}
        button.add-button(:disabled='!product.inventory', @click='addToCart(product)') {{ product.inventory > 0 ? "Add to cart" : "Out Of Stock" }}`,
  expected: `
    <div class="product-item">
      <div class="product-title">{{ product.title }}</div>
      <div class="product-details">
        <div class="inventory">In Stock: {{ product.inventory }}</div>
        <button
          class="add-button"
          :disabled="!product.inventory"
          @click="addToCart(product)">
          {{ product.inventory > 0 ? "Add to cart" : "Out Of Stock" }}
        </button>
      </div>
    </div>
  `
};
