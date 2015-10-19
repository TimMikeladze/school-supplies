Meteor.methods({
    insertCategory: function (doc) {
        // Check user given data against Schema
        Schemas.CategorySchema.clean(doc);
        check(doc, Schemas.CategorySchema);

        // Insert
        Collections.Categories.insert(doc);
    }
});