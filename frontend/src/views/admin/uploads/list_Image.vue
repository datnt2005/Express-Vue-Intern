<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Image</h3>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between mt-4">
                            <div class="search-items">
                                <form method="GET">
                                    <input class="input-search mb-3" type="search" name="search" id="search"
                                        placeholder="Tìm kiếm" style="height: 35px;">
                                    <button type="submit" class="btn btn-dark bg-gradient text-white"
                                        style="height: 35px">Search</button>
                                </form>
                            </div>
                            <div class="add-category">
                                <a href="/admin/imageUpload" class="btn btn-primary px-4 mb-3 mx-5 py-2">Thêm hình ảnh</a>
                            </div>
                        </div>
                        <div class="image-selection">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
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
                                    <div class="col-md-4 border p-3">
                                        <div v-if="selectedImage">
                                            <h4 class="fw-bold">Đã chọn hình ảnh:</h4>
                                            <img :src="getImagePath(selectedImage.pathUpload)" alt="Selected Image"
                                                class="selected-image mt-3 d-block m-auto" />
                                            <p class="mt-3">{{ selectedImage.nameUpload }}</p>
                                            <button class="btn btn-primary mt-3">Save</button>
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
</template>

<script>
import axios from 'axios';

export default {
    name: 'listImageUpload',
    data() {
        return {
            images: [],  // Mảng chứa danh sách hình ảnh
            selectedImage: null,  // Hình ảnh người dùng đã chọn
        };
    },
    methods: {
        // Lấy danh sách hình ảnh từ API
        getImages() {
            axios.get('http://localhost/demoproject/backend/public/upload.php')
                .then(response => {
                    if (response.data.uploads) {
                        this.images = response.data.uploads;  // Cập nhật danh sách hình ảnh
                    } else {
                        console.error('Không có dữ liệu hình ảnh.');
                    }
                })
                .catch(error => {
                    console.error('Lỗi khi lấy dữ liệu:', error);
                });
        },

        // Xử lý khi người dùng chọn hình ảnh
        selectImage(image) {
            this.selectedImage = image;
            // Bạn có thể gửi dữ liệu này đến backend để cập nhật avatar/sản phẩm nếu cần.
            console.log('Hình ảnh đã chọn:', image);
        },

        // Hàm lấy đường dẫn đúng cho hình ảnh
        getImagePath(path) {
            // Nếu path là URL hợp lệ, sử dụng nó trực tiếp
            if (path.startsWith('http')) {
                return path; // Trả về URL nếu là URL hợp lệ
            }
            // Nếu là file tải lên từ thư mục uploads, trả về đường dẫn đầy đủ
            return `http://localhost/demoproject/backend/public/${path}`;
        },
    },
    mounted() {
        this.getImages();  // Lấy danh sách hình ảnh khi component được mount
    },
};
</script>

<style scoped>
.col-md-8 {
    background: #ffffff;
    padding: 20px;
}

.col-md-4 {}

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


button:hover {
    background-color: #45a049;
}
</style>