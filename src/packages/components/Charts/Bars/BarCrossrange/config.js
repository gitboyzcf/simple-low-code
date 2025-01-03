import { echartOptionProfixHandle, PublicConfigClass } from '@/packages/public';
import { BarCrossrangeConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
import dataJson from './data.json';
export const includes = ['legend', 'xAxis', 'yAxis', 'grid'];
export const seriesItem = {
    type: 'bar',
    barWidth: null,
    label: {
        show: true,
        position: 'right',
        color: '#fff',
        fontSize: 12
    },
    itemStyle: {
        color: null,
        borderRadius: 0
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
        type: 'value'
    },
    yAxis: {
        show: true,
        type: 'category'
    },
    dataset: { ...dataJson },
    series: [seriesItem, seriesItem]
};
export default class Config extends PublicConfigClass {
    key = BarCrossrangeConfig.key;
    chartConfig = cloneDeep(BarCrossrangeConfig);
    // 图表配置项
    option = echartOptionProfixHandle(option, includes);
}
