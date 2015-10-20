Schemas = {};

AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    required: true,
    func: function (value) {
        //TODO(tim) Show error message to user when username is already taken
        if (Meteor.isClient) {
            var self = this;
            Meteor.call("userExists", value, function (err, userExists) {
                debugger;
                if (!userExists) {
                    self.setSuccess();
                }
                else {
                    self.setError(userExists);
                }
                self.setValidating(false);
            });
            return;
        }
        // Server
        return Meteor.call("userExists", value);
    }
});