import { PublicConfigClass } from '@/packages/public';
import { chartInitConfig } from '@/settings/designSetting';
import { Decorates06Config } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    colors: ['#1DC1F533', '#1DC1F5FF'],
    dataset: '我是标题',
    textColor: '#fff',
    textSize: 32
};
export default class Config extends PublicConfigClass {
    key = Decorates06Config.key;
    attr = { ...chartInitConfig, w: 500, h: 70, zIndex: 1 };
    chartConfig = cloneDeep(Decorates06Config);
    option = cloneDeep(option);
}
