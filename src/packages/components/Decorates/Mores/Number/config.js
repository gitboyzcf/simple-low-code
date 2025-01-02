import { PublicConfigClass } from '@/packages/public';
import { NumberConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    // 数据说明
    dataset: 100000,
    from: 0,
    dur: 3,
    precision: 0,
    showSeparator: true,
    numberSize: 34,
    numberColor: '#4a9ef8',
    prefixText: '￥',
    prefixColor: '#4a9ef8',
    suffixText: '元',
    suffixColor: '#4a9ef8',
};
export default class Config extends PublicConfigClass {
    key = NumberConfig.key;
    chartConfig = cloneDeep(NumberConfig);
    option = cloneDeep(option);
}
