import {
  ChatCategoryEnum,
  ChatCategoryEnumName,
  PackagesCategoryEnum,
  ChartFrameEnum
} from '@/enum'
export const LineGradientsConfig = {
  key: 'LineGradients',
  chartKey: 'VLineGradients',
  conKey: 'VCLineGradients',
  title: '双折线渐变面积图',
  category: ChatCategoryEnum.LINE,
  categoryName: ChatCategoryEnumName.LINE,
  package: PackagesCategoryEnum.CHARTS,
  chartFrame: ChartFrameEnum.ECHARTS,
  image: 'line_gradient.png'
}
