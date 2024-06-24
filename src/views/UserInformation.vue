<template>
  <NavBar />
  <div class="container light-style flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-4">Thông tin tài khoản</h4>
    <div v-if="message" :class="['alert', alertClass]" role="alert">
      {{ message }}
    </div>
    <div class="card overflow-hidden">
      <div class="row no-gutters row-bordered row-border-light">
        <div class="col-md-3 pt-0">
          <div class="list-group list-group-flush account-settings-links">
            <a
              class="list-group-item list-group-item-action"
              href="#account-general"
              @click="selectTab('general')"
              >Thông tin tài khoản</a
            >
            <a
              class="list-group-item list-group-item-action"
              href="#account-change-password"
              @click="selectTab('change-password')"
              >Đổi mật khẩu</a
            >
            <a
              class="list-group-item list-group-item-action"
              href="#shipping-address"
              @click="selectTab('shipping-address')"
              >Địa chỉ giao hàng</a
            >
            <button type="button" class="btn btn-danger mt-3" @click="logout">
              Đăng xuất
            </button>
          </div>
        </div>
        <div class="col-md-9">
          <div class="tab-content">
            <!-- Tab Thông tin tài khoản -->
            <div
              class="tab-pane fade"
              :class="{ 'active show': selectedTab === 'general' }"
              id="account-general"
            >
              <div class="card-body media align-items-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt="Avatar"
                  class="d-block ui-w-80"
                />
                <div class="media-body ml-4">
                  <label class="btn btn-outline-primary">
                    Tải ảnh mới
                    <input type="file" class="account-settings-fileinput" />
                  </label>
                  &nbsp;
                  <button type="button" class="btn btn-default md-btn-flat">
                    Đặt lại
                  </button>
                  <div class="text-light small mt-1">
                    Cho phép JPG, GIF hoặc PNG. Kích thước tối đa 800K
                  </div>
                </div>
              </div>
              <hr class="border-light m-0" />
              <div class="card-body">
                <div class="form-group">
                  <label for="lastName" class="form-label">Họ</label>
                  <input
                    id="lastName"
                    type="text"
                    class="form-control"
                    v-model="editedUser.lastName"
                  />
                </div>
                <div class="form-group">
                  <label for="middleName" class="form-label">Tên đệm</label>
                  <input
                    id="middleName"
                    type="text"
                    class="form-control"
                    v-model="editedUser.middleName"
                  />
                </div>
                <div class="form-group">
                  <label for="firstName" class="form-label">Tên</label>
                  <input
                    id="firstName"
                    type="text"
                    class="form-control"
                    v-model="editedUser.firstName"
                  />
                </div>
                <div class="form-group">
                  <label for="phone" class="form-label">Số điện thoại</label>
                  <input
                    id="phone"
                    type="text"
                    class="form-control"
                    v-model="editedUser.phone"
                  />
                </div>
                <div class="form-group">
                  <label for="email" class="form-label">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    v-model="editedUser.email"
                  />
                </div>
                <div class="form-group">
                  <label class="form-label">Giới tính</label>
                  <select class="custom-select" v-model="editedUser.gender">
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- Tab Đổi mật khẩu -->
            <div
              class="tab-pane fade"
              :class="{ 'active show': selectedTab === 'change-password' }"
              id="account-change-password"
            >
              <div class="card-body pb-2">
                <div class="form-group">
                  <label for="currentPassword" class="form-label"
                    >Mật khẩu hiện tại</label
                  >
                  <input
                    id="currentPassword"
                    type="password"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="newPassword" class="form-label"
                    >Mật khẩu mới</label
                  >
                  <input
                    id="newPassword"
                    type="password"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="confirmPassword" class="form-label"
                    >Nhập lại mật khẩu mới</label
                  >
                  <input
                    id="confirmPassword"
                    type="password"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <!-- Tab Địa chỉ giao hàng -->
            <div
              class="tab-pane fade"
              :class="{ 'active show': selectedTab === 'shipping-address' }"
              id="shipping-address"
            >
              <div class="row">
                <div class="col-md-12">
                  <div class="text-center border py-5 my-5">
                    <div class="icon-plus">
                      <i class="bi bi-plus-circle-fill"></i>
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      thêm địa chỉ
                    </button>
                  </div>
                </div>
              </div>
              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <form>
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Thêm địa chỉ
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="form-group">
                          <label for="">Tỉnh</label>
                          <input
                            type="text"
                            v-model="newAddress.provide"
                            class="form-control"
                            placeholder="Tỉnh"
                          />
                        </div>
                        <div class="form-group">
                          <label for="">Huyện</label>
                          <input
                            type="text"
                            v-model="newAddress.district"
                            class="form-control"
                            placeholder="Huyện"
                          />
                        </div>
                        <div class="form-group">
                          <label for="">Xã</label>
                          <input
                            type="text"
                            v-model="newAddress.commune"
                            class="form-control"
                            placeholder="Xã"
                          />
                        </div>
                        <div class="form-group">
                          <label for="">Địa chỉ chi tiết</label>
                          <input
                            type="text"
                            v-model="newAddress.desc"
                            class="form-control"
                            placeholder="Địa chỉ chi tiết"
                          />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click="createAddress()"
                        >
                          Lưu
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="modal fade"
                id="exampleModal1"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <form>
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          sửa địa chỉ
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="form-group">
                          <label for="">Tỉnh</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="updateAddress.PROVINCE"
                          />
                        </div>
                        <div class="form-group">
                          <label for="">Huyện</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="updateAddress.DISTRICT"
                          />
                        </div>
                        <div class="form-group">
                          <label for="">Xã</label>
                          <input
                            type="text"
                            v-model="updateAddress.COMMUNE"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group">
                          <label for="">Địa chỉ chi tiết</label>
                          <input
                            type="text"
                            v-model="updateAddress.DESC"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          data-dismiss="modal"
                          aria-label="Close"
                          type="button"
                          class="btn btn-primary close"
                          @click="saveUpdateAddress(updateAddress._id)"
                        >
                          <span aria-hidden="true"></span>
                          Lưu
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div
                class="row border my-5"
                v-for="item in address"
                :key="item._id"
              >
                <div class="text-end">
                  <button @click="deleteAddress(item._id)">
                    <i class="bi bi-x-circle-fill"></i>
                  </button>
                </div>
                <div class="col-md-6">
                  <p>
                    {{
                      item.DESC + item.COMMUNE + item.DISTRICT + item.PROVINCE
                    }}
                  </p>
                  <p>số điện thoại</p>
                  <p>email</p>
                </div>
                <div class="col-md-6">
                  <button>đặt làm mặt định</button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal1"
                    @click="fetchAddressById(item._id)"
                  >
                    chỉnh sửa
                  </button>
                </div>
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
import VueCookies from "vue-cookies";
import AddressService from "@/services/addresses.service";
import userService from "@/services/user.service";
import NavBar from "@/components/User/layout/NavBar.vue";
import AppFooter from "@/components/User/layout/AppFooter.vue";
export default {
  name: "UserInformation",
  components: {
    NavBar,
    AppFooter,
  },
  data() {
    return {
      is_loading: true,
      showModal: false,
      showModalEdit: false,
      address: [],
      current_address: [],
      user: [],
      updateAddress: {
        COMMUNE: "",
        DESC: "",
        DISTRICT: "",
        PROVINCE: "",
      },
      newAddress: {
        provide: "",
        district: "",
        commune: "",
        desc: "",
      },
      editedUser: {
        lastName: "",
        middleName: "",
        firstName: "",
        phone: "",
        email: "",
        gender: "male",
        addresses: [],
      },
      selectedTab: "general",
      message: "",
      alertClass: "",
    };
  },
  async created() {
    await this.fetchUserLogin();
    console.log(this.user);
  },
  methods: {
    async fetchUserLogin() {
      try {
        const response = await userService.getUserLogin();
        if (response && response.data) {
          this.user = response.data;
        } else {
          console.log("Không có dữ liệu người dùng đăng nhập.");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async createAddress() {
      try {
        const addAddress = await AddressService.createAddress(this.newAddress);
        console.log(addAddress);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteAddress(id) {
      try {
        const deleteAddres = await AddressService.deleteAddress(id);
        console.log(deleteAddres);
        // Xóa thành công từ server, cập nhật lại danh sách địa chỉ trên giao diện
        this.address = this.address.filter((item) => item._id !== id);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchAddressById(id) {
      try {
        const getAddressResponse = await AddressService.getAddressById(id);
        if (getAddressResponse && getAddressResponse.data) {
          this.updateAddress = getAddressResponse.data.LIST_ADDRESS[0];
          console.log("Địa chỉ đã được lấy thành công:", this.updateAddress);
        } else {
          console.log("Không có dữ liệu địa chỉ cho id này.");
        }
      } catch (error) {
        console.error("Lỗi khi gọi service lấy địa chỉ:", error);
      }
    },

    async fetchAddresses() {
      try {
        const response = await AddressService.getAddress();
        if (response && response.data) {
          this.address = response.data;
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
        this.message = "Có lỗi xảy ra khi tải danh sách địa chỉ.";
        this.alertClass = "alert-danger";
      }
    },

    async saveChanges() {
      try {
        this.message = "Đã lưu thay đổi thành công.";
        this.alertClass = "alert-success";
      } catch (error) {
        console.error("Error saving changes:", error);
        this.message = "Có lỗi xảy ra khi lưu thay đổi.";
        this.alertClass = "alert-danger";
      }
    },

    cancelEdit() {
      this.resetEditedUser();
      this.message = "";
      this.alertClass = "";
    },

    resetEditedUser() {
      this.editedUser = {
        lastName: "",
        middleName: "",
        firstName: "",
        phone: "",
        email: "",
        gender: "male",
        addresses: [],
      };
    },

    async logout() {
      try {
        VueCookies.remove("access_token");
        VueCookies.remove("refresh_token");
        this.$router.push("/login");
      } catch (error) {
        console.error("Error logging out:", error);
        this.message = "Có lỗi xảy ra khi đăng xuất.";
        this.alertClass = "alert-danger";
      }
    },

    async saveUpdateAddress(id) {
      const response = await AddressService.updateAddress(
        id,
        this.updateAddress
      );
      if (response) {
        this.showModal = false;
        this.fetchAddresses();
      }
    },

    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
  closeModal() {
    this.showModal = false;
  },
  mounted() {
    this.fetchAddresses();
  },
};
</script>

<style scoped>
body {
  background: #f5f5f5;
  margin-top: 20px;
}

.ui-w-80 {
  width: 80px !important;
  height: auto;
}

.btn-default {
  border-color: rgba(24, 28, 33, 0.1);
  background: rgba(0, 0, 0, 0);
  color: #4e5155;
}

label.btn {
  margin-bottom: 0;
}

.btn-outline-primary {
  border-color: #26b4ff;
  background: transparent;
  color: #26b4ff;
}

.btn {
  cursor: pointer;
}

.text-light {
  color: #babbbc !important;
}

.btn-facebook {
  border-color: rgba(0, 0, 0, 0);
  background: #3b5998;
  color: #fff;
}

.btn-instagram {
  border-color: rgba(0, 0, 0, 0);
  background: #000;
  color: #fff;
}

.card {
  background-clip: padding-box;
  box-shadow: 0 1px 4px rgba(24, 28, 33, 0.012);
}

.row-bordered {
  overflow: hidden;
}

.account-settings-fileinput {
  position: absolute;
  visibility: hidden;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.account-settings-links .list-group-item.active {
  font-weight: bold !important;
}

html:not(.dark-style) .account-settings-links .list-group-item.active {
  background: transparent !important;
}

.account-settings-multiselect ~ .select2-container {
  width: 100% !important;
}

.light-style .account-settings-links .list-group-item {
  padding: 0.85rem 1.5rem;
  border-color: rgba(24, 28, 33, 0.03) !important;
}

.light-style .account-settings-links .list-group-item.active {
  color: #4e5155 !important;
}

.material-style .account-settings-links .list-group-item {
  padding: 0.85rem 1.5rem;
  border-color: rgba(24, 28, 33, 0.03) !important;
}

.material-style .account-settings-links .list-group-item.active {
  color: #4e5155 !important;
}

.dark-style .account-settings-links .list-group-item {
  padding: 0.85rem 1.5rem;
  border-color: rgba(255, 255, 255, 0.03) !important;
}

.dark-style .account-settings-links .list-group-item.active {
  color: #fff !important;
}

.light-style .account-settings-links .list-group-item.active {
  color: #4e5155 !important;
}

.light-style .account-settings-links .list-group-item {
  padding: 0.85rem 1.5rem;
  border-color: rgba(24, 28, 33, 0.03) !important;
}
.icon-plus i {
  font-size: 30px;
}
</style>
