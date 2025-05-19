  <template>
   <main class="container my-4">
    <div class="container mt-2">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html" class="nav-link">Trang chủ</a></li>
                <li class="breadcrumb-item active" aria-current="page">Sản
                    phẩm</li>
            </ol>
        </nav>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-1"></div>
            <div class="col-md-5 me-2">
                <div class="image_product">
                    <div class="show_image">
                        <!-- This div can be used to display the selected image or the main image -->
                        <img src="../../assets/images/as230001d._1.jpg">
                    </div>
                    <div class="image_thumbnail d-flex mt-2">
                            <div class="thumbnails me-2">
                                <img src="../../assets/images/as230001d._1.jpg" alt="image" class="img-thumbnails">
                            </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5 ms-3">
                <div class="product_content">
                        <form id="product-form-<?php echo $product_id; ?>">
                            <input type="hidden" name="product_id" id="product_id" value=">">
                            <h3 class="fw-bold fs-5 my-1">Ao so mi</h3>
                            <p class="product_id my-1">MÃ SP: 123ASGH</p>
                            <p class="fw-bold mt-3 mb-4">100.000đ</p>
                            <div class="product_color">
                                <label for="" class="d-block fs-6 mb-2 fw-bold">Màu sắc:</label>
                                <div class="button-group" id="color-group-<?php echo $product_id; ?>">
                                    
                                        <button type="button" class="btn" style="background-color: red;"></button>
                                        <button type="button" class="btn" style="background-color: blue;" ></button>
                                </div>
                                <input type="hidden" name="color" id="color-<?php echo $product_id; ?>" required>
                                <span class='errors text-danger' id="color-error-<?php echo $product_id; ?>"></span>
                            </div>
                            <div class="product_size mt-3">
                                <label for="" class="d-block fs-6 mb-2 fw-bold">Kích thước:</label>
                                <div class="button-group" id="size-group-<?php echo $product_id; ?>">
                                    <button type="button" class="btn">S</button>
                                        <button type="button" class="btn">M</button>
                                </div>
                                <input type="hidden" name="size" id="selected-size-<?php echo $product_id; ?>" value="">
                                <span class='errors text-danger' id="size-error-<?php echo $product_id; ?>"></span>
                            </div>

                            <div class="quantity mt-3 mb-3">
                                <button class="prev">-</button>
                                <input type="text" class="quantity-cart" name="quantity-cart" value="1">
                                <button class="pluss" >+</button>
                            </div>
                            <div class="image_freeship">
                                <img src="https://owen.cdn.vccloud.vn/media/amasty/ampromobanners/CD06C467-DE0F-457E-9AB0-9D90B567E118.jpeg" alt="" class="w-100">
                            </div>
                            <button type="button" class="btn btn-dark w-100 mt-5 fw-bold rounded-0" onclick="submitForm('<?php echo $product_id; ?>')">Thêm vào giỏ hàng</button>
                        </form>
                    <div class="description mt-5">
                        <span class="description_heading fw-bold">MÔ TẢ</span>
                        <hr class="m-0">
                        <p class="fs-7 mt-1">Áo rất đẹp, nhanh tay để tận hưởng</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-1"></div>
        </div>
    </div>
    <div id="alerts-container"></div>
    </main>
  </template>

  <script>
  import axios from 'axios';

  export default {
    name: 'ProductDetail',
    data() {
      return {
        product: null,  // Dữ liệu sản phẩm
        error: false     // Cờ lỗi khi tải sản phẩm
      };
    },
    mounted() {
      const productId = this.$route.params.idProduct;  // Lấy id sản phẩm từ URL
      this.fetchProduct(productId);
    },
    methods: {
      fetchProduct(productId) {
        console.log(productId);
        
        axios.get(`http://localhost/demoProject/backend/public/index.php/api/products/${productId}`)
          .then(response => {
            this.product = response.data;  // Lưu thông tin sản phẩm vào biến
          })
          .catch(error => {
            console.error(error);  // Hiển thị lỗi trong console
            this.error = true;     // Đặt cờ lỗi thành true
          });
      }
    }
  };

  // function increaseQuantity() {
  //       const quantityInput = document.getElementById("quantity");
  //       let quantity = parseInt(quantityInput.value);
  //       quantityInput.value = quantity + 1;
  //   }

  //   function decreaseQuantity() {
  //       const quantityInput = document.getElementById("quantity");
  //       let quantity = parseInt(quantityInput.value);
  //       if (quantity > 1) {
  //           quantityInput.value = quantity - 1;
  //       }
  //   }

  //   function addReview() {
  //       const reviewList = document.getElementById('review-list');
  //       const reviewText = document.querySelector('textarea').value;
        
  //       const starRating = 4;
        
  //       if (reviewText) {
  //           const reviewItem = document.createElement('div');
  //           reviewItem.classList.add('card', 'mb-3', 'border');

  //           let starHTML = '';
  //           for (let i = 1; i <= 5; i++) {
  //               if (i <= starRating) {
  //                   starHTML += '<span class="fa fa-star checked text-warning"></span>';
  //               } else {
  //                   starHTML += '<span class="fa fa-star"></span>';
  //               }
  //           }

  //           reviewItem.innerHTML = `
  //               <div class="card-body">
  //                   <div class="rating mb-1">${starHTML}</div>
  //                   <p class="card-text">${reviewText}</p>
  //               </div>
  //           `;
            
  //           reviewList.appendChild(reviewItem);
  //           document.querySelector('textarea').value = '';
  //       }
  //   }
  </script>

  <style scoped>
  /* Thêm một số phong cách cho các sản phẩm có sale */
  .text-danger {
    color: red;
  }

  .text-decoration-line-through {
    text-decoration: line-through;
  }
  .rating .fa {
        font-size: 1.2em;
    }
    .checked {
        color: gold;
    }
  </style>
