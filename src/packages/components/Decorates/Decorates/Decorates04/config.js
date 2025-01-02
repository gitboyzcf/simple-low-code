import { PublicConfigClass } from '@/packages/public';
import { Decorates04Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#1dc1f5', '#1dc1f5'],
    // 是否翻转
    reverse: false
};
export default class Config extends PublicConfigClass {
    key = Decorates04Config.key;
    chartConfig = cloneDeep(Decorates04Config);
    option = cloneDeep(option);
}
