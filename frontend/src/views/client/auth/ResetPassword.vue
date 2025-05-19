<template>
    <div class="container form pt-4 pb-5 mt-4">
        <div class="row">
            <div class="col-md-6">
                <div class="form_login image">
                    <img src="../../../assets/images/image-in-form.jpeg" alt="" class="w-100"
                        style="height: 650px; object-fit: cover; object-position: center; " />
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-login">
                    <h2 class="fs-3 fw-bold text-center">ĐẶT LẠI MẬT KHẨU</h2>
                    <p class="text-center">
                        Thay đổi mật khẩu và trải nghiệm mọi thứ tốt nhất của cửa hàng chúng tôi
                    </p>

                    <!-- Form quên mật khẩu -->
                    <form @submit.prevent="handleSubmit" class="mt-4">
                        <div class="otp-reset mt-3">
                            <label class="form-label m-0 fs-6">
                                OTP <span class="text-danger">*</span>
                            </label>
                            <input type="text" v-model="form.otp"
                                class="input-value form-control d-block w-100" placeholder="Nhập otp"
                                :class="{ 'is-invalid': errors.otp }" />
                            <div v-if="errors.otp" class="invalid-feedback">
                                {{ errors.otp }}
                            </div>
                        </div>
                        <div class="password-reset mt-3">
                            <label class="form-label m-0 fs-6">
                                Mật khẩu <span class="text-danger">*</span>
                            </label>
                            <input type="password" v-model="form.password"
                                class="input-value form-control d-block w-100" placeholder="Nhập mật khẩu"
                                :class="{ 'is-invalid': errors.password }" />
                            <div v-if="errors.password" class="invalid-feedback">
                                {{ errors.password }}
                            </div>
                        </div>
                        <div class="passwordConfirm-reset mt-3">
                            <label class="form-label m-0 fs-6">
                                Nhập lại mật khẩu <span class="text-danger">*</span>
                            </label>
                            <input type="password" v-model="form.passwordConfirm"
                                class="input-value form-control d-block w-100" placeholder="Nhập lại mật khẩu"
                                :class="{ 'is-invalid': errors.passwordConfirm }" />
                            <div v-if="errors.passwordConfirm" class="invalid-feedback">
                                {{ errors.passwordConfirm }}
                            </div>
                        </div>
                        <button type="submit" class="btn w-100 btn-submit fw-bold mt-4" :disabled="isLoading">
                            <span class="text-primary" v-if="isLoading">Đang xử lý...</span>
                            <span v-else>ĐẶT LẠI MẬT KHẨU</span>
                        </button>
                        <div v-if="errors.general" class="mt-3 text-danger text-center">
                            {{ errors.general }}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

// Import axios  
export default {
    name: "ForgotPassword",
    data() {
        return {
            form: {
                emailOrUsername: "",
                password: "",
            },
            errors: {},
            isLoading: false,
        };
    },
    methods: {
        async handleSubmit() {
            this.errors = {};  // Clear previous errors
            this.isLoading = true;

            // Kiểm tra xem emailOrUsername và password có hợp lệ không
            if (!this.form.emailOrUsername || !this.form.password) {
                this.errors.general = "Vui lòng nhập đầy đủ thông tin.";
                this.isLoading = false;
                return;
            }

            try {
        // Gửi yêu cầu đến API để lấy danh sách người dùng
        const response = await axios.get("http://localhost/demoproject/backend/public/index.php/api/users");

        // Kiểm tra thông tin đăng nhập
        const users = response.data; // Danh sách người dùng trả về từ API
        let isAuthenticated = false;

        for (let user of users) {
            if (
                (this.form.emailOrUsername === user.email || this.form.emailOrUsername === user.username) &&
                this.form.password === user.password
            ) {
                isAuthenticated = true;
                alert("Đăng nhập thành công!");
                localStorage.setItem('user', JSON.stringify({
                    id: user.id,  // Lưu id người dùng
                    role: user.role  // Lưu role người dùng
                }));
                
                console.log("Thông tin người dùng:", user);
                // this.$router.push("/admin");

                break;
            }
        }

        if (!isAuthenticated) {
            alert("Sai thông tin đăng nhập");
            this.form = {
                emailOrUsername: '',
                password: '',
            };
            this.isLoading = false;
        }
    } catch (error) {
        console.error("Có lỗi xảy ra:", error);
        alert("Không thể kết nối đến API");
    }

    },
}
}
</script>


<style scoped>
.form-login {
    padding: 30px;
}

.input-value {
    margin-bottom: 10px;
}

.invalid-feedback {
    display: block;
    font-size: 0.875rem;
    color: #dc3545;
}

.is-invalid {
    border-color: #dc3545;
}

.forgot-pass {
    font-size: 0.875rem;
}

.btn-submit {
    font-size: 1.1rem;
    /* padding: 12px; */
    background-color: #333333;
    color: white !important;
    height: 45px;
    text-align: center;
    transition: background-color 0.3s;
}

.btn-submit:hover {
    background-color: #525252;
}


</style>