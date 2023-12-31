import {
  defineNamespace,
  defineProjections,
  Model as НоменклатурыMixin
} from '../mixins/regenerated/models/i-i-s-a1-номенклатуры';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НоменклатурыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
