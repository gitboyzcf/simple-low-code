import { PublicConfigClass } from '@/packages/public';
import { ImageConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
import logo from '@/assets/logo.png';
export const option = {
    // 图片路径
    dataset: logo,
    // 适应方式
    fit: 'contain',
    // 圆角
    borderRadius: 10
};
export default class Config extends PublicConfigClass {
    key = ImageConfig.key;
    chartConfig = cloneDeep(ImageConfig);
    option = cloneDeep(option);
}
