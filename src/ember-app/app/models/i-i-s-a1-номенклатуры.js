import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НоменклатурыMixin
} from '../mixins/regenerated/models/i-i-s-a1-номенклатуры';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НоменклатурыMixin, Validations, {
});

defineProjections(Model);

export default Model;
