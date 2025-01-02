import { PublicConfigClass } from '@/packages/public';
import { Border05Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#1d48c4', '#d3e1f8'],
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = Border05Config.key;
    chartConfig = cloneDeep(Border05Config);
    option = cloneDeep(option);
}
