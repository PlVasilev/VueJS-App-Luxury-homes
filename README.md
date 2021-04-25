# Project - Luxury-Homes 

### Vue JS, JavaScript, Kinvey

#### Since my free trial of Kunvey consle has expired the app is no longer functional.

## Description

### Type - System For listing properties on the market 

This is a simple site for listing properties on the market as seller 
and as buyer you can send rquest to view properies to the seller.

Not logged user can only see landing page register and login.

Logged in User can add listing, edit it and remove it.
Logged in User can view all listings choose from them and
send request to see them and probably after that buy them.

## Entities

### User 
    _id: string;
    Username: string
    Password: string
    Email: string
    FirstName: string
    LastName: string
    Phone Number: string

### Listing 
    _id: string;
    title: string;
    description: string;
    city: string;
    address: string;
    yearOfConstruction: number;
    price: number;
    size: number;
    rooms: number;
    floor: number;
    postedOn: string;
    postedBy: string;
    imageUrl: string;

### Request 
    _id: string;
    requestedOn: number;
    name: string;
    requestedBy: string;
    email: string;
    postedBy: string;


