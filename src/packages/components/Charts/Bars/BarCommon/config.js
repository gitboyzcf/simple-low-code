import { echartOptionProfixHandle, PublicConfigClass } from '@/packages/public';
import { BarCommonConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
import dataJson from './data.json';
export const includes = ['legend', 'xAxis', 'yAxis', 'grid'];
export const seriesItem = {
    type: 'bar',
    barWidth: 15,
    label: {
        show: true,
        position: 'top',
        color: '#fff',
        fontSize: 12
    },
    itemStyle: {
        color: null,
        borderRadius: 2
    }
};
export const option = {
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            show: true,
            type: 'shadow'
        }
    },
    xAxis: {
        show: true,
        type: 'category'
    },
    yAxis: {
        show: true,
        type: 'value'
    },
    dataset: { ...dataJson },
    series: [seriesItem, seriesItem]
};
export default class Config extends PublicConfigClass {
    key = BarCommonConfig.key;
    chartConfig = cloneDeep(BarCommonConfig);
    // 图表配置项
    option = echartOptionProfixHandle(option, includes);
}
