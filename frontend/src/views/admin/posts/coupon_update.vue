<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Coupons</h3>
                    </div>
                    <div class="card-body p-4 bg-light">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <h1 class="mt-4">Cập nhật thông tin mã giảm giá</h1>
                                <form @submit.prevent="handleSubmit">
                                    <!-- Tên mã giảm giá -->
                                    <div class="mb-3">
                                        <label for="nameCoupon">Tên mã giảm giá</label>
                                        <input 
                                            type="text" 
                                            v-model="form.nameCoupon" 
                                            id="nameCoupon" 
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.nameCoupon }">
                                        <div v-if="errors.nameCoupon" class="invalid-feedback">{{ errors.nameCoupon }}</div>
                                    </div>

                                    <!-- Mã giảm giá -->
                                    <div class="mb-3">
                                        <label for="codeCoupon">Mã giảm giá</label>
                                        <input 
                                            type="text" 
                                            v-model="form.codeCoupon" 
                                            id="codeCoupon" 
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.codeCoupon }">
                                        <div v-if="errors.codeCoupon" class="invalid-feedback">{{ errors.codeCoupon }}</div>
                                    </div>

                                    <!-- Số lượng -->
                                    <div class="mb-3">
                                        <label for="quantityCoupon">Số lượng</label>
                                        <input 
                                            type="number" 
                                            v-model="form.quantityCoupon" 
                                            id="quantityCoupon" 
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.quantityCoupon }">
                                        <div v-if="errors.quantityCoupon" class="invalid-feedback">{{ errors.quantityCoupon }}</div>
                                    </div>
                                    <!-- Giảm giá -->
                                    <div class="mb-3">
                                        <label for="discount">Phần trăm giảm giá</label>
                                        <input 
                                            type="number" 
                                            v-model="form.discount" 
                                            id="discount" 
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.discount }">
                                        <div v-if="errors.discount" class="invalid-feedback">{{ errors.discount }}</div>
                                    </div>

                                    <!-- Ngày bắt đầu -->
                                    <div class="mb-3">
                                        <label for="startDate">Ngày bắt đầu</label>
                                        <input 
                                            type="date" 
                                            v-model="form.startDate" 
                                            id="startDate" 
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.startDate }">
                                        <div v-if="errors.startDate" class="invalid-feedback">{{ errors.startDate }}</div>
                                    </div>

                                    <!-- Ngày kết thúc -->
                                    <div class="mb-3">
                                        <label for="endDate">Ngày kết thúc</label>
                                        <input 
                                            type="date" 
                                            v-model="form.endDate" 
                                            id="endDate" 
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.endDate }">
                                        <div v-if="errors.endDate" class="invalid-feedback">{{ errors.endDate }}</div>
                                    </div>                                 

                                    <!-- Submit -->
                                    <div class="d-flex justify-content-between mt-3">
                                        <a href="/admin/coupons/" class="return btn text-white btn-dark bg-gradient">
                                            <i class="fa-solid fa-right-from-bracket deg-180"></i> Quay lại
                                        </a>
                                        <button type="submit" class="btn btn-dark bg-gradient text-white">Cập nhật mã</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'coupon_update',
  data() {
    return {
      form: {
        nameCoupon: '',
        codeCoupon: '',
        discount: '',
        startDate: '',
        endDate: '',
        quantityCoupon: ''
      },
      errors: {}
    };
  },
  methods: {
    // Lấy ID từ URL
    getIdApi() {
      return this.$route.params.idCoupon;
    },

    // Tải thông tin mã giảm giá
    async loadCouponData() {
      const couponId = this.getIdApi();
      try {
        const { data } = await axios.get(`http://localhost/demoproject/backend/public/index.php/api/coupons/${couponId}`);
        this.form = { ...data };
      } catch (error) {
        console.error(error);
        alert("Không thể tải thông tin mã giảm giá.");
      }
    },

    // Submit form
    async handleSubmit() {
      this.errors = {};
      let valid = true;

      // Validate các trường
      if (!this.form.nameCoupon) {
        this.errors.nameCoupon = "Tên mã giảm giá không được để trống";
        valid = false;
      }
      if (!this.form.codeCoupon) {
        this.errors.codeCoupon = "Mã giảm giá không được để trống";
        valid = false;
      }
      if (!this.form.discount) {
        this.errors.discount = "Phần trăm giảm giá không được để trống";
        valid = false;
      }
      if (!this.form.startDate) {
        this.errors.startDate = "Ngày bắt đầu không được để trống";
        valid = false;
      }
      if (!this.form.endDate) {
        this.errors.endDate = "Ngày kết thúc không được để trống";
        valid = false;
      }
      if (!this.form.quantityCoupon) {
        this.errors.quantityCoupon = "Số lượng không được để trống";
        valid = false;
      }

      if (!valid) return;

      try {
        const couponId = this.getIdApi();
        await axios.put(`http://localhost/demoproject/backend/public/index.php/api/coupons/${couponId}`, this.form);
        alert("Cập nhật mã giảm giá thành công!");
        this.$router.push('/admin/coupons');
        console.log(this.form);
        
    } catch (error) {
        console.error(error);
        alert("Đã xảy ra lỗi khi cập nhật mã giảm giá.");
      }
    }
  },
  created() {
    this.loadCouponData();
  }
};
</script>
