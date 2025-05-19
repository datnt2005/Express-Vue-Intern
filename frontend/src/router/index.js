import { createRouter, createWebHistory } from 'vue-router';
import ProductDetail from '../views/client/ProductDetail.vue';
import HomePage from '../views/client/index.vue';
import ProductShopping from '../views/client/ProductShopping.vue';
import ProductList from '../views/admin/products/product_list.vue';
import ShoppingCart from '../views/client/ShoppingCart.vue';
import OrderCheckout from '../views/client/OrderCheckout.vue';
import AdminDashboard from '../views/admin/AdminDashboard.vue';
import AdminSettings from '../views/admin/AdminSettings.vue';
import CategoryList from '../views/admin/categories/category_list.vue';
import SubCategoryList from '../views/admin/subCategories/subCategory_list.vue';
import OrderList from '../views/admin/orders/order_list.vue';
import UserList from '../views/admin/users/user_list.vue';
import CommentList from '../views/admin/comments/comment_list.vue';
import CouponList from '../views/admin/coupons/coupon_list.vue';
import UserAdd from '../views/admin/users/user_add.vue';
import ImageUpload from '../views/admin/uploads/ImageUpload.vue';
import ListImageUpload from '../views/admin/uploads/list_Image.vue';
import UserUpdate from '../views/admin/users/user_update.vue';
import CategoryAdd from '../views/admin/categories/category_add.vue';
import CategoryUpdate from '../views/admin/categories/category_update.vue';
import SubCategoryAdd from '../views/admin/subCategories/subCategory_add.vue';
import SubCategoryUpdate from '../views/admin/subCategories/subCategory_update.vue';
import CouponAdd from '../views/admin/coupons/coupon_add.vue';
import CouponUpdate from '../views/admin/coupons/coupon_update.vue';
import AppLogin from '../views/client/auth/AppLogin.vue';
import AppRegister from '../views/client/auth/AppRegister.vue';
import ForgotPassword from '../views/client/auth/ForgotPassword.vue';
import ResetPassword from '../views/client/auth/ResetPassword.vue';
import AccountInformation from '../views/client/auth/AccounInformation.vue';
import Favorite from '../views/client/Favorite.vue';

const routes = [
  {
    path: '/admin/list_imageUpload',
    name: 'ListImageUpload',
    component: ListImageUpload
  },
  {
    path: '/admin/products',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/login',
    name: 'AppLogin',
    component: AppLogin
  },
  {
    path: '/register',
    name: 'AppRegister',
    component: AppRegister
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/account-information',
    name: 'AccountInformation',
    component: AccountInformation
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: '/shop',
    name: 'ProductShopping',
    component: ProductShopping
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/checkout',
    name: 'OrderCheckout',
    component: OrderCheckout
  },
  {
    path: '/product/:idProduct',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard,
    // meta: { requiresAdmin: true }, 
  },
  {
    path: '/admin/categories',
    name: 'CategoryList',
    component: CategoryList
  },
  {
    path: '/admin/categories/category_add',
    name: 'CategoryAdd',
    component: CategoryAdd
  },
  {
    path: '/admin/categories/category_update/:idCategory',
    name: 'CategoryUpdate',
    component: CategoryUpdate
  },
  {
    path: '/admin/sub-categories',
    name: 'SubCategoryList',
    component: SubCategoryList
  },
  {
    path: '/admin/sub-categories/subCategory_add',
    name: 'subCategory-add',
    component: SubCategoryAdd
  },
  {
    path: '/admin/sub-categories/subCategory_update/:idSubCategory',
    name: 'subCategory-update',
    component: SubCategoryUpdate
  },
  {
    path: '/admin/coupons/coupon_add',
    name: 'coupon-add',
    component: CouponAdd
  },
  {
    path: '/admin/coupons/coupon_update/:idCoupon',
    name: 'coupon-update',
    component: CouponUpdate
  },
  {
    path: '/admin/orders',
    name: 'OrderList',
    component: OrderList
  },
  {
    path: '/admin/users',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/admin/users/add_user',
    name: 'UserAdd',
    component: UserAdd
  },
  {
    path: '/admin/users/update_user/:idUser',
    name: 'user_update',
    component: UserUpdate
  },
  {
    path: '/admin/comments',
    name: 'CommentList',
    component: CommentList
  },
  {
    path: '/admin/coupons',
    name: 'CouponList',
    component: CouponList
  },
  {
    path: '/admin/imageUpload',
    name: 'ImageUpload',
    component: ImageUpload
  },
  {
    path: '/admin/settings',
    name: 'AdminSettings',
    component: AdminSettings
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

// router.beforeEach((to, from, next) => {
//   const user = JSON.parse(localStorage.getItem('user')); // Lấy thông tin user từ localStorage (hoặc từ Vuex nếu dùng Vuex)

//   if (to.meta.requiresAdmin) {
//     if (!user || user.role !== 'admin') {
//       alert('Bạn không có quyền truy cập trang này!');
//       next('/login'); // Đá về trang login
//     } else {
//       next(); // Tiếp tục truy cập
//     }
//   } else {
//     next(); // Không cần kiểm tra quyền
//   }
// });
export default router;
