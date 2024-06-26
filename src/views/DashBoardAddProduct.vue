<template>
  <div class="wrapper">
    <Slider />
    <div class="main">
      <Nav />
      <main class="content px-3 py-2">
        <div class="container-fluid">
          <h1>Thêm sản phẩm</h1>
          <p>Bạn muốn thêm sản phẩm thuộc danh mục nào?</p>
          <button>Quần áo</button>
          <button>Thức ăn</button>
          <button>Điện thoại</button>
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
  name: "DashboardAddProduct",
  components: {
    Slider,
    Nav,
    Footer,
  },
};
</script>

<style></style>
