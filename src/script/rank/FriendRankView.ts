import RankItem from "./RankItem";
import UserData from "../model/UserData";
import { ui } from "../../ui/layaMaxUI";

export class FriendRankView extends ui.FriendRankUI {
    private selfRankITem:RankItem;
    private selfRankData:any = {};

    constructor() { 
        super(); 
        this.init();
    }
    init(): void {
        this.rankList.array = [];
        this.rankList.itemRender = RankItem;
        this.rankList.renderHandler = new Laya.Handler(this, this.onRender);
        this.rankList.vScrollBarSkin = "";
        this.noRank.visible = false;
        this.selfRank.visible = false;
    }
    public drawRankList(data: Array<any>): void {
        let self = this;
        this.selfRankData = {
            user_nickname:UserData.nickName,
            headImage:UserData.avatarUrl,
        }
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
    }
    
    setMyRankInfo(){
        this.selfRank.visible = true;
        this.selfRankITem.updateItem(this.selfRankData);
    }

    onRender(cell: RankItem, index: number): any {
        cell.updateItem(cell.dataSource);
    }

}