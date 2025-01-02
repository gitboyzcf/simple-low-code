import { PublicConfigClass } from '@/packages/public';
import { Border02Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#6586ec', '#2cf7fe'],
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = Border02Config.key;
    chartConfig = cloneDeep(Border02Config);
    option = cloneDeep(option);
}
