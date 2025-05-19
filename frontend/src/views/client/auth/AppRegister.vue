<template>
  <div class="container form pt-5">
    <div class="row">
      <div class="col-md-6">
        <div class="form_login image">
          <img src="../../../assets/images/image-in-form.jpeg" alt="" class="w-100"
            style="height: 650px; object-fit: cover; object-position: center; " />
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-register">
          <h2 class="fs-3 fw-bold text-center ">ĐĂNG KÍ</h2>
          <p class="text-center ">Đăng kí để có những trải nghiệm tốt nhất của cửa hàng chúng tôi</p>

          <form @submit.prevent="handleSubmit" class="mt-4">
            <!-- Name -->
            <div class="mt-3">
              <label class="form-label m-0 fs-6">
                Tên <span class="text-danger">*</span>
              </label>
              <input type="text" v-model="form.name" class="input-value form-control d-block w-100"
                placeholder="Nhập tên" :class="{ 'is-invalid': errors.name }" />
              <!-- <div v-if="errors.emailOrUsername" class="invalid-feedback">
                {{ errors.emailOrUsername }}
              </div> -->
            </div>
            <!-- Email -->
            <div class="email-phone mt-3">
              <label class="form-label m-0 fs-6">
                Email <span class="text-danger">*</span>
              </label>
              <input type="text" v-model="form.emailOrUsername" class="input-value form-control d-block w-100"
                placeholder="Nhập Email" :class="{ 'is-invalid': errors.emailOrUsername }" />
              <!-- <div v-if="errors.emailOrUsername" class="invalid-feedback">
                {{ errors.emailOrUsername }}
              </div> -->
            </div>
            <div class="password mt-3">
              <label class="form-label m-0 fs-6">
                Mật khẩu <span class="text-danger">*</span>
              </label>
              <input type="text" v-model="form.password" class="input-value form-control d-block w-100"
                placeholder="Nhập mật khẩu" :class="{ 'is-invalid': errors.password }" />
              <!-- <div v-if="errors.emailOrUsername" class="invalid-feedback">
                {{ errors.emailOrUsername }}
              </div> -->
            </div>
            
            <button type="submit" class="btn btn-submit text-white fw-bold w-100 mt-4">
              {{ isLoading ? "Đang xử lý..." : "ĐĂNG KÍ" }}
            </button>
            <div v-if="errorMessage" class="text-danger text-center mt-3">
              {{ errorMessage }}
            </div>
            <div v-if="successMessage" class="text-success text-center mt-3">
              {{ successMessage }}
            </div>
          </form>
          <p class="mt-3  text-end">
            Bạn đã có tài khoản? <router-link to="/login" class="text-warning text-decoration-none">Đăng
              nhập</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AppRegister",
  data() {
    return {

      form: {
        name: '',
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        phone: ''
      },
      errors: {},
      isLoading: false
    };
  },
  // Handle form submission
  methods: {
    validateForm() {
      this.errors = {};
      let valid = true;

      if (!this.form.name) {
        this.errors.name = "Tên không được để trống";
        valid = false;
      }

      if (!this.form.username) {
        this.errors.username = "Tên đăng nhập không được để trống";
        valid = false;
      }

      if (!this.form.email) {
        this.errors.email = "Email không được để trống";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(this.form.email)) {
        this.errors.email = "Email không hợp lệ";
        valid = false;
      }

      if (!this.form.password) {
        this.errors.password = "Mật khẩu không được để trống";
        valid = false;
      }

      if (!this.form.passwordConfirm) {
        this.errors.passwordConfirm = "Xác nhận mật khẩu không được để trống";
        valid = false;
      } else if (this.form.password !== this.form.passwordConfirm) {
        this.errors.passwordConfirm = "Mật khẩu xác nhận không khớp";
        valid = false;
      }

      if (!this.form.phone) {
        this.errors.phone = "Số điện thoại không được để trống";
        valid = false;
      } else if (!/^\d{10,11}$/.test(this.form.phone)) {
        this.errors.phone = "Số điện thoại không hợp lệ";
        valid = false;
      }

      return valid;
    },

    handleSubmit() {
      if (!this.validateForm()) return;

      this.isLoading = true;

      // Tạo payload
      const formData = {
        username: this.form.username,
        phone: this.form.phone,
        email: this.form.email,
        role: 'user', // Giá trị mặc định
        status: 'Đang hoạt động', // Giá trị mặc định
        image: 'uploads/default.jpg', // Giá trị mặc định
        password: this.form.password,
        name: this.form.name,
        token: "0",
        otpCreated: "0000-00-00 00:00:00",
        otp: "0"
      };

      // Gửi yêu cầu POST
      axios
        .post('http://localhost/demoproject/backend/public/index.php/api/users', formData)
        .then(response => {
          alert('Đăng ký thành công!');
          console.log(response.data);
          // Reset lại form
          this.form = {
            name: '',
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            phone: ''
          };

          // Làm sạch các lỗi trước đó (nếu có)
          this.errors = {};
        })
        .catch(error => {
          alert(error.response?.data?.message || 'Đã xảy ra lỗi.');
          console.error(error.response?.data);
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
}

</script>
<style scoped>
.btn-submit {
    font-size: 1.1rem;
    /* padding: 12px; */
    background-color: #333333;
    color: white !important;
    height: 45px;
    text-align: center;
    transition: background-color 0.3s;
}

.form-register {
    padding: 30px;
}
</style>