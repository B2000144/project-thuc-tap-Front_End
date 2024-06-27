<template>
  <NavBar />
  <div class="container-fluid fruite">
    <div class="container py-5">
      <h1 class="mb-4">Fresh fruits shop</h1>
      <div class="row g-4">
        <div class="col-lg-12">
          <div class="row g-4">
            <div class="col-xl-3">
              <div class="input-group w-100 mx-auto d-flex">
                <input
                  type="search"
                  class="form-control p-3"
                  placeholder=""
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" class="input-group-text p-3"
                  ><i class="fa fa-search"></i
                ></span>
              </div>
            </div>
            <div class="col-6"></div>
            <div class="col-xl-3">
              <div
                class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4"
              >
                <label for="fruits">Default Sorting:</label>
                <select
                  id="fruits"
                  name="fruitlist"
                  class="border-0 form-select-sm bg-light me-3"
                  form="fruitform"
                >
                  <option value="volvo">Nothing</option>
                  <option value="saab">Popularity</option>
                  <option value="opel">Organic</option>
                  <option value="audi">Fantastic</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-lg-3">
              <div class="row g-4">
                <div class="col-lg-12">
                  <div class="mb-3">
                    <h4>Categories</h4>
                    <ul class="list-unstyled fruite-categorie">
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Thời Trang</a
                          >
                          <span>(3)</span>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Đồ Ăn</a
                          >
                          <span>(5)</span>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Điện Thoại</a
                          >
                          <span>(2)</span>
                        </div>
                      </li>
                      <!-- <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Banana</a
                          >
                          <span>(8)</span>
                        </div> -->
                      <!-- </li>
                      <li>
                        <div class="d-flex justify-content-between fruite-name">
                          <a href="#"
                            ><i class="fas fa-apple-alt me-2"></i>Pumpkin</a
                          >
                          <span>(5)</span>
                        </div>
                      </li> -->
                    </ul>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <h4 class="mb-2">Price</h4>
                    <input
                      type="range"
                      class="form-range w-100"
                      id="rangeInput"
                      name="rangeInput"
                      min="0"
                      max="500"
                      value="0"
                      oninput="amount.value=rangeInput.value"
                    />
                    <output
                      id="amount"
                      name="amount"
                      min-velue="0"
                      max-value="500"
                      for="rangeInput"
                      >0</output
                    >
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="mb-3">
                    <h4>Additional</h4>
                    <div class="mb-2">
                      <input
                        type="radio"
                        class="me-2"
                        id="Categories-1"
                        name="Categories-1"
                        value="Beverages"
                      />
                      <label for="Categories-1"> Organic</label>
                    </div>
                    <div class="mb-2">
                      <input
                        type="radio"
                        class="me-2"
                        id="Categories-2"
                        name="Categories-1"
                        value="Beverages"
                      />
                      <label for="Categories-2"> Fresh</label>
                    </div>
                    <div class="mb-2">
                      <input
                        type="radio"
                        class="me-2"
                        id="Categories-3"
                        name="Categories-1"
                        value="Beverages"
                      />
                      <label for="Categories-3"> Sales</label>
                    </div>
                    <div class="mb-2">
                      <input
                        type="radio"
                        class="me-2"
                        id="Categories-4"
                        name="Categories-1"
                        value="Beverages"
                      />
                      <label for="Categories-4"> Discount</label>
                    </div>
                    <div class="mb-2">
                      <input
                        type="radio"
                        class="me-2"
                        id="Categories-5"
                        name="Categories-1"
                        value="Beverages"
                      />
                      <label for="Categories-5"> Expired</label>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <h4 class="mb-3">Featured products</h4>
                  <div class="d-flex align-items-center justify-content-start">
                    <div
                      class="rounded me-4"
                      style="width: 100px; height: 100px"
                    >
                      <img
                        src="img/featur-1.jpg"
                        class="img-fluid rounded"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 class="mb-2">Big Banana</h6>
                      <div class="d-flex mb-2">
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <div class="d-flex mb-2">
                        <h5 class="fw-bold me-2">2.99 $</h5>
                        <h5 class="text-danger text-decoration-line-through">
                          4.11 $
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start">
                    <div
                      class="rounded me-4"
                      style="width: 100px; height: 100px"
                    >
                      <img
                        src="img/featur-2.jpg"
                        class="img-fluid rounded"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 class="mb-2">Big Banana</h6>
                      <div class="d-flex mb-2">
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <div class="d-flex mb-2">
                        <h5 class="fw-bold me-2">2.99 $</h5>
                        <h5 class="text-danger text-decoration-line-through">
                          4.11 $
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-start">
                    <div
                      class="rounded me-4"
                      style="width: 100px; height: 100px"
                    >
                      <img
                        src="img/featur-3.jpg"
                        class="img-fluid rounded"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6 class="mb-2">Big Banana</h6>
                      <div class="d-flex mb-2">
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star text-secondary"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <div class="d-flex mb-2">
                        <h5 class="fw-bold me-2">2.99 $</h5>
                        <h5 class="text-danger text-decoration-line-through">
                          4.11 $
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center my-4">
                    <a
                      href="#"
                      class="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                      >Vew More</a
                    >
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="position-relative">
                    <img
                      src="img/banner-fruits.jpg"
                      class="img-fluid w-100 rounded"
                      alt=""
                    />
                    <div
                      class="position-absolute"
                      style="top: 50%; right: 10px; transform: translateY(-50%)"
                    >
                      <h3 class="text-secondary fw-bold">
                        Fresh <br />
                        Fruits <br />
                        Banner
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="row g-4 justify-content-center">
                <div
                  class="col-md-6 col-lg-6 col-xl-4 min-height"
                  v-for="item in products"
                  :key="item._id"
                >
                  <div
                    class="border border-top-0 rounded position-relative fruite-item"
                  >
                    <router-link
                      :to="{ name: 'UserDetail', params: { id: item._id } }"
                      ><div class="fruite-img">
                        <img
                          :src="item.LIST_FILE_ATTACHMENT_DEFAULT[0].FILE_URL"
                          class="img-fluid rounded-top"
                          alt=""
                        /></div
                    ></router-link>
                    <!-- <div
                      class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                      style="top: 10px; left: 10px"
                    >
                      New
                    </div> -->
                    <div class="p-4 rounded-bottom size-text">
                      <h4>{{ item.NAME_PRODUCT }}</h4>
                      <p>
                        {{ item.SHORT_DESC }}
                      </p>
                      <div class="d-flex justify-content-between flex-lg-wrap">
                        <p class="text-dark fs-5 fw-bold mb-0">
                          {{
                            getPrice(item._id).toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })
                          }}
                        </p>
                        <p
                          @mouseenter="showSizes = true"
                          @mouseleave="showSizes = false"
                          @click="addCartNonKV(item._id)"
                          href="#"
                          class="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                          <i class="fa fa-shopping-bag me-2 text-primary"></i>
                          Thêm Vào Giỏ Hàng
                        </p>

                        <!-- Add the sizes dropdown inside the button div -->
                        <div class="sizes-dropdown" v-if="showSizes">
                          <ul class="list-unstyled">
                            <li>
                              <button class="btn btn-outline-secondary">
                                Size S
                              </button>
                            </li>
                            <li>
                              <button class="btn btn-outline-secondary">
                                Size M
                              </button>
                            </li>
                            <li>
                              <button class="btn btn-outline-secondary">
                                Size L
                              </button>
                            </li>
                            <!-- Add more sizes as needed -->
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12">
    <div class="pagination">
      <pagination
        v-model="page"
        :records="productAll.length"
        :per-page="limit"
        @paginate="myCallback"
        class="pagination-3"
      />
    </div>
  </div>

  <AppFooter />
