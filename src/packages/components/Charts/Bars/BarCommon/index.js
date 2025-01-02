import {
  ChatCategoryEnum,
  ChatCategoryEnumName,
  PackagesCategoryEnum,
  ChartFrameEnum
} from '@/enum'
export const BarCommonConfig = {
  key: 'BarCommon',
  chartKey: 'VBarCommon',
  conKey: 'VCBarCommon',
  title: '柱状图',
  category: ChatCategoryEnum.BAR,
  categoryName: ChatCategoryEnumName.BAR,
  package: PackagesCategoryEnum.CHARTS,
  chartFrame: ChartFrameEnum.ECHARTS,
  image: 'bar_x.png'
}
