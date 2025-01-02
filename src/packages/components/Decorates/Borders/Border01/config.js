import { PublicConfigClass } from '@/packages/public';
import { Border01Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    dur: 0.5,
    colors: ['#4fd2dd', '#235fa7'],
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = Border01Config.key;
    chartConfig = cloneDeep(Border01Config);
    option = cloneDeep(option);
}
