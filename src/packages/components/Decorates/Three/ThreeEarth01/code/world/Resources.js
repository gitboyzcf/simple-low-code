/**
 * 资源管理和加载
 */
import { LoadingManager, TextureLoader } from 'three';
import { loadingStart, loadingFinish, loadingError } from '@/utils';
import { resources } from './Assets';
export class Resources {
    manager;
    callback;
    textureLoader;
    textures;
    constructor(callback) {
        this.callback = callback; // 资源加载完成的回调
        this.textures = {}; // 贴图对象
        this.setLoadingManager();
        this.loadResources();
    }
    /**
     * 管理加载状态
     */
    setLoadingManager() {
        this.manager = new LoadingManager();
        // 开始加载
        this.manager.onStart = () => {
            loadingStart();
        };
        // 加载完成
        this.manager.onLoad = () => {
            this.callback();
        };
        // 正在进行中
        this.manager.onProgress = url => {
            loadingFinish();
        };
        this.manager.onError = url => {
            loadingError();
            window['$message'].error('数据加载失败，请刷新重试！');
        };
    }
    /**
     * 加载资源
     */
    loadResources() {
        this.textureLoader = new TextureLoader(this.manager);
        resources.textures?.forEach(item => {
            this.textureLoader.load(item.url, t => {
                this.textures[item.name] = t;
            });
        });
    }
}
