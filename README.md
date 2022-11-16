# Sneaker Store

Sneaker Store is a place where you can find and buy for your ambition sneakers that you need

# Description

In this app, you can search, get information and make a payment for this sneaker if you love it

User can login faster by google account, and make a payment online via paypal. After user make a payment successfully user will receive a information mail about this purchase

As a owner shop, i use adminjs dashboard which owner easily manage the products, user and the payment with CRUD

Admin page: https://sneaker-be.herokuapp.com/admin/login

## User Story

As a user, you can get and select items

As a admin page, you can edit, upload, get , delete your items

### Authentication

-[] as a user, i can register and login with name, email, password
-[] as a admin shop, i can register and login with name, email, password

### Users

-[] as a user, i can see list of items
-[] as a user, i can update my profile

### Admin

-[] as a admin shop, i can edit item
-[] as a admin shop, i can create new item
-[] as a admin shop, i can delete the item
-[] as a admin shop, i can get list of items

### Items

-[] as a user and admin, i can get list of items
-[] as a user and admin, i can get detail of item

## Endpoint APIs

### Auth APIs

```Javascript
/**
 * @route POST /users/login
 * @description Log in with username and password
 * @body {email, password}
 * @access Public
 * /
```

```Javascript
/**
 * @route POST /admins/login
 * @description Log in with username and password
 * @body {email, password}
 * @access Public
 * /
```

### Users APIs

```Javascript
/**
 * @route POST /users
 * @description Register new user
 * @body {name, email, password}
 * @access Public
 * /
```

```Javascript
/**
 * @route PUT /users
 * @description Update user's profile
 * @body {name, phoneNumber, address}
 * @access Login required
 * /
```

```Javascript
// Route for user make a payment
```

### Payment APIs

```Javascript
/**
 * @route GET /payment
 * @description Get payment's detail
 * @access Login
 */
```

```Javascript
/**
 * @route POST /payment
 * @description Post info of user's payment
 * @access Login
 */
```

### Items

```Javascript
/**
* @route GET /items?page=1&limit=20
* @description Get item with pagination
* @access Public
* /
```

```Javascript
/**
* @route GET /items/:id
* @description Get the item's detail
* @access Public
* /
```

## Diagram Relation

![diagram image](./image//sneaker_diagram.png)
