import { PublicConfigClass } from '@/packages/public';
import { Decorates01Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#3faacb', '#fff'],
    dur: 3,
    lineHeight: 2,
    endWidth: 5
};
export default class Config extends PublicConfigClass {
    key = Decorates01Config.key;
    chartConfig = cloneDeep(Decorates01Config);
    option = cloneDeep(option);
}
