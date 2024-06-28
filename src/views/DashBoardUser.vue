<template>
    <div class="wrapper">
      <Slider />
      <div class="main">
        <Nav />
        <main class="content px-3 py-2">
          <div class="container-fluid">
            <h1 class="mb-4 text-center">Quản lý tài khoản</h1>
            <div class="d-flex justify-content-between align-items-center mb-4">
              <!-- Nút Quay lại -->
              <router-link to="/admin" class="btn btn-info button-add">
                <i class="fas fa-arrow-left"></i> Quay lại
              </router-link>
  
              <!-- Thanh Tìm kiếm -->
              <form class="form-inline">
                <div class="input-group">
                  <input
                    class="form-control"
                    type="search"
                    placeholder="Tìm kiếm..."
                    aria-label="Search"
                    v-model="searchText"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-success" type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
  
              <!-- Nút Xóa tất cả -->
              <button type="button" class="btn btn-danger" @click="removeAllUsers">
                <i class="fas fa-trash"></i> Xóa tất cả
              </button>
            </div>
            <table class="table table-bordered table-hover">
              <thead>
                <tr class="text-center">
                  <th scope="col" class="space-role">Vai trò</th>
                  <th scope="col" class="space-name">Tên</th>
                  <th scope="col" class="space-email">Email</th>
                  <th scope="col" class="space-time">Ngày tạo/Cập nhật</th>
                  <th scope="col" class="space-handle">Xử lý</th>
                </tr>
              </thead>
              <tbody v-if="filteredUsersCount > 0" class="text-center">
                <tr :key="index" v-for="(user, index) in filteredUsers">
                  <td>{{ user.role }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ time(user.createdAt) }}</td>
                  <td>
                    <button type="button" class="btn btn-warning btn-sm" @click="editUser(user._id)">
                      <i class="fas fa-edit"></i> Sửa
                    </button>
                    <button type="button" class="btn btn-danger btn-sm" @click="deleteUser(user._id)">
                      <i class="fas fa-trash"></i> Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot v-else>
                <tr>
                  <td colspan="5" class="non-user">Không có tài khoản nào</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import Slider from "../components/admin/Slider.vue";
  import Nav from "../components/admin/Nav.vue";
  import Footer from "../components/admin/Footer.vue";
  
  export default {
    name: "DashboardUsers",
    components: {
      Slider,
      Nav,
      Footer,
    },
    data() {
      return {
        searchText: "",
        users: [
          // Dữ liệu người dùng mẫu
          {
            _id: "1",
            role: "Admin",
            name: "Phan Huỳnh My",
            email: "My@gmail.com",
            createdAt: "2024-01-01",
          },

          {
            _id: "1",
            role: "Admin",
            name: "Phan Huỳnh My",
            email: "My@gmail.com",
            createdAt: "2024-01-01",
          },
        ],
      };
    },
    computed: {
      filteredUsers() {
        return this.users.filter((user) =>
          user.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
      },
      filteredUsersCount() {
        return this.filteredUsers.length;
      },
    },
    methods: {
      time(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
      },
      deleteUser(userId) {
        this.users = this.users.filter((user) => user._id !== userId);
      },
      removeAllUsers() {
        this.users = [];
      },
      editUser(userId) {
        // Hàm xử lý sửa người dùng
        alert(`Sửa người dùng với ID: ${userId}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .wrapper {
    display: flex;
  }
  
  .main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .content {
    flex-grow: 1;
    padding: 20px;
  }
  
  .container-fluid {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  .table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }
  
  .table-bordered {
    border: 1px solid #000; /* Đặt màu viền là màu đen */
  }
  
  .table th,
  .table td {
    padding: 12px;
    text-align: center; /* Căn giữa chữ */
    vertical-align: middle;
    border: 1px solid #000; /* Đặt màu viền là màu đen */
    background-color: transparent; /* Loại bỏ màu nền */
  }
  
  .table th {
    color: #000; /* Đặt màu chữ là màu đen */
  }
  
  .table-hover tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.075); /* Màu nền khi hover */
  }
  
  .btn {
    margin-right: 8px;
  }
  
  .non-user {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: blue;
    text-align: center;
  }
  
  .button-add {
    color: #fff; /* Màu chữ nút quay lại */
  }
  
  .router-link-active {
    color: #fff;
    text-decoration: none;
  }
  
  .form-inline .btn {
    margin-left: -1px;
  }
  
  .input-group {
    width: 300px; /* Điều chỉnh chiều rộng của thanh tìm kiếm */
  }
  
  .input-group-append .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  </style>
  