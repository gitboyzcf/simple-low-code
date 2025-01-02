import { echartOptionProfixHandle, PublicConfigClass } from '@/packages/public';
import { TreeMapConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
import dataJson from './data.json';
export const includes = [];
export const option = {
    dataset: dataJson,
    series: [
        {
            name: 'treemap',
            type: 'treemap',
            leafDepth: 1,
            roam: false,
            data: dataJson
        }
    ]
};
export default class Config extends PublicConfigClass {
    key = TreeMapConfig.key;
    chartConfig = cloneDeep(TreeMapConfig);
    // 图表配置项
    option = echartOptionProfixHandle(option, includes);
}
