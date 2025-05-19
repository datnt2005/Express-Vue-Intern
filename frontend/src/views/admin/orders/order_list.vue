<template>
    <div class="container-fluid">
                <!-- Place your content here -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Orders</h3>
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
                                </div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Sản phẩm</th>
                                            <th>Người mua</th>
                                            <th>Số lượng</th>
                                            <th>Tổng tiền</th>
                                            <th>Thời gian</th>
                                            <th>Ghi chú</th>
                                            <th>Trạng thái</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td><b>hat de cuoi</b></td>
                                            <td> tdajt <br> 0123456789 - datntpk03697@gmail.com</td>
                                            <td>1</td>
                                            <td>135.000 VNĐ</td>
                                            <td>2022-12-12</td>
                                            <td>null</td>
                                            <td>dang cho xac nhan</td>
                                            <td>
                                                <div class="action">
                                                    <a href="success.php?id=<?php echo $orders['idOrder']; ?>"
                                                        class="update_product text-decoration-none fw-bold mx-2">Xác
                                                        nhận</a>
                                                        <a href="javascript:void(0);"
                                                        class="remove_categories fw-bold text-danger text-decoration-none"
                                                        onclick="deleteSuccess('<?php echo $orders['idOrder'] ?>')">Từ chối</a>
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
    name: 'order_list'
}
</script>