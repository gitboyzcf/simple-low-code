import merge from 'lodash-es/merge';
import pick from 'lodash-es/pick';
import { globalThemeJson } from '@/settings/chartThemes/index';
/**
 * * 合并 color 和全局配置项
 * @param option 配置
 * @param themeSetting 设置
 * @param excludes 排除元素
 * @returns object
 */
export const mergeTheme = (option, themeSetting, includes) => {
    return (option = merge({}, pick(themeSetting, includes), option));
};
/**
 * * ECharts option 统一前置处理
 * @param option
 * @return option
 */
export const echartOptionProfixHandle = (option, includes) => {
    option['backgroundColor'] = 'rgba(0,0,0,0)';
    return mergeTheme(option, globalThemeJson, includes);
};
/**
 * * 设置数据
 * @param option
 * @return option
 */
export const setData = (option, data) => {
    option.dataset = data;
    return option;
};
/**
 * * 配置公共 setOption 方法
 * @param instance
 * @param data
 */
export const setOption = (instance, data) => {
    if (!instance)
        return;
    const option = instance.getOption();
    option.dataset = null;
    instance.setOption(data);
};
