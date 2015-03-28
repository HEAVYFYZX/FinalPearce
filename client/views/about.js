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
  'click .remove': function () {
   Students.remove(this._id);
  }
});
Students.insert({
            firstName: firstName
        }); students.remove(this._id);