import { PublicConfigClass } from '@/packages/public';
import { Border11Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#2862b7', '#2862b7'],
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = Border11Config.key;
    chartConfig = cloneDeep(Border11Config);
    option = cloneDeep(option);
}
