import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rental-form', 'Integration | Component | rental form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{rental-form
    title='Update rental' 
    buttonLabel='Update'
  }}`);

  assert.equal(this.$('h3').text(), 'Update rental');
});
