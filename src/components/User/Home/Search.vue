<template>
  <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content rounded-0">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Search by keyword</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex align-items-center flex-column">
          <div class="input-group w-75 mx-auto d-flex mb-4">
            <input
              type="search"
              class="form-control p-3"
              placeholder="Enter keywords"
              aria-describedby="search-icon-1"
              v-model="keyword"
              @keyup.enter="searchProducts"
            />
            <button id="search-icon-1" class="btn btn-primary p-3" @click="searchProducts">Search</button>
          </div>
          <div class="w-75">
            <div v-if="searchs.length > 0">
              <div v-for="product in searchs" :key="product._id" class="search-result-item">
                <router-link :to="{ name: 'UserDetail', params: { id: product._id } }">
                  <div>
                    <img
                      v-if="product.LIST_FILE_ATTACHMENT_DEFAULT && product.LIST_FILE_ATTACHMENT_DEFAULT.length > 0"
                      :src="product.LIST_FILE_ATTACHMENT_DEFAULT[0].FILE_URL"
                      class="img-fluid rounded"
                      :alt="product.NAME_PRODUCT"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{{ product.NAME_PRODUCT }}</h5>
                      <p class="fw-bold mb-3">
                        {{
                          getPrice(product).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })
                        }}
                      </p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div v-else>
              <p>No products found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productService from "@/services/product.service";

export default {
  name: "HomeSearch",
  data() {
    return {
      keyword: "",
      searchs: [],
    };
  },
  methods: {
    async searchProducts() {
      if (this.keyword.length > 2) {
        try {
          const response = await productService.searchProducts(this.keyword);
          if (response && response.data) {
            this.searchs = response.data;
          } else {
            console.error("Unexpected response structure:", response);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
          throw error; // Re-throw error to be caught by the caller
        }
      } else {
        this.searchs = [];
      }
    },
    getPrice(product) {
      return product.PRICE_NUMBER || "N/A";
    },
  },
};
</script>

<style>
.search-result-item {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}
</style>
