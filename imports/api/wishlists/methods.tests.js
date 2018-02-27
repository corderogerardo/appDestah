// Tests for links methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Wishlists } from './wishlists.js';
import './methods.js';

if (Meteor.isServer) {
    describe('wishlists methods', function () {
        beforeEach(function () {
            Wishlists.remove({});
        });

        it('can add a new link', function () {
            const addLink = Meteor.server.method_handlers['wishlists.insert'];

            addLink.apply({}, ['meteor.com', 'https://www.meteor.com']);

            assert.equal(Wishlists.find().count(), 1);
        });
    });
}
