import { PublicConfigClass } from '@/packages/public';
import { Decorates03Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
import { chartInitConfig } from '@/settings/designSetting';
export const option = {
    dataset: '我是标题',
    textColor: '#fff',
    textSize: 32,
    colors: ['#1dc1f5', '#1dc1f5']
};
export default class Config extends PublicConfigClass {
    key = Decorates03Config.key;
    attr = { ...chartInitConfig, w: 500, h: 70, zIndex: 1 };
    chartConfig = cloneDeep(Decorates03Config);
    option = cloneDeep(option);
}
