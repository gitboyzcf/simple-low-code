import { ChartList } from '@/packages/components/Charts/index';
import { DecorateList } from '@/packages/components/Decorates/index';
import { InformationList } from '@/packages/components/Informations/index';
import { TableList } from '@/packages/components/Tables/index';
import { PackagesCategoryEnum, FetchComFlagType } from '@/enum';
const configModules = import.meta.glob('./components/**/config.vue', {
    eager: true
});
const indexModules = import.meta.glob('./components/**/index.vue', {
    eager: true
});
const imagesModules = import.meta.glob('../assets/images/chart/**', {
    eager: true
});
// * 所有图表
export let packagesList = {
    [PackagesCategoryEnum.CHARTS]: ChartList,
    [PackagesCategoryEnum.INFORMATIONS]: InformationList,
    [PackagesCategoryEnum.TABLES]: TableList,
    [PackagesCategoryEnum.DECORATES]: DecorateList
};
/**
 * * 获取目标组件配置信息
 * @param targetData
 */
export const createComponent = async (targetData) => {
    const { category, key } = targetData;
    const chart = await import(`./components/${targetData.package}/${category}/${key}/config.ts`);
    return new chart.default();
};
/**
 * * 获取组件
 * @param {string} chartName 名称
 * @param {FetchComFlagType} flag 标识 0为展示组件, 1为配置组件
 */
const fetchComponent = (chartName, flag) => {
    const module = flag === FetchComFlagType.VIEW ? indexModules : configModules;
    for (const key in module) {
        const urlSplit = key.split('/');
        if (urlSplit[urlSplit.length - 2] === chartName) {
            return module[key];
        }
    }
};
/**
 * * 获取展示组件
 * @param {ConfigType} dropData 配置项
 */
export const fetchChartComponent = (dropData) => {
    const { key } = dropData;
    return fetchComponent(key, FetchComFlagType.VIEW)?.default;
};
/**
 * * 获取配置组件
 * @param {ConfigType} dropData 配置项
 */
export const fetchConfigComponent = (dropData) => {
    const { key } = dropData;
    return fetchComponent(key, FetchComFlagType.CONFIG)?.default;
};
/**
 * * 获取图片内容
 * @param {ConfigType} targetData 配置项
 */
export const fetchImages = async (targetData) => {
    if (!targetData)
        return '';
    // 新数据动态处理
    const { image, package: targetDataPackage } = targetData;
    // 兼容旧数据
    if (image.includes('@') || image.includes('base64'))
        return image;
    const imageName = image.substring(image.lastIndexOf('/') + 1);
    for (const key in imagesModules) {
        const urlSplit = key.split('/');
        if (urlSplit[urlSplit.length - 1] === imageName) {
            return imagesModules[key]?.default;
        }
    }
    return '';
};
