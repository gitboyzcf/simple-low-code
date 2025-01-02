import { PublicConfigClass } from '@/packages/public';
import { Decorates05Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#00c2ff', '#00c2ff4d'],
    dur: 3
};
export default class Config extends PublicConfigClass {
    key = Decorates05Config.key;
    chartConfig = cloneDeep(Decorates05Config);
    option = cloneDeep(option);
}
