DonatedCategorySchema = new SimpleSchema({
    categoryId: {
        type: String,
        label: 'The id of the donated category'
    },
    quantity: {
        type: Number,
        label: 'The quantity of the item donated'
    }
});

DonationSchema = new SimpleSchema({
    donorId: {
        type: String,
        optional: true,
        label: 'The id of the donor'
    },
    schoolId: {
        type: String,
        label: 'The id of the recipient school'
    },
    anonymous: {
        type: Boolean
        defaultValue: false,
        label: 'Flag determining if the donor is anonymous'
    },
    donationDriveId: {
        type: String,
        label: 'The id of the donation drive'
    },
    status: {
        type: String, // [Pending, Received, Not Received]
        label: 'The status of the donation'
    },
    donatedCategories: {
        type: [DonatedCategorySchema],
        label: 'The list of donated categories'
    }
    // TODO(lnw) what was the purpose of these three?
    // donor address
    // donor notes
    // shipping details
});