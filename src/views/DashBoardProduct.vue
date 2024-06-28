<template>
  <div class="wrapper">
    <Slider />
    <div class="main">
      <Nav />
      <main class="content px-3 py-2">
        <div class="container-fluid">
          <h1 class="mb-4 text-center">Sản phẩm trong cửa hàng</h1>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th class="text-center">STT</th>
                <th class="text-center">Tên sản phẩm</th>
                <th class="text-center">Tổng số lượng</th>
                <th class="text-center">Ảnh sản phẩm</th>
                <th class="text-center">Số lượng chi tiết</th>
                <th class="text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <td class="text-center">{{ index + 1 }}</td>
                <td class="text-center">{{ product.name }}</td>
                <td class="text-center">{{ product.totalQuantity }}</td>
                <td class="text-center">
                  <img
                    :src="product.imageUrl"
                    class="img-thumbnail"
                    width="100px"
                    alt="Product Image"
                  />
                </td>
                <td>
                  <ul class="list-unstyled text-center">
                    <li v-for="(detail, i) in product.details" :key="i">
                      <b>Kích cỡ:</b> {{ detail.size }}, <b>Màu sắc:</b> {{ detail.color }}, <b>Số lượng:</b> {{ detail.quantity }}
                    </li>
                  </ul>
                </td>
                <td class="text-center">
                  <button class="btn btn-sm btn-primary">Sửa</button>
                  <button class="btn btn-sm btn-danger">Xóa</button>
                </td>
              </tr>
            </tbody>
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
  name: "DashboardProduct",
  components: {
    Slider,
    Nav,
    Footer,
  },
  data() {
    return {
      products: [
        {
          name: "Áo",
          totalQuantity: 100,
          imageUrl: "https://res.cloudinary.com/dgfwiff6k/image/upload/v1717990031/test_folder/cvxbxxrrj88h70kzdb4r.webp",
          details: [
            { size: "M", color: "Đỏ", quantity: 10 },
            { size: "M", color: "Đỏ", quantity: 20 },
            { size: "M", color: "Đỏ", quantity: 30 },
          ],
        },
        // Add more products as needed
      ],
    };
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

.table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

.table-bordered {
  border: 1px solid #000; /* Set border color to black */
}

.table th, .table td {
  padding: 12px;
  text-align: center; /* Center text alignment */
  vertical-align: middle;
  border: 1px solid #000; /* Set border color to black */
  background-color: #fff; /* Remove background color */
}

.table th {
  color: #000; /* Set text color to black */
}

.img-thumbnail {
  border: 1px solid #dee2e6;
  padding: 4px;
  border-radius: 4px;
}

.btn {
  margin-right: 8px;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
  text-align: center; /* Center text alignment for list */
}
</style>
ccc