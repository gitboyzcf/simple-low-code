import { PublicConfigClass } from '@/packages/public';
import { FlipperNumberConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
import { chartInitConfig } from '@/settings/designSetting';
export const option = {
    dataset: 3234,
    flipperLength: 6,
    flipperBgColor: '#16293E',
    flipperTextColor: '#4A9EF8FF',
    flipperWidth: 30,
    flipperHeight: 50,
    flipperRadius: 5,
    flipperGap: 10,
    flipperType: 'down',
    flipperSpeed: 450
};
export default class Config extends PublicConfigClass {
    key = FlipperNumberConfig.key;
    attr = { ...chartInitConfig, w: 300, h: 100, zIndex: -1 };
    chartConfig = cloneDeep(FlipperNumberConfig);
    option = cloneDeep(option);
}
