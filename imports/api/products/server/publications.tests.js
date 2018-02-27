// Tests for the links publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'chai';
import { Products } from '../products.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('links publications', function () {
    beforeEach(function () {
        Products.remove({});
        Products.insert({
            title: 'Beers',
            owner: 'https://www.meteor.com',
            quantities: 2,
            price: 8.0,
            summary: 'German beer'
        });
    });

    describe('products.all', function () {
        it('sends all links', function (done) {
            const collector = new PublicationCollector();
            collector.collect('products.all', (collections) => {
                assert.equal(collections.products.length, 1);
                done();
            });
        });
    });
});
