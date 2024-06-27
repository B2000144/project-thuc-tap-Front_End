<template>
  <div class="wrapper">
    <Slider />
    <div class="main">
      <Nav />
      <main class="content px-3 py-2">
        <div class="container-fluid">
          <h1>Sản phẩm trong cửa hàng</h1>
          <table>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Tổng số lượng</th>
              <th>Ảnh sản phẩm</th>
              <th>Số lượng chi tiết</th>
              <th>Thao tác</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Áo</td>
              <td>100</td>
              <td>
                <img
                  src="https://res.cloudinary.com/dgfwiff6k/image/upload/v1717990031/test_folder/cvxbxxrrj88h70kzdb4r.webp"
                  width="100px"
                  alt=""
                />
              </td>
              <td>
                <ul>
                  <li>Kích cỡ: M, Màu sắc: Đỏ, Số lượng: 10</li>
                  <li>Kích cỡ: M, Màu sắc: Đỏ, Số lượng: 20</li>
                  <li>Kích cỡ: M, Màu sắc: Đỏ, Số lượng: 30</li>
                </ul>
              </td>
              <td>Sửa | Xóa</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Áo</td>
              <td>100</td>
              <td>
                <img
                  src="https://res.cloudinary.com/dgfwiff6k/image/upload/v1717990031/test_folder/cvxbxxrrj88h70kzdb4r.webp"
                  width="100px"
                  alt=""
                />
              </td>
              <td>
                <ul>
                  <li>Kích cỡ: M, Màu sắc: Đỏ, Số lượng: 10</li>
                  <li>Kích cỡ: M, Màu sắc: Đỏ, Số lượng: 20</li>
                  <li>Kích cỡ: M, Màu sắc: Đỏ, Số lượng: 30</li>
                </ul>
              </td>
              <td>Sửa | Xóa</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Áo</td>
              <td>100</td>
              <td>
                <img
                  src="https://res.cloudinary.com/dgfwiff6k/image/upload/v1717990031/test_folder/cvxbxxrrj88h70kzdb4r.webp"
                  width="100px"
                  alt=""
                />
              </td>
              <td>
                <ul>
                  <li>Kích cỡ: M, Màu sắc: Đỏ, Số lượng: 10</li>
                  <li>Kích cỡ: M, Màu sắc: Đỏ, Số lượng: 20</li>
                  <li>Kích cỡ: M, Màu sắc: Đỏ, Số lượng: 30</li>
                </ul>
              </td>
              <td>Sửa | Xóa</td>
            </tr>
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
};
</script>

<style></style>
