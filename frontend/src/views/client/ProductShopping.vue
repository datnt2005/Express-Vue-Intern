<template>
  <main>
    <div class="container mt-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html" class="nav-link">Trang chủ</a></li>
          <li class="breadcrumb-item active" aria-current="page">Danh mục</li>
        </ol>
      </nav>
      <div class="row banner">
        <img src="https://owen.vn/media/catalog/category/4546_x_1000_ao_1.jpg" alt="banner">
      </div>
    </div>

    <div class="container">
      <div class="row">
        <aside class="col-md-2">
          <div class="sidebar">
            <div class="sidebar-product-general pt-5">
              <ul>
                <li class="category-item"><a href="shop.php?view=all_products" class="fw-bold fs-6">HÀNG MỚI
                    VỀ</a></li>
              </ul>
              <ul>
                <li class="category-item"><a href="shop.php?view=Dog_products" class="fw-bold fs-6">BỘ SƯU TẬP</a></li>
                <li class="category-item"><a href="shop.php?view=Food_products" class>Be Cofident</a></li>
                <li class="category-item"><a href="shop.php?view=Cat_products" class>Inner Rise</a></li>
                <li class="category-item"><a href="shop.php?view=Bird_products" class>BST Bạc hà</a></li>
              </ul>
              <ul class="mt-4">
                <li class="category-item"><a href="shop.php?view=Dog_products" class="fw-bold fs-6">GIÁ TỐT</a></li>
                <li class="category-item"><a href="shop.php?view=Food_products" class>Polo - Tshirt</a></li>
                <li class="category-item"><a href="shop.php?view=Cat_products" class>Quần giá tốt</a></li>
                <li class="category-item"><a href="shop.php?view=Bird_products" class>Áo sơ mi</a></li>
              </ul>

              <ul class="mt-4">
                <li class="category-item"><a href="shop.php?view=Dog_products" class="fw-bold fs-6">ÁO</a></li>
                <li class="category-item"><a href="shop.php?view=Food_products" class>Áo Sơ Mi</a></li>
                <li class="category-item"><a href="shop.php?view=Cat_products" class>Áo T-Shirt</a></li>
                <li class="category-item"><a href="shop.php?view=Bird_products" class>Áo Blazer</a></li>
                <li class="category-item"><a href="shop.php?view=Food_products" class>Áo Len</a></li>
                <li class="category-item"><a href="shop.php?view=Cat_products" class>Áo Hoodie</a></li>
                <li class="category-item"><a href="shop.php?view=Bird_products" class>Áo Thun</a></li>
              </ul>
              <ul class="mt-4">
                <li class="category-item"><a href="shop.php?view=Dog_products" class="fw-bold fs-6">QUẦN</a></li>
                <li class="category-item"><a href="shop.php?view=Food_products" class>Quần Short</a></li>
                <li class="category-item"><a href="shop.php?view=Cat_products" class>Quần Tây</a></li>
                <li class="category-item"><a href="shop.php?view=Bird_products" class>Áo Kaki</a></li>
              </ul>
              <ul class="mt-4">
                <li class="category-item"><a href="shop.php?view=Dog_products" class="fw-bold fs-6">Gía</a></li>
                <li class="category-item"><a href="../client/shop.php?min_price=100000&max_price=200000">100.000 -
                    200.000</a></li>
                <li class="category-item"><a href="../client/shop.php?min_price=200000&max_price=300000">200.000 -
                    300.000</a></li>
                <li class="category-item"><a href="../client/shop.php?min_price=300000&max_price=400000">300.000 -
                    400.000</a></li>
                <li class="category-item"><a href="../client/shop.php?min_price=400000&max_price=500000">400.000 -
                    500.000</a></li>
                <li class="category-item"><a href="../client/shop.php?min_price=500000&max_price=600000">500.000 -
                    600.000</a></li>
              </ul>
            </div>
          </div>
        </aside>
        <div class="col-md-10">
          <div class="container">
            <a href="#" class="text-decoration-none text-dark fw-bold">
              <p class="mt-5">Bộ lọc <i class="fa-solid fa-sliders"></i></p>
            </a>
            <div class="row">

              <div class="col-md-4">
                <div class="products-item">
                  <div class="image-product">
                    <a href="/product/1" class="image-product-links">
                      <img src="../../assets/images/as230001d._1.jpg" alt="sanpham">
                    </a>
                    <a href="/product/1">
                    <button type="button"
                      class="product-button border-0 add_cart_btn text-center text-decoration-none py-2 btn_add--checkout px-2"
                      data-product-id="<?php echo $product['idProduct'] ?>">
                      MUA NGAY
                    </button>
                    </a>
                  </div>
                  
                  <div class="favorite mt-2 text-end">
                    <a href="#" class="text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-heart">
                                <path
                                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>
                        </a>
                  </div>
                  <div class="info_product">
                    
                    <a href="/product/1"
                      class="text-secondary text-uppercase fw-bold text-decoration-none">
                      ao thun nam
                    </a>
                  </div>
                  <div class="price-product fw-bold">
                    100000đ
                  </div>
                </div>
              </div>

              <!-- <p>Sản phẩm không tồn tại trong cửa hàng.</p> -->
            </div>
          </div>
      </div>
    </div>
    </div>
