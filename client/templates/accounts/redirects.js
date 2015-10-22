var submitCallback = function (error, state) {
    var isDonationSignup = Session.get('donationStep') == 'userAccount';

    if (!error) {
        if (!isDonationSignup) {
            if (state === "signIn") {
                FlowRouter.go('/home');
            }
            if (state === "signUp") {
                FlowRouter.go('/home');
            }
        } else {
            Session.set('donationStep', 'confirmDonation');
        }
    }
};

AccountsTemplates.configure({
    onSubmitHook: submitCallback
});