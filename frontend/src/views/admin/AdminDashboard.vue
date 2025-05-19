<template>
    <!-- <div id="content"> -->
    <div class="container-fluid">
        <div class="row mb-3">
            <div class="card-container">
                <div class="card">
                    <h2>Tổng Đơn Hàng</h2>
                    <p id="totalRevenue">0đ</p>
                </div>
                <div class="card">
                    <h2>Doanh thu thực tế</h2>
                    <p id="totalRevenueSuccess">0đ</p>
                </div>
                <div class="card">
                    <h2>Đơn hàng</h2>
                    <p id="totalOrders">0</p>
                </div>
                <div class="card">
                    <h2>Sản phẩm đã bán</h2>
                    <p id="totalSoldProducts">0</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Doanh thu</h5>
                    </div>
                    <div class="card-body">
                        <canvas ref="graphCanvas"></canvas>
                        <h5 class="mt-3">Tổng doanh thu: <span id="total-revenue-monthly" class="fw-bold">0đ</span></h5>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Tồn kho sản phẩm</h5>
                    </div>
                    <div class="card-body">
                        <canvas ref="stockChartCanvas"></canvas>
                        <h5 class="mt-3">Tổng số lượng sản phẩm tồn kho: <span id="total-stock" class="fw-bold">0</span></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- </div> -->
</template>


<script>
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
    name: 'AdminDashboard',
    mounted() {
        // const months = ["Jan", "Feb", "Mar", "Apr"];
        const monthlyRevenues = [0, 0, 0, 0];
        const orderDates = ["2024-01-01", "2024-02-01", "2024-03-01", "2024-04-01"];
        const dailyRevenues = [0, 0, 0, 0];
        const productNames = ["Product A", "Product B", "Product C"];
        const stockCounts = [0, 0, 0];

        // Lấy ref của canvas
        const ctxRevenue = this.$refs.graphCanvas.getContext('2d');
        new Chart(ctxRevenue, {
            type: 'line',
            data: {
                labels: orderDates,
                datasets: [{
                    label: 'Doanh thu theo ngày',
                    data: dailyRevenues,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: true,
                    tension: 0.3
                }, {
                    label: 'Doanh thu hàng tháng',
                    data: monthlyRevenues,
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    fill: true,
                    type: 'line',
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Doanh thu (VND)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Thời gian'
                        }
                    }
                }
            }
        });

        // Biểu đồ tồn kho sản phẩm
        const ctxStock = this.$refs.stockChartCanvas.getContext('2d');
        new Chart(ctxStock, {
            type: 'bar',
            data: {
                labels: productNames,
                datasets: [{
                    label: 'Số lượng tồn kho',
                    data: stockCounts,
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Số lượng'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Sản phẩm'
                        }
                    }
                }
            }
        });
    }
};

</script>

<style scoped>
.card-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;
}

.card {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    flex: 1;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card h2 {
    font-size: 18px;
    margin: 0;
    color: #666;
}

.card p {
    font-size: 24px;
    font-weight: bold;
    color: #333;
}
</style>
