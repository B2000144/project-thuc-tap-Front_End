<template>
  <NavBar />
  <div class="container-fluid py-5 mt-5">
    <div class="container py-5">
      <div class="row g-4 mb-5">
        <div class="col-lg-8 col-xl-12">
          <div class="row g-4">
            <div class="col-lg-6">
              <div class="border rounded">
                <a href="#">
                  <img
                    v-if="
                      products.LIST_FILE_ATTACHMENT_DEFAULT &&
                      products.LIST_FILE_ATTACHMENT_DEFAULT.length > 0
                    "
                    :src="products.LIST_FILE_ATTACHMENT_DEFAULT[0].FILE_URL"
                    class="img-fluid rounded"
                    alt="Image"
                  />
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <h4 class="fw-bold mb-3">{{ products.NAME_PRODUCT }}</h4>
              <p class="mb-3">Danh mục: {{ getCategoryName(products.CATEGORY_ID) }} </p>
              <h5 class="fw-bold mb-3">
                {{
                  price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })
                }}
              </h5>
              <!-- <div class="d-flex mb-4">
                <i class="fa fa-star text-secondary"></i>
                <i class="fa fa-star text-secondary"></i>
                <i class="fa fa-star text-secondary"></i>
                <i class="fa fa-star text-secondary"></i>
                <i class="fa fa-star"></i>
              </div> -->
              <p class="mb-4">
                {{ products.SHORT_DESC }}
              </p>
              <div class="input-group quantity mb-5" style="width: 100px">
                <div class="input-group-btn">
                  <button
                    class="btn btn-sm btn-minus rounded-circle bg-light border"
                    @click=" reduceQuanlity"
                  >
                    <i class="fa fa-minus"></i>
                  </button>
                </div>
                <input
                  type="text"
                  class="form-control form-control-sm text-center border-0"
                  :value="quantity"
                />
                <div class="input-group-btn">
                  <button
                    class="btn btn-sm btn-plus rounded-circle bg-light border"
                    @click=" increaseQuanlity"
                  >
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </div>
              <a
              @click.prevent="addToCartClick(products.ID)"
      href="#"
      class="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
    ><i class="fa fa-shopping-bag me-2 text-primary"></i> Thêm vào giỏ hàng</a>

      <div class="flex KIoPj6 W5LiQM">   
        <div class="flex flex-column">
            <!-- Section for Colors -->
            <section v-if="!is_loading" class="flex items-center" style="margin-bottom: 24px; align-items: baseline" 
             > 
              <h3 class="From">{{products.LIST_PRODUCT_METADATA[0].KEY}}</h3>
              <div class="flex items-center colors" >
                <button  
                  v-for="color in products.LIST_PRODUCT_METADATA[0].VALUE" :key="color"
                  class="From2 selection-box-unselected  btn-outline-success"
                  aria-label="color"
                  @click="selectColor(color)"
                  :class="{ 'selection-box-selected': selectedColor === color }"
                   >
            {{ color }} <!--Hiễn thị các mảng button được lặp-->
                </button>
              </div>
            </section>
            <!-- Section for Sizes -->
            <section v-if="!is_loading" class="flex items-center" style="margin-bottom: 24px; align-items: baseline"> 
            <h3 class="From">{{products.LIST_PRODUCT_METADATA[1].KEY}}</h3>
            <div class="flex items-center sizes">
              <button  
                v-for="size in products.LIST_PRODUCT_METADATA[1].VALUE" :key="size"
                class="From2 selection-box-unselected btn-outline-success"
                aria-label="size"
                @click="selectSize(size)"
                :class="{ 'selection-box-selected': selectedSize === size }"
              >
                {{ size }}
              </button>
            </div>
          </section>
            <!-- Section for Quantity -->
            <!-- <section class="flex items-center OaFP0p">
                <h3 class="From">Số lượng</h3>
                <div class="flex items-center"> -->
                    <!-- <div style="margin-right: 15px;">
                        <div class="_9m0o30 shopee-input-quantity">
                            <button aria-label="Decrease" class="suQW3X">
                                <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="shopee-svg-icon">
                                    <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                </svg>
                            </button>
                            <input class="suQW3X u00pLG" type="text" role="spinbutton" aria-live="assertive" aria-valuenow="1" value="1">
                            <span aria-live="polite" class="Bf9ap6">Số lượng 1</span>
                            <button aria-label="Increase" class="suQW3X">                                <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" class="shopee-svg-icon icon-plus-sign">
                                    <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 10 5.5"></polygon>
                                </svg>
                            </button>
                        </div>
                    </div> -->
                <!-- </div>
            </section> -->
        </div>
    </div>
              <nav>
                <div class="nav nav-tabs mb-3">
                  <button
                    class="nav-link active border-white border-bottom-0"
                    type="button"
                    role="tab"
                    id="nav-about-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-about"
                    aria-controls="nav-about"
                    aria-selected="true"
                  >
                    Chi Tiết Sản Phẩm
                  </button>
                  <!-- <button
                    class="nav-link border-white border-bottom-0"
                    type="button"
                    role="tab"
                    id="nav-mission-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-mission"
                    aria-controls="nav-mission"
                    aria-selected="false"
                  >
                    Đánh Giá Sản Phẩm
                  </button> -->
                </div>
              </nav>
              <div class="tab-content mb-5">
                <div
                  class="tab-pane active"
                  id="nav-about"
                  role="tabpanel"
                  aria-labelledby="nav-about-tab"
                >
                  <p>
                    {{ products.DESC_PRODUCT }}
                  </p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 class="fw-bold mb-0">Related products</h1>
     <div class="row g-4 ">
        <div v-for="product in allProducts" 
          :key="product._id" 
          class="col-md-6 col-lg-4 col-xl-3">
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
                      price.toLocaleString("vi-VN", {
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

      <div class="vesitable">
        <div class="owl-carousel vegetable-carousel justify-content-center">
          <div
            class="border border-primary rounded position-relative vesitable-item"
          >
            <div class="vesitable-img">
              <img
                src="img/vegetable-item-6.jpg"
                class="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              class="text-white bg-primary px-3 py-1 rounded position-absolute"
              style="top: 10px; right: 10px"
            >
              Vegetable
            </div>
            <div class="p-4 pb-0 rounded-bottom">
              <h4>Parsely</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div class="d-flex justify-content-between flex-lg-wrap">
                <p class="text-dark fs-5 fw-bold">$4.99 / kg</p>
                <a
                  href="#"
                  class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                  ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                  cart</a
                >
              </div>
            </div>
          </div>
          <div
            class="border border-primary rounded position-relative vesitable-item"
          >
            <div class="vesitable-img">
              <img
                src="img/vegetable-item-1.jpg"
                class="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              class="text-white bg-primary px-3 py-1 rounded position-absolute"
              style="top: 10px; right: 10px"
            >
              Vegetable
            </div>
            <div class="p-4 pb-0 rounded-bottom">
              <h4>Parsely</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div class="d-flex justify-content-between flex-lg-wrap">
                <p class="text-dark fs-5 fw-bold">$4.99 / kg</p>
                <a
                  href="#"
                  class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                  ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                  cart</a
                >
              </div>
            </div>
          </div>
          <div
            class="border border-primary rounded position-relative vesitable-item"
          >
            <div class="vesitable-img">
              <img
                src="img/vegetable-item-3.png"
                class="img-fluid w-100 rounded-top bg-light"
                alt=""
              />
            </div>
            <div
              class="text-white bg-primary px-3 py-1 rounded position-absolute"
              style="top: 10px; right: 10px"
            >
              Vegetable
            </div>
            <div class="p-4 pb-0 rounded-bottom">
              <h4>Banana</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div class="d-flex justify-content-between flex-lg-wrap">
                <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
                <a
                  href="#"
                  class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                  ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                  cart</a
                >
              </div>
            </div>
          </div>
          <div
            class="border border-primary rounded position-relative vesitable-item"
          >
            <div class="vesitable-img">
              <img
                src="img/vegetable-item-4.jpg"
                class="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              class="text-white bg-primary px-3 py-1 rounded position-absolute"
              style="top: 10px; right: 10px"
            >
              Vegetable
            </div>
            <div class="p-4 pb-0 rounded-bottom">
              <h4>Bell Papper</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div class="d-flex justify-content-between flex-lg-wrap">
                <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
                <a
                  href="#"
                  class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                  ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                  cart</a
                >
              </div>
            </div>
          </div>
          <div
            class="border border-primary rounded position-relative vesitable-item"
          >
            <div class="vesitable-img">
              <img
                src="img/vegetable-item-5.jpg"
                class="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              class="text-white bg-primary px-3 py-1 rounded position-absolute"
              style="top: 10px; right: 10px"
            >
              Vegetable
            </div>
            <div class="p-4 pb-0 rounded-bottom">
              <h4>Potatoes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div class="d-flex justify-content-between flex-lg-wrap">
                <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
                <a
                  href="#"
                  class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                  ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                  cart</a
                >
              </div>
            </div>
          </div>
          <div
            class="border border-primary rounded position-relative vesitable-item"
          >
            <div class="vesitable-img">
              <img
                src="img/vegetable-item-6.jpg"
                class="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              class="text-white bg-primary px-3 py-1 rounded position-absolute"
              style="top: 10px; right: 10px"
            >
              Vegetable
            </div>
            <div class="p-4 pb-0 rounded-bottom">
              <h4>Parsely</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div class="d-flex justify-content-between flex-lg-wrap">
                <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
                <a
                  href="#"
                  class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                  ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                  cart</a
                >
              </div>
            </div>
          </div>
          <div
            class="border border-primary rounded position-relative vesitable-item"
          >
            <div class="vesitable-img">
              <img
                src="img/vegetable-item-5.jpg"
                class="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              class="text-white bg-primary px-3 py-1 rounded position-absolute"
              style="top: 10px; right: 10px"
            >
              Vegetable
            </div>
            <div class="p-4 pb-0 rounded-bottom">
              <h4>Potatoes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div class="d-flex justify-content-between flex-lg-wrap">
                <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
                <a
                  href="#"
                  class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                  ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                  cart</a
                >
              </div>
            </div>
          </div>
          <div
            class="border border-primary rounded position-relative vesitable-item"
          >
            <div class="vesitable-img">
              <img
                src="img/vegetable-item-6.jpg"
                class="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              class="text-white bg-primary px-3 py-1 rounded position-absolute"
              style="top: 10px; right: 10px"
            >
              Vegetable
            </div>
            <div class="p-4 pb-0 rounded-bottom">
              <h4>Parsely</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div class="d-flex justify-content-between flex-lg-wrap">
                <p class="text-dark fs-5 fw-bold">$7.99 / kg</p>
                <a
                  href="#"
                  class="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                  ><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to
                  cart</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import productService from "@/services/product.service";
import PriceService from "@/services/price.service";
import NavBar from "@/components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import cartService from "@/services/cart.service";
import categoryService from "@/services/category.service";
import Swal from "sweetalert2";
export default {
  name: "UserDetail",
  components: {
    NavBar,
    AppFooter,
  },
  data() {
    return {
      products: {},
      price: [],
      cart: [],
      productCategory: [],
      nameCategory: [],
      selectedColor: null,
      selectedSize: null,
      is_loading: true, // chạy loading trước sao đó mới gọi api
      quantity: 1,

    };
  },
    computed: {
      allProducts() {
        return this.productCategory.flat();
      },
    },
  async created() {
    try {
      await this.getProduct();
      console.log("Mãng product", this.products);
      await this.getPriceProduct();
      console.log("Mảng price", this.price);
      await this.getCategory();
      console.log("Mảng categories", this.nameCategory);
      await this.getProductCategory();
      console.log("mãng product category", this.productCategory);
      await this.selectColor();
      // console.log("mau sac duoc chon", this.color);
      console.log('ID sản phẩm:', this.productId);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async getProduct() {
      try {
        const productId = this.$route.params.id;
      console.log('ID sản phẩm từ URL:', productId);
        const response = await productService.getById(productId);
        if (response && response.data) {
          this.is_loading = false
          this.products = response.data;
                  console.log('Dữ liệu sản phẩm:', this.products); // Log dữ liệu sản phẩm để kiểm tra

        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        console.error(error);
      }
    
    },
    async getPriceProduct() {
      try {
        const response = await PriceService.getDefaultPrice(
          this.$route.params.id
        );
        if (response && response.data && response.data[0]) {
          this.price = response.data[0].PRICE_NUMBER;
        } else {
          console.error("Unexpected response structure:", response);
        }
      } catch (error) {
        console.error("lỗi khi lấy giá:", error);
        throw error; // Re-throw error to be caught by the caller
      }
    },
    async addToCartClick() {
      try {
        const productId = this.$route.params.id;
        const colorKey = this.products.LIST_PRODUCT_METADATA[0].KEY;
        const sizeKey = this.products.LIST_PRODUCT_METADATA[1].KEY;
        const selectedColorValue = this.selectedColor;
        const selectedSizeValue = this.selectedSize;
        const payload = {
          key: [colorKey, sizeKey],
          value:[ selectedColorValue, selectedSizeValue]
        };
        const response = await cartService.addToCart(productId,payload);
        if (response && response.data) { 
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
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
          // console.log("Đã thêm sản phẩm vào giỏ hàng:", response.data);
            // console.log(`${colorKey}:${selectedColorValue}, ${sizeKey}:${selectedSizeValue}`);
        } else {
          console.error("Lỗi khi thêm vào giỏ hàng:", response);
        }
      } catch (error) {
        console.error("Lỗi khi thêm vào giỏ hàng:", error);
      }
    },
    async getCategory() {
      try {
        const response = await categoryService.getAll();
        if (response && response.data) {
          this.nameCategory = response.data;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    // async getProductCategory() {
    //   try {
    //     const categoryId = this.products.CATEGORY_ID; // Lấy CATEGORY_ID của sản phẩm hiện tại
    //     const response = await productService.getProductByIdCategory(categoryId);
    //     this.productCategory = response && response.data ? response.data : [];
    //   } catch (error) {
    //     console.error("Error fetching product category:", error);
    //   }
    // },

    async getProductCategory() {
      try {
        const categoryId = this.products.CATEGORY_ID; // Lấy CATEGORY_ID của sản phẩm hiện tại
        const productPromises = this.nameCategory.map(async (category) => {
          if (category._id === categoryId) {
            const response = await productService.getProductByIdCategory(category._id);
            return response && response.data ? response.data.filter(product => product._id !== this.products._id) : [];
            //filter loại bỏ sản phẩm hiện tại
          }
          return []; // Trả về mảng rỗng nếu không phải danh mục hiện tại
        });
        this.productCategory = await Promise.all(productPromises);
      } catch (error) {
        console.log("error", error);
      }
    },

    getCategoryName(categoryId) {
      const category = this.nameCategory.find(cat => cat._id === categoryId);
      return category ? category.CATEGORY_NAME : "Không xác định";
    },
    selectColor(color) {
      this.selectedColor = color;
    },
    selectSize(size) {
      this.selectedSize = size;
    },
    increaseQuanlity() {
      this.quantity++;
    },
    reduceQuanlity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const colorButtons = document.querySelectorAll('.colors button');
    const sizeButtons = document.querySelectorAll('.sizes button');
    let selectedColor = null;
    let selectedSize = null;

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Xóa lớp 'selection-box-selected' khỏi tất cả các nút màu sắc
            colorButtons.forEach(btn => btn.classList.remove('selection-box-selected'));
            // Thêm lớp 'selection-box-selected' vào nút được nhấn
            button.classList.add('selection-box-selected');
            // Lưu lại màu đã chọn
            selectedColor = button;
        });
    });

    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Xóa lớp 'selection-box-selected' khỏi tất cả các nút kích cỡ
            sizeButtons.forEach(btn => btn.classList.remove('selection-box-selected'));
            // Thêm lớp 'selection-box-selected' vào nút được nhấn
            button.classList.add('selection-box-selected');
            // Lưu lại kích cỡ đã chọn
            selectedSize = button;
        });
    });

    // Kiểm tra và giữ lại lựa chọn khi chuyển đổi giữa màu sắc và kích cỡ
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            if (selectedColor) selectedColor.classList.add('selection-box-selected');
            if (selectedSize) selectedSize.classList.add('selection-box-selected');
        });
    });
});

