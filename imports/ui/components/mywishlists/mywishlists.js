import { Wishlists } from '/imports/api/wishlists/wishlists.js';
import { Meteor } from 'meteor/meteor';
import './mywishlists.html'

Template.mywishlists.onCreated(function () {
    Meteor.subscribe('wishlists.all');
});

Template.mywishlists.helpers({
    lists() {
        return Wishlists.find({});
    }
});