</template>
<script>
import NavBar from "@/components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import Pagination from "v-pagination-3";
import productService from "@/services/product.service";
import PriceService from "@/services/price.service";
import cartService from "@/services/cart.service";
import Swal from "sweetalert2";
import getCookie from "@/utils/getCookie";
const numberCart = 0;
export default {
  name: "ShopView",
  components: {
    NavBar,
    AppFooter,
    Pagination,
  },
  data() {
    return {
      showSizes: false,
      products: [],
      productAll: [],
      prices: [],
      cart: [],
      page: 1,
      limit: 6,
      skip: 1,
    };
  },

  async created() {
    try {
      await this.getProduct();
      await this.getAllProduct();
      await this.getPriceProduct();
    } catch (error) {
      console.error("Error during component initialization:", error);
    }
  },
  methods: {
    async getAllProduct() {
      try {
        const product = await productService.getAllProduct();
        if (product && product.data) {
          this.productAll = product.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getProduct() {
      try {
        const response = await productService.getAll(this.skip, this.limit);
        if (response && response.data) {
          this.products = response.data; // Lưu mảng sản phẩm vào this.products
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Re-throw error to be caught by the caller
      }
    },
    myCallback() {
      this.skip = this.page; // Cập nhật skip từ page
      this.getProduct();
    },
    async getPriceProduct() {
      try {
        // Kiểm tra nếu this.products là một mảng
        if (Array.isArray(this.products)) {
          const prices = {};
          for (const product of this.products) {
            const response = await PriceService.getDefaultPrice(product._id);
            if (response && response.data && response.data[0]) {
              prices[product._id] = response.data[0].PRICE_NUMBER;
            } else {
              console.error("Unexpected response structure:", response);
            }
          }
          this.prices = prices; // Cập nhật trạng thái `prices`
        } else {
          console.error("products is not an array:", this.products);
        }
      } catch (error) {
        console.error("lỗi khi lấy giá:", error);
        throw error; // Re-throw error to be caught by the caller
      }
    },
    getPrice(productId) {
      const price = this.prices[productId];
      if (price) {
        return price;
      } else {
        return "Đang cập nhật giá";
      }
    },
    async addCartNonKV(productId) {
      try {
        if (getCookie("access_token")) {
          const response = await cartService.addCart(productId);
          if (response && response.data) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 800,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "success",
              title: "Thêm sản phẩm vào giỏ hàng thành công",
            });
          } else {
            console.error("Unexpected response structure:", response);
          }
        } else {
          Swal.fire({
            title: "Bạn chưa đăng nhập?",
            text: "hãy đăng nhập để thêm sản phẩm vào giỏ hàng",
            icon: "question",
          });
        }
      } catch (error) {
        console.error("lỗi khi thêm sp vào giỏ:", error);
      }
    },
  },
};
</script>

<style>
.fruite-img {
  overflow: hidden;
  width: 305px;
  height: 350px;
  border-radius: 10px;
}

.fruite-img img {
  width: 100%; /* Đảm bảo rằng hình ảnh luôn đầy đủ chiều rộng của khung */
  height: 100%; /* Đảm bảo rằng hình ảnh luôn đầy đủ chiều cao của khung */
  object-fit: cover; /* Hiển thị hình ảnh mà không biến dạng tỷ lệ */
}
.min-height {
  min-height: 595px;
  font-size: 1.4rem;
}
.size-text > h4 {
  font-size: 1.4rem;
}
.size-text p {
  font-size: 1.2rem;
}
.pagination {
  display: flex;
  justify-content: center;
}
.pagination .pagination-3 {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.pagination .pagination-3 li {
  margin-right: 5px;
}
.pagination .pagination-3 li a {
  display: block;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
}
.pagination .pagination-3 li.active a {
  background-color: #007bff;
  color: #fff;
}
.VuePagination__count {
  display: none;
}
/* drop down */
.sizes-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  display: none; /* Initially hidden */
}
.btn:hover .sizes-dropdown {
  display: block;
}
</style>
