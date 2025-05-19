<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Categories</h3>
                    </div>
                    <div class="card-body p-4 bg-light">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <h1 class="mt-4">Thêm danh mục</h1>
                                <form @submit.prevent="handleSubmit">
                                    <!-- Tên -->
                                    <div class="nameCategory mb-3">
                                        <label for="name">Tên</label>
                                        <input type="text" v-model="form.nameCategory" id="nameCategory" class="form-control"
                                            :class="{ 'is-invalid': errors.nameCategory }">
                                        <div v-if="errors.nameCategory" class="invalid-feedback">{{ errors.nameCategory }}</div>
                                    </div>
                                    
                                    <div class="d-flex justify-content-between mt-3">
                                        <a href="/admin/categories/" class="return btn text-white btn-dark bg-gradient">
                                            <i class="fa-solid fa-right-from-bracket deg-180"></i> Quay lại
                                        </a>
                                        <button type="submit" class="btn btn-dark bg-gradient text-white">Thêm danh mục</button>
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
    name: 'category_add',
    data() {
        return {
            form: {
                nameCategory: '',
            },
            errors: {},
        };
    },
    methods: {
        // Validate form fields
        validateForm() {
            this.errors = {};
            let valid = true;

            if (!this.form.nameCategory) {
                this.errors.nameCategory = "Danh mục không được để trống";
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
            axios.post('http://localhost/demoproject/backend/public/index.php/api/categories', formData)
                .then(response => {
                    alert('Thêm danh mục thành công');
                    console.log(response);                    
                    this.$router.push('/admin/categories');                    
                })
                .catch(error => {
                    alert(error.response?.data?.message || 'Đã có lỗi xảy ra.');
                    console.log(error);
                    
                });
        },
    }
};
</script>
