var AddressSchema = new SimpleSchema({
    houseNumber: {
        type: String,
        label: 'The house number of the address'
    },
    street: {
        type: String,
        label: 'The street name of the address'
    },
    city: {
        type: String,
        label: 'The city of the address'
    },
    state: {
        type: String,
        label: 'The state of the address',
        regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/
    },
    zipcode: {
        type: String,
        label: 'The zipcode of the address',
        regEx: SimpleSchema.RegEx.ZipCode
    }
});

var WishlistCategorySchema = new SimpleSchema({
    categoryId: {
        type: String,
        label: 'The id of the requested category'
    },
    requested: {
        type: Number,
        label: 'The total requested amount of the category',
        min: 1,
        optional: true
    },
    isUnlimited: {
        type: Boolean,
        label: 'Flag determining if the requested field does not have a total amount',
        defaultValue: false,
        optional: true
    },
    received: {
        type: Number,
        label: 'The total received amount of the category'
    },
    notes: {
        type: String,
        label: 'Notes pertaining to the requested category',
        optional: true
    }
});

var DonationDriveSchema = new SimpleSchema({
    startDate: {
        type: Date,
        label: 'The start date of the donation drive'
    },
    endDate: {
        type: Date,
        label: 'The end date of the donation drive'
    },
    title: {
        type: String,
        label: 'The title of the donation drive'
    },
    description: {
        type: String,
        label: 'The description of the donation drive'
    },
    active: {
        type: Boolean,
        label: 'Flag determining if the donation drive is active'
    },
    wishlist: {
        type: [WishlistCategorySchema],
        label: 'The requested supplies of the donation drive'
    }
});

var SchoolSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'The title of the school'
    },
    description: {
        type: String,
        label: 'The description of the school'
    },
    address: {
        type: AddressSchema,
        label: 'The address of the school'
    },
    createdBy: {
        type: String,
        label: 'The user id who created the school'
    },
    creadtedAt: {
        type: Date,
        label: 'The date when the school account was created'
    },
    images: {
        type: [Object],
        label: 'The list of images for the school profile'
    },
    schoolType: {
        type: [String],
        label: 'The type of school',
        allowedValues: ['Kindergarten', 'Lower', 'Middle', 'Upper', 'University']
    },
    donationDrives: {
        type: [DonationDriveSchema],
        label: 'The list of donation drives'
    },
    searchableCategories: {
        type: [String],
        label: 'The requested categories'
    }
});

Schema.SchoolSchema = SchoolSchema;
Schema.DonationDriveSchema = DonationDriveSchema;
Schema.WishlistCategorySchema = WishlistCategorySchema;
Schema.AddressSchema = AddressSchema;