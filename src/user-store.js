import Vue from 'vue';
import * as Kinvey from "kinvey-html5-sdk";
import kinvey from './kinvey-config.js'

Kinvey.init({
    appKey: kinvey.appKey,
    appSecret: kinvey.appSecret
});



const userStore = new Vue({
    methods: {
        register(username, email, firstname, lastname, phonenumber, password) {
            Kinvey.User.signup({
                username, password, email, firstname, lastname, phonenumber
            })
                .then(function (user) {
                    console.log(user)
        
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        logout() {
            Kinvey.User.logout()
            .then(function () {
                console.log("LOGOUT")
         
            
            }).catch(function (error) {
                console.log(error);
            });

        },
        login(username, password) {
            Kinvey.User.login(username, password)
                .then(function (user) {
                    console.log(user)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getActiveUser() {
            return Kinvey.User.getActiveUser();
        }
    }
});

export default userStore;