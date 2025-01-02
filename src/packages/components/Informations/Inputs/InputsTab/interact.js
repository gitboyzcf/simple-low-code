import { InteractEventOn } from '@/enums/eventEnum';
// 时间组件类型
export var ComponentInteractEventEnum;
(function (ComponentInteractEventEnum) {
    ComponentInteractEventEnum["DATA"] = "data";
})(ComponentInteractEventEnum || (ComponentInteractEventEnum = {}));
// 联动参数
export var ComponentInteractParamsEnum;
(function (ComponentInteractParamsEnum) {
    ComponentInteractParamsEnum["DATA"] = "data";
})(ComponentInteractParamsEnum || (ComponentInteractParamsEnum = {}));
// 定义组件触发回调事件
export const interactActions = [
    {
        interactType: InteractEventOn.CHANGE,
        interactName: '选择完成',
        componentEmitEvents: {
            [ComponentInteractEventEnum.DATA]: [
                {
                    value: ComponentInteractParamsEnum.DATA,
                    label: '选择项'
                }
            ]
        }
    }
];
