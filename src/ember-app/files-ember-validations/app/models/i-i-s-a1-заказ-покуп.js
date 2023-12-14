import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ЗаказПокупMixin
} from '../mixins/regenerated/models/i-i-s-a1-заказ-покуп';

import ОтчетОПродажахModel from './i-i-s-a1-отчет-о-продажах';

let Model = ОтчетОПродажахModel.extend(ЗаказПокупMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
