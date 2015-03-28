Template.tAbout.helpers({
    students: function() {
        return Students.find({}, {
            sort: {
                firstName: -1
            }
        })
    }
});
Template.tAbout.events({
  'click .delete': function (students) {
    firstName.remove(this._id);
  }
});