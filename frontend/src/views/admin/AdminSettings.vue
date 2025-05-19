<template>
    <div class="container-fluid">
                <!-- Place your content here -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">Settings</h3>
                            </div>
                            <div class="card-body">
                                <div class="container mt-5">
                                    <h2 class="text-center">Account Settings</h2>
                                    <div class="row mt-4">
                                        <!-- Sidebar -->
                                        <div class="col-md-3">
                                            <ul class="list-group">
                                                <li class="list-group-item active">Profile</li>
                                                <li class="list-group-item">Change Password</li>
                                                <li class="list-group-item">Notification Settings</li>
                                                <li class="list-group-item">Privacy Settings</li>
                                            </ul>
                                        </div>

                                        <!-- Main Content -->
                                        <div class="col-md-9">
                                            <!-- Profile Section -->
                                            <div id="profile-settings">
                                                <h4>Profile Information</h4>
                                                <form>
                                                    <div class="mb-3">
                                                        <label for="username" class="form-label">Username</label>
                                                        <input type="text" class="form-control" id="username"
                                                            placeholder="Enter your username">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="email" class="form-label">Email</label>
                                                        <input type="email" class="form-control" id="email"
                                                            placeholder="Enter your email">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="phone" class="form-label">Phone Number</label>
                                                        <input type="text" class="form-control" id="phone"
                                                            placeholder="Enter your phone number">
                                                    </div>
                                                    <button type="submit" class="btn btn-primary">Save Changes</button>
                                                </form>
                                            </div>

                                            <!-- Change Password Section -->
                                            <div id="change-password" class="mt-5">
                                                <h4>Change Password</h4>
                                                <form>
                                                    <div class="mb-3">
                                                        <label for="current-password" class="form-label">Current
                                                            Password</label>
                                                        <input type="password" class="form-control"
                                                            id="current-password" placeholder="Enter current password">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="new-password" class="form-label">New
                                                            Password</label>
                                                        <input type="password" class="form-control" id="new-password"
                                                            placeholder="Enter new password">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="confirm-password" class="form-label">Confirm New
                                                            Password</label>
                                                        <input type="password" class="form-control"
                                                            id="confirm-password" placeholder="Confirm new password">
                                                    </div>
                                                    <button type="submit" class="btn btn-primary">Change
                                                        Password</button>
                                                </form>
                                            </div>

                                            <!-- Notification Settings Section -->
                                            <div id="notification-settings" class="mt-5">
                                                <h4>Notification Settings</h4>
                                                <form>
                                                    <div class="form-check form-switch mb-3">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="email-notifications">
                                                        <label class="form-check-label" for="email-notifications">Email
                                                            Notifications</label>
                                                    </div>
                                                    <div class="form-check form-switch mb-3">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="sms-notifications">
                                                        <label class="form-check-label" for="sms-notifications">SMS
                                                            Notifications</label>
                                                    </div>
                                                    <div class="form-check form-switch mb-3">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="push-notifications">
                                                        <label class="form-check-label" for="push-notifications">Push
                                                            Notifications</label>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary">Save Changes</button>
                                                </form>
                                            </div>

                                            <!-- Privacy Settings Section -->
                                            <div id="privacy-settings" class="mt-5">
                                                <h4>Privacy Settings</h4>
                                                <form>
                                                    <div class="form-check mb-3">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="public-profile">
                                                        <label class="form-check-label" for="public-profile">Make
                                                            Profile Public</label>
                                                    </div>
                                                    <div class="form-check mb-3">
                                                        <input class="form-check-input" type="checkbox"
                                                            id="search-engine">
                                                        <label class="form-check-label" for="search-engine">Allow search
                                                            engines to index my profile</label>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary">Save Changes</button>
                                                </form>
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
    export default {
        name: 'AdminSettings'
    }
</script>