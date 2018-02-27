import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/components/wishlists/wishlists.js';
import '../../ui/components/mywishlists/mywishlists.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', { main: 'App_home' });
    },
});

FlowRouter.route('/wishlist', {
    name: 'App.wishlist',
    action() {
        BlazeLayout.render('App_body', { main: 'wishlists' });
    },
});

FlowRouter.route('/mywishlists', {
    name: 'App.mywishlists',
    action() {
        BlazeLayout.render('App_body', { main: 'mywishlists' });
    },
});

FlowRouter.route('/mywishlists/:_id', {
    name: 'App.mywishlistsid',
    action() {
        BlazeLayout.render('App_body', { main: 'awishlists' });
    },
});

FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', { main: 'App_notFound' });
    },
};
