import RankItem from "./RankItem";
import UserData from "./model/UserData";
import FriendData, { SORTTYPE } from "./model/FriendData";
import { ui } from "../ui/layaMaxUI";

export class Rank extends ui.RankUI {
    private selfRankITem:RankItem;
    private selfRankData:any = {};
    private _type:number;

    constructor() { 
        super(); 
    }
    
    onAwake(){
        this.rankList.array = [];
        this.rankList.renderHandler = new Laya.Handler(this, this.onRender);
        this.rankList.vScrollBarSkin = "";
        // this.noRank.visible = false;
        this._type = SORTTYPE.ENDLESS;
        this.selfRankITem = this.selfRank.addComponent(RankItem);
    }

    public openView(_type:number): void {
        this.visible = true;
        this._type = _type || SORTTYPE.ENDLESS;
        let self = this;
        this.selfRankData = {
            nickname:UserData.nickName,
            avatarUrl:UserData.avatarUrl,
        }
        FriendData.instance.getFriends(_type,(data)=>{
            this.rankList.scrollTo(0);
            data.forEach((v: any,i) => {
                if (v.avatarUrl == UserData.avatarUrl) {
                    self.selfRankData.index = i+1;
                    self.selfRankData.score = data[i].score;
                }
            });
            this.rankList.repeatY = data.length;
            this.rankList.array = data;
            this.rankList.refresh();
            this.setMyRankInfo();
        });
    }
    
    setMyRankInfo(){
        this.selfRankITem.updateItem(this.selfRankData,this._type);
        this.selfRank.visible = true;
    }

    onRender(cell: Laya.Box, index: number): any {
        let item:RankItem = cell.getComponent(RankItem);
        if(!item){
            item = cell.addComponent(RankItem)
        }
        cell.dataSource.index =  index + 1;
        item.updateItem(cell.dataSource,this._type);
    }

    public closeView(): void {
        this.visible = false;
    }
}