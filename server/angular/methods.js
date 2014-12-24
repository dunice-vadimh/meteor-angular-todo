
Meteor.methods({

    addParty: function (text) {
        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        Parties.insert({
            public: text.public,
            name: text.name,
            description: text.description,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },

    deleteParty: function (partyId) {
        var party = Parties.findOne(partyId);
//        if (party.private && party.owner !== Meteor.userId()) {
        if (party.owner !== Meteor.userId()) {
            // If the task is private, make sure only the owner can delete it
            throw new Meteor.Error("not-authorized");
        }
        Parties.remove(partyId);
    }

});
