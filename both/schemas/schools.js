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
        regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
        autoform: {
            options: {
                AL:"AL", AK:"AK", AS:"AS", AZ:'AZ', AR:'AR', AA:'AA', AE:'AE', AP:'AP', CA:'CA', CO:'CO',
                CT:'CT', DE:'DE', DC:'DC', FL:'FL', FM:'FM', GA:'GA', GU:'GU', HI:'HI', IA:'IA', ID:'ID',
                IL:'IL', IN:'IN', KS:'KS', KY:'KY', LA:'LA', MA:'MA', MD:'MD', ME:'ME', MH:'MH', MI:'MI',
                MN:'MN', MO:'MO', MP:'MP', MS:'MS', MT:'MT', NC:'NC', ND:'ND', NE:'NE', NH:'NH', NJ:'NJ',
                NM:'NM', NV:'NV', NY:'NY', OH:'OH', OK:'OK', OR:'OR', PA:'PA', PR:'PR', PW:'PW', RI:'RI',
                SC:'SC', SD:'SD', TN:'TN', TX:'TX', UT:'UT', VA:'VA', VI:'VI', VT:'VT', WA:'WA', WI:'WI',
                WV:'WV',  WY:'WY'
            }
        }
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
                return Collections.Categories.find({}, { sort: { title: 1 } }).map(function (category) {
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
    id: {
        type: String,
        label: 'The id of the donation drive',
        index: true,
        unique: true,
        optional: true
        // TODO(lnw) use the autoValue
        /*
        autoValue: function () {
            if (this.isInsert) {
                return Random.id();
            } else {
                this.unset();
                return;
            }
            //return Random.id();
        }
        */
    },
    createdBy: {
        type: String,
        label: 'User who created the donation drive',
        autoValue: function () {
            return Meteor.userId();
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
    },
    schoolId: {
        type: String,
        label: 'Temporary id value for the referencing school',
        optional: true
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
        optional: true,
        autoValue: function () {
            return Meteor.userId();
        }
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
        optional: true,
        defaultValue: []
    },
    schoolAdmins: {
        type: [String]
    }
});

Collections.Schools = new Mongo.Collection('schools');
Collections.Schools.attachSchema(Schemas.SchoolSchema);
Collections.Schools.initEasySearch(['name', 'district'], {
    'limit': 20,
    'use': 'mongo-db'
});