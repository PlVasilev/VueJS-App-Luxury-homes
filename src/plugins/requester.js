import Vue from 'vue';
import * as Kinvey from "kinvey-html5-sdk";
import kinvey from './kinvey-config.js';
import store from '@/store/store.js';


Kinvey.init({
    appKey: kinvey.appKey,
    appSecret: kinvey.appSecret
});

var propertiesData = Kinvey.DataStore.collection('properties', Kinvey.DataStoreType.Network);
var requestsData = Kinvey.DataStore.collection('requests', Kinvey.DataStoreType.Network);

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
                    store.user = null;
                    store.allProperties = null;
                    store.allRequests = null;
                    console.log(error);
                });

        },
        login(username, password) {
            Kinvey.User.login(username, password)
                .then(function (user) {
                    store.loggedUserName = user.username;
                    store.user = user;
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
            var propertiesArray = JSON.parse(localStorage.getItem("properties"));
            propertiesArray.unshift({
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
            })
            localStorage.setItem("properties", JSON.stringify(propertiesArray))
            propertiesData.save({
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
                var propertiesArray = JSON.parse(localStorage.getItem("properties"));
                var myPropertiesArray = JSON.parse(localStorage.getItem("myProperties"));
                propertiesArray.shift()
                propertiesArray.unshift(entity);
                myPropertiesArray.unshift(entity);
                localStorage.setItem("properties", JSON.stringify(propertiesArray))
                localStorage.setItem("myProperties", JSON.stringify(myPropertiesArray))
            }).catch(function onError(error) {
                console.log(error)
            });
        },
        editPropertie(
            _id,
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
            var currentPropertiesArray = JSON.parse(localStorage.getItem("properties"));
            var propertiesArray = currentPropertiesArray.filter(x => x._id !== _id);
            propertiesArray.unshift({
                _id,
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
            });
            localStorage.setItem("properties", JSON.stringify(propertiesArray))
            propertiesData.save({
                _id,
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
            }).then(function onSuccess() {

            }).catch(function onError(error) {
                console.log(error)
            });
        },
        GetAllProperties() {
            var stream = propertiesData.find();
            stream.subscribe(function onNext(entities) {
                store.allProperties = entities
                    .filter(x => x.isDeleted === false)
                    .sort(function (a, b) { return b.dateOfCreation - a.dateOfCreation });
                localStorage.setItem('properties', JSON.stringify(store.allProperties))
            }, function onError(error) {
                console.log(error)
            }, function onComplete() {
                // ...
            });
        },
        addRequest(title, createdByUsername, createdByEmail, dateOfCreation, listingOwener, isDeleted
        ) {
            requestsData.save({
                title, createdByUsername, createdByEmail, dateOfCreation, listingOwener, isDeleted
            }).then(function onSuccess(entity) {
                console.log(entity)
            }).catch(function onError(error) {
                console.log(error)
            });
        },
        editRequest(_id, title, createdByUsername, createdByEmail, dateOfCreation, listingOwener, isDeleted
        ) {
            requestsData.save({
                _id, title, createdByUsername, createdByEmail, dateOfCreation, listingOwener, isDeleted
            }).then(function onSuccess(entity) {
                console.log(entity)
            }).catch(function onError(error) {
                console.log(error)
            });
        },
        GetAllRequests() {
            var stream = requestsData.find();
            stream.subscribe(function onNext(entities) {
                store.allRequests = entities
                    .filter(x => x.isDeleted === false && (store.loggedUserName === x.listingOwener || store.user.username === x.listingOwener))
                    .sort(function (a, b) { return b.dateOfCreation - a.dateOfCreation });
                localStorage.setItem('requests', JSON.stringify(store.allRequests));
            }, function onError(error) {
                console.log(error)
            }, function onComplete() {
                // ...
            });
        },
    },
});

export default requester;