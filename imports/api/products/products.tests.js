// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Products } from './products.js';

if (Meteor.isServer) {
    describe('products collection', function () {
        it('insert correctly', function () {
            const productId = Products.insert({
                title: 'Beers',
                owner: 'https://www.meteor.com',
                quantities: 2,
                price: 8.0,
                summary: 'German beer'
            });
            const added = Products.find({ _id: productId });
            const collectionName = added._getCollectionName();
            const count = added.count();

            assert.equal(collectionName, 'products');
            assert.equal(count, 1);
        });
    });
}
