Collections.Categories.permit(['insert', 'update', 'remove']).ifHasRole(['admin']).apply();
Collections.DonationDrives.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();