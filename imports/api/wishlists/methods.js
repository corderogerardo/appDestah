// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Wishlists } from './wishlists.js';

Meteor.methods({
    'wishlists.insert'(doc) {
        console.log("method "+doc);
        if (!Meteor.userId()) { throw new Meteor.Error('not-authorized');}
        check(doc.owner, String);
        check(doc.summary, String);
        check(doc.gifts, Array);
        check(doc.picture, String);
        check(doc.name, String);

        return Wishlists.insert({
            name:doc.name,
            picture:doc.picture,
            gifts:doc.gifts,
            summary:doc.summary,
            owner:Meteor.userId(),
            createdAt: new Date(),
        });
    },
});
