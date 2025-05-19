<template>
    <main>
        <div class="container mt-2">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html" class="nav-link">Trang chủ</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Thanh toán</li>
                </ol>
            </nav>
        </div>
        <section id="checkout">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="info-checkout">
                            <h1 class="fs-2">THANH TOÁN</h1>
                            <form action="">
                                <div class="address-delivery">
                                    <p class="fw-bold mb-2">1. Địa chỉ nhận hàng</p>
                                    <div class="detail-address px-2">
                                        <div class="address-content">
                                            <a href="add_address.php?id=<?php echo $_SESSION['id'] ?>" 
                                                class="add_to--address nav-link d-flex align-item-center ms-2">
                                                <i class="fa-solid fa-plus fs-3"></i>
                                                <label for="" class="ms-3">Thêm thông tin nhận hàng</label>
                                            </a>
                                            <p class="m-0">
                                                <span class="fst-italic text-secondary">Nguyễn Văn Đạt</span> |
                                                <span class="phone-number text-secondary">0123456789</span>
                                            </p>
                                            <p class="vilage-streetName m-0 text-secondary">Thôn 9</p>
                                            <p class="provine-district m-0 text-secondary">xã Ea Ô, huyện Ea Kar, tỉnh
                                                Đắk Lắk</p>
                                        </div>
                                        <div class="noteOrder mt-3">
                                            <label for="note">Ghi chú</label>
                                            <textarea name="noteOrder" id="note" class="w-100 value-forgot"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="delivery-price">
                                    <p class="fw-bold mb-2">2. Vận chuyển</p>
                                    <div class="d-flex justify-content-between px-2">
                                        <div class="input-checked">
                                            <input type="radio" name="delivery" id="delivery">
                                            <label for="" class="fs-6">GHN-tiêu chuẩn-Tiêu chuẩn</label>
                                        </div>
                                        <p class="price delivery">+30.000đ</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="payment">
                                    <p class="fw-bold mb-2">3. Phương thức thanh toán</p>
                                    <div class="payment-method px-2">
                                        <div class="pay">
                                            <input type="radio" name="payment_method" id="">
                                            <label for="" class="fs-6 mx-2">Thanh toán khi nhận hàng</label>
                                        </div>
                                        <div class="vnPay mt-1">
                                            <input type="radio" name="payment_method" id="">
                                            <label for="" class="fs-6 mx-2">Thanh toán VNPAY</label>
                                        </div>
                                    </div>

                                </div>
                                <hr>
                                <div class="coupon">
                                    <p class="fw-bold mb-2">4. Áp dụng mã giảm giá</p>
                                    <div class="coupon-input px-2">
                                        <input type="search" name="coupon" id="coupon" placeholder="Nhập mã giảm giá" class="w-75">
                                        <button class="mx-2" type="button">
                                            Sử dụng
                                        </button>
                                    </div>
                                </div>
                                <div class="px-2">
                                    <button class="btn-toCheckout w-100 mt-3 px-2 fw-bold">ĐẶT HÀNG</button>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="position-sticky">
                            <h2 class="fs-5 color-main">THÔNG TIN ĐƠN HÀNG</h2>
                            <table class="table table-cart">
                                <thead>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Giá</th>
                                        <th>Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="cart-products d-flex align-items-center">
                                                <div class="image-products">
                                                    <img src="../../assets/images/as230001d._1.jpg" alt=""
                                                        class="w-100">
                                                </div>
                                                <div class="product-content mx-2">
                                                    <a href="#" class="name-products text-secondary
                                                     fw-bold text-decoration-none">NAME PRODUCTS - ID PRD</a>
                                                    <p class="product-color">Màu sắc: color</p>
                                                    <p class="product-size">Kích thước: 40</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="quantity-products">1</span>
                                        </td>
                                        <td>
                                            <span class="price">
                                                100.000đ
                                            </span>
                                        </td>
                                        <td>
                                            <span class="total-price">
                                                100.000đ
                                            </span>
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                            <div class="d-flex justify-content-end">
                                <div class="general-cart d-flex justify-content-between ">
                                    <div class="start-items">
                                        <p class="fw-bold">Tổng sản phẩm:</p>
                                        <p class="fw-bold ">Tổng tiền:</p>
                                        <p class="fw-bold ">Vận chuyển:</p>
                                        <p class="fw-bold ">Giảm giá:</p>

                                    </div>
                                    <div class="end-items text-end">
                                        <p class="quantity-products">2</p>
                                        <p class="total-quantityInCart">100.000đ</p>
                                        <p class="price-delivery">30.000đ</p>
                                        <p class="price-coupon">0đ</p>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="total d-flex justify-content-between p-2">
                                <span class="fw-bold color-main">THÀNH TIỀN</span>
                                <span class="total-price">100.000.000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'OrderCheckout',
    data() {
        return {
            addressId: null,  // Thay thế cho `<?php echo $idAddress; ?>`
            note: '',
            coupon: '',
        };
    },
    methods: {
        applyCoupon() {
            // Logic xử lý mã giảm giá
            console.log("Coupon applied:", this.coupon);
        },
        submitOrder() {
            // Logic xử lý đặt hàng
            console.log("Order submitted with note:", this.note);
        }
    }
};
</script>
