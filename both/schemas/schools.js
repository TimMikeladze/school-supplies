Schemas.AddressSchema = new SimpleSchema({
    buildingNumber: {
        type: String,
        label: 'The building number of the address'
    },
    street: {
        type: String,
        label: 'The street name of the address'
    },
    city: {
        type: String,
        label: 'The city of the address'
    },
    // Should be a dropdown
    state: {
        type: String,
        label: 'The state of the address',
        regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/
    },
    zipCode: {
        type: String,
        label: 'The zipcode of the address',
        regEx: SimpleSchema.RegEx.ZipCode
    }
});

Schemas.WishlistCategorySchema = new SimpleSchema({
    categoryId: {
        type: String,
        label: 'The requested category',
        autoform: {
            options: function () {
                return Collections.Categories.find({}).map(function (category) {
                    return { label: category.title, value: category._id };
                });
            }
        }
    },
    requested: {
        type: Number,
        label: 'The total requested amount of the category',
        min: 1
    },
    isUnlimited: {
        type: Boolean,
        label: 'Flag determining if the requested field does not have a total amount',
        defaultValue: false,
        optional: true
    },
    received: {
        type: Number,
        label: 'The total received amount of the category',
        optional: true
    },
    notes: {
        type: String,
        label: 'Notes pertaining to the requested category',
        optional: true
    }
});

Schemas.DonationDriveSchema = new SimpleSchema({
    createdBy: {
        type: String,
        label: 'User who created the donation drive',
        autoValue: function () {
            return this.userId;
        }
    },
    startDate: {
        type: Date,
        label: 'The start date of the donation drive',
        autoform: {
            type: 'pickadate',
            pickadateOptions: {
                selectYears: true,
                selectMonths: true
            }
        }
    },
    endDate: {
        type: Date,
        label: 'The end date of the donation drive',
        autoform: {
            type: 'pickadate',
            pickadateOptions: {
                selectYears: true,
                selectMonths: true
            }
        }
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
        label: 'Flag determining if the donation drive is active',
        defaultValue: false,
        optional: true
    },
    wishlist: {
        type: [Schemas.WishlistCategorySchema],
        label: 'Requested categories'
    }
});

Schemas.SchoolSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'The name of the school'
    },
    address: {
        type: Schemas.AddressSchema,
        label: 'The address of the school'
    },
    //TODO(tim) fix date logic
    createdBy: {
        type: String,
        label: 'The user id who created the school',
        optional: true
    },
    createdAt: {
        type: Date,
        label: 'The date when the school account was created',
        optional: true
    },
    images: {
        type: [Object],
        label: 'The list of images for the school profile',
        optional: true
    },
    //TODO(tim) Clean up this code. Use settings for grade levels
    gradeLevels: {
        type: [String],
        label: 'The grade levels in the school',
        allowedValues: ['kindergarten', 'lower', 'middle', 'upper', 'college'],
        autoform: {
            options: function () {
                return {
                    kindergarten: 'Kindergarten',
                    lower: 'Lower school',
                    middle: 'Middle school',
                    upper: 'Upper school',
                    college: 'College'
                };
            }
        }
    },
    district: {
        type: String,
        label: 'The school\'s district'
    },
    numberOfStudents: {
        type: Number,
        label: 'The number of students in the school',
        min: 0
    },
    donationDrives: {
        type: [Schemas.DonationDriveSchema],
        label: 'The list of donation drives',
        optional: true
    },
    schoolAdmins: {
        type: [String]
    }
});

Collections.Schools = new Mongo.Collection('schools');
Collections.Schools.attachSchema(Schemas.SchoolSchema);
Collections.Schools.initEasySearch(['name'], {
    'limit': 20,
    'use': 'mongo-db'
});
