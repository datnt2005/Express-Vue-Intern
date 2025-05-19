<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card shadow-sm">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h3 class="card-title">Người dùng</h3>
            <a href="/admin/users/add_user" class="btn btn-primary">Thêm người dùng</a>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3">
              <button class="btn btn-danger" @click="deleteSelectedUsers" :disabled="selectedUsers.length === 0">
                <i class="fa-solid fa-trash"></i>
              </button>
              <div class="search-items">
                <form @submit.prevent="searchUsers" class="d-flex">
                  <div class="input-group">
                    <input class="form-control me-2" type="search" v-model="searchQuery" placeholder="Tìm kiếm">
                    <button class="input-group-text btn btn-secondary" type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div v-if="users.length === 0" class="alert alert-warning text-center">
              Không có người dùng nào để hiển thị.
            </div>

            <div v-if="error" class="alert alert-danger text-center">
              Lỗi khi tải người dùng. Vui lòng thử lại sau.
            </div>

            <table class="table table-hover">
              <thead>
                <tr>
                  <th><input type="checkbox" @change="toggleSelectAll" v-model="selectAll"></th>
                  <th @click="sortBy('idUser')">
                    ID
                    <i class="fa-solid fs-6 text-muted" :class="getSortIcon('idUser')"></i>
                  </th>
                  <th @click="sortBy('name')">
                    Tên
                    <i class="fa-solid fs-6 text-muted" :class="getSortIcon('name')"></i>
                  </th>
                  <th @click="sortBy('username')">
                    Tên đăng nhập
                    <i class="fa-solid fs-6 text-muted" :class="getSortIcon('username')"></i>
                  </th>
                  <th @click="sortBy('email')">
                    Email
                    <i class="fa-solid fs-6 text-muted" :class="getSortIcon('email')"></i>
                  </th>
                  <th @click="sortBy('phone')">
                    Sđt
                    <i class="fa-solid fs-6 text-muted" :class="getSortIcon('phone')"></i>
                  </th>
                  <th @click="sortBy('role')">
                    Vai trò
                    <i class="fa-solid fs-6 text-muted" :class="getSortIcon('role')"></i>
                  </th>
                  <th>Avatar</th>
                  <th @click="sortBy('status')">
                    Trạng thái
                    <i class="fa-solid fs-6 text-muted" :class="getSortIcon('status')"></i>
                  </th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in sortedUsers" :key="user.idUser">
                  <td><input type="checkbox" v-model="selectedUsers" :value="user.idUser"></td>
                  <td>{{ user.idUser }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.phone }}</td>
                  <td>{{ user.role }}</td>
                  <td>
                    <img :src="getImagePath(user.image)" :alt="user.image" class="avatar-img">
                  </td>
                  <td>
                    <span class="badge" :class="statusBadge(user.status)">{{ user.status }}</span>
                  </td>
                  <td>
                    <a :href="`/admin/users/update_user/${user.idUser}`" class="text-primary me-2">
                      <i class="fa-solid fa-pen"></i>
                    </a>
                    <a href="#" class="text-danger" @click.prevent="deleteUser(user.idUser)">
                      <i class="fa-solid fa-trash"></i>
                    </a>
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

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);
const searchQuery = ref('');
const error = ref(false);
const selectedUsers = ref([]);
const selectAll = ref(false);
const sortKey = ref('');
const sortOrder = ref(1); // 1 = ASC, -1 = DESC

onMounted(fetchUsers);

function fetchUsers() {
  axios.get('http://localhost/demoProject/backend/public/index.php/api/users')
    .then(response => { users.value = response.data; })
    .catch(() => { error.value = true; });
}

function searchUsers() {
  if (searchQuery.value) {
    axios.get(`http://localhost/demoProject/backend/public/index.php/api/users/search?query=${searchQuery.value}`)
      .then(response => { users.value = response.data; })
      .catch(() => { error.value = true; });
  } else {
    fetchUsers();
  }
}

function getImagePath(path) {
  return path.startsWith('http') ? path : `http://localhost/demoProject/backend/public/${path}`;
}

function statusBadge(status) {
  return status === 'Đang hoạt động' ? 'bg-success' : 'bg-danger';
}

function deleteUser(idUser) {
  if (confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
    axios.delete(`http://localhost/demoProject/backend/public/index.php/api/users/${idUser}`)
      .then(() => {
        users.value = users.value.filter(user => user.idUser !== idUser);
        alert("Xóa người dùng thành công!");
      })
      .catch(() => alert("Lỗi khi xóa người dùng!"));
  }
}

function toggleSelectAll() {
  if (selectAll.value) {
    selectedUsers.value = users.value.map(user => user.idUser);
  } else {
    selectedUsers.value = [];
  }
}

function deleteSelectedUsers() {
  if (selectedUsers.value.length === 0) return;

  if (confirm("Bạn có chắc chắn muốn xóa những người dùng đã chọn?")) {
    const deletePromises = selectedUsers.value.map(id =>
      axios.delete(`http://localhost/demoProject/backend/public/index.php/api/users/${id}`)
    );

    Promise.all(deletePromises)
      .then(() => {
        users.value = users.value.filter(user => !selectedUsers.value.includes(user.idUser));
        selectedUsers.value = [];
        alert("Xóa người dùng thành công!");
      })
      .catch(() => alert("Lỗi khi xóa người dùng!"));
  }
}

function sortBy(key) {
  if (sortKey.value === key) {
    sortOrder.value *= -1; // Đảo ngược thứ tự sắp xếp
  } else {
    sortKey.value = key;
    sortOrder.value = 1;
  }
}

const sortedUsers = computed(() => {
  return [...users.value].sort((a, b) => {
    if (a[sortKey.value] < b[sortKey.value]) return -sortOrder.value;
    if (a[sortKey.value] > b[sortKey.value]) return sortOrder.value;
    return 0;
  });
});

function getSortIcon(key) {
  if (sortKey.value !== key) return "fa-sort";
  return sortOrder.value === 1 ? "fa-sort-up" : "fa-sort-down";
}
</script>

<style scoped>
.avatar-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
th {
  cursor: pointer;
}
</style>
