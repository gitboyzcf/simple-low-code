import { PublicConfigClass } from '@/packages/public';
import { Border04Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    borderTitle: '边框-04',
    borderTitleWidth: 250,
    borderTitleHeight: 32,
    borderTitleSize: 18,
    borderTitleColor: '#fff',
    colors: ['#8aaafb', '#1f33a2'],
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = Border04Config.key;
    chartConfig = cloneDeep(Border04Config);
    option = cloneDeep(option);
}