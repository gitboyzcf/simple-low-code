import { PublicConfigClass } from '@/packages/public';
import { Border06Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#3140ad', '#1089ff'],
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = Border06Config.key;
    chartConfig = cloneDeep(Border06Config);
    option = cloneDeep(option);
}
