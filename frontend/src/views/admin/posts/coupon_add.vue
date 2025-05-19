<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add New Post</h3>
                    </div>
                    <div class="card-body p-4 bg-light">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <form @submit.prevent="handleSubmit">
                                    <div class="mb-3">
                                        <label for="title">Tiêu đề</label>
                                        <input type="text" v-model="form.title" id="title" class="form-control" @input="generateSlug" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="slug">Slug</label>
                                        <input type="text" v-model="form.slug" id="slug" class="form-control" readonly>
                                    </div>
                                    <div class="mb-3">
                                        <label for="category">Danh mục</label>
                                        <select v-model="form.categoryPost_id" id="category" class="form-control" required>
                                            <option value="">-- Chọn danh mục --</option>
                                            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="image" class="text-dark form-label">Hình ảnh</label><br />
                                        <button type="button" @click="openImageList" class="btn btn-success text-white">Chọn ảnh</button>
                                        <div v-if="form.image" class="mt-2">
                                            <img :src="getImagePath(form.image)" alt="Selected Image" class="img-thumbnail" width="100" />
                                            <button type="button" @click="removeImage" class="btn btn-danger btn-sm mt-2">Xoá</button>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="description">Mô tả</label>
                                        <input type="text" v-model="form.description" id="description" class="form-control">
                                    </div>
                                    <div class="mb-3">
                                        <label for="content">Nội dung</label>
                                        <quill-editor v-model:content="form.content" :options="editorOptions" content-type="html" required></quill-editor>
                                    </div>
                                    <div class="mb-3">
                                        <label for="is_featured">Nổi bật</label>
                                        <input type="checkbox" v-model="form.is_featured" id="is_featured" class="form-check-input ms-2">
                                    </div>
                                    <div class="mb-3">
                                        <label for="status">Trạng thái</label>
                                        <select v-model="form.status" id="status" class="form-control">
                                            <option value="1">Hiện</option>
                                            <option value="0">Ẩn</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn btn-primary" :disabled="isSubmitting">Thêm bài viết</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const token = localStorage.getItem('token');
const categories = ref([]);
const isSubmitting = ref(false);
const user = localStorage.getItem("user");
const idUser = JSON.parse(user).id;

const form = ref({
    title: '',
    slug: '',
    content: '',
    image: '',
    categoryPost_id: '',
    is_featured: false,
    status: '1',
    description: '',
    idUser: idUser
});

const images = ref([]);
const showImageList = ref(false);

const getImages = () => {
    axios.get('http://localhost:8000/api/uploads').then(response => {
        images.value = response.data.data || [];
    }).catch(error => console.error('Lỗi khi lấy dữ liệu:', error));
};

const openImageList = () => {
    getImages();
    showImageList.value = true;
};

const closeImageList = () => {
    showImageList.value = false;
};

const selectImage = (image) => {
    form.value.image = image.pathUpload;
    showImageList.value = false;
};

const removeImage = () => {
    form.value.image = '';
};

const getImagePath = (path) => {
    return `http://localhost:8000/${path}`;
};

const generateSlug = () => {
    form.value.slug = form.value.title.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
};

onMounted(() => {
    axios.get('http://localhost:8000/api/category_posts', {
        headers: { Authorization: `Bearer ${token}` }
    }).then(response => {
        categories.value = response.data;
    }).catch(error => console.error('Lỗi khi tải danh mục:', error));
});

const handleSubmit = async () => {
    if (isSubmitting.value) return;
    isSubmitting.value = true;

    try {
        await axios.post('http://localhost:8000/api/posts', {
            ...form.value,
            is_featured: form.value.is_featured ? 1 : 0
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        alert('Thêm bài viết thành công!');
    } catch (error) {
        console.error('Lỗi khi thêm bài viết:', error);
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
.image-thumbnail {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
}
.image-thumbnail:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>
