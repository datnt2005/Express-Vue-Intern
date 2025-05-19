<template>
    <nav class="navbar admin-nav ">
    <div class="search-nav mx-5">
        <form action>
            <input type="search" name="search" id="search" placeholder="Search...">
            <button>
                <i class="fa-solid fa-search"></i>
            </button>
        </form>
    </div>
    <ul class="navbar-nav ml-auto ">
        <!-- Nav Item - User Information -->
        <li class="nav-item  no-arrow d-flex align-items-center mr-3">
            <a class="nav-link " href="#" id="user" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small ">Nguyen Tien Dat</span>
                <i class="fa-regular fa-envelope text-gray-400 fs-5 mr-2 mx-3"></i>
            </a>
            <!-- Dropdown - User Information -->
            <div class="logout">
                <a class="nav-link" href="/" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw fs-5 mr-2 text-gray-400"></i>
                </a>
            </div>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    name: 'AppNav'
}
</script>