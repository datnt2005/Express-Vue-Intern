<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Subcategories</h3>
                    </div>
                    <div class="card-body p-4 bg-light">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <h1 class="mt-4">Cập nhật danh mục con</h1>
                                <form @submit.prevent="handleSubmit">
                                    <!-- Tên -->
                                    <div class="nameSubCategory mb-3">
                                        <label for="nameSubCategory">Tên danh mục con</label>
                                        <input type="text" v-model="form.nameSubCategory" id="nameSubCategory"
                                            class="form-control" :class="{ 'is-invalid': errors.nameSubCategory }">
                                        <div v-if="errors.nameSubCategory" class="invalid-feedback">
                                            {{ errors.nameSubCategory }}
                                        </div>
                                    </div>

                                    <!-- Nhóm danh mục -->
                                    <div class="idCategory mb-3">
                                        <label for="idCategory">Nhóm danh mục</label>
                                        <select v-model="form.idCategory" id="idCategory" class="form-control"
                                            :class="{ 'is-invalid': errors.idCategory }">
                                            <option value="">-- Chọn nhóm danh mục --</option>
                                            <option v-for="category in categories" :key="category.idCategory"
                                                :value="category.idCategory">
                                                {{ category.nameCategory }}
                                            </option>
                                        </select>
                                        <div v-if="errors.idCategory" class="invalid-feedback">{{ errors.idCategory }}
                                        </div>
                                    </div>

                                    <!-- Buttons -->
                                    <div class="d-flex justify-content-between mt-3">
                                        <a href="/admin/sub-categories/" class="return btn text-white btn-dark bg-gradient">
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
import axios from "axios";

export default {
    name: "subcategory_update",
    data() {
        return {
            form: {
                nameSubCategory: "",
                idCategory: "",
            },
            categories: [],
            errors: {},
        };
    },
    mounted() {
        this.fetchCategories();
        this.loadSubCategoryData();
    },
    methods: {
        // Lấy danh sách danh mục chính
        getIdApi() {
    return this.$route.params.idSubCategory;
    },
        async fetchCategories() {
            try {
                const response = await axios.get(
                    "http://localhost/demoproject/backend/public/index.php/api/categories"
                );
                this.categories = response.data;
            } catch (error) {
                console.error("Lỗi khi tải danh sách nhóm danh mục:", error);
            }
        },

        // Lấy thông tin danh mục con hiện tại
        async loadSubCategoryData() {
            const subCategoryId = this.getIdApi();
            try {
                const { data } = await axios.get(
                    `http://localhost/demoproject/backend/public/index.php/api/subCategories/${subCategoryId}`
                );
                this.form = { ...data };

            } catch (error) {
                alert("Không thể tải thông tin danh mục con.");
                console.error(error);
            }
        },

        async handleSubmit() {
      this.errors = {};
      let valid = true;

      // Validate form fields
      if (!this.form.nameSubCategory) {
        this.errors.nameSubCategory = " Danh mục không được bỏ trống";
        valid = false;
      }
      if (!this.form.idCategory) {
        this.errors.idCategory = "Nhóm danh mục không được bỏ trống";
        valid = false;
      }
    
      if (!valid) {
        return;
      }

      try {
        const subCategoryId = this.getIdApi();
        await axios.put(`http://localhost/demoproject/backend/public/index.php/api/subCategories/${subCategoryId}`, this.form);
        alert("Cập nhật danh mục thành công!");
        console.log(this.form);
        this.$router.push('/admin/sub-categories');
      } catch (error) {
        console.error(error);
        alert("Đã xảy ra lỗi khi cập nhật người dùng.");
      }
    }
  },
  created() {
    this.loadSubCategoryData();  // Lấy dữ liệu người dùng khi component được tạo
  }
};
</script>
