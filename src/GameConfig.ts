/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import GameOverItem from "./script/GameOverItem"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=750;
    static height:number=1334;
    static scaleMode:string="fixedwidth";
    static screenMode:string="vertical";
    static alignV:string="middle";
    static alignH:string="center";
    static startScene:any="GoingSurpassOther.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=false;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("script/GameOverItem.ts",GameOverItem);
    }
}
GameConfig.init();