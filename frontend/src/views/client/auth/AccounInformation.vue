<template>
     <main>
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mt-3">
                        <li class="breadcrumb-item"><a href="index.html"
                                class="nav-link">Trang chủ</a></li>
                        <li class="breadcrumb-item active"
                            aria-current="page">Tài khoản</li>
                    </ol>
                </nav>
            </div>

            <div class="container form">
                <div class="row">
                    <div class="col-md-3 mt-1">
                        <div class="aside-account mt-4">
                            <h2 class="fw-bold fs-3">TÀI KHOẢN</h2>
                            <ul class="mx-3 aside-list">
                                <li class="nav-link">
                                    <a href="#" class="text-decoration-none aside-account-list
                                    focus-in">
                                        Thông tin tài khoản
                                    </a>
                                </li>
                                <li class="nav-link">
                                    <a href="#" class="text-decoration-none aside-account-list">Địa chỉ</a>
                                </li>
                                <li class="nav-link">
                                    <a href="#" class="text-decoration-none aside-account-list">Quản lí đơn hàng</a>
                                </li>
                                <li class="nav-link">
                                    <a href="#" class="text-decoration-none aside-account-list">Danh sách yêu thích</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-login">
                            <form action="" class="mt-4" method="POST">
                                <div class="name-value">
                                    <label for class="form-label m-0">Tên <span class="text-danger">*</span></label>
                                    <input type="text" name="name" id="name"
                                        class="value-forgot d-block w-100">
                                </div>
                                <div class="username-value mt-4">
                                    <label for class="form-label m-0">Tên đăng nhập <span class="text-danger">*</span></label>
                                    <input type="text" name="username" id="username"
                                        class="value-forgot d-block w-100">
                                </div>
                                <div class="email-value mt-4">
                                    <label for class="form-label m-0">Email <span class="text-danger">*</span></label>
                                    <input type="email" name="email" id="email"
                                        class="value-forgot d-block w-100">
                                </div>
                                <div class="number-phone mt-4">
                                    <label for class="form-label m-0 d-block">Số điện thoại <span class="text-danger">*</span></label>
                                    <input type="text" name="phone" id="phone"
                                        class="value-forgot d-block w-100">
                                </div>
                                <div class="password-value password-login mt-4">
                                    <div class="d-flex justify-content-between">
                                        <label for class="form-label m-0">Mật khẩu <span class="text-danger">*</span></label>
                                        <span class="change-password" onclick="changePassword()">Đặt lại mật khẩu?</span>
                                    </div>
                                    <input type="password" name="password" id="password"
                                        class="value-forgot d-block w-100 password" oninput="change(this)">
                                        <i class="fa-regular fa-eye show-password d-none"
                                            onmousedown="showPassword(this)"
                                            onmouseup="endPass(this)" onmouseleave="endPass(this)">
                                        </i>
                                </div>
                                <div class="load-change">
                                    <div class="new-password password-login mt-4">
                                        <label for class="form-label m-0">Mật khẩu mới<span class="text-danger">*</span></label>
                                        <input type="password" name="newPassword" id="newPassword" 
                                            class="value-forgot d-block w-100 password" oninput="change(this)">
                                        <i class="fa-regular fa-eye show-password d-none"
                                            onmousedown="showPassword(this)"
                                            onmouseup="endPass(this)" onmouseleave="endPass(this)">
                                        </i>
                                    </div>
                                    <div class="new-passwordConfirm password-login mt-4">
                                        <label for class="form-label m-0">Nhập lại mật khẩu mới<span class="text-danger">*</span></label>
                                        <input type="password" name="newPasswordConfirm" id="newPasswordConfirm"
                                            class="value-forgot d-block w-100 password" oninput="change(this)">
                                        <i class="fa-regular fa-eye show-password d-none"
                                            onmousedown="showPassword(this)"
                                            onmouseup="endPass(this)" onmouseleave="endPass(this)">
                                        </i>
                                    </div>
                                </div>


                                <button class="btn btn-dark w-100 btn-submit mt-4">CẬP NHẬT</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-3">
            
                    </div>
                </div>
            </div>
        </main>
</template>

<script>
// Import axios  
export default {
    name: "AccountInformation",
};
</script>