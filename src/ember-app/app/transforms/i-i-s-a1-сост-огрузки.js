import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОгрузкиEnum from '../enums/i-i-s-a1-сост-огрузки';

export default FlexberryEnum.extend({
  enum: СостОгрузкиEnum,
  sourceType: 'IIS.A1.СостОгрузки'
});
