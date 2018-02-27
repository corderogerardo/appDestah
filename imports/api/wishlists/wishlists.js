// Definition of the links collection

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import './Images.js';

SimpleSchema.setDefaultMessages({
    initialLanguage: 'en',
    messages: {
        en: {
            uploadError: '{{value}}', //File-upload
        },
    }
});
SimpleSchema.extendOptions(['autoform']);

export const Wishlists = new Mongo.Collection('wishlists');

Wishlists.allow({
    insert: function(userId, doc){
        return !!userId;
    }
});

Wishlists.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    picture: {
        type: String,
        label: "Wishlist picture",
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images'
            }
        }
    },
    gifts: {
        type: Array,
        label: "Gifts"
    },
    'gifts.$': { type: String },
    summary: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function(){
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created at",
        autoValue: function(){
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
}));
