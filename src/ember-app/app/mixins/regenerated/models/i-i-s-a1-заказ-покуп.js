import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаОкончания: DS.attr('date'),
  состОплат: DS.attr('i-i-s-a1-сост-оплаты'),
  состОтгруз: DS.attr('i-i-s-a1-сост-огрузки'),
  сумВклНДС: DS.attr('number')
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-a1-заказ-покуп.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-a1-заказ-покуп.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  состОплат: {
    descriptionKey: 'models.i-i-s-a1-заказ-покуп.validations.состОплат.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состОтгруз: {
    descriptionKey: 'models.i-i-s-a1-заказ-покуп.validations.состОтгруз.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумВклНДС: {
    descriptionKey: 'models.i-i-s-a1-заказ-покуп.validations.сумВклНДС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-a1-отчет-о-продажах'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказПокупE', 'i-i-s-a1-заказ-покуп', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    сумВклНДС: attr('Сум вкл НДС', { index: 2 }),
    состОтгруз: attr('Сост отгруз', { index: 3 }),
    состОплат: attr('Сост оплат', { index: 4 }),
    контрагенты: belongsTo('i-i-s-a1-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'контрагент' }),
    подразеления: belongsTo('i-i-s-a1-подразеления', 'Подразеления', {
      подразделение: attr('Подразделение', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'подразделение' }),
    организации: belongsTo('i-i-s-a1-организации', 'Организации', {
      организация: attr('Организация', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-a1-склады', 'Склады', {
      склад: attr('Склад', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'склад' }),
    тЧТоварИУслуг: hasMany('i-i-s-a1-т-ч-товар-и-услуг', 'Т ч товар и услуг', {
      сумма: attr('Сумма', { index: 0 }),
      суммаНДС: attr('Сумма НДС', { index: 1 }),
      количестов: attr('Количестов', { index: 2 }),
      цена: attr('Цена', { index: 3 }),
      номенклатуры: belongsTo('i-i-s-a1-номенклатуры', 'Номенклатуры', {
        номенклатура: attr('Номенклатура', { index: 5, hidden: true }),
        едИзмер: belongsTo('i-i-s-a1-ед-измер', '', {
          едИзмер: attr('ЕдИзмер', { index: 6 })
        }, { index: -1, hidden: true })
      }, { index: 4, displayMemberPath: 'номенклатура' })
    })
  });

  modelClass.defineProjection('ЗаказПокупL', 'i-i-s-a1-заказ-покуп', {
    датаОкончания: attr('Дата окончания', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    сумВклНДС: attr('Сум вкл НДС', { index: 2 }),
    состОтгруз: attr('Сост отгруз', { index: 3 }),
    состОплат: attr('Сост оплат', { index: 4 }),
    контрагенты: belongsTo('i-i-s-a1-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 5 })
    }, { index: -1, hidden: true }),
    подразеления: belongsTo('i-i-s-a1-подразеления', 'Подразделение', {
      подразделение: attr('Подразделение', { index: 6 })
    }, { index: -1, hidden: true }),
    организации: belongsTo('i-i-s-a1-организации', 'Организация', {
      организация: attr('Организация', { index: 7 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-a1-склады', 'Склад', {
      склад: attr('Склад', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
