import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.a1.caption'),
          title: i18n.t('forms.application.sitemap.a1.title'),
          children: [{
            link: 'i-i-s-a1-склады-l',
            caption: i18n.t('forms.application.sitemap.a1.i-i-s-a1-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.a1.i-i-s-a1-склады-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-a1-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.a1.i-i-s-a1-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.a1.i-i-s-a1-контрагенты-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-a1-ед-измер-l',
            caption: i18n.t('forms.application.sitemap.a1.i-i-s-a1-ед-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.a1.i-i-s-a1-ед-измер-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-a1-заказ-покуп-l',
            caption: i18n.t('forms.application.sitemap.a1.i-i-s-a1-заказ-покуп-l.caption'),
            title: i18n.t('forms.application.sitemap.a1.i-i-s-a1-заказ-покуп-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-a1-организации-l',
            caption: i18n.t('forms.application.sitemap.a1.i-i-s-a1-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.a1.i-i-s-a1-организации-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-a1-остат-на-склад-l',
            caption: i18n.t('forms.application.sitemap.a1.i-i-s-a1-остат-на-склад-l.caption'),
            title: i18n.t('forms.application.sitemap.a1.i-i-s-a1-остат-на-склад-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-a1-отчет-о-продажах-l',
            caption: i18n.t('forms.application.sitemap.a1.i-i-s-a1-отчет-о-продажах-l.caption'),
            title: i18n.t('forms.application.sitemap.a1.i-i-s-a1-отчет-о-продажах-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-a1-номенклатуры-l',
            caption: i18n.t('forms.application.sitemap.a1.i-i-s-a1-номенклатуры-l.caption'),
            title: i18n.t('forms.application.sitemap.a1.i-i-s-a1-номенклатуры-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-a1-подразеления-l',
            caption: i18n.t('forms.application.sitemap.a1.i-i-s-a1-подразеления-l.caption'),
            title: i18n.t('forms.application.sitemap.a1.i-i-s-a1-подразеления-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})