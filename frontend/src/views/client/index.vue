<template>
    <main>
        <div class="container mt-3">
            <div class="row mb-4">
                <div id="carouselExampleIndicators" class="carousel slide w-100 custom-carousel" data-bs-ride="carousel">
                   
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../../assets/images/banner1.jpg" class="d-block w-100" alt="Slide 1">
                        </div>
                        <div class="carousel-item">
                            <img src="../../assets/images/banner2.jpg" class="d-block w-100" alt="Slide 2">
                        </div>
                        <div class="carousel-item">
                            <img src="../../assets/images/banner3.jpg" class="d-block w-100" alt="Slide 3">
                        </div>
                    </div>
                    <button class="carousel-control-prev custom-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button class="carousel-control-next custom-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </div>
        <section class="">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="start-item">
                            <img src="../../assets/images/somitretrung.jpg" alt>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="start-item">
                            <img src="../../assets/images/shortthoaimai.jpg" alt>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="start-item">
                            <img src="../../assets/images/tshirtnangdong.jpg" alt>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container mt-4">
            <div class="row banner-2">
                <img src="https://owen.cdn.vccloud.vn/media/codazon/slideshow/a/r/artboard_5-100_210524.jpg" alt>
            </div>
        </div>

        <section>
            <div class="container mt-3">
                <div class="row">
                    <div class="title-items">
                        <h4 class="text-center fw-bold mb-4">BÁN CHẠY NHẤT</h4>
                    </div>
                    <div class="col-md-3">
                        <div class="products-item">
                            <div class="image-product">
                                <a href="/product/1" class="image-product-links">
                                    <img src="../../assets/images/as230001d._1.jpg" alt>
                                </a>
                                <a href="/product/1" class="btn btn_add--checkout px-4">MUA NGAY</a>
                            </div>
                            <div class="info_product mt-3">
                                <a href="/product/1" class="text-secondary fw-bold text-decoration-none">Ao Phao Beo</a>
                            </div>
                            <div class="price-product">
                                30000 VND
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="banner-suit container mt-5">
            <a href="#">
                <img src="../../assets/images/specialDeal.jpg" alt class="w-100">
            </a>
        </div>
        <section>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-md-8">
                        <div class="image-left-form">
                            <img src="https://owen.cdn.vccloud.vn/media/amasty/ampromobanners/Artboard_10-100_210524.jpg" alt class="w-100">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-status px-4 p-5">
                            <h4 class="text-center fw-bold pt-4">ĐĂNG KÝ NHẬN BẢN TIN</h4>
                            <p class="text-center register-text">Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</p>

                            <form action class="pb-4">
                                <div class="input-email">
                                    <input type="email" name="email" id="email" placeholder="Nhập email của bạn" class="w-100">
                                </div>
                                <button class="w-100 bg-dark btn text-white mt-4 fw-bold register-end mb-4">ĐĂNG KÍ</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { onMounted } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default {
    name: 'indexPage',
    setup() {
        onMounted(() => {
            // Kích hoạt Bootstrap Carousel nếu cần
            new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'));
        });
    }
};
</script>

<style scoped>
/* Làm chuyển động slide chậm hơn */
.carousel-inner .carousel-item {
    transition: transform 1.3s ease-in-out;
}

/* Thu nhỏ nút điều hướng */
.custom-prev,
.custom-next {
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 300px ;
}

.custom-prev span,
.custom-next span {
    width: 20px;
    height: 20px;
}

/* Đổi màu nút điều hướng khi hover */
.custom-prev:hover,
.custom-next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}
</style>