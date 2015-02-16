import Ember from 'ember';

export function currency(input) {
  var numericInput, dollars, cents, centStr;

  try {
    numericInput = parseInt(input, 10);
    dollars = Math.floor(numericInput / 100);
    cents = numericInput % 100;

    centStr = '' + cents;

    if ( centStr.length < 2 ) {
        centStr += '0';
    }
    return '$' + dollars + '.' + centStr;
  } catch(e) {
    return input;
  }
}

export default Ember.Handlebars.makeBoundHelper(currency);
