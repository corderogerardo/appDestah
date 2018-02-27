// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Products } from './products.js';

Meteor.methods({
    'products.insert'(title, owner, quantities, price, summary) {
        if (!Meteor.userId()) { throw new Meteor.Error('not-authorized');}
        check(summary, String);
        check(price, Number);
        check(quantities, Integer);
        check(owner, String);
        check(title, String);

        return Products.insert({
            summary,
            price,
            quantities,
            owner,
            title,
            createdAt: new Date(),
        });
    },
});
