import { PublicConfigClass } from '@/packages/public';
import { Border03Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#6586ec', '#2cf7fe'],
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = Border03Config.key;
    chartConfig = cloneDeep(Border03Config);
    option = cloneDeep(option);
}
