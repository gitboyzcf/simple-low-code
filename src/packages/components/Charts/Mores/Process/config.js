import { PublicConfigClass } from '@/packages/public';
import { ProcessConfig } from './index';
import { chartInitConfig } from '@/settings/designSetting';
import cloneDeep from 'lodash-es/cloneDeep';
export const types = [
    {
        label: '线形',
        value: 'line'
    },
    {
        label: '圆形',
        value: 'circle'
    },
    {
        label: '仪表盘',
        value: 'dashboard'
    },
];
export const indicatorPlacements = [
    {
        label: '内部',
        value: 'inside'
    },
    {
        label: '外部',
        value: 'outside'
    }
];
export const option = {
    dataset: 36,
    // 默认类型
    type: types[2].value,
    // 进行时效果
    processing: true,
    // 主颜色
    color: '#4992FFFF',
    // 轨道颜色
    railColor: '#3e3e3f',
    // 指标
    unit: '%',
    // 指标大小
    indicatorTextSize: 34,
    // 指标位置（线条时可用）
    indicatorPlacement: 'outside',
    // 指标颜色
    indicatorTextColor: '#FFFFFFFF',
    // 偏移角度
    offsetDegree: 0
};
export default class Config extends PublicConfigClass {
    key = ProcessConfig.key;
    attr = { ...chartInitConfig, h: 500, zIndex: -1 };
    chartConfig = cloneDeep(ProcessConfig);
    option = cloneDeep(option);
}
