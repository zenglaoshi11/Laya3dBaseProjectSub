import RankItem from "./RankItem";
import UserData from "./model/UserData";
import { ui } from "../ui/layaMaxUI";
import FriendData, { SORTTYPE } from "./model/FriendData";

export class Rank extends ui.FriendRankUI {
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
        let itemData = this.selfRankData;
        this.selfRank.visible = true;
        this.rankImgMy.active = false;
        this.rankLabMy.text = itemData.index;
        switch(itemData.index){
            case 1:
            case 2:
            case 3:
                this.rankLabMy.text = "";
                this.rankImgMy.skin = "rank/"+ itemData.index +".png";
                this.rankImgMy.active = true;
            break;
        }

        if (itemData.headImage && itemData.headImage != "" ) {
            let avatarUrl = itemData.headImage.replace("/132", "/46");
            this.avatarImgMy.skin = avatarUrl;
        }
        let name = itemData.user_nickname.length > 6 ? itemData.user_nickname.substr(0, 8) : itemData.user_nickname;
        this.nameLabMy.text = name!=""?name:"神秘玩家";

        this.scoreLab.text = itemData.score;
    }

    onRender(cell: RankItem, index: number): any {
        cell.updateItem(cell.dataSource,this._type);
    }

    public closeView(): void {
        this.active = false;
    }
}