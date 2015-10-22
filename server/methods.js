Meteor.methods({ 
	insertSchoolProfile: function (doc) {
	// Check user given data against Schema
	Schemas.SchoolSchema.clean(doc);
	check(doc,Schemas.SchoolSchema);

	//Insert
	Collections.Schools.insert(doc);
	}
});