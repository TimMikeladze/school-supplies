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
        label: 'List of links to external purchasing sites'
    }
});