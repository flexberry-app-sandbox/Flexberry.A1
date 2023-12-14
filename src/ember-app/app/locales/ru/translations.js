import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISA1ЕдИзмерLForm from './forms/i-i-s-a1-ед-измер-l';
import IISA1ЗаказПокупLForm from './forms/i-i-s-a1-заказ-покуп-l';
import IISA1КонтрагентыLForm from './forms/i-i-s-a1-контрагенты-l';
import IISA1НоменклатурыLForm from './forms/i-i-s-a1-номенклатуры-l';
import IISA1ОрганизацииLForm from './forms/i-i-s-a1-организации-l';
import IISA1ОстатНаСкладLForm from './forms/i-i-s-a1-остат-на-склад-l';
import IISA1ОтчетОПродажахLForm from './forms/i-i-s-a1-отчет-о-продажах-l';
import IISA1ПодразеленияLForm from './forms/i-i-s-a1-подразеления-l';
import IISA1СкладыLForm from './forms/i-i-s-a1-склады-l';
import IISA1ЕдИзмерEForm from './forms/i-i-s-a1-ед-измер-e';
import IISA1ЗаказПокупEForm from './forms/i-i-s-a1-заказ-покуп-e';
import IISA1КонтрагентыEForm from './forms/i-i-s-a1-контрагенты-e';
import IISA1НоменклатурыEForm from './forms/i-i-s-a1-номенклатуры-e';
import IISA1ОрганизацииEForm from './forms/i-i-s-a1-организации-e';
import IISA1ОстатНаСкладEForm from './forms/i-i-s-a1-остат-на-склад-e';
import IISA1ОтчетОПродажахEForm from './forms/i-i-s-a1-отчет-о-продажах-e';
import IISA1ПодразеленияEForm from './forms/i-i-s-a1-подразеления-e';
import IISA1СкладыEForm from './forms/i-i-s-a1-склады-e';
import IISA1ЕдИзмерModel from './models/i-i-s-a1-ед-измер';
import IISA1ЗаказПокупModel from './models/i-i-s-a1-заказ-покуп';
import IISA1КонтрагентыModel from './models/i-i-s-a1-контрагенты';
import IISA1НоменклатурыModel from './models/i-i-s-a1-номенклатуры';
import IISA1ОрганизацииModel from './models/i-i-s-a1-организации';
import IISA1ОстатНаСкладModel from './models/i-i-s-a1-остат-на-склад';
import IISA1ОтчетОПродажахModel from './models/i-i-s-a1-отчет-о-продажах';
import IISA1ПодразеленияModel from './models/i-i-s-a1-подразеления';
import IISA1СкладыModel from './models/i-i-s-a1-склады';
import IISA1ТЧТоварИУслугModel from './models/i-i-s-a1-т-ч-товар-и-услуг';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-a1-ед-измер': IISA1ЕдИзмерModel,
    'i-i-s-a1-заказ-покуп': IISA1ЗаказПокупModel,
    'i-i-s-a1-контрагенты': IISA1КонтрагентыModel,
    'i-i-s-a1-номенклатуры': IISA1НоменклатурыModel,
    'i-i-s-a1-организации': IISA1ОрганизацииModel,
    'i-i-s-a1-остат-на-склад': IISA1ОстатНаСкладModel,
    'i-i-s-a1-отчет-о-продажах': IISA1ОтчетОПродажахModel,
    'i-i-s-a1-подразеления': IISA1ПодразеленияModel,
    'i-i-s-a1-склады': IISA1СкладыModel,
    'i-i-s-a1-т-ч-товар-и-услуг': IISA1ТЧТоварИУслугModel
  },

  'application-name': 'A1',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'A1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'A1',
          title: 'A1'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        a1: {
          caption: 'A1',
          title: 'A1',
          'i-i-s-a1-склады-l': {
            caption: 'Склады',
            title: ''
          },
          'i-i-s-a1-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          },
          'i-i-s-a1-ед-измер-l': {
            caption: 'Ед измер',
            title: ''
          },
          'i-i-s-a1-заказ-покуп-l': {
            caption: 'Заказ покуп',
            title: ''
          },
          'i-i-s-a1-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-a1-остат-на-склад-l': {
            caption: 'Остат на склад',
            title: ''
          },
          'i-i-s-a1-отчет-о-продажах-l': {
            caption: 'Отчет о продажах',
            title: ''
          },
          'i-i-s-a1-номенклатуры-l': {
            caption: 'Номенклатуры',
            title: ''
          },
          'i-i-s-a1-подразеления-l': {
            caption: 'Подразеления',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-a1-ед-измер-l': IISA1ЕдИзмерLForm,
    'i-i-s-a1-заказ-покуп-l': IISA1ЗаказПокупLForm,
    'i-i-s-a1-контрагенты-l': IISA1КонтрагентыLForm,
    'i-i-s-a1-номенклатуры-l': IISA1НоменклатурыLForm,
    'i-i-s-a1-организации-l': IISA1ОрганизацииLForm,
    'i-i-s-a1-остат-на-склад-l': IISA1ОстатНаСкладLForm,
    'i-i-s-a1-отчет-о-продажах-l': IISA1ОтчетОПродажахLForm,
    'i-i-s-a1-подразеления-l': IISA1ПодразеленияLForm,
    'i-i-s-a1-склады-l': IISA1СкладыLForm,
    'i-i-s-a1-ед-измер-e': IISA1ЕдИзмерEForm,
    'i-i-s-a1-заказ-покуп-e': IISA1ЗаказПокупEForm,
    'i-i-s-a1-контрагенты-e': IISA1КонтрагентыEForm,
    'i-i-s-a1-номенклатуры-e': IISA1НоменклатурыEForm,
    'i-i-s-a1-организации-e': IISA1ОрганизацииEForm,
    'i-i-s-a1-остат-на-склад-e': IISA1ОстатНаСкладEForm,
    'i-i-s-a1-отчет-о-продажах-e': IISA1ОтчетОПродажахEForm,
    'i-i-s-a1-подразеления-e': IISA1ПодразеленияEForm,
    'i-i-s-a1-склады-e': IISA1СкладыEForm
  },

});

export default translations;
