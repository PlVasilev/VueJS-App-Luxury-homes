import Vue from 'vue';
import * as Kinvey from "kinvey-html5-sdk";
import kinvey from './kinvey-config.js';
import store from './store.js';


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
            }).catch(function (error) {
                store.loggedUserName = null;
                console.log(error);
            });

        },
        login(username, password) {
            Kinvey.User.login(username, password)
                .then(function (user) {
                    store.loggedUserName = user.username;   
                  
                })
                .catch(function (error) {
                    store.loggedUserName = null;
                    console.log(error);
                });
        },
        getUser(){
            return this.loggedUserName;
        }
    },
});

export default userStore;