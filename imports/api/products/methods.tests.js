// Tests for links methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Products } from './products.js';
import './methods.js';

if (Meteor.isServer) {
    describe('products methods', function () {
        beforeEach(function () {
            Products.remove({});
        });

        it('can add a new link', function () {
            const addLink = Meteor.server.method_handlers['products.insert'];
            addLink.apply({}, ['Beers', 'https://www.meteor.com', 2, 8.0, 'German beer']);
            assert.equal(Products.find().count(), 1);
        });
    });
}
