var ChatLines = new Meteor.Collection("ChatLines");

if (Meteor.is_client) {
  Template.chat.lines = function() {
    return ChatLines.find({});
  };

  Template.form.events = {
    'submit': function (evt) {
      var data = _.reduce($('#form').serializeArray(), function (dict, kv) {
        dict[kv.name] = kv.value;
        return dict;
      }, {});
      evt.preventDefault();
      if (data.author === '' || data.text === '') return;
      ChatLines.insert(data);
      $('#form').find('input[name="text"]').val('');
    }
  };
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
