import Vue from 'vue';
import * as Kinvey from "kinvey-html5-sdk";
import kinvey from './kinvey-config.js';
import store from './store.js';


Kinvey.init({
    appKey: kinvey.appKey,
    appSecret: kinvey.appSecret
});

var dataStore = Kinvey.DataStore.collection('properties', Kinvey.DataStoreType.Network);

const requester = new Vue({
    methods: {
        register(username, password, firstname, lastname, email, phonenumber) {
            Kinvey.User.signup({
                username, password, firstname, lastname, email, phonenumber
            })
                .then(function (user) {
                    console.log(user)
                    store.loggedUserName = user.username;
                   
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
                    store.user=null;
                    store.allProperties = null;
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
        addPropertie(
            title,
            city,
            imageUrl,
            price,
            yearOfConstruction,
            addressInput,
            descriptionInput,
            sizeInput,
            roomsInput,
            floorInput,
            creator = store.user.username,
            dateOfCreation,
            isDeleted) {
            dataStore.save({
                title,
                city,
                imageUrl,
                price,
                yearOfConstruction,
                addressInput,
                descriptionInput,
                sizeInput,
                roomsInput,
                floorInput,
                creator,
                dateOfCreation,
                isDeleted
            }).then(function onSuccess(entity) {
                console.log(entity)
            }).catch(function onError(error) {
                console.log(error)
            });
        },
        GetAllProperties() {
            var stream = dataStore.find();
            stream.subscribe(function onNext(entities) {
                store.allProperties = entities;
                localStorage.setItem('properties', JSON.stringify(store.allProperties))
                console.log( store.allProperties)
            }, function onError(error) {
                console.log(error)
            }, function onComplete() {
                // ...
            });           
        }
    },
});

export default requester;