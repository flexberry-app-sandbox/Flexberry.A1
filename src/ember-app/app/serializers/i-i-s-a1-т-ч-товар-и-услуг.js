import { Serializer as ТЧТоварИУслугSerializer } from
  '../mixins/regenerated/serializers/i-i-s-a1-т-ч-товар-и-услуг';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧТоварИУслугSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
