var store = {
   user: null,
   loggedUserName: null,
   isInLanding: false,
   isLoggedIn: false,
   getUser(){
      this.user = JSON.parse(localStorage.getItem("kid_SyGwQQfwI.active_user")) ;
   }
  }

  export default store;