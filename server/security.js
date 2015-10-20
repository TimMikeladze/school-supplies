Collections.Categories.permit(['insert', 'update', 'remove']).ifHasRole(['admin']).apply();
<<<<<<< HEAD
Collections.Schools.permit(['insert', 'update', 'remove']).ifHasRole(['school-admin']).apply();
=======
Collections.Schools.permit(['insert', 'update', 'remove']).apply();
>>>>>>> Adding school profile form