</script>


<style>
body {
    font-family: Arial, sans-serif;
}

.flex {
    display: flex;
}

.flex-column {
    flex-direction: column;
}

.items-center {
    align-items: center;
}

.KIoPj6 {
    padding: 16px;
}

.W5LiQM {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.From {
    margin: 0 16px 0 0;
    font-size: 18px;
    font-weight: bold;
}

.colors {
    gap: 8px;
}
.sizes {
    gap: 8px;
}


.From2 {
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
}

.selection-box-unselected:hover {
    border-color: #aaa;
}

.selection-box-unselected:focus {
    outline: none;
    border-color: #007bff;
}

.suQW3X {
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 8px;
    cursor: pointer;
}

.shopee-svg-icon {
    width: 10px;
    height: 10px;
}

.u00pLG {
    text-align: center;
    width: 40px;
    border: none;
    outline: none;
}

.Bf9ap6 {
    display: none;
}


/* CSS code */
.selection-box-selected {
    border: 2px solid blue;
    background-color: rgb(247, 243, 242);
}
a {
    color: #000000;
    text-decoration: none;
}

/*related*/
.card-body {
    padding: 1rem;
  }
 .card-body img {
    width: 100%; /* Đảm bảo hình ảnh điền đầy card */
    height: auto; /* Để hình ảnh tự động tính tỷ lệ */
  }
  .product-container {
    margin-bottom: 1.5rem; /* Khoảng cách giữa các sản phẩm */
  }
   .card-img-top {
    object-fit: cover;
    height: 200px; /* Chiều cao cố định cho hình ảnh */
  }
</style>
