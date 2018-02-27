// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Products } from '../../api/products/products.js';

Meteor.startup(() => {
    // if the Links collection is empty
    if (Products.find().count() === 0) {
        const data = [
            {
                title: 'T.V.',
                owner: 'https://www.meteor.com',
                quantities: 2,
                price: 8.0,
                summary: 'LG TV',
                createdAt: new Date(),
            },
            {
                title: 'Example',
                owner: 'https://www.meteor.com',
                quantities: 2,
                price: 8.0,
                summary: 'Example',
                createdAt: new Date(),
            },
            {
                title: 'Example',
                owner: 'https://www.meteor.com',
                quantities: 2,
                price: 8.0,
                summary: 'Example',
                createdAt: new Date(),
            },
            {
                title: 'Example',
                owner: 'https://www.meteor.com',
                quantities: 2,
                price: 8.0,
                summary: 'Example',
                createdAt: new Date(),
            },
        ];

        data.forEach(product => Products.insert(product));
    }
});
