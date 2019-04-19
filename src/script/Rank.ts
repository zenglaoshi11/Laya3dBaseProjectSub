import RankItem from "./RankItem";
import UserData from "./model/UserData";
import { ui } from "../ui/layaMaxUI";
import FriendData, { SORTTYPE } from "./model/FriendData";

export class Rank extends ui.FriendRankUI {
    private selfRankITem:RankItem;
    private selfRankData:any = {};
    private _type:number;

    constructor() { 
        super(); 
        this.rankList.array = [];
        this.rankList.itemRender = RankItem;
        this.rankList.renderHandler = new Laya.Handler(this, this.onRender);
        this.rankList.vScrollBarSkin = "";
        // this.noRank.visible = false;
        this.selfRank.visible = false;
        this._type = SORTTYPE.ENDLESS;
    }

    public openView(_type:number): void {
        this._type = _type;
        let self = this;
        this.selfRankData = {
            user_nickname:UserData.nickName,
            headImage:UserData.avatarUrl,
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
        this.selfRankITem.updateItem(this.selfRankData);
    }

    onRender(cell: Laya.Box, index: number): any {
        let item:RankItem = cell.getComponent(RankItem);
        item.updateItem(cell.dataSource);
    }

    public closeView(): void {
        this.active = false;
    }
}