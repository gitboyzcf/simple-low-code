import { PublicConfigClass } from '@/packages/public';
import { Border09Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#3140ad', '#235fa7'],
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = Border09Config.key;
    chartConfig = cloneDeep(Border09Config);
    option = cloneDeep(option);
}
