import { Serializer as ОтчетОПродажахSerializer } from
  '../mixins/regenerated/serializers/i-i-s-a1-отчет-о-продажах';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтчетОПродажахSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
