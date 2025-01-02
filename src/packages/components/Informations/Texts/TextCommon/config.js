import { PublicConfigClass } from '@/packages/public';
import { TextCommonConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
export var WritingModeEnum;
(function (WritingModeEnum) {
    WritingModeEnum["HORIZONTAL"] = "\u6C34\u5E73";
    WritingModeEnum["VERTICAL"] = "\u5782\u76F4";
})(WritingModeEnum || (WritingModeEnum = {}));
export const WritingModeObject = {
    [WritingModeEnum.HORIZONTAL]: 'horizontal-tb',
    [WritingModeEnum.VERTICAL]: 'vertical-rl'
};
export var FontWeightEnum;
(function (FontWeightEnum) {
    FontWeightEnum["NORMAL"] = "\u5E38\u89C4";
    FontWeightEnum["BOLD"] = "\u52A0\u7C97";
})(FontWeightEnum || (FontWeightEnum = {}));
export const FontWeightObject = {
    [FontWeightEnum.NORMAL]: 'normal',
    [FontWeightEnum.BOLD]: 'bold',
};
export const option = {
    link: '',
    linkHead: 'http://',
    dataset: '我是文本',
    fontSize: 20,
    fontColor: '#ffffff',
    paddingX: 10,
    paddingY: 10,
    textAlign: 'center', // 水平对齐方式
    fontWeight: 'normal',
    // 边框
    borderWidth: 0,
    borderColor: '#ffffff',
    borderRadius: 5,
    // 字间距
    letterSpacing: 5,
    writingMode: 'horizontal-tb',
    backgroundColor: '#00000000'
};
export default class Config extends PublicConfigClass {
    key = TextCommonConfig.key;
    chartConfig = cloneDeep(TextCommonConfig);
    option = cloneDeep(option);
}
