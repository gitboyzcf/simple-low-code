import { InteractEventOn } from '@/enums/eventEnum';
// 时间组件类型
export var ComponentInteractEventEnum;
(function (ComponentInteractEventEnum) {
    ComponentInteractEventEnum["DATE"] = "date";
    ComponentInteractEventEnum["DATE_TIME"] = "datetime";
    ComponentInteractEventEnum["DATE_RANGE"] = "daterange";
    ComponentInteractEventEnum["DATE_TIME_RANGE"] = "datetimerange";
    ComponentInteractEventEnum["MONTH"] = "month";
    ComponentInteractEventEnum["MONTH_RANGE"] = "monthrange";
    ComponentInteractEventEnum["YEAR"] = "year";
    ComponentInteractEventEnum["YEAR_RANGE"] = "yearrange";
    ComponentInteractEventEnum["QUARTER"] = "quarter";
    ComponentInteractEventEnum["QUARTER_RANGE"] = "quarterrange";
})(ComponentInteractEventEnum || (ComponentInteractEventEnum = {}));
// 联动参数
export var ComponentInteractParamsEnum;
(function (ComponentInteractParamsEnum) {
    ComponentInteractParamsEnum["DATE"] = "date";
    ComponentInteractParamsEnum["DATE_START"] = "dateStart";
    ComponentInteractParamsEnum["DATE_END"] = "dateEnd";
    ComponentInteractParamsEnum["DATE_RANGE"] = "daterange";
})(ComponentInteractParamsEnum || (ComponentInteractParamsEnum = {}));
const time = [
    {
        value: ComponentInteractParamsEnum.DATE,
        label: '日期'
    }
];
const timeRange = [
    {
        value: ComponentInteractParamsEnum.DATE_START,
        label: '开始时间'
    },
    {
        value: ComponentInteractParamsEnum.DATE_END,
        label: '结束时间'
    },
    {
        value: ComponentInteractParamsEnum.DATE_RANGE,
        label: '日期范围'
    }
];
// 定义组件触发回调事件
export const interactActions = [
    {
        interactType: InteractEventOn.CHANGE,
        interactName: '选择完成',
        componentEmitEvents: {
            [ComponentInteractEventEnum.DATE]: time,
            [ComponentInteractEventEnum.DATE_TIME]: time,
            [ComponentInteractEventEnum.DATE_RANGE]: timeRange,
            [ComponentInteractEventEnum.MONTH]: time,
            [ComponentInteractEventEnum.MONTH_RANGE]: timeRange,
            [ComponentInteractEventEnum.QUARTER]: time,
            [ComponentInteractEventEnum.QUARTER_RANGE]: timeRange,
            [ComponentInteractEventEnum.YEAR]: time,
            [ComponentInteractEventEnum.YEAR_RANGE]: timeRange,
        }
    }
];
