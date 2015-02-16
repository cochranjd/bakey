import Ember from 'ember';

export default Ember.Component.extend({

    tagName: 'g',

    _item: Ember.computed.reads('item'),

    click: function(event) {
        if (this.get('_item.required')) { return; }
        
        // this.toggleProperty('item.selected');
        this.sendAction('toggleSelection', this.get('_item.label'));
    }

});
