// Tests for the links publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'chai';
import { Wishlists } from '../wishlists.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('links publications', function () {
  beforeEach(function () {
      Wishlists.remove({});
      Wishlists.insert({
      title: 'meteor homepage',
      url: 'https://www.meteor.com',
    });
  });

  describe('wishlists.all', function () {
    it('sends all wishlists', function (done) {
      const collector = new PublicationCollector();
      collector.collect('wishlists.all', (collections) => {
        assert.equal(collections.wishlists.length, 1);
        done();
      });
    });
  });
});
