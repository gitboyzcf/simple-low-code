import { PublicConfigClass } from '@/packages/public';
import { Border08Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#235fa7', '#4fd2dd'],
    dur: 3,
    reverse: false,
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = Border08Config.key;
    chartConfig = cloneDeep(Border08Config);
    option = cloneDeep(option);
}
