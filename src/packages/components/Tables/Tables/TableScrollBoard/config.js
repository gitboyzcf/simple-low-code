import { PublicConfigClass } from '@/packages/public';
import { TableScrollBoardConfig } from './index';
import cloneDeep from 'lodash-es/cloneDeep';
import dataJson from './data.json';
export const option = {
    header: ['列1', '列2', '列3'],
    dataset: dataJson,
    index: true,
    columnWidth: [30, 100, 100],
    align: ['center', 'right', 'right', 'right'],
    rowNum: 5,
    waitTime: 2,
    headerHeight: 35,
    carousel: 'single',
    headerBGC: '#00BAFF',
    oddRowBGC: '#003B51',
    evenRowBGC: '#0A2732'
};
export default class Config extends PublicConfigClass {
    key = TableScrollBoardConfig.key;
    chartConfig = cloneDeep(TableScrollBoardConfig);
    option = cloneDeep(option);
}
