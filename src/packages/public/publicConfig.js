import { getUUID } from '@/utils';
import { groupTitle } from '@/settings/designSetting';
import { BaseEvent, EventLife } from '@/enums/eventEnum';
import { RequestHttpEnum, RequestDataTypeEnum, RequestHttpIntervalEnum, RequestContentTypeEnum, RequestBodyEnum } from '@/enums/httpEnum';
import { ChartFrameEnum } from '@/packages/index.d';
import { chartInitConfig } from '@/settings/designSetting';
import cloneDeep from 'lodash-es/cloneDeep';
// 请求基础属性
export const requestConfig = {
    requestDataType: RequestDataTypeEnum.STATIC,
    requestHttpType: RequestHttpEnum.GET,
    requestUrl: '',
    requestInterval: undefined,
    requestIntervalUnit: RequestHttpIntervalEnum.SECOND,
    requestContentType: RequestContentTypeEnum.DEFAULT,
    requestParamsBodyType: RequestBodyEnum.NONE,
    requestSQLContent: {
        sql: 'select * from  where'
    },
    requestParams: {
        Body: {
            'form-data': {},
            'x-www-form-urlencoded': {},
            json: '',
            xml: ''
        },
        Header: {},
        Params: {}
    }
};
// 单实例类
export class PublicConfigClass {
    id = getUUID();
    isGroup = false;
    // 基本信息
    attr = { ...chartInitConfig, zIndex: -1 };
    // 基本样式
    styles = {
        // 使用滤镜
        filterShow: false,
        // 色相
        hueRotate: 0,
        // 饱和度
        saturate: 1,
        // 对比度
        contrast: 1,
        // 亮度
        brightness: 1,
        // 透明
        opacity: 1,
        // 旋转
        rotateZ: 0,
        rotateX: 0,
        rotateY: 0,
        // 倾斜
        skewX: 0,
        skewY: 0,
        // 混合模式
        blendMode: 'normal',
        // 动画
        animations: []
    };
    // 预览
    preview = {
        overFlowHidden: false
    };
    // 状态
    status = {
        lock: false,
        hide: false
    };
    // 请求
    request = cloneDeep(requestConfig);
    // 数据过滤
    filter = undefined;
    // 事件
    events = {
        baseEvent: {
            [BaseEvent.ON_CLICK]: undefined,
            [BaseEvent.ON_DBL_CLICK]: undefined,
            [BaseEvent.ON_MOUSE_ENTER]: undefined,
            [BaseEvent.ON_MOUSE_LEAVE]: undefined
        },
        advancedEvents: {
            [EventLife.VNODE_MOUNTED]: undefined,
            [EventLife.VNODE_BEFORE_MOUNT]: undefined
        },
        interactEvents: []
    };
}
// 多选成组类
export class PublicGroupConfigClass extends PublicConfigClass {
    // 成组
    isGroup = true;
    // 名称
    chartConfig = {
        key: 'group',
        chartKey: 'group',
        conKey: 'group',
        category: 'group',
        categoryName: 'group',
        package: 'group',
        chartFrame: ChartFrameEnum.COMMON,
        title: groupTitle,
        image: ''
    };
    // 组成员列表
    groupList = [];
    // ---- 原有 ---
    // key
    key = 'group';
    // 配置
    option = {};
    // 标识
    id = getUUID();
    // 基本信息
    attr = { w: 0, h: 0, x: 0, y: 0, offsetX: 0, offsetY: 0, zIndex: -1 };
}
