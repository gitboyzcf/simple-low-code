import { echartOptionProfixHandle, PublicConfigClass } from '@/packages/public';
import { PieCommonConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
import dataJson from './data.json';
export const includes = ['legend'];
export var PieTypeEnum;
(function (PieTypeEnum) {
    PieTypeEnum["NORMAL"] = "\u5E38\u89C4\u56FE";
    PieTypeEnum["RING"] = "\u73AF\u5F62\u56FE";
    PieTypeEnum["ROSE"] = "\u73AB\u7470\u56FE";
})(PieTypeEnum || (PieTypeEnum = {}));
export const PieTypeObject = {
    [PieTypeEnum.NORMAL]: 'nomal',
    [PieTypeEnum.RING]: 'ring',
    [PieTypeEnum.ROSE]: 'rose'
};
const option = {
    type: 'ring',
    tooltip: {
        show: true,
        trigger: 'item'
    },
    legend: {
        show: true
    },
    dataset: { ...dataJson },
    series: [
        {
            type: 'pie',
            radius: ['40%', '65%'],
            center: ['50%', '60%'],
            roseType: false,
            avoidLabelOverlap: false,
            itemStyle: {
                show: true,
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center',
                formatter: '{b}',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            }
        }
    ]
};
export default class Config extends PublicConfigClass {
    key = PieCommonConfig.key;
    chartConfig = cloneDeep(PieCommonConfig);
    // 图表配置项
    option = echartOptionProfixHandle(option, includes);
}
