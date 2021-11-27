import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";
import Daftar from "@/components/Daftar.vue";
import Login from "@/components/Login.vue";
import aksesoris from "@/components/aksesoris.vue";
import elektronik from "@/components/elektronik.vue";
import fashionMuslim from "@/components/fashionMuslim.vue";
import fashionPria from "@/components/fashionPria.vue";
import fashionWanita from "@/components/fashionWanita.vue";
import hp from "@/components/hp.vue";
import ibuDanAnak from "@/components/ibuDanAnak.vue";
import mart from "@/components/mart.vue";
import scincare from "@/components/scincare.vue";

Vue.use(Router);

function configRoutes() {
  return [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/register",
      name: "Daftar",
      component: Daftar,
    },
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
    {
      path: "/aksesoris",
      name: "aksesoris",
      component: aksesoris,
    },
    {
      path: "/elektronik",
      name: "elektronik",
      component: elektronik,
    },
    {
      path: "/fashionMuslim",
      name: "fashionMuslim",
      component: fashionMuslim,
    },
    {
      path: "/fashionPria",
      name: "fashionPria",
      component: fashionPria,
    },
    {
      path: "/fashionWanita",
      name: "fashionWanita",
      component: fashionWanita,
    },
    {
      path: "/hp",
      name: "hp",
      component: hp,
    },
    {
      path: "/ibuDanAnak",
      name: "ibuDanAnak",
      component: ibuDanAnak,
    },
    {
      path: "/mart",
      name: "mart",
      component: mart,
    },
    {
      path: "/scincare",
      name: "scincare",
      component: scincare,
    },
  ];
}

const link = new Router({
  mode: "history",
  routes: configRoutes(),
});
export default link;