<!--
<section id="accountInformation" class="py-5 h-100">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="comment">
              <div class="totalEvaluate p-4">
                <h3>ĐÁNH GIÁ SẢN PHẨM</h3>
                <div class="container">
                  <div class="row p-3 rounded-3" style="background-color: #fffbf8;">
                    <div class="col-md-3">
                      <div class="evaluate text-center text-danger fs-4 align-items-center">
                        <span class="evaluateStart text fs-3 mx-2">{{ ratingAverage }} </span>
                        <span class="totalStart text">trên 5</span>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <aside class="col-md-9  text-dark ">
                      <div class="filter ">
                        <h5 class="text-dark">Lọc theo</h5>
                        <div class="list-evaluate">
                          <ul class="list-evaluate-list d-flex list-unstyled p-1">
                            <li class="list-evaluate-item">
                              <a class="text-dark text-decoration-none border border-dark  p-1 w-100 m-2" href="#"
                                @click.prevent="filterComments(0)">
                                Tất cả ({{ comments.length }})
                              </a>
                            </li>
                            <li class="list-evaluate-item">
                              <a class="text-dark text-decoration-none border border-dark  p-1 w-100 m-2" href="#"
                                @click.prevent="filterComments(5)">
                                5 Sao
                                ({{ filterCount(5) }})
                              </a>
                            </li>
                            <li class="list-evaluate-item">
                              <a class="text-dark text-decoration-none border border-dark  p-1 w-100 m-2" href="#"
                                @click.prevent="filterComments(4)">
                                4 Sao
                                ({{ filterCount(4) }})
                              </a>
                            </li>
                            <li class="list-evaluate-item">
                              <a class="text-dark text-decoration-none border border-dark  p-1 w-100 m-2" href="#"
                                @click.prevent="filterComments(3)">
                                3 Sao
                                ({{ filterCount(3) }})
                              </a>
                            </li>
                            <li class="list-evaluate-item">
                              <a class="text-dark text-decoration-none border border-dark  p-1 w-100 m-2" href="#"
                                @click.prevent="filterComments(2)">
                                2 Sao
                                ({{ filterCount(2) }})
                              </a>
                            </li>
                            <li class="list-evaluate-item">
                              <a class="text-dark text-decoration-none border border-dark  p-1 w-100 m-2" href="#"
                                @click.prevent="filterComments(1)">
                                1 Sao
                                ({{ filterCount(1) }})
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </aside>
                  </div>

                  <div class="row mt-3">
                    <div class="listComment">
                      Form thêm bình luận
                      <div class="addComment bg-light p-4 rounded">
                        <div class="comment-form container">
                          <label for="rating" class="form-label fw-bold text-secondary">Đánh giá sao:</label>
                          <div class="d-flex mb-3">
                            <i v-for="rating in [1, 2, 3, 4, 5]" :key="rating" class="fa-solid fa-star fs-5 me-2"
                              :class="{ 'text-danger': rating <= comment.rating, 'text-secondary': rating > comment.rating }"
                              @click="comment.rating = rating"></i>
                          </div>


                          <label for="content" class="form-label fw-bold text-secondary">Bình luận:</label>
                          <textarea id="content" v-model="comment.content" class="form-control m-0 " width="1200px"
                            cols="30" rows="3"></textarea>

                          <label for="media" class="form-label fw-bold text-secondary">Thêm hình ảnh:</label>
                          <input type="file" id="media" class="form-control w-50" name="media"
                            @change="handleFileChange" multiple />
                          <p v-if="uploadedFiles.length" class="text-secondary mt-3 ">Selected Files:</p>
                          <ul>
                            <li v-for="(file, index) in uploadedFiles" :key="index">{{ file.name }}</li>
                          </ul>
                          <button class="btn btn-success" @click="addComment">Bình luận</button>
                        </div>
                      </div>

                      <div v-for="comment in filteredComments" :key="comment.id"
                        class="list-group-item border p-3 mt-2 bg-light rounded">
                        <div class="row">
                          <div class="col-md-1">
                            <img v-if="comment.user" :src="getImagePath(comment.user.avatar)" :alt="comment.user.avatar"
                              class="img-fluid border mx-5 d-block"
                              style="width: 40px; height: 40px; border-radius: 50%;">
                          </div>
                          <div class="col-md-11">
                            <div class="user d-flex" v-if="comment.user">
                              <p class="fw-bold">{{ comment.user.name }}</p>
                              <span class="date text-secondary mx-3">'{{ formatDateTime(comment.created_at) }}'</span>
                            </div>

                            <div class="comment-evaluate">
                              <div class="starEvaluate">
                                <i v-for="rating in comment.rating" :key="rating"
                                  class="fa-solid fa-star text-danger me-1"></i>
                              </div>

                              <div class="comment-text">
                                <p>{{ comment.content }}</p>
                              </div>

                              <div class="imageComment d-flex mt-3 gap-2">
                                <div v-for="(media, index) in comment.media" :key="index">
                                  <img v-if="isImage(media.media_type)" :src="getMediaPath(media.media_url)" alt="media"
                                    width="70" height="70" class="img-fluid" />

                                  <video v-else-if="isVideo(media.media_type)" :src="getMediaPath(media.media_url)"
                                    alt="media" width="100" height="100" class="img-fluid" controls></video>
                                </div>
                              </div>
                              <div class="action d-flex justify-content-between align-items-center">
                                <div class="likes mt-3">
                                  <a href="#" class="text-decoration-none fw-bold">
                                    <i class="fa-regular fa-thumbs-up me-1 text-secondary"></i>
                                  </a>
                                  <span class="text-secondary">{{ comment.likes }}</span>
                                </div>

                                <div v-if="comment.user && comment.user.id === user.id" class="dropdown">
                                  <a href="#" class="text-decoration-none fw-bold mx-2" id="dropdownMenuButton"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa fa-ellipsis-h text-secondary"></i> 
                                  </a>
                                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                      <a class="dropdown-item" href="#" @click="editComment(comment.id)">Chỉnh sửa</a>
                                    </li>
                                    <li>
                                      <a class="dropdown-item text-danger" href="#"
                                        @click="deleteComment(comment.id)">Xóa</a>
                                    </li>
                                    
                                  </ul>

                                </div>
                                <div v-else class="dropdown">
                                  <a href="#" class="text-decoration-none fw-bold mx-2" id="dropdownMenuButton"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa fa-ellipsis-h text-secondary"></i> 
                                  </a>
                                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                      <a class="dropdown-item" href="#"
                                        >Báo cáo</a>
                                    </li>
                                    
                                  </ul>

                                </div>

                              </div>


                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Sản phẩm liên quan -->
    <!-- <div class="related-products mt-2">
      <h4 class="fw-bold mb-4">Sản phẩm liên quan</h4>
      <div class="row">
        <div class="col-md-3" v-for="related in relatedProducts" :key="related.id">
          <div class="card">
            <img :src="getImagePath(related.pic_products[0].imagePath)" class="card-img-top" :alt="related.nameProduct">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ related.nameProduct }}</h5>
              <p class="card-text text-danger fw-bold">{{ formatCurrency(related.product_sizes[0].price) }}</p>
              <a :href="'/product/' + related.id" class="btn btn-outline-success btn-sm">Xem chi tiết</a>
            </div>
          </div>
        </div>
      </div>
    </div> -->

  </main>
