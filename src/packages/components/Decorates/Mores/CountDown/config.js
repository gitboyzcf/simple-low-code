import { PublicConfigClass } from '@/packages/public';
import { CountDownConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
import { chartInitConfig } from '@/settings/designSetting';
export const option = {
    dataset: 10 * 60, // 10分钟
    useEndDate: false,
    endDate: new Date().getTime(), // 当前时间
    style: '时分秒',
    showDay: false,
    flipperBgColor: '#16293E',
    flipperTextColor: '#4A9EF8FF',
    flipperWidth: 30,
    flipperHeight: 50,
    flipperRadius: 5,
    flipperGap: 10,
    flipperType: 'down',
    flipperSpeed: 450
};
export default class Config extends PublicConfigClass {
    key = CountDownConfig.key;
    attr = { ...chartInitConfig, w: 500, h: 100, zIndex: -1 };
    chartConfig = cloneDeep(CountDownConfig);
    option = cloneDeep(option);
}
