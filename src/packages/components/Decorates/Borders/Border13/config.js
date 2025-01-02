import { PublicConfigClass } from '@/packages/public';
import { Border13Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#2862b7', '#4b77b7'],
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = Border13Config.key;
    chartConfig = cloneDeep(Border13Config);
    option = cloneDeep(option);
}
