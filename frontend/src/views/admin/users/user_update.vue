<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Cập nhật người dùng</h3>
                    </div>
                    <div class="card-body p-4 bg-light">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <h1 class="mt-4">Cập nhật thông tin người dùng</h1>
                                <form @submit.prevent="handleSubmit" >
                                    <!-- Tên -->
                                    <div class="name mb-3">
                                        <label for="name">Tên</label>
                                        <input type="text" v-model="form.name" id="name" class="form-control"
                                            :class="{ 'is-invalid': errors.name }">
                                        <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
                                    </div>
                                    <!-- Tên đăng nhập -->
                                    <div class="username mb-3">
                                        <label for="username" class="text-dark">Tên đăng nhập</label>
                                        <input type="text" v-model="form.username" id="username" class="form-control"
                                            :class="{ 'is-invalid': errors.username }">
                                        <div v-if="errors.username" class="invalid-feedback">{{ errors.username }}</div>
                                    </div>
                                    <!-- Email -->
                                    <div class="email mb-3">
                                        <label for="email">Email</label>
                                        <input type="email" v-model="form.email" id="email" class="form-control"
                                            :class="{ 'is-invalid': errors.email }">
                                        <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
                                    </div>
                                    <!-- Mật khẩu -->
                                    <div class="password mb-3">
                                        <label for="password">Mật khẩu</label>
                                        <input type="password" v-model="form.password" id="password" class="form-control"
                                            :class="{ 'is-invalid': errors.password }">
                                        <div v-if="errors.password" class="invalid-feedback">{{ errors.password }}</div>
                                    </div>
                                    <!-- Số điện thoại -->
                                    <div class="phone mb-3">
                                        <label for="phone">Số điện thoại</label>
                                        <input type="text" v-model="form.phone" id="phone" class="form-control"
                                            :class="{ 'is-invalid': errors.phone }">
                                        <div v-if="errors.phone" class="invalid-feedback">{{ errors.phone }}</div>
                                    </div>
                                    <!-- Vai trò -->
                                    <div class="role mb-3">
                                        <label for="role">Vai trò</label>
                                        <select v-model="form.role" id="role" class="form-control"
                                            :class="{ 'is-invalid': errors.role }">
                                            <option value="">--Chọn vai trò--</option>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                        </select>
                                        <div v-if="errors.role" class="invalid-feedback">{{ errors.role }}</div>
                                    </div>
                                    <!-- Trạng thái hoạt động -->
                                    <div class="status mb-3">
                                        <label for="status">Trạng thái hoạt động</label><br>
                                        <input type="radio" v-model="form.status" value="Đang hoạt động" id="active">
                                        Hoạt động <br>
                                        <input type="radio" v-model="form.status" value="Ngừng hoạt động" id="inactive">
                                        Ngừng hoạt động
                                    </div>
                                    <!-- Hình ảnh -->
                                    <div class="image mb-3">
                                        <label for="image" class="text-dark form-label">Avatar</label><br>
                                        <button type="button" @click="openImageList"
                                            class="btn text-white btn-success bg-gradient form-control w-25">Chọn ảnh từ danh
                                            sách</button>
                                        <div v-if="form.image" class="mt-2">
                                            <img :src="getImagePath(form.image)" alt="Avatar Preview" class="img-thumbnail"
                                                width="100">
                                        </div>
                                    </div>
                                    <!-- Submit -->
                                    <div class="d-flex justify-content-between mt-3">
                                        <a href="/admin/users/" class="return btn text-white btn-dark bg-gradient">
                                            <i class="fa-solid fa-right-from-bracket deg-180"></i> Quay lại
                                        </a>
                                        <button type="submit" class="btn btn-dark bg-gradient text-white">Cập nhật người
                                            dùng</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- Modal to select image -->
        <div v-if="showImageList" class="modal" tabindex="-1" style="display: block;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Chọn ảnh đại diện</h5>
                    <button type="button" class="btn-close" @click="closeImageList"></button>
                </div>
                <div class="modal-body">
                    <a href="/admin/imageUpload" class="btn btn-primary px-4 mb-3 py-2 ">Thêm hình ảnh</a>
                    <div v-if="images.length > 0" class="image-list">
                        <div v-for="image in images" :key="image.idUpload" class="image-item m-4">
                            <a href="#" @click="selectImage(image)" class="image-thumbnail m-3">
                                <img :src="getImagePath(image.pathUpload)" :alt="image.nameUpload"
                                    class="image-thumbnail" />
                            </a>
                        </div>
                    </div>
                    <div v-else>
                        <p>Không có hình ảnh nào.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'user_update',
  data() {
    return {
      form: {
        name: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        role: '',
        status: '',
        image: ''
      },
      errors: {},
      images: [],
      showImageList: false,
    };
  },
  methods: {
    getIdApi() {
    return this.$route.params.idUser;
    },
    getImages() {
            axios.get('http://localhost/demoproject/backend/public/upload.php')
                .then(response => {
                    if (response.data.uploads) {
                        this.images = response.data.uploads;  // Update the list of images
                    } else {
                        console.error('Không có dữ liệu hình ảnh.');
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi lấy dữ liệu:', error);
                });
        },
    openImageList() {
            this.getImages(); // Load images before opening the modal
            this.showImageList = true;
        },

        // Close the image selection modal
        closeImageList() {
            this.showImageList = false;
        },
        selectImage(image) {
            this.form.image = image.pathUpload;  // Store the selected image path
            this.closeImageList();  // Close the modal after selection
        },
        // Get full image path (either a valid URL or a local file path)
        getImagePath(path) {
            return path.startsWith('http') ? path : `http://localhost/demoproject/backend/public/${path}`;
        },
    
    async loadUserData() {
      const userId = this.getIdApi();  // Lấy ID từ query string trong URL
      try {
        const { data } = await axios.get(`http://localhost/demoproject/backend/public/index.php/api/users/${userId}`);
        this.form = { ...data };
      } catch (error) {
        console.error(error);
        alert("Không thể tải thông tin người dùng.");
      }
    },
    async handleSubmit() {
      this.errors = {};
      let valid = true;

      // Validate form fields
      if (!this.form.name) {
        this.errors.name = "Tên không được bỏ trống";
        valid = false;
      }
      if (!this.form.username) {
        this.errors.username = "Tên đăng nhập không được bỏ trống";
        valid = false;
      }
      if (!this.form.email) {
        this.errors.email = "Email không được bỏ trống";
        valid = false;
      }
      if (!this.form.password) {
        this.errors.password = "Mật khẩu không được bỏ trống";
        valid = false;
      }
      if (!this.form.phone) {
        this.errors.phone = "Số điện thoại không được bỏ trống";
        valid = false;
      }
      if (!this.form.role) {
        this.errors.role = "Vai trò không được bỏ trống";
        valid = false;
      }

      if (!valid) {
        return;
      }

      try {
        const userId = this.getIdApi();
        await axios.put(`http://localhost/demoproject/backend/public/index.php/api/users/${userId}`, this.form);
        alert("Cập nhật người dùng thành công!");
        console.log(this.form);
        this.$router.push('/admin/users');
      } catch (error) {
        console.error(error);
        alert("Đã xảy ra lỗi khi cập nhật người dùng.");
      }
    }
  },
  created() {
    this.loadUserData();  // Lấy dữ liệu người dùng khi component được tạo
  }
};
</script>


<style scoped>
.invalid-feedback {
    display: block;
}

.image-preview {
    margin-top: 10px;
}

.modal {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.modal-dialog {
    margin: 100px auto;
    max-width: 800px;
}

.image-item img {
    cursor: pointer;
}

.image-item img:hover {
    border: 2px solid #007bff;
}
.image-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.image-item {
    text-align: center;
    position: relative;
    cursor: pointer;
}

.image-thumbnail {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.image-thumbnail:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(44, 190, 100, 0.3);
}

.selected-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    margin-top: 20px;
}
</style>
