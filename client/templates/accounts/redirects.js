var submitCallback = function(error, state){
    if (!error) {
        if (state === "signIn") {
            FlowRouter.go('/home');
        }
        if (state === "signUp") {
            FlowRouter.go('/home');
        }
    }
};

AccountsTemplates.configure({
    onSubmitHook: submitCallback
});