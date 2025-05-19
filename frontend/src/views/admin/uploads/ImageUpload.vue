<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Image</h3>
          </div>
          <div class="card-body p-4 bg-light">
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                <h1 class="mt-4">Thêm hình ảnh</h1>

                <!-- Form upload -->
                <form @submit.prevent="handleUpload" enctype="multipart/form-data">
                  <div class="mb-3">
                    <label for="image_url" class="form-label">Nhập URL hình ảnh:</label>
                    <input type="text" class="form-control w-100" v-model="imageUrl" placeholder="Nhập URL hình ảnh">
                  </div>

                  <div class="mb-3">
                    <label for="image_file" class="form-label">Chọn file hình ảnh:</label>
                    <input type="file" class="form-control w-100" @change="handleFileChange" />
                  </div>

                  <div class="d-flex justify-content-between mt-3">
                                        <a href="/admin/list_imageUpload/" class="return btn text-white btn-dark bg-gradient">
                                            <i class="fa-solid fa-right-from-bracket deg-180"></i> Quay lại
                                        </a>
                                        <button type="submit" class="btn btn-dark bg-gradient text-white">Tải lên</button>
                                    </div>
                </form>

                <div v-if="uploadedImageUrl">
                  <h3>Ảnh đã tải lên:</h3>
                  <img :src="uploadedImageUrl" alt="Uploaded image" width="200" />
                </div>
                <div v-else>
                  <h3>Ảnh hình ảnh:</h3>
                  <img :src="imageUrl" alt="Uploaded image" width="200" v-if="imageUrl" />
                </div>

                <div v-if="error" class="alert alert-danger mt-3">
                  {{ error }}
                </div>
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
  name: 'ImageUpload',
  data() {
    return {
      imageUrl: '',          // URL nhập từ người dùng
      imageFile: null,       // File ảnh từ người dùng
      uploadedImageUrl: '', // URL của ảnh sau khi tải lên
      error: '',            // Thông báo lỗi
    };
  },
  methods: {
    handleFileChange(event) {
      this.imageFile = event.target.files[0];
    },
    async handleUpload() {
      const formData = new FormData();
      if (this.imageUrl) {
        formData.append('image_url', this.imageUrl);
      }
      if (this.imageFile) {
        formData.append('image_file', this.imageFile);
      }

      console.log('Form data:', formData); // Log formData để kiểm tra

      if (!this.imageUrl && !this.imageFile) {
        this.error = 'Vui lòng nhập URL hoặc chọn một file hình ảnh để tải lên.';
        return;
      }

      try {
        const response = await axios.post('http://localhost/demoProject/backend/public/upload.php', formData);

        console.log(response.data); // Log kết quả trả về từ server

        if (response.data.imagePath) {
          this.uploadedImageUrl = response.data.imagePath;
          this.error = '';
          
        } else {
          this.error = response.data.error || 'Có lỗi xảy ra khi tải lên.';
        }
      } catch (error) {
        console.error("Lỗi khi tải lên:", error);
        this.error = 'Có lỗi khi tải lên, vui lòng thử lại.';
      }
    }
  }
};
</script>

<style scoped>
.upload-container {
  margin: 20px;
}

form {
  margin-bottom: 20px;
}
</style>
