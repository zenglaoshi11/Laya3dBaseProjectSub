import { SORTTYPE } from "./model/FriendData";

export default class RankItem extends Laya.Script  {
    private rankImg: Laya.Image;
    private rankLab: Laya.Label;

    private avatarImg: Laya.Image;
    private nameLab: Laya.Label;

    private scoreLab: Laya.Label;

    constructor() { 
        super(); 
    }

    onAwake(){
        this.rankImg = this.owner.getChildByName("rankImg") as Laya.Image;
        this.rankLab = this.owner.getChildByName("rankLab") as Laya.Label;

        this.avatarImg = this.owner.getChildByName("avatarImg") as Laya.Image;
        this.nameLab = this.owner.getChildByName("nameLab") as Laya.Label;

        this.scoreLab = this.owner.getChildByName("scoreLab") as Laya.Label;
    }

    updateItem(itemData,_type:number){
        this.owner.active= true;
        this.rankImg.visible = false;
        this.rankLab.text = itemData.index|| "未上榜";
        switch(itemData.index){
            case 1:
            // case 2:
            // case 3:
                this.rankLab.text = "";
                this.rankImg.skin = "rank/img_rank"+ itemData.index +".png";
                this.rankImg.visible = true;
            break;
        }
        this.avatarImg.skin = "rank/img_default_avatar.png"; //默认头像
        if (itemData.avatarUrl && itemData.avatarUrl != "" ) {
            let avatarUrl = itemData.avatarUrl.replace("/132", "/46");
            this.avatarImg.skin = avatarUrl;
        }
        this.nameLab.text = itemData.nickname ? itemData.nickname : "神秘玩家";

        switch (_type) {
            case SORTTYPE.LEVEL:	
                this.scoreLab.text = itemData.score + "关"
            break;
            // case SORTTYPE.ENDLESS:
            default:
                this.scoreLab.text = itemData.score;
            break;
        }
    }

    clean(){
        this.owner.active = false;
    }
}