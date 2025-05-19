<template>
    <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Categories</h3>
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
                                        <a href="/admin/categories/category_add" class="btn btn-primary px-4 mb-3 mx-5 py-2">Thêm danh
                                            mục</a>
                                    </div>
                                </div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Id Category</th>
                                            <th>Name Category</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                        <tr v-for="category in categories" :key="category.idCategory">
                                            <td>{{ category.idCategory }}</td>
                                            <td>{{ category.nameCategory }}</td>
                                            <td>
                                                <div class="action">
                                                  <a :href="`/admin/categories/category_update/${category.idCategory}`"
                                                     class="update_product text-decoration-none fw-bold mx-2"><i class="fs-5 fa-solid fa-pen-nib"></i></a>
                                                  <a href="#" class="remove_categories fw-bold text-danger text-decoration-none" 
                                                     @click="deleteCategory(category.idCategory)"><i class="fs-5 fa-solid fa-trash-can"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'category_list',
    data() {
      return {
        categories: [],          // Mảng chứa danh sách người dùng
        searchQuery: '',    // Biến lưu trữ từ khóa tìm kiếm
        error: false,       // Cờ kiểm tra lỗi khi tải người dùng
      }; 
    },
  
    mounted() {
      this.fetchCategories();
    },
  
    methods: {
      // Lấy danh sách người dùng
      fetchCategories() {
        axios.get('http://localhost/demoProject/backend/public/index.php/api/categories')
          .then(response => {
            this.categories = response.data;
          })
          .catch(error => {
            console.error("Lỗi khi tải danh sách danh mục:", error);
            this.error = true;
          });
      },
  
      // Phương thức tìm kiếm người dùng
      searchCategories() {
        if (this.searchQuery) {
          axios.get(`http://localhost/demoProject/backend/public/index.php/api/categories/search?query=${this.searchQuery}`)
            .then(response => {
              this.categories = response.data;
            })
            .catch(error => {
              console.error("Lỗi khi tìm kiếm danh mục:", error);
              this.error = true;
            });
        } else {
          this.fetchCategories();
        }
      },
  
      // Phương thức xóa người dùng
      deleteCategory(idCategory) {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa danh mục này?");
          
        if (confirmDelete) {
          axios.delete(`http://localhost/demoProject/backend/public/index.php/api/categories/${idCategory}`)
            .then(() => {
              this.categories = this.categories.filter(category => category.idCategory !== idCategory);
              alert("Xóa danh mục thành công!");
            })
            .catch(error => {
              console.error("Lỗi khi xóa danh mục:", error);
              alert("Lỗi khi xóa danh mục!");
            });
        } else {
          return;
        }
      },
    }
  };
  </script>