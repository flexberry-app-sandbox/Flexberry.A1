import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-a1-контрагенты', 'Unit | Model | i-i-s-a1-контрагенты', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-a1-ед-измер',
    'model:i-i-s-a1-заказ-покуп',
    'model:i-i-s-a1-контрагенты',
    'model:i-i-s-a1-номенклатуры',
    'model:i-i-s-a1-организации',
    'model:i-i-s-a1-остат-на-склад',
    'model:i-i-s-a1-отчет-о-продажах',
    'model:i-i-s-a1-подразеления',
    'model:i-i-s-a1-склады',
    'model:i-i-s-a1-т-ч-товар-и-услуг',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
