import { PublicConfigClass } from '@/packages/public';
import { TextGradientConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export const option = {
    dataset: '我是渐变文本',
    size: 20,
    gradient: {
        from: '#0000FFFF',
        to: '#00FF00FF',
        deg: 45
    }
};
export default class Config extends PublicConfigClass {
    key = TextGradientConfig.key;
    chartConfig = cloneDeep(TextGradientConfig);
    option = cloneDeep(option);
}
