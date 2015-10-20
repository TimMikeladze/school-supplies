Meteor.methods({
    /*
    'categories/insertCategory': function (doc) {
        // Check user given data against Schema
        Schemas.CategorySchema.clean(doc);
        check(doc, Schemas.CategorySchema);

        // Insert
        Collections.Categories.insert(doc);
    },
    */
    'categories/removeCategory': function (id) {
        check(id, String);
        Collections.Categories.remove({ _id: id });
    },
    'categories/updateCategory': function (doc, docId) {
        Schemas.CategorySchema.clean(doc);
        check(doc, Schemas.CategorySchema);
        check(docId, String);

        Collections.Categories.update({ _id: docId }, doc);
    }
});