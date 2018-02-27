// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Wishlists } from './wishlists.js';

if (Meteor.isServer) {
    describe('wishlist collection', function () {
        it('insert correctly', function () {
            const wishListId = Wishlists.insert({
                name: 'My Wish List',
                picture:'/url/image/',
                gifts:['test', 'test2'],
                summary:'My wish list',
                owner:'Test',
            });
            const added = Wishlists.find({ _id: wishListId });
            const collectionName = added._getCollectionName();
            const count = added.count();

            assert.equal(collectionName, 'wishlists');
            assert.equal(count, 1);
        });
    });
}
