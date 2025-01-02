import dayjs from 'dayjs';
import cloneDeep from 'lodash-es/cloneDeep';
import { PublicConfigClass } from '@/packages/public';
import { chartInitConfig } from '@/settings/designSetting';
import { COMPONENT_INTERACT_EVENT_KET } from '@/enums/eventEnum';
import { interactActions, ComponentInteractEventEnum } from './interact';
import { InputsDateConfig } from './index';
export const option = {
    // 时间组件展示类型，必须和 interactActions 中定义的数据一致
    [COMPONENT_INTERACT_EVENT_KET]: ComponentInteractEventEnum.DATE,
    // 下拉展示
    isPanel: 0,
    dataset: dayjs().valueOf()
};
export default class Config extends PublicConfigClass {
    key = InputsDateConfig.key;
    attr = { ...chartInitConfig, w: 260, h: 32, zIndex: -1 };
    chartConfig = cloneDeep(InputsDateConfig);
    interactActions = interactActions;
    option = cloneDeep(option);
}
