import Ember from 'ember';

export default Ember.ArrayController.extend({

    items: function() {
        var _model = this.get('model');
        return _model.map(function(item) {
            item.set('selected', item.get('required'));
            return item;
        });
    }.property('model'),

    actions: {

        toggleComponentSelection: function(label) {
            var item = this.get('items').findBy('label', label);
            if ( !Ember.isBlank(item)) {
                item.toggleProperty('selected');
            }
        }
    }

});
