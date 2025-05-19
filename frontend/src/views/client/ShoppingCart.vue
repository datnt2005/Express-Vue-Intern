<template>
    <main>
        <div class="container mt-2">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/" class="nav-link">Trang chủ</a></li>
                <li class="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
            </ol>
        </nav>
    </div>
    <section id="cart">
        <div class="container">
            <div class="row">
                <h1>Giỏ hàng</h1>
                <div class="col-md-9">
                    <table class="table table-cart">
                        <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th></th>
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
                                                <img src="../../assets/images/as230001d._1.jpg" alt="" class="w-100">
                                            </div>
                                            <div class="product-content mx-2">
                                                <a href="#" class="name-products text-secondary
                                                 fw-bold text-decoration-none">Ao so mi</a>
                                                <p class="product-color">Màu sắc: den</p>
                                                <p class="product-size">Kích thước: s</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="remove-cart d-flex align-items-center">
                                            <a href="#" class="fw-bold text-decoration-none">Xóa</a>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="quantity">
                                            <button class="prev">-</button>
                                            <input type="text" class="quantity-cart" name="quantity-cart" value="1">
                                            <button class="pluss" >+</button>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="price">
                                            100000
                                            <span class="fw-bold fs-7 text-decoration-underline">đ</span>
                                        </span>
                                    </td>
                                    <td>
                                        <span class="total-price" id="totalPrice-<?php echo $cart['idDetailCart'] ?>">
                                            100000
                                        </span>
                                        <span class="fw-bold fs-7 text-decoration-underline">đ</span>
                                    </td>
                                </tr>
                        </tbody>

                    </table>
                    <div class="d-flex justify-content-end">
                        <div class="general-cart d-flex justify-content-between ">
                            <div class="start-items">
                                <p class="fw-bold">Tổng sản phẩm:</p>
                                <p class="fw-bold color-main">TẠM TÍNH</p>
                            </div>
                            <div class="end-items text-end">
                                <p class="quantity-products">1</p>
                                <p class="total-quantityInCart">
                                    <span id="total_price">100000</span>
                                    <span class="fw-bold fs-7 text-decoration-underline">đ</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between mt-3 mb-4">
                        <div class="to-shop">
                            <a href="/shop" class="text-decoration-none text-center toCheck py-2 px-4 text-dark fw-bold">
                                TIẾP TỤC MUA HÀNG
                            </a>
                        </div>
                        <div class="to-checkout">
                            <form action="" method="post">
                                <input type="hidden" name="totalPrice" id="">
                                <a href="/checkout" class="toCheck text-decoration-none text-center py-2 px-5 bg-dark text-white fw-bold">ĐẶT
                                    HÀNG</a>
                            </form>
                        </div>

                    </div>
                </div>
                <div class="col-md-3">
                    <div class="img-cart">
                        <img src="../../assets/images/image-cart.jpg" alt="" class="w-100">
                    </div>
                </div>
            </div>
        </div>
        </section>
    </main>
</template>

<script>
export default {
    name: "ShoppingCart"
}
</script>