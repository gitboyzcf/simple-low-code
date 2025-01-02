import { PublicConfigClass } from '@/packages/public';
import { MapAmapConfig } from './index';
import { chartInitConfig } from '@/settings/designSetting';
import cloneDeep from 'lodash-es/cloneDeep';
import dataJson from './data.json';
export var ThemeEnum;
(function (ThemeEnum) {
    ThemeEnum["NORMAL"] = "normal";
    ThemeEnum["DARK"] = "dark";
    ThemeEnum["LIGHT"] = "light";
    ThemeEnum["WHITES_MOKE"] = "whitesmoke";
    ThemeEnum["FRESH"] = "fresh";
    ThemeEnum["GREY"] = "grey";
    ThemeEnum["GRAFFITI"] = "graffiti";
    ThemeEnum["MACARON"] = "macaron";
    ThemeEnum["BLUE"] = "blue";
    ThemeEnum["DARKBLUE"] = "darkblue";
    ThemeEnum["WINE"] = "wine";
})(ThemeEnum || (ThemeEnum = {}));
export var LangEnum;
(function (LangEnum) {
    LangEnum["ZH_CN"] = "zh_cn";
    LangEnum["EN"] = "en";
    LangEnum["ZH_EN"] = "zh_en";
})(LangEnum || (LangEnum = {}));
export var ViewModeEnum;
(function (ViewModeEnum) {
    ViewModeEnum["PLANE"] = "2D";
    ViewModeEnum["STEREOSCOPIC"] = "3D";
})(ViewModeEnum || (ViewModeEnum = {}));
export var FeaturesEnum;
(function (FeaturesEnum) {
    FeaturesEnum["BG"] = "bg";
    FeaturesEnum["POINT"] = "point";
    FeaturesEnum["ROAD"] = "road";
    FeaturesEnum["BUILDING"] = "building";
})(FeaturesEnum || (FeaturesEnum = {}));
export var MarkerEnum;
(function (MarkerEnum) {
    // 圆圈
    MarkerEnum["CIRCLE_MARKER"] = "CircleMarker";
    // 定位标点
    MarkerEnum["MARKER"] = "Marker";
    // 暂无
    MarkerEnum["NONE"] = "none";
})(MarkerEnum || (MarkerEnum = {}));
export const option = {
    dataset: dataJson,
    mapOptions: {
        pitch: 60,
        skyColor: '#53A9DE',
        amapKey: 'd5f3e16589dbecae64d05fe90e2ba4f2',
        amapStyleKey: ThemeEnum.DARK,
        amapStyleKeyCustom: '',
        amapLon: 116.397428,
        amapLat: 39.90923,
        amapZindex: 11,
        marker: {
            fillColor: '#E98984FF',
            fillOpacity: 0.5,
            strokeColor: 'white',
            strokeWeight: 2,
            strokeOpacity: 0.5,
            zIndex: 10,
            bubble: true,
            cursor: 'pointer',
            clickable: true
        },
        mapMarkerType: MarkerEnum.CIRCLE_MARKER,
        viewMode: ViewModeEnum.PLANE,
        lang: LangEnum.ZH_CN,
        features: [FeaturesEnum.BG, FeaturesEnum.POINT, FeaturesEnum.ROAD, FeaturesEnum.BUILDING]
    }
};
export default class Config extends PublicConfigClass {
    key = MapAmapConfig.key;
    attr = { ...chartInitConfig, w: 1000, h: 800, zIndex: -1 };
    chartConfig = cloneDeep(MapAmapConfig);
    option = cloneDeep(option);
}
