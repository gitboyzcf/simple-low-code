import {
  ChatCategoryEnum,
  ChatCategoryEnumName,
  PackagesCategoryEnum,
  ChartFrameEnum
} from '@/enum'
export const BarCrossrangeConfig = {
  key: 'BarCrossrange',
  chartKey: 'VBarCrossrange',
  conKey: 'VCBarCrossrange',
  title: '横向柱状图',
  category: ChatCategoryEnum.BAR,
  categoryName: ChatCategoryEnumName.BAR,
  package: PackagesCategoryEnum.CHARTS,
  chartFrame: ChartFrameEnum.ECHARTS,
  image: 'bar_y.png'
}
