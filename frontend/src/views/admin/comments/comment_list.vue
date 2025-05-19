<template>
    <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Danh sách bình luận</h3>
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between mt-4">
                                    <div class="search-items">
                                        <form method="GET">
                                            <input class="input-search mb-3" type="search" name="search" id="search"
                                                placeholder="Tìm kiếm" style="height: 35px;">
                                            <button type="submit" class="btn btn-dark bg-gradient text-white"
                                                style="height: 35px">Tìm kiếm</button>
                                        </form>
                                    </div>
                                </div>
                                <table class="table" style="width: 100%;">
                                    <thead>
                                        <tr>
                                            <th>Tên</th>
                                            <th>Bình luận</th>
                                            <th>Sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Thời gian</th>
                                            <th>Đánh giá</th>
                                            <th>Option</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>tien dat</td>
                                            <td>te qua</td>
                                            <td>hat de cuoi</td>
                                            <td>
                                                
                                                    <span>Không có hình ảnh</span>
                                            </td>
                                            <td>2022-12-12</td>
                                            <td>5 <i class="fa-solid fa-star text-warning"></i></td>
                                            <td>
                                                <div class="action">
                                                    <a href="../../client/detailProduct.php?id=<?php echo htmlspecialchars($comments['idProduct']); ?>"
                                                       class="remove_users fw-bold text-primary text-decoration-none mx-3"><i class="fs-5 fa-solid fa-eye"></i></a>
                                                    <a href="javascript:void(0);"
                                                        class="remove_categories fw-bold text-danger text-decoration-none"
                                                        onclick="confirmDelete('<?php echo $comments['idComment'] ?>')"><i class="fs-5 fa-solid fa-trash-can"></i></a>
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
export default {
    name: 'comment_list'
}
</script>