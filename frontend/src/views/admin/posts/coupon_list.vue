<template>
    <div class="container-fluid">
                <!-- Place your content here -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Coupons</h3>
                            </div>
                            <div class="card-body">
                            <div class="d-flex justify-content-between mt-4">
                                    <div class="search-items">
                                        <form method="GET">
                                            <input class="input-search mb-3" type="search" name="search" id="search"
                                                placeholder="Tìm kiếm" style="height: 35px;">
                                            <button type="submit" class="btn btn-dark bg-gradient text-white"
                                                style="height: 35px">Search</button>
                                        </form>
                                    </div>
                                    <div class="add-category">
                                        <a href="/admin/coupons/coupon_add" class="btn btn-primary px-4 mb-3 mx-5 py-2">Thêm giảm giá</a>
                                    </div>
                                </div>
                                <table class="table" style="width: 100%;">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Tên</th>
                                            <th>Mã giảm giá</th>
                                            <th>Số lượng</th>
                                            <th>Giảm giá</th>
                                            <th>Ngày bắt đầu</th>
                                            <th>Ngày kết thúc</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <tr v-for="coupon in coupons" :key="coupon.idCoupon">
                                            <td>{{ coupon.idCoupon }}</td>
                                            <td>{{ coupon.nameCoupon }}</td>
                                            <td>{{ coupon.codeCoupon }}</td>
                                            <td>{{ coupon.quantityCoupon }}</td>
                                            <td>{{ coupon.discount }} %</td>
                                            <td>{{ coupon.startDate }}</td>
                                            <td>{{ coupon.endDate }}</td>
                                            <td>
                                                <div class="action">
                                                  <a :href="`/admin/coupons/coupon_update/${coupon.idCoupon}`"
                                                     class="update_product text-decoration-none fw-bold mx-2"><i class="fs-5 fa-solid fa-pen-nib"></i></a>
                                                  <a href="#" class="remove_categories fw-bold text-danger text-decoration-none" 
                                                     @click="deleteCoupon(coupon.idCoupon)"><i class="fs-5 fa-solid fa-trash-can"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'coupon_list',

    data() {
      return {
        coupons: [],          // Mảng chứa danh sách người dùng
        searchQuery: '',    // Biến lưu trữ từ khóa tìm kiếm
        error: false,       // Cờ kiểm tra lỗi khi tải người dùng
      }; 
    },
  
    mounted() {
      this.fetchCoupons();
    },
  
    methods: {
      // Lấy danh sách người dùng
      fetchCoupons() {
        axios.get('http://localhost/demoProject/backend/public/index.php/api/coupons')
          .then(response => {
            this.coupons = response.data;
          })
          .catch(error => {
            console.error("Lỗi khi tải danh sách danh mục:", error);
            this.error = true;
          });
      },
  
      // Phương thức tìm kiếm người dùng
      searchCoupons() {
        if (this.searchQuery) {
          axios.get(`http://localhost/demoProject/backend/public/index.php/api/coupons/search?query=${this.searchQuery}`)
            .then(response => {
              this.coupons = response.data;
            })
            .catch(error => {
              console.error("Lỗi khi tìm kiếm danh mục:", error);
              this.error = true;
            });
        } else {
          this.fetchCoupons();
        }
      },
  
      // Phương thức xóa người dùng
      deleteCoupon(idCoupon) {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa mã giảm giá này?");
          
        if (confirmDelete) {
          axios.delete(`http://localhost/demoProject/backend/public/index.php/api/coupons/${idCoupon}`)
            .then(() => {
              this.coupons = this.coupons.filter(coupon => coupon.idCoupon !== idCoupon);
              alert("Xóa mã giảm giá thành công!");
            })
            .catch(error => {
              console.error("Lỗi khi xóa danh mục:", error);
              alert("Lỗi khi xóa danh mục!");
            });
        } else {
          return;
        }
      },
    }
  };
  </script>