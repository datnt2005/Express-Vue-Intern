<template>
  <div id="sidebar-wrapper" class="admin-sideba">
    <nav class="admin-sidebar px-1">
      <ul class="sidebar-nav mt-3 mb-5 menu">
        <li class="logo-admin">
          <router-link to="/admin" class="m-3 text-white" active-class="active">
            <img src="../assets/images/logo.webp" width="30" class="me-1 mx-3" alt=""> TDSHOP
          </router-link>
        </li> 
        <li class="menu-item">
          <router-link to="/admin" class="menu-link" active-class="active">
            <i class="fas fa-tachometer-alt me-2"></i> Trang chủ
          </router-link>
        </li> 
        
        <li class="menu-item" :class="{ 'active': isMenuActive('posts') }">
          <a href="#" class="menu-link justify-content-between" @click.prevent="toggleMenu('posts')">
            <span><i class="fa-solid fa-pen-nib me-2"></i>Bài viết</span>
            <span class="arrow" style="font-size: 0.6rem;" :class="{'open': activeMenu === 'posts'}">▼</span>
          </a>
          <ul class="submenu" v-show="activeMenu === 'posts'">
            <li><router-link to="/admin/posts" active-class="active">Danh sách bài viết</router-link></li>
            <li><router-link to="/admin/add-post" active-class="active">Thêm bài viết</router-link></li>
            <li><router-link to="/admin/categories-posts" active-class="active">Danh mục bài viết</router-link></li>
          </ul>
        </li>

        <li class="menu-item" :class="{ 'active': isMenuActive('products') }">
          <a href="#" class="menu-link justify-content-between" @click.prevent="toggleMenu('products')">
            <span><i class="fas fa-boxes me-2"></i>Sản phẩm</span>
            <span class="arrow" style="font-size: 0.6rem;" :class="{'open': activeMenu === 'products'}">▼</span>
          </a>
          <ul class="submenu" v-show="activeMenu === 'products'">
            <li><router-link to="/admin/products" active-class="active">Danh sách sản phẩm</router-link></li>
            <li><router-link to="/admin/products/add" active-class="active">Thêm sản phẩm</router-link></li>
            <li><router-link to="/admin/categories" active-class="active">Danh mục sản phẩm</router-link></li>
            <li><router-link to="/admin/sizes" active-class="active">Biến thể</router-link></li>
          </ul>
        </li>

        <li class="menu-item" :class="{ 'active': isMenuActive('users') }">
          <a href="#" class="menu-link justify-content-between" @click.prevent="toggleMenu('users')">
            <span><i class="fas fa-users me-2"></i>Người dùng</span>
            <span class="arrow" style="font-size: 0.6rem;" :class="{'open': activeMenu === 'users'}">▼</span>
          </a>
          <ul class="submenu" v-show="activeMenu === 'users'">
            <li><router-link to="/admin/users" active-class="active">Tất cả người dùng</router-link></li>
            <li><router-link to="/admin/users/add" active-class="active">Thêm người dùng</router-link></li>
          </ul>
        </li>

        <li class="menu-item" :class="{ 'active': isMenuActive('orders') }">
          <a href="#" class="menu-link justify-content-between" @click.prevent="toggleMenu('orders')">
            <span><i class="fas fa-shopping-cart me-2"></i>Đơn hàng</span>
            <span class="arrow" style="font-size: 0.6rem;" :class="{'open': activeMenu === 'orders'}">▼</span>
          </a>
          <ul class="submenu" v-show="activeMenu === 'orders'">
            <li><router-link to="/admin/orders" active-class="active">Tất cả đơn hàng</router-link></li>
            <li><router-link to="/admin/orders/add" active-class="active">Chờ xác nhận</router-link></li>
            <li><router-link to="/admin/orders/pending" active-class="active">Chưa thanh toán</router-link></li>
          </ul>
        </li>

        <li class="menu-item" :class="{ 'active': isMenuActive('comments') }">
          <a href="#" class="menu-link justify-content-between" @click.prevent="toggleMenu('comments')">
            <span><i class="fas fa-comments me-2"></i>Bình luận</span>
            <span class="arrow" style="font-size: 0.6rem;" :class="{'open': activeMenu === 'comments'}">▼</span>
          </a>
          <ul class="submenu" v-show="activeMenu === 'comments'">
            <li><router-link to="/admin/comments" active-class="active">Tất cả bình luận</router-link></li>
            <li><router-link to="/admin/comments/add" active-class="active">Thêm bình luận</router-link></li>
          </ul>
        </li>

        <li class="menu-item" :class="{ 'active': isMenuActive('coupons') }">
          <a href="#" class="menu-link justify-content-between" @click.prevent="toggleMenu('coupons')">
            <span><i class="fas fa-tags me-2"></i>Mã giảm giá</span>
            <span class="arrow" style="font-size: 0.6rem;" :class="{'open': activeMenu === 'coupons'}">▼</span>
          </a>
          <ul class="submenu" v-show="activeMenu === 'coupons'">
            <li><router-link to="/admin/coupons" active-class="active">Tất cả mã giảm giá</router-link></li>
            <li><router-link to="/admin/coupons/add" active-class="active">Thêm mã giảm giá</router-link></li>
          </ul>
        </li>

        <li class="menu-item" :class="{ 'active': isMenuActive('banners') }">
          <a href="#" class="menu-link justify-content-between" @click.prevent="toggleMenu('banners')">
            <span><i class="fas fa-image me-2"></i>Banners</span>
            <span class="arrow" style="font-size: 0.6rem;" :class="{'open': activeMenu === 'banners'}">▼</span>
          </a>
          <ul class="submenu" v-show="activeMenu === 'banners'">
            <li><router-link to="/admin/banners" active-class="active">Tất cả banner</router-link></li>
            <li><router-link to="/admin/banners/add" active-class="active">Thêm banner</router-link></li>
          </ul>
        </li>
        
        <li class="menu-item">
          <router-link to="/admin/settings" class="menu-link" active-class="active">
            <i class="fas fa-cogs me-2"></i> Cài đặt
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeMenu: null,
    };
  },
  methods: {
    toggleMenu(menu) {
      this.activeMenu = this.activeMenu === menu ? null : menu;
    },
    isMenuActive(menu) {
      const routePath = this.$route.path;
      const menuRoutes = {
        posts: ['/admin/posts', '/admin/add-post', '/admin/categories-posts'],
        products: ['/admin/products', '/admin/products/add', '/admin/categories', '/admin/sizes'],
        users: ['/admin/users', '/admin/users/add'],
        orders: ['/admin/orders', '/admin/orders/add', '/admin/orders/pending'],
        comments: ['/admin/comments', '/admin/comments/add'],
        coupons: ['/admin/coupons', '/admin/coupons/add'],
        banners: ['/admin/posts', '/admin/add-post'], // Điều chỉnh nếu route khác
      };
      return menuRoutes[menu]?.some(route => routePath.startsWith(route));
    },
  },
};
</script>
<style scoped>
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  margin-bottom: 5px;
}

.menu-link {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  color: #cecece;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
  height: 40px;
  border-left: 5px solid transparent;
}

.menu-link:hover {
  border-left-color: #007cba;
  color: #007cba;
}

/* Menu chính khi active */
.menu-item.active .menu-link {
  background-color: #007cba; /* Màu xanh dương */
  color: #fff; /* Chữ trắng */
  border-left-color: #007cba;
}

.submenu {
  list-style: none;
  background: #2C3338;
  align-items: center;
}

.submenu li:first-child {
  border-top: none;
}

.submenu a {
  padding: 10px 15px;
  color: #d4d4d4;
  text-decoration: none;
  display: block;
  border-left: 5px solid transparent;
}

.submenu a:hover {
  border-left-color: #007cba;
  color: #007cba;
}

/* Submenu khi active */
.submenu a.active {
  color: #fff; /* Chữ trắng */
  font-weight: bold; /* Chữ đậm */
}

.arrow {
  transition: transform 0.3s;
}

.arrow.open {
  transform: rotate(180deg);
}
</style>