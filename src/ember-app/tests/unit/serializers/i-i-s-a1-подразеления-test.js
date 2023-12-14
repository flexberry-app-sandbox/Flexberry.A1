import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-a1-подразеления', 'Unit | Serializer | i-i-s-a1-подразеления', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-a1-подразеления',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-a1-сост-огрузки',
    'transform:i-i-s-a1-сост-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
