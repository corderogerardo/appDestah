// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Wishlists } from '../wishlists.js';
import '../Images.js';

Meteor.publish('wishlists.all', function () {
  return Wishlists.find({author: this.userId});
});

Meteor.publish('images.all', function () {
    return Images.find({userId: this.userId});
});

