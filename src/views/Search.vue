<template>
  <div>
    <NavBar />
    <div
      class="modal fade"
      id="searchModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Search by keyword</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body d-flex align-items-center">
            <div class="input-group w-75 mx-auto d-flex">
              <input
                v-model="searchKeyword"
                @keyup.enter="handleSearch"
                type="search"
                class="form-control p-3"
                placeholder="Enter keywords"
                aria-describedby="search-icon-1"
              />
              <button
                @click="handleSearch"
                class="btn btn-primary"
                type="button"
                id="search-icon-1"
              >
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PaginationLayout />
    <AppFooter />
  </div>
</template>

<script>
import NavBar from "@/components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import PaginationLayout from "@/components/User/layout/PaginationLayout.vue";
import productService from "@/services/product.service";

export default {
  name: "HomeSearch",
  components: {
    NavBar,
    AppFooter,
    PaginationLayout,
  },
  data() {
    return {
      searchKeyword: "",
      searchData: [],
    };
  },
  async created() {
    try {
      await this.searchProducts();
      console.log("Mãng tìm kiếm", this.searchData);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async searchProducts() {
      try {
        this.searchData = await productService.searchProducts(this.searchKeyword);
      } catch (error) {
        console.error("Error searching products:", error);
        this.searchData = [];
      }
    },
    handleSearch() {
      this.searchProducts();
    }
  },
};
</script>

<style></style>
