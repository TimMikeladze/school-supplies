Collections.Categories.permit(['insert', 'update', 'remove']).ifHasRole(['admin']).apply();
Collections.Schools.permit(['insert', 'update', 'remove']).ifHasRole(['school-admin']).apply();