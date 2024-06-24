import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import getCookieValue from "../utils/getCookie";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/shop",
    name: "ShopView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ShopView.vue"),
  },
  {
    path: "/:patchMatch(.*)*",
    name: "404View",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/404View.vue"),
  },
  {
    path: "/cart",
    name: "CartView",
    meta: {
      requiredAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CartView.vue"),
  },
  {
    path: "/checkout",
    name: "CheckOutView",
    meta: {
      requiredAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CheckoutView.vue"),
  },

  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },

  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },

  {
    path: "/otp",
    name: "OTP",
    component: () => import(/* webpackChunkName: "about" */ "../views/OTP.vue"),
  },

  {
    path: "/otp/reset",
    name: "resetOTP",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EmailOTP.vue"),
  },

  {
    path: "/userinformation",
    name: "UserInformation",
    meta: {
      requiredAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UserInformation.vue"),
  },
  {
    path: "/shop/detail/:id",
    name: "UserDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetailProductView.vue"),
  },
  {
    path: "/thanks",
    name: "ThankPayment",
    meta: {
      requiredAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CompletePayment.vue"),
  },
  {
    path: "/checkout/paymentMethods",
    name: "paymentMethod",
    meta: {
      requiredAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/paymentMethod.vue"),
  },
  {
    path: "/admin",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashBoard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (to.meta.requiredAuth) {
    const token = getCookieValue("access_token");
    if (token) {
      next();
    } else {
      next("/login");
    }
  }
  next();
});
export default router;
