Schemas.DonatedCategorySchema = new SimpleSchema({
    categoryId: {
        type: String,
        label: 'The id of the donated category'
    },
    quantity: {
        type: Number,
        label: 'The quantity of the item donated',
        min: 1,
        optional: true
    },
    money: {
        type: Number,
        label: 'The amount of money being donated',
        min: 1,
        optional: true
    }
});

Schemas.DonationSchema = new SimpleSchema({
    donorId: {
        type: String,
        label: 'The id of the donor'
    },
    schoolId: {
        type: String,
        label: 'The id of the recipient school'
    },
    anonymous: {
        type: Boolean,
        defaultValue: false,
        label: 'Flag determining if the donor is anonymous',
        optional: true
    },
    donationDriveId: {
        type: String,
        label: 'The id of the donation drive'
    },
    status: {
        type: String,
        label: 'The status of the donation',
        allowedValues: ['Pending', 'Received', 'Not Received'],
        defaultValue: 'Pending'
    },
    donatedCategories: {
        type: [Schemas.DonatedCategorySchema],
        label: 'The list of donated categories',
        defaultValue: []
    }
    // TODO(lnw) what was the purpose of these three?
    // donor address
    // donor notes
    // shipping details
});


Collections.Donations = new Mongo.Collection('donations');
Collections.Donations.attachSchema(Schemas.DonationSchema);