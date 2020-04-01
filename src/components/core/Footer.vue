<template>
  <div>
    <!-- Footer -->
    <footer class="font-small indigo">
      <!-- Footer Links -->
      <div class="container">
        <!-- Grid row-->
        <div class="row text-center d-flex justify-content-center">
          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a routerLink="/">Home</a>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <!-- <div *ngIf="currentUser" class="col-md-2 ">
          <h6 class="text-uppercase font-weight-bold">
            <a routerLink="/listing/all">Properties</a>
          </h6>
        </div>

        <div *ngIf="currentUser" class="col-md-2 ">
          <h6 class="text-uppercase font-weight-bold">
            <a routerLink="/listing/add">Add Property</a>
          </h6>
        </div>
     
        <div *ngIf="currentUser" class="col-md-2 ">
          <h6 class="text-uppercase font-weight-bold">
            <a routerLink="/administration/contact">Contact us</a>
          </h6>
        </div>
        
        <div *ngIf="currentUser" class="col-md-2 ">
          <h6 class="text-uppercase font-weight-bold">
            <a routerLink="/user/requests">Customer Requests</a>
          </h6>
          </div>-->
          <!-- Grid column -->
        </div>
        <!-- Grid row-->
      </div>
      <!-- Footer Links -->
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/">MDBootstrap.com</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  padding-top: 1.2rem;
  padding-bottom: 0.7rem;
  background-color: #3a3f44;
}

.page-footer .row {
  padding: 0 !important;
  padding-top: 1rem !important;
  margin: 0 !important;
  background-color: white;
}
</style>