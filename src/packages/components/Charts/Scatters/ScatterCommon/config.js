import { echartOptionProfixHandle, PublicConfigClass } from '@/packages/public';
import { ScatterCommonConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
import dataJson from './data.json';
export const includes = ['legend', 'xAxis', 'yAxis', 'grid'];
export const seriesItem = {
    type: 'scatter',
    emphasis: {
        focus: 'series'
    },
    symbolSize: 12,
    markArea: {
        silent: true,
        itemStyle: {
            color: 'transparent',
            borderWidth: 1,
            borderType: 'dashed'
        },
        data: [
            [
                {
                    xAxis: 'min',
                    yAxis: 'min'
                },
                {
                    xAxis: 'max',
                    yAxis: 'max'
                }
            ]
        ]
    },
    markPoint: {
        symbol: 'pin',
        symbolSize: 50,
        data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
        ]
    }
};
export const option = {
    dataset: dataJson,
    tooltip: {
        showDelay: 0,
        formatter: (params) => {
            // console.log(params)
            return params.value.length > 1
                ? `${params.seriesName}：<br />${params.value[0]} ${params.value[1]}`
                : `${params.seriesName}：<br />${params.name} ${params.value}`;
        },
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            }
        }
    },
    xAxis: {
        scale: true
    },
    yAxis: {
        scale: true
    },
    series: dataJson.map((item, index) => ({
        ...seriesItem,
        datasetIndex: index
    }))
};
export default class Config extends PublicConfigClass {
    key = ScatterCommonConfig.key;
    chartConfig = cloneDeep(ScatterCommonConfig);
    // 图表配置项
    option = echartOptionProfixHandle(option, includes);
}
