Schemas.CategorySchema = new SimpleSchema({
    title: {
        type: String,
        label: 'The title of the donation category'
    },
    description: {
        type: String,
        label: 'The description of the donation category'
    },
    links: {
        type: [String],
        label: 'List of links to external purchasing sites',
        optional: true
    },
    createdAt: {
        type: Date,
        label: 'Date when the record was created',
        autoValue: function () {
            return new Date();
        }
    }
});

Collections.Categories = new Mongo.Collection('categories');
Collections.Categories.attachSchema(Schemas.CategorySchema);