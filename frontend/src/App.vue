<template>
  <div id="app">
    <!-- Kiểm tra nếu là trang admin -->
    <div v-if="isAdminPage" class="wrapper">
      <sidebar-component></sidebar-component>
      <div id="content">
        <nav-component></nav-component>
        <router-view></router-view> 
      </div>
    </div>
    <!-- Các trang khác -->
    <div v-else class="app">
      <header-component></header-component>
      <router-view></router-view>
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/AppHeader.vue';
import FooterComponent from './components/AppFooter.vue';
import SidebarComponent from './components/AppSidebar.vue';
import NavComponent from './components/AppNav.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavComponent,
  },
  computed: {
    isAdminPage() {
      // Kiểm tra đường dẫn, nếu là trang admin thì trả về true
      return this.$route.path.startsWith('/admin');
    },
  },
};
</script>

<style scoped>
/* Định dạng cho layout admin */
.admin {
  display: flex;
}
</style>
