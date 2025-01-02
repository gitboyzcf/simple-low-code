import { PublicConfigClass } from '@/packages/public';
import { VideoConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
import video from '@/assets/videos/earth.mp4';
export const option = {
    // 视频路径
    dataset: video,
    // 循环播放
    loop: true,
    // 静音
    muted: true,
    // 适应方式
    fit: 'contain',
    // 圆角
    borderRadius: 10
};
export default class Config extends PublicConfigClass {
    key = VideoConfig.key;
    chartConfig = cloneDeep(VideoConfig);
    option = cloneDeep(option);
}
