import { renderIcon } from '@/utils'
// import { themeColor, setItem, getCharts } from './useLayout.hook';
import { PackagesCategoryEnum, PackagesCategoryName, ChartLayoutStoreEnum } from '@/enum'
// 图表
import { packagesList } from '@/packages/index'

const getPackagesList = Object.freeze(packagesList)
const menuOptions = []
const packagesListObj = {
  [PackagesCategoryEnum.CHARTS]: {
    icon: renderIcon('uil:chart'),
    label: PackagesCategoryName.CHARTS
  },
  [PackagesCategoryEnum.INFORMATIONS]: {
    icon: renderIcon('icon-park-outline:text'),
    label: PackagesCategoryName.INFORMATIONS
  },
  [PackagesCategoryEnum.TABLES]: {
    icon: renderIcon('gg:list'),
    label: PackagesCategoryName.TABLES
  },
  [PackagesCategoryEnum.DECORATES]: {
    icon: renderIcon('streamline:module-puzzle-3'),
    label: PackagesCategoryName.DECORATES
  }
}
// 处理列表
const handlePackagesList = () => {
  for (const val in getPackagesList) {
    menuOptions.push({
      key: val,
      icon: packagesListObj[val].icon,
      label: packagesListObj[val].label,
      list: getPackagesList[val]
    })
  }
  console.log(getPackagesList)
  console.log(menuOptions)
}
handlePackagesList()
// 记录选中值
let beforeSelect = menuOptions[0]['key']
const selectValue = ref(menuOptions[0]['key'])
// 选中的对象值
const selectOptions = ref(menuOptions[0])
// 点击 item
const clickItemHandle = (key, item) => {
  selectOptions.value = item
  // 处理折叠
  // if (beforeSelect === key) {
  //   setItem(ChartLayoutStoreEnum.CHARTS, !getCharts.value, false)
  // } else {
  //   setItem(ChartLayoutStoreEnum.CHARTS, true, false)
  // }
  beforeSelect = key
}
export { selectOptions, selectValue, clickItemHandle, menuOptions }
