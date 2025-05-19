<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Products</h3>
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
                            <div class="add-category d-flex align-items-center mb-3">

                                <div class="position-relative action_dad ">

                                    <a href="#" class="update_product 
                                                            text-decoration-none fw-bold mx-2"
                                       >
                                        <i class="fa-solid fa-bars fa-xl text-dark"></i>
                                    </a>
                                    <ul class="dropdown-menus position-absolute top-3 end-0 px-3 py-1"
                                        id="dropdown-menu">
                                        <li><a href="./add.php" class="dropdown-item">Thêm sản phẩm</a></li>
                                        <li><a class="dropdown-item" href="./sizes/list.php">Thêm kích cỡ</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div v-if="products.length === 0" class="alert alert-warning text-center">
                            Không có sản phẩm nào để hiển thị.
                        </div>

                        <div v-if="error" class="alert alert-danger text-center">
                            Lỗi khi tải sản phẩm. Vui lòng thử lại sau.
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Hình ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Mô tả</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr v-for="product in products" class="align-middle" :key="product.idProduct">
                                    <td><img :src="product['namePicProduct']" style="width: 100px; height: 100px;"
                                            alt="" class="image_list"></td>
                                    <td>{{ product['nameProduct'] }}</td>
                                    <td>{{ product['price'] }}</td>
                                    <td>{{ product['total_quantity'] }}</td>
                                    <td>{{ product['description'] }}</td>
                                    <td class="action_dad">
                                        <div class="action d-flex">
                                            <!-- Nút xóa -->
                                            <a href="javascript:void(0);"
                                                class="remove_categories fw-bold text-danger text-decoration-none mx-3"
                                                @click="confirmDelete(product['idProduct'])">
                                                <i class="fs-5 fa-solid fa-trash-can"></i>
                                            </a>

                                            <!-- Dropdown chức năng -->
                                            <div class="position-relative">
                                                <a href="#" class="update_product text-decoration-none fw-bold mx-2">
                                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                                </a>
                                                <ul class="dropdown-menus position-absolute top-3 end-0 px-3 py-1">
                                                    <li><a class="dropdown-item"
                                                            :href="`update.php?id=${product['idProduct']}`">Cập nhật
                                                            thông tin</a></li>
                                                    <li><a class="dropdown-item"
                                                            :href="`color_size/list.php?id=${product['idProduct']}`">Danh
                                                            sách kích cỡ</a></li>
                                                    <li><a class="dropdown-item"
                                                            :href="`imageProduct/list.php?id=${product['idProduct']}`">Danh
                                                            sách hình ảnh</a></li>
                                                </ul>
                                            </div>
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
    <!-- /#page-content-wrapper -->


</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            products: [],   // Mảng chứa danh sách sản phẩm
            error: false     // Cờ kiểm tra lỗi khi tải sản phẩm
        };
    },
    mounted() {
        this.fetchProducts();   // Gọi hàm tải sản phẩm khi component được mount
    },
    methods: {
    fetchProducts() {
        axios.get('http://localhost/demoProject/backend/public/index.php/api/products')
            .then(response => {
                this.products = response.data;
            })
            .catch(error => {
                console.error(error);
                this.error = true;
            });
    },
    confirmDelete(idProduct) {
        if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
            console.log("Xóa sản phẩm:", idProduct);
            
            this.deleteProduct(idProduct);
        }
    },
    deleteProduct(idProduct) {
        axios.delete(`http://localhost/demoProject/backend/public/index.php/api/products/${idProduct}`)
            .then(() => {
                this.products = this.products.filter(product => product.idProduct !== idProduct);
                alert("Xóa sản phẩm thành công!");
            })
            .catch(error => {
                console.error(error);
                alert("Có lỗi xảy ra khi xóa sản phẩm. Vui lòng thử lại.");
            });
    }
}

};

// let openDropdown = null;

// function showChange(event, element) {
//     event.preventDefault();

//     // Close any currently open dropdowns
//     if (openDropdown && openDropdown !== element.nextElementSibling) {
//         openDropdown.style.display = 'none';
//     }

//     // Toggle the clicked dropdown
//     let dropdown = element.nextElementSibling;
//     if (dropdown.style.display === 'block') {
//         dropdown.style.display = 'none';
//         openDropdown = null;
//     } else {
//         dropdown.style.display = 'block';
//         openDropdown = dropdown;
//     }
// }


</script>

<style>
.dropdown-menus {
    display: none;
    list-style: none;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
}

.dropdown-menus li {
    margin: 5px 0;
}

.dropdown-menus li:hover {
    color: #c46a2f;
}

.dropdown-menus li a {
    text-decoration: none;
    color: #000;
}

.action_dad {
    width: 100px;
}
</style>
