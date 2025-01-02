import {
  ChatCategoryEnum,
  ChatCategoryEnumName,
  PackagesCategoryEnum,
  ChartFrameEnum
} from '@/enum'
export const CapsuleChartConfig = {
  key: 'CapsuleChart',
  chartKey: 'VCapsuleChart',
  conKey: 'VCCapsuleChart',
  title: '胶囊柱图',
  category: ChatCategoryEnum.BAR,
  categoryName: ChatCategoryEnumName.BAR,
  package: PackagesCategoryEnum.CHARTS,
  chartFrame: ChartFrameEnum.COMMON,
  image: 'capsule.png'
}
