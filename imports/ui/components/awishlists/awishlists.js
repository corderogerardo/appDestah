import { Wishlists } from '/imports/api/wishlists/wishlists.js';
import '/imports/api/wishlists/Images.js';
import { Meteor } from 'meteor/meteor';
import './awishlists.html'

Template.awishlists.onCreated(function () {
    Meteor.subscribe('wishlists.all');
    Meteor.subscribe('images.all');
});

Template.awishlists.helpers({
    list() {
        let wishlistId = FlowRouter.getParam('_id');
        return Wishlists.find({_id:wishlistId});
    },
    user(userId){
        let user = Meteor.users.findOne({_id: userId});
        return user.emails[0].address;
    },
    pathImage(imageId){
        let pathImage = Images.findOne({_id: imageId}).fetch();
        return JSON.stringify(pathImage);
    }
});
