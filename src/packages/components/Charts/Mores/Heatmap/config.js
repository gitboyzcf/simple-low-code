import { echartOptionProfixHandle, PublicConfigClass } from '@/packages/public';
import { HeatmapConfig } from './index';
import { cloneDeep } from 'lodash-es';
import dataJson from './data.json';
export const includes = ['xAxis', 'yAxis', 'grid'];
export const option = {
    dataset: { ...dataJson },
    tooltip: {
        position: 'top'
    },
    xAxis: {
        data: dataJson.xAxis
    },
    yAxis: {
        data: dataJson.yAxis
    },
    visualMap: {
        show: true,
        min: 0,
        max: 10,
        itemWidth: 20,
        itemHeight: 140,
        calculable: true,
        orient: 'horizontal',
        inRange: {
            // 高 -> 低
            color: ['#4661c2', '#263253']
        }
    },
    series: [
        {
            name: '',
            type: 'heatmap',
            data: dataJson.seriesData,
            label: {
                show: true
            },
            emphasis: {
                itemStyle: {
                    borderColor: '#333',
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            progressive: 1000,
            animation: false
        }
    ]
};
export default class Config extends PublicConfigClass {
    key = HeatmapConfig.key;
    chartConfig = cloneDeep(HeatmapConfig);
    // 图表配置项
    option = echartOptionProfixHandle(option, includes);
}
