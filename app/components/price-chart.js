import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['price-chart'],
    
    priceMapping: Ember.computed.mapBy('items', 'priceInCents'),

    totalPossiblePrice: Ember.computed.sum('priceMapping'),

    viewBox: function() {
        return '0 0 ' + this.get('totalPossiblePrice') + ' 50';
    }.property('totalPossiblePrice'),

    selectedPricePosition: function() {
        return this.get('items').filterBy('selected').reduce(function(previous, item) {
            return previous + item.get('priceInCents')
        }, 0);
    }.property('items', 'items.@each.selected'),

    selectedPriceTextPosition: function() {
        return this.get('selectedPricePosition') - 10;
    }.property('selectedPricePosition')

});
