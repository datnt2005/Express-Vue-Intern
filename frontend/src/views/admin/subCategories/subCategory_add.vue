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
                                <h1 class="mt-4">Thêm danh mục con</h1>
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
                                        <button type="submit" class="btn btn-dark bg-gradient text-white">Thêm danh mục con</button>
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
    name: "subcategory_add",
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
    },
    methods: {
        // Lấy danh sách danh mục chính
        fetchCategories() {
            axios
                .get("http://localhost/demoproject/backend/public/index.php/api/categories")
                .then((response) => {
                    this.categories = response.data;
                })
                .catch((error) => {
                    console.error("Lỗi khi tải danh sách nhóm danh mục:", error);
                });
        },

        // Validate form fields
        validateForm() {
            this.errors = {};
            let valid = true;

            if (!this.form.nameSubCategory) {
                this.errors.nameSubCategory = "Tên danh mục con không được để trống";
                valid = false;
            }

            if (!this.form.idCategory) {
                this.errors.idCategory = "Vui lòng chọn nhóm danh mục";
                valid = false;
            }

            return valid;
        },

        // Handle form submission
        handleSubmit() {
            if (!this.validateForm()) return;

            const formData = new FormData();

            // Add form data
            for (let key in this.form) {
                formData.append(key, this.form[key]);
            }

            // Submit form data
            axios
                .post("http://localhost/demoproject/backend/public/index.php/api/subCategories", formData)
                .then((response) => {
                    alert("Thêm danh mục con thành công");
                    console.log(response);
                    this.$router.push("/admin/sub-categories");
                })
                .catch((error) => {
                    alert(error.response?.data?.message || "Đã có lỗi xảy ra.");
                    console.error(error);
                });
        },
    },
};
</script>
