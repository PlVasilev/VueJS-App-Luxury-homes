var store = {
   user: null,
   loggedUserName: null,
   allProperties: Array,
   myProperties: Array,
   searchedProperties: Array,
   selectedListing: null,
   editedListing: null,
   allRequests: Array,
   isInLanding: false,
   isLoggedIn: false,
   getUser(){
      this.user = JSON.parse(localStorage.getItem("kid_SyGwQQfwI.active_user")) ;
   }
  }

  export default store;