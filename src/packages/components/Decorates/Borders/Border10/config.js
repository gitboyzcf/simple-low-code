import { PublicConfigClass } from '@/packages/public';
import { Border10Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#1089ff', '#0000ff'],
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = Border10Config.key;
    chartConfig = cloneDeep(Border10Config);
    option = cloneDeep(option);
}
