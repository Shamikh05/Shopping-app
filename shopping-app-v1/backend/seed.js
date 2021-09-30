const mongoose = require('mongoose');
const Product = require('./models/product');


const products = [

    {
        name: 'Phone',
        price: '160000',
        img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
        desc: 'abcdpbnavn'
    },

    {
        name: 'Wallet',
        price: '5000',
        img: 'https://images.unsplash.com/photo-1623770580391-a9f9cc9d5f22?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=364&q=80',
        desc: 'afdbfnvsdvvn'
    },

    {
        name: 'Laptop',
        price: '120000',
        img: 'https://images.unsplash.com/photo-1565375706404-082d37dd1f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80',
        desc: 'feaglapfsgpdagaybashkcb.aljcnabcacakcadkbv'
    },

    {
        name: 'Table',
        price: '12000',
        img: 'https://images.unsplash.com/photo-1581994574720-f60299904853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
        desc: 'dssfsgdhstrvjhhdvlapfsgpdagaybashkcb.aljcnabcacakcadkbv'
    },

]

async function seedDB() {

    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports = seedDB;