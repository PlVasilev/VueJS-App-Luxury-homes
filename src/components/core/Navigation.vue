<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" routerLink>Luxury Homes</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link">
              Properties
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Add Property</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Contact Us</a>
          </li>
        </ul>

        <a class="nav-link">Login</a>
        <a class="nav-link">Register</a>
        <a class="nav-link">Customer Requests</a>
        <a class="nav-link">Users messages</a>
        <a class="nav-link">Logout</a>

        <!-- <ul class="navbar-nav mr-auto">
        <li v-If="currentUser" class="nav-item">
          <a class="nav-link" routerLink="/listing/all">Properties <span class="sr-only">(current)</span></a>
        </li>
        <li v-If="currentUser"  class="nav-item">
          <a class="nav-link" routerLink="/listing/add">Add Property</a>
        </li>
        <li v-If="currentUser" class="nav-item">
          <a class="nav-link" routerLink="/administration/contact">Contact Us</a>
        </li>
      </ul>

      <a v-If="!currentUser" class="nav-link" routerLink="/user/login">Login</a>
      <a v-If="!currentUser" class="nav-link" routerLink="/user/register">Register</a>
      <a v-If="currentUser"  class="nav-link" routerLink="/user/requests">Customer Requests</a>
      <a v-If="currentUser && currentUser.username === 'admin'"  class="nav-link" routerLink="/administration/messages">Users messages</a>
        <a v-If="currentUser" (click)="logoutHandler()" class="nav-link" routerLink="">Logout</a>-->

        <!-- <form *ngIf="currentUser" #searchFrom="ngForm" (ngSubmit)="searchFormHandler(searchFrom.value)" class="form-inline my-2 my-lg-0">
        <input #searchInput="ngModel" ngModel name="search" class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" >Search</button>
        </form>-->
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
}
</style>