// Store 枚举
export const ChartEditStoreEnum = Object.freeze({
  EDIT_RANGE: 'editRange',
  EDIT_CANVAS: 'editCanvas',
  RIGHT_MENU_SHOW: 'rightMenuShow',
  MOUSE_POSITION: 'mousePosition',
  TARGET_CHART: 'targetChart',
  RECORD_CHART: 'recordChart',
  // 以下需要存储
  EDIT_CANVAS_CONFIG: 'editCanvasConfig',
  REQUEST_GLOBAL_CONFIG: 'requestGlobalConfig',
  COMPONENT_LIST: 'componentList'
})

// 对象类型
export const HistoryTargetTypeEnum = Object.freeze({
  CANVAS: 'canvas',
  CHART: 'chart'
})

// 历史栈
export const HistoryStackEnum = Object.freeze({
  BACK_STACK: 'backStack',
  FORWARD_STACK: 'forwardStack'
})

// 历史记录项
export const HistoryStackItemEnum = Object.freeze({
  ID: 'id',
  TARGET_TYPE: 'targetType',
  ACTION_TYPE: 'actionType',
  HISTORY_DATA: 'historyData'
})

export const HistoryActionTypeEnum = Object.freeze({
  // 新增
  ADD: 'add',
  // 删除
  DELETE: 'delete',
  // 更新（位置，属性）
  UPDATE: 'update',
  // 移动
  MOVE: 'move',
  // 复制
  COPY: 'copy',
  // 剪切
  CUT: 'cut',
  // 粘贴
  PASTE: 'paste',
  // 置顶
  TOP: 'top',
  // 置底
  BOTTOM: 'bottom',
  // 上移
  UP: 'up',
  // 下移
  DOWN: 'down',
  // 成组
  GROUP: 'group',
  // 解组
  UN_GROUP: 'unGroup',
  // 锁定
  LOCK: 'lock',
  // 解除锁定
  UNLOCK: 'unLock',
  // 隐藏
  HIDE: 'hide',
  // 显示
  SHOW: 'show'
})

export const RequestHttpIntervalEnum = Object.freeze({
  // 秒
  SECOND: 'second',
  // 分
  MINUTE: 'minute',
  // 时
  HOUR: 'hour',
  // 天
  DAY: 'day'
})

export const ChatCategoryEnum = Object.freeze({
  BAR: 'Bars',
  PIE: 'Pies',
  LINE: 'Lines',
  SCATTER: 'Scatters',
  MAP: 'Maps',
  MORE: 'Mores'
})

export const ChatCategoryEnumName = Object.freeze({
  BAR: '柱状图',
  PIE: '饼图',
  LINE: '折线图',
  SCATTER: '散点图',
  MAP: '地图',
  MORE: '更多'
})
export const ChatCategoryEnumDecorates = Object.freeze({
  BORDER: 'Borders',
  DECORATE: 'Decorates',
  THREE: 'Three',
  MORE: 'Mores'
})
export const ChatCategoryEnumNameDecorates = Object.freeze({
  BORDER: '边框',
  DECORATE: '装饰',
  THREE: '三维',
  MORE: '更多'
})
export const ChatCategoryEnumInformations = Object.freeze({
  TEXT: 'Texts',
  TITLE: 'Titles',
  INPUTS: 'Inputs',
  MORE: 'Mores'
})
export const ChatCategoryEnumNameInformations = Object.freeze({
  TEXT: '文本',
  TITLE: '标题',
  // 控件 :> 数据录入
  INPUTS: '控件',
  MORE: '更多'
})

export const ChatCategoryEnumTables = Object.freeze({
  TABLE: 'Tables'
})

export const ChatCategoryEnumNameTables = Object.freeze({
  TABLE: '表格'
})

export const ChartFrameEnum = Object.freeze({
  // 支持 dataset 的 echarts 框架
  ECHARTS: 'echarts',
  // UI 组件框架
  NAIVE_UI: 'naiveUI',
  // 自定义带数据组件
  COMMON: 'common',
  // 无数据变更
  STATIC: 'static'
})

// 包分类枚举
export const PackagesCategoryEnum = Object.freeze({
  CHARTS: 'Charts',
  TABLES: 'Tables',
  INFORMATIONS: 'Informations',
  DECORATES: 'Decorates'
})

// 包分类名称
export const PackagesCategoryName = Object.freeze({
  CHARTS: '图表',
  TABLES: '列表',
  INFORMATIONS: '信息',
  DECORATES: '小组件'
})

export const ToolsStatusEnum = Object.freeze({
  DOCK: 'dock',
  ASIDE: 'aside'
})

export const SettingStoreEnums = Object.freeze({
  // 拖拽页面左侧表单分类只有一项的时候是否隐藏
  HIDE_PACKAGE_ONE_CATEGORY: 'hidePackageOneCategory',
  // 切换语言是否进行路由刷新
  CHANGE_LANG_RELOAD: 'changeLangReload',
  // 侧边栏折叠是否隐藏全部
  ASIDE_ALL_COLLAPSED: 'asideAllCollapsed',
  // 图表移动时按方向键移动的距离
  CHART_MOVE_DISTANCE: 'chartMoveDistance',
  // 图表拖拽时的吸附距离（px）
  CHART_ALIGN_RANGE: 'chartAlignRange',
  // 图表工具栏状态（侧边工具状态）
  CHART_TOOLS_STATUS: 'chartToolsStatus',
  // 图表工具栏状态隐藏
  CHART_TOOLS_STATUS_HIDE: 'chartToolsStatusHide'
})

// 主题
export const ThemeEnum = Object.freeze({
  DARK: 'dark',
  LIGHT: 'light'
})

// 语言
export const LangEnum = Object.freeze({
  ZH: 'ZH',
  EN: 'EN'
})

// 预览展示
export const PreviewScaleEnum = Object.freeze({
  FIT: 'fit',
  SCROLL_Y: 'scrollY',
  SCROLL_X: 'scrollX',
  FULL: 'full'
})

// 操作枚举
export const MenuEnum = Object.freeze({
  // 移动
  ARROW_UP: 'up',
  ARROW_RIGHT: 'right',
  ARROW_DOWN: 'down',
  ARROW_LEFT: 'left',
  // 删除
  DELETE: 'delete',
  // 复制
  COPY: 'copy',
  // 剪切
  CUT: 'cut',
  // 粘贴
  PARSE: 'parse',
  // 置顶
  TOP: 'top',
  // 置底
  BOTTOM: 'bottom',
  // 上移
  UP: 'up',
  // 下移
  DOWN: 'down',
  // 清空剪贴板
  CLEAR: 'clear',
  // 成组
  GROUP: 'group',
  // 解组
  UN_GROUP: 'unGroup',
  // 后退
  BACK: 'back',
  // 前进
  FORWORD: 'forward',
  // 保存
  SAVE: 'save',
  // 锁定
  LOCK: 'lock',
  // 解除锁定
  UNLOCK: 'unLock',
  // 隐藏
  HIDE: 'hide',
  // 显示
  SHOW: 'show'
})

export const ChartLayoutStoreEnum = Object.freeze({
  LAYERS: 'layers',
  CHARTS: 'charts',
  DETAILS: 'details',
  Chart_TYPE: 'chartType',
  LAYER_TYPE: 'layerType',
  PERCENTAGE: 'percentage',
  RE_POSITION_CANVAS: 'rePositionCanvas'
})

// 获取组件
export const FetchComFlagType = Object.freeze({
  VIEW: 0,
  CONFIG: 1
})
