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
                                <h1 class="mt-4">Thêm mã giảm giá</h1>
                                <form @submit.prevent="handleSubmit">
                                    <!-- Tên mã giảm giá -->
                                    <div class="mb-3">
                                        <label for="nameCoupon">Tên mã khuyến mãi</label>
                                        <input type="text" v-model="form.nameCoupon" id="nameCoupon" class="form-control" 
                                            :class="{ 'is-invalid': errors.nameCoupon }">
                                        <div v-if="errors.nameCoupon" class="invalid-feedback">
                                            {{ errors.nameCoupon }}
                                        </div>
                                    </div>

                                    <!-- Mã khuyến mãi -->
                                    <div class="mb-3">
                                        <label for="codeCoupon">Mã khuyến mãi</label>
                                        <input type="text" v-model="form.codeCoupon" id="codeCoupon" class="form-control" 
                                            :class="{ 'is-invalid': errors.codeCoupon }">
                                        <div v-if="errors.codeCoupon" class="invalid-feedback">
                                            {{ errors.codeCoupon }}
                                        </div>
                                    </div>

                                    <!-- Số lượng -->
                                    <div class="mb-3">
                                        <label for="quantityCoupon">Số lượng mã giảm giá</label>
                                        <input type="number" v-model="form.quantityCoupon" id="quantityCoupon" 
                                            class="form-control" min="1" 
                                            :class="{ 'is-invalid': errors.quantityCoupon }">
                                        <div v-if="errors.quantityCoupon" class="invalid-feedback">
                                            {{ errors.quantityCoupon }}
                                        </div>
                                    </div>

                                    <!-- Phần trăm giảm giá -->
                                    <div class="mb-3">
                                        <label for="discount">Phần trăm giảm giá</label>
                                        <input type="number" v-model="form.discount" id="discount" 
                                            class="form-control" min="0" max="100" 
                                            :class="{ 'is-invalid': errors.discount }">
                                        <div v-if="errors.discount" class="invalid-feedback">
                                            {{ errors.discount }}
                                        </div>
                                    </div>

                                    <!-- Ngày bắt đầu -->
                                    <div class="mb-3">
                                        <label for="startDate">Ngày bắt đầu</label>
                                        <input type="date" v-model="form.startDate" id="startDate" 
                                            class="form-control" 
                                            :class="{ 'is-invalid': errors.startDate }">
                                        <div v-if="errors.startDate" class="invalid-feedback">
                                            {{ errors.startDate }}
                                        </div>
                                    </div>

                                    <!-- Ngày kết thúc -->
                                    <div class="mb-3">
                                        <label for="endDate">Ngày kết thúc</label>
                                        <input type="date" v-model="form.endDate" id="endDate" 
                                            class="form-control" 
                                            :class="{ 'is-invalid': errors.endDate }">
                                        <div v-if="errors.endDate" class="invalid-feedback">
                                            {{ errors.endDate }}
                                        </div>
                                    </div>

                                    <!-- Buttons -->
                                    <div class="d-flex justify-content-between mt-3">
                                        <a href="/admin/coupons" class="btn btn-dark bg-gradient text-white">Quay lại</a>
                                        <button type="submit" class="btn btn-dark bg-gradient text-white">
                                            Thêm mã
                                        </button>
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
    name: 'coupon_add',
    data() {
        return {
            form: {
                codeCoupon: '',
                nameCoupon: '',
                discount: '',
                startDate: '',
                endDate: '',
                quantityCoupon: ''
            },
            errors: {},
        };
    },
    methods: {
        // Validate form fields
        validateForm() {
            this.errors = {};
            let valid = true;

            if (!this.form.codeCoupon) {
                this.errors.codeCoupon = "Code mã giảm giá không được để trống";
                valid = false;
            }

            if (!this.form.nameCoupon) {
                this.errors.nameCoupon = "Tên mã giảm giá không được để trống";
                valid = false;
            }

            if (!this.form.quantityCoupon || this.form.quantityCoupon <= 0) {
                this.errors.quantityCoupon = "Số lượng giảm giá phải lớn hơn 0";
                valid = false;
            }

            if (!this.form.discount || this.form.discount <= 0 || this.form.discount > 100) {
                this.errors.discount = "Phần trăm giảm giá phải nằm trong khoảng từ 1 đến 100";
                valid = false;
            }

            if (!this.form.startDate) {
                this.errors.startDate = "Ngày bắt đầu giảm giá không được để trống";
                valid = false;
            }

            if (!this.form.endDate) {
                this.errors.endDate = "Ngày kết thúc giảm giá không được để trống";
                valid = false;
            } else if (this.form.startDate && this.form.endDate < this.form.startDate) {
                this.errors.endDate = "Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu";
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
            axios.post('http://localhost/demoproject/backend/public/index.php/api/coupons', formData)
                .then(response => {
                    alert('Thêm mã giảm giá thành công');
                    console.log(response);
                    this.$router.push('/admin/coupons');
                })
                .catch(error => {
                    if (error.response && error.response.data.errors) {
                        this.errors = error.response.data.errors;
                    } else {
                        alert("Đã xảy ra lỗi không mong muốn!");
                    }
                    console.error(error);
                });
        },
    }
};
</script>
