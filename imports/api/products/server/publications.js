// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Products } from '../products.js';

Meteor.publish('products.all', function () {
    return Products.find();
});