</template>
<!-- 
<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

// Lấy ID sản phẩm từ URL
const route = useRoute();
const productId = route.params.idProduct;
// Lấy thông tin đăng nhập người dùng
const token = localStorage.getItem('token');
const user = JSON.parse(localStorage.getItem('user'));
const idUser = user?.id;
const uploadedFiles = ref([]);

const isLoading = ref(false);

// Khởi tạo dữ liệu
const product = reactive({
  idProduct: null,
  nameProduct: '',
  descriptionProduct: '',
  product_sizes: [],
  pic_products: []
});

const selectedSize = reactive({
  id: null,
  price: 0,
  quantityProduct: 0
});

const quantity = ref(1);

const relatedProducts = ref([]);
// Lấy sản phẩm liên quan từ API
const getRelatedProducts = async (id) => {
  try {
    const response = await axios.get(http://localhost:8000/api/products/${id}/related);
    relatedProducts.value = response.data;
  } catch (error) {
    console.error('Lỗi khi tải sản phẩm liên quan:', error);
  }
};
// Lấy dữ liệu sản phẩm


// Chọn kích thước
const selectSize = (size) => {
  Object.assign(selectedSize, size);
  quantity.value = 1; // Reset số lượng
};

// Cập nhật số lượng
const updateQuantity = (change) => {
  quantity.value = Math.max(1, Math.min(selectedSize.quantityProduct, quantity.value + change));
};

const formatCurrency = (value) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
const getImagePath = (path) => http://localhost:8000/${path};

// Thêm vào giỏ hàng
const addToCart = async () => {
  try {
    if (!token) {
      alert('Bạn cần đăng nhập để thực hiện chức năng này.');
      window.location.href = '/login'; // Chuyển hướng đến trang đăng nhập
      return;
    }
    const cartItem = {
      idProduct: productId,
      idProductSize: selectedSize.id,
      quantity: quantity.value,
      price: selectedSize.price
    };

    const response = await axios.post('http://localhost:8000/api/cart', cartItem, {
      headers: {
        Authorization: Bearer ${token}
      }
    });

    if (response.status === 200) {
      alert('Sản phẩm đã được thêm vào giỏ hàng!');
    }
  } catch (error) {
    console.error('Lỗi khi thêm vào giỏ hàng:', error.response?.data || error);
    alert('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng. Vui lòng thử lại.');
  }
};
// Bình luận
const comments = ref([]);
const selectedRating = ref(0);
const error = ref(false);
const comment = ref({
  idProduct: productId,
  idUser: idUser,
  content: '',
  rating: 0,
  status: 'visible',
});

const filteredComments = computed(() => {
  if (selectedRating.value) {
    return comments.value.filter(comment => comment.rating === selectedRating.value);
  }
  return comments.value;
});

const filterCount = (rating) => {
  return comments.value.filter(comment => comment.rating === rating).length;
};

// Lấy danh sách bình luận
const fetchComments = async () => {
  isLoading.value = true; // Đặt isLoading là true khi bắt đầu tải
  try {
    const response = await axios.get('http://localhost:8000/api/comments/product/' + productId,
      {
        headers: {
          Authorization: Bearer ${token},
        },
      }
    );
    comments.value = response.data;
    console.log('Danh sách binh luan:', comments.value);
  } catch (err) {
    console.error(err);
    error.value = true;
  } finally {
    isLoading.value = false; // Đặt isLoading là false khi kết thúc
    console.log('Danh sách binh luan:', comments.value);
  }
};

const getMediaPath = (path) => http://localhost:8000/storage/${path};

const isImage = (mediaType) => ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp', 'image/bmp'].includes(mediaType);
const isVideo = (mediaType) => ['video/mp4', 'video/ogg', 'video/webm'].includes(mediaType);
const formatDateTime = (dateTime) => {
  const [date, time] = dateTime.split('T');
  return ${date} ${time.slice(0, 5)};
};
const handleFileChange = (event) => {
    uploadedFiles.value = Array.from(event.target.files); // Lưu các file đã chọn
};
// Thêm bình luận mới
const addComment = async () => {
  if (!comment.value.content || comment.value.rating === 0) {
    alert('Vui lòng nhập bình luận và đánh giá sao.');
    return;
  }

  const formData = new FormData();
  for (const key in comment.value) {
    formData.append(key, comment.value[key]);
  }

  uploadedFiles.value.forEach((file) => {
    formData.append('media[]', file);
  });

  axios
    .post('http://localhost:8000/api/comments',
      formData,
      {
        headers: {
          Authorization: Bearer ${token},
          'Content-Type': 'multipart/form-data',
        },
      })
    .then((response) => {
      console.log('Thành công:', response.data);
      alert('Bình luận thành công!');
      fetchComments();
      comment.value.content = '';
      comment.value.rating = 0;
      uploadedFiles.value = [];
    })
    .catch((error) => {
      console.error('Lỗi khi gửi form:', error);
      if (error.response && error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;
        for (const field in errors) {
          console.error(${field}: ${errors[field]});
        }
      } else {
        console.error('Lỗi khi gửi form:', error);
        alert('Có lỗi xảy ra khi gửi bình luận. Vui lòng thử lại.');
      }
    })
};
// Xóa bình luận
const deleteComment = async (id) => {
  if (confirm("Bạn có chắc chắn muốn xóa?")) {
    isLoading.value = true; // Đặt isLoading là true khi bắt đầu xóa
    try {
      await axios.delete(http://localhost:8000/api/comments/${id}, {
        headers: {
          Authorization: Bearer ${token},
        },
      });
      await fetchComments();
      alert('Xóa thành công!');
    } catch (err) {
      console.error(err);
      alert('Có lỗi xảy ra khi xóa. Vui lòng thử lại.');
    } finally {
      isLoading.value = false; // Đặt isLoading là false sau khi xóa xong
    }
  }

};

const ratingAverage = computed(() => {
  if (comments.value.length === 0) {
    return 0;
  }
  const totalRating = comments.value.reduce((total, comment) => total + comment.rating, 0);
  return totalRating / comments.value.length;
});

//update comment
const editComment = (id) => {
  const comment = comments.value.find(comment => comment.id === id);
  console.log('comment:', comment);
  // Set lại giá trị cho biến comment
  Object.assign(comment, comment);
  // Mở modal
  $('#editCommentModal').modal('show');
};
onMounted(async () => {
  try {
    const response = await axios.get(http://localhost:8000/api/products/${productId});
    Object.assign(product, response.data);
  } catch (error) {
    console.error('Lỗi khi tải dữ liệu:', error);
    alert('Không thể tải dữ liệu sản phẩm. Vui lòng thử lại sau.');
  }

  getRelatedProducts(productId);

  fetchComments();
});
</script> -->