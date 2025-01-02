import { PublicConfigClass } from '@/packages/public';
import { Decorates02Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#ffffff4d', '#ffffff4d'],
    dur: 3,
    lineHeight: 3
};
export default class Config extends PublicConfigClass {
    key = Decorates02Config.key;
    chartConfig = cloneDeep(Decorates02Config);
    option = cloneDeep(option);
}
