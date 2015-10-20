Schemas = {};
Collections = {};

var isValidName = function(value) {
    return (value.length === 0 || !value.trim());
};

AccountsTemplates.addFields([
    {
        _id: 'firstName',
        type: 'text',
        displayName: 'First name',
        required: true,
        re: /^[a-z ,.'-]+$/i,
        func: isValidName
    },
    {
        _id: 'lastName',
        type: 'text',
        displayName: 'Last name',
        required: true,
        re: /^[a-z ,.'-]+$/i,
        func: isValidName
    }
]);
