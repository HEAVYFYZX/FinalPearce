Template.tAddStudent.events({
    'submit form': function(evt) {
        evt.preventDefault();
        var firstName = evt.target.firstName.value;
        Students.insert({
            firstName: firstName
        });
        evt.target.firstName.value = '';
    }
});
