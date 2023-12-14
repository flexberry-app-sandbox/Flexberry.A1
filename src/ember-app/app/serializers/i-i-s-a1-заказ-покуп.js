import { Serializer as ЗаказПокупSerializer } from
  '../mixins/regenerated/serializers/i-i-s-a1-заказ-покуп';
import ОтчетОПродажахSerializer from './i-i-s-a1-отчет-о-продажах';

export default ОтчетОПродажахSerializer.extend(ЗаказПокупSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
