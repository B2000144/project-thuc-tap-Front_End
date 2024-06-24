<template>
  <NavBar />
  <SinglePageHeader />
  <div class="container-fluid py-5">
    <div class="container py-5">
      <h1 class="mb-4">Thông tin giao hàng</h1>
      <form action="#">
        <div class="row g-5">
          <div class="col-md-12 col-lg-6 col-xl-7">
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-2 text-center p-0">
                    <div class="avatar">
                      <img src="../../public/img/avatar.jpg" alt="" />
                    </div>
                    <div v-if="user && user.USER_ID">
                      {{ user.USER_NAME }}
                    </div>
                    <div v-else>Loading...</div>
                  </div>
                  <div class="col-md-2 p-0 r mt-4">
                    <div v-if="user && user.USER_ID">
                      {{ user.USER_ID.EMAIL_USER }}
                    </div>
                    <div v-else>Loading...</div>
                    <div class="logout">Đăng xuất</div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-control bg-white my-3">
                  <select
                    name=""
                    id="select-address"
                    class="w-100 border-0 bg-white"
                    v-for="(item, index) in address"
                    :key="index._id"
                  >
                    <option value="">Địa chỉ đã lưu</option>
                    <option :value="item._id">
                      {{
                        item.DESC +
                        " " +
                        item.COMMUNE +
                        " " +
                        item.DISTRICT +
                        " " +
                        item.PROVINCE
                      }}
                    </option>
                  </select>
                </div>
                <div class="col-md-12 col-lg-6 w-100">
                  <div class="form-item">
                    <label class="form-label my-3">Last Name<sup>*</sup></label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 w-100">
                  <div class="form-item">
                    <label class="form-label my-3">Last Name<sup>*</sup></label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 w-100">
                  <div class="form-item">
                    <label class="form-label my-3">Last Name<sup>*</sup></label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <button
              @click="addOrder()"
              type="button"
              class="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary my-5"
            >
              Tiến hành thanh toán
            </button>
          </div>
          <div class="col-md-12 col-lg-6 col-xl-5">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in cart" :key="index">
                    <th scope="row">
                      <div class="d-flex align-items-center mt-2">
                        <img
                          :src="
                            item.ITEM.PRODUCT_DETAILS
                              .LIST_FILE_ATTACHMENT_DEFAULT[0].FILE_URL
                          "
                          class="img-fluid rounded-circle"
                          style="width: 90px; height: 90px"
                          alt=""
                        />
                      </div>
                    </th>
                    <td class="py-5">
                      {{ item.ITEM.PRODUCT_DETAILS.NAME_PRODUCT }}
                    </td>
                    <td class="py-5">{{ item.ITEM.PRICE }}</td>
                    <td class="py-5">{{ item.ITEM.QUANTITY }}</td>
                    <td class="py-5">
                      {{ totalPrice(item.ITEM.PRICE, item.ITEM.QUANTITY) }}
                    </td>
                  </tr>

                  <tr>
                    <th scope="row"></th>
                    <td class="py-5"></td>
                    <td class="py-5"></td>
                    <td class="py-5">
                      <p class="mb-0 text-dark py-3">Subtotal</p>
                    </td>
                    <td class="py-5">
                      <div class="py-3 border-bottom border-top">
                        <p class="mb-0 text-dark">$414.00</p>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row"></th>
                    <td class="py-5">
                      <p class="mb-0 text-dark text-uppercase py-3">TOTAL</p>
                    </td>
                    <td class="py-5"></td>
                    <td class="py-5"></td>
                    <td class="py-5">
                      <div class="py-3 border-bottom border-top">
                        <p class="mb-0 text-dark">$135.00</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              class="row g-4 text-center align-items-center justify-content-center pt-4"
            ></div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import orderService from "@/services/order.service";
import cartService from "@/services/cart.service";
import productService from "@/services/product.service";
import NavBar from "@/components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
import SinglePageHeader from "../components/User/checkout/SinglePageHeader.vue";
import checkLogin from "../utils/checkLogin";
import userService from "@/services/user.service";
import addressesService from "@/services/addresses.service";
export default {
  name: "CheckOutView",
  components: {
    NavBar,
    AppFooter,
    SinglePageHeader,
  },
  data() {
    return {
      cart: [],
      user: [],
      address: [],
    };
  },
  async created() {
    if (checkLogin) {
      await this.getCart();
      await this.getUser();
      await this.populateProducts();
      await this.getAddresses();
      this.getIdSelect();
      console.log("Mãng user", this.user);
      console.log("Mãng address", this.address);
      console.log("Mãng cart", this.cart);
    } else {
      this.$router.push("/login");
    }
  },
  methods: {
    async getCart() {
      try {
        const response = await cartService.getCart();
        if (response && response.data) {
          this.cart = response.data; // Đặt dữ liệu giỏ hàng vào biến cục bộ
        }
      } catch (error) {
        console.error(error);
      }
    },
    async populateProducts() {
      for (let item of this.cart) {
        // Duyệt qua từng mục trong giỏ hàng và lấy chi tiết sản phẩm sử dụng `getProduct`
        const productDetails = await this.getProduct(item.ITEM.ID_PRODUCT);
        if (productDetails) {
          item.productDetails = productDetails; // Giả sử bạn muốn thêm productDetails cho mỗi mục
        }
      }
    },
    async getProduct(productId) {
      try {
        const response = await productService.getById(productId);
        if (response && response.data) {
          return {
            name: response.data.NAME_PRODUCT,
            imageUrl: response.data.LIST_FILE_ATTACHMENT_DEFAULT[0].FILE_URL,
            // Thêm các trường khác nếu cần
          };
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    totalPrice(price, quantity) {
      return price * quantity;
    },
    checkLenghtCart() {
      if (this.cart.length > 0) {
        this.$router.push("/checkout");
      } else {
        alert("bạn chưa có hàng trong giỏ");
      }
    },
    async addOrder() {
      try {
        const response = await orderService.addOrder();
        if (response && response.success) {
          this.$router.push("/checkout/paymentMethods");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getUser() {
      try {
        const response = await userService.getUserLogin();
        if (response && response.data) {
          this.user = response.data;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getAddresses() {
      try {
        const response = await addressesService.getAddress();
        if (response && response.data) {
          this.address = response.data;
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
        this.message = "Có lỗi xảy ra khi tải danh sách địa chỉ.";
        this.alertClass = "alert-danger";
      }
    },
    getIdSelect() {
      var e = document.getElementById("select-address");
      var value = e.value;
      return value;
    },
  },
};
</script>

<style></style>
