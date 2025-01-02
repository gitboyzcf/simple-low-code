import {
  ChatCategoryEnum,
  ChatCategoryEnumName,
  PackagesCategoryEnum,
  ChartFrameEnum
} from '@/enum'
export const LineCommonConfig = {
  key: 'LineCommon',
  chartKey: 'VLineCommon',
  conKey: 'VCLineCommon',
  title: '折线图',
  category: ChatCategoryEnum.LINE,
  categoryName: ChatCategoryEnumName.LINE,
  package: PackagesCategoryEnum.CHARTS,
  chartFrame: ChartFrameEnum.ECHARTS,
  image: 'line.png'
}
