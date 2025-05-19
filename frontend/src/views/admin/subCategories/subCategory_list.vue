<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Category Products</h3>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mt-4">
                <div class="search-items">
                  <form @submit.prevent="searchSubCategories">
                    <input
                      class="input-search mb-3"
                      type="search"
                      v-model="searchQuery"
                      placeholder="Tìm kiếm"
                      style="height: 35px;"
                    />
                    <button
                      type="submit"
                      class="btn btn-dark bg-gradient text-white"
                      style="height: 35px"
                    >
                      Search
                    </button>
                  </form>
                </div>
                <div class="add-category">
                  <a href="/admin/sub-categories/subCategory_add" class="btn btn-primary px-4 mb-3 mx-5 py-2">
                    Thêm danh mục
                  </a>
                </div>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th>Id Category Products</th>
                    <th>Name Category Products</th>
                    <th>Name Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="subCategory in subCategories"
                    :key="subCategory.idSubCategory"
                  >
                    <td>{{ subCategory.idSubCategory }}</td>
                    <td>{{ subCategory.nameSubCategory }}</td>
                    <td>{{ subCategory.nameCategory }}</td>
                    <td>
                      <div class="action">
                        <a
                          :href="`/admin/sub-categories/subCategory_update/${subCategory.idSubCategory}`"
                          class="update_product text-decoration-none fw-bold mx-2"
                        >
                          <i class="fs-5 fa-solid fa-pen-nib"></i>
                        </a>
                        <a
                          href="#"
                          class="remove_categories fw-bold text-danger text-decoration-none"
                          @click="deleteSubCategory(subCategory.idSubCategory)"
                        >
                          <i class="fs-5 fa-solid fa-trash-can"></i>
                        </a>
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
  import axios from "axios";
  
  export default {
    name: "subCategory_list",
    data() {
      return {
        subCategories: [],
        categories: [],
        searchQuery: "",
        error: false,
      };
    },
    mounted() {
      this.fetchSubCategories();
    },
    methods: {
      async fetchSubCategories() {
        try {
          // Lấy dữ liệu subCategories và categories
          const [subCategoriesResponse, categoriesResponse] = await Promise.all([
            axios.get(
              "http://localhost/demoProject/backend/public/index.php/api/subCategories"
            ),
            axios.get(
              "http://localhost/demoProject/backend/public/index.php/api/categories"
            ),
          ]);
  
          const subCategories = subCategoriesResponse.data;
          const categories = categoriesResponse.data;
  
          // Kết hợp dữ liệu subCategories với nameCategory từ categories
          this.subCategories = subCategories.map((subCategory) => {
            const matchedCategory = categories.find(
              (category) => category.idCategory === subCategory.idCategory
            );
            return {
              ...subCategory,
              nameCategory: matchedCategory
                ? matchedCategory.nameCategory
                : "Không xác định",
            };
          });
        } catch (error) {
          console.error("Lỗi khi tải danh sách danh mục:", error);
          this.error = true;
        }
      },
      searchSubCategories() {
        if (this.searchQuery) {
          axios
            .get(
              `http://localhost/demoProject/backend/public/index.php/api/subCategories/search?query=${this.searchQuery}`
            )
            .then((response) => {
              this.subCategories = response.data;
            })
            .catch((error) => {
              console.error("Lỗi khi tìm kiếm danh mục:", error);
              this.error = true;
            });
        } else {
          this.fetchSubCategories();
        }
      },
      deleteSubCategory(idSubCategory) {
        const confirmDelete = confirm("Bạn có chắc chắn muốn xóa danh mục này?");
        if (confirmDelete) {
          axios
            .delete(
              `http://localhost/demoProject/backend/public/index.php/api/subCategories/${idSubCategory}`
            )
            .then(() => {
              this.subCategories = this.subCategories.filter(
                subCategory => subCategory.idSubCategory !== idSubCategory
              );
              alert("Xóa danh mục thành công!");
              console.log("Xóa danh mục:", idSubCategory);
              
              this.fetchSubCategories();
            })
            .catch((error) => {
              console.error("Lỗi khi xóa danh mục:", error);
              alert("Lỗi khi xóa danh mục!");
            });
        }
      },
    },
  };
  </script>
  