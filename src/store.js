var store = {
   user: null,
   loggedUserName: null,
   isInLanding: false,
   isLoggedIn: false,
   getUser(){
      this.user = localStorage.getItem("kid_SyGwQQfwI.active_user");
   }
  }

  export default store;