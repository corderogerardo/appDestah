// Definition of the links collection

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Wishlists } from "../wishlists/wishlists";

SimpleSchema.setDefaultMessages({
    initialLanguage: 'en',
    messages: {
        en: {
            uploadError: '{{value}}', //File-upload
        },
    }
});
SimpleSchema.extendOptions(['autoform']);

export const Products = new Mongo.Collection('products');

Products.allow({
    insert: function(userId, doc){
        return !!userId;
    }
});

const Schemas = {};

Schemas.Product = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    quantities: {
        type: SimpleSchema.Integer,
        label: "Number of items",
        min: 0
    },
    price: {
        type: Number,
        label: "Number of items",
        min: 0
    },
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
});

Products.attachSchema(Schemas.Product);
Products.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});
