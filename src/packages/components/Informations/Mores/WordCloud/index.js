
import { ChatCategoryEnumInformations, ChatCategoryEnumNameInformations, PackagesCategoryEnum, ChartFrameEnum } from '@/enum';
export const WordCloudConfig = {
    key: 'WordCloud',
    chartKey: 'VWordCloud',
    conKey: 'VCWordCloud',
    title: '词云',
    category: ChatCategoryEnumInformations.MORE,
    categoryName: ChatCategoryEnumNameInformations.MORE,
    package: PackagesCategoryEnum.INFORMATIONS,
    chartFrame: ChartFrameEnum.COMMON,
    image: 'words_cloud.png'
};
