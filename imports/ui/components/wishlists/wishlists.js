import { Wishlists } from '/imports/api/wishlists/wishlists.js';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { AutoForm } from 'meteor/aldeed:autoform';
import './wishlists.html';

const Collections = {
    Wishlists
};

Template.registerHelper('Collections', Collections);

Template.wishlists.onCreated(function () {
    Meteor.subscribe('wishlists.all');
});

Template.wishlists.helpers({});

Template.wishlists.events({});
