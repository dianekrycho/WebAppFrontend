
import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login-view.vue";
import Welcome from "../views/Welcome-view.vue";
import Register from "../views/Register-view.vue";
import Get_Locations from "../views/Get-Locations-view.vue";
import Show_Locations from "../views/Show-Locations-view.vue";
import LocationDetails from "../views/locationDetail.vue"



const router = createRouter({
  history : createWebHistory(),
  routes:[
    {
      path: "/",
      name: "Welcome",
      component: Welcome,
    },
    {
      path: "/Show-Locations",
      name: "Show-Locations",
      component: Show_Locations, 
    },
    {
      path: '/LocationDetails/:Id',
      component: LocationDetails },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/locations",
      name: "Locations",
      component: Get_Locations,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
  ]
})

export default router;