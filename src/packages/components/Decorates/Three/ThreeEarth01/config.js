import { PublicConfigClass } from '@/packages/public';
import { chartInitConfig } from '@/settings/designSetting';
import { ThreeEarth01Config } from './index';
import dataJson from './data.json';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    dataset: dataJson
};
export default class Config extends PublicConfigClass {
    key = ThreeEarth01Config.key;
    attr = { ...chartInitConfig, w: 800, h: 800, zIndex: -1 };
    chartConfig = cloneDeep(ThreeEarth01Config);
    option = cloneDeep(option);
}
