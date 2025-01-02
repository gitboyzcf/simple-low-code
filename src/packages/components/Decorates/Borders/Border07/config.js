import { PublicConfigClass } from '@/packages/public';
import { Border07Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#11eefd', '#0078d2'],
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = Border07Config.key;
    chartConfig = cloneDeep(Border07Config);
    option = cloneDeep(option);
}
