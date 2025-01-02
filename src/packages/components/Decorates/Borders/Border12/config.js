import { PublicConfigClass } from '@/packages/public';
import { Border12Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#2862b7', '#2862b7'],
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = Border12Config.key;
    chartConfig = cloneDeep(Border12Config);
    option = cloneDeep(option);
}
