import { PublicConfigClass } from '@/packages/public';
import { CapsuleChartConfig } from './index';
import { chartInitConfig } from '@/settings/designSetting';
import cloneDeep from 'lodash-es/cloneDeep';
import dataJson from './data.json';
export const option = {
    dataset: dataJson,
    colors: ['#c4ebad', '#6be6c1', '#a0a7e6', '#96dee8', '#3fb1e3'],
    unit: '',
    itemHeight: 10,
    valueFontSize: 16,
    paddingRight: 50,
    paddingLeft: 50,
    showValue: true
};
export default class Config extends PublicConfigClass {
    key = CapsuleChartConfig.key;
    attr = { ...chartInitConfig, zIndex: -1 };
    chartConfig = cloneDeep(CapsuleChartConfig);
    option = cloneDeep(option);
}
