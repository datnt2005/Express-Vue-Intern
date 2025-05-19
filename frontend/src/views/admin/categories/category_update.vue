<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Cập nhật người dùng</h3>
                    </div>
                    <div class="card-body p-4 bg-light">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <h1 class="mt-4">Cập nhật thông tin người dùng</h1>
                                <form @submit.prevent="handleSubmit" >
                                    <!-- Tên -->
                                    <div class="nameCategory mb-3">
                                        <label for="nameCategory">Tên</label>
                                        <input type="text" v-model="form.nameCategory" id="nameCategory" class="form-control"
                                            :class="{ 'is-invalid': errors.nameCategory }">
                                        <div v-if="errors.nameCategory" class="invalid-feedback">{{ errors.nameCategory }}</div>
                                    </div>
                                   
                                    <!-- Submit -->
                                    <div class="d-flex justify-content-between mt-3">
                                        <a href="/admin/categories/" class="return btn text-white btn-dark bg-gradient">
                                            <i class="fa-solid fa-right-from-bracket deg-180"></i> Quay lại
                                        </a>
                                        <button type="submit" class="btn btn-dark bg-gradient text-white">Cập nhật danh mục</button>
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
  name: 'category_update',
  data() {
    return {
      form: {
        nameCategory: '',
      },
      errors: {},
    };
  },
  methods: {
    getIdApi() {
    return this.$route.params.idCategory;
    },
    
    async loadCategoryData() {
      const CategoryId = this.getIdApi();  // Lấy ID từ query string trong URL
      try {
        const { data } = await axios.get(`http://localhost/demoproject/backend/public/index.php/api/categories/${CategoryId}`);
        this.form = { ...data };
      } catch (error) {
        console.error(error);
        alert("Không thể tải thông tin người dùng.");
      }
    },
    async handleSubmit() {
      this.errors = {};
      let valid = true;

      // Validate form fields
      if (!this.form.nameCategory) {
        this.errors.nameCategory = " Danh mục không được bỏ trống";
        valid = false;
      }
    
      if (!valid) {
        return;
      }

      try {
        const CategoryId = this.getIdApi();
        await axios.put(`http://localhost/demoproject/backend/public/index.php/api/categories/${CategoryId}`, this.form);
        alert("Cập nhật danh mục thành công!");
        console.log(this.form);
        this.$router.push('/admin/categories');
      } catch (error) {
        console.error(error);
        alert("Đã xảy ra lỗi khi cập nhật người dùng.");
      }
    }
  },
  created() {
    this.loadCategoryData();  // Lấy dữ liệu người dùng khi component được tạo
  }
};
</script>