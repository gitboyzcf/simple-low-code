import { PublicConfigClass } from '@/packages/public';
import { ClockConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    border: 6,
    color: '#ffffff',
    bgColor: '#84a5e9',
    borderColor: '#ffffff'
};
export default class Config extends PublicConfigClass {
    key = ClockConfig.key;
    chartConfig = cloneDeep(ClockConfig);
    option = cloneDeep(option);
}
