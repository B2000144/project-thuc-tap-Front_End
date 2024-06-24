<template>
  <div class="wrapper">
    <Slider />

    <div class="main">
      <Nav />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script>
import Slider from "../components/admin/Slider.vue";
import Main from "../components/admin/Main.vue";
import Nav from "../components/admin/Nav.vue";
import Footer from "../components/admin/Footer.vue";
export default {
  name: "Dashboard",
  components: {
    Slider,
    Main,
    Nav,
    Footer,
  },
};
</script>

<style></style>
