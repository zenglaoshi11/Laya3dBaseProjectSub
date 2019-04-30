import { SORTTYPE } from "./model/FriendData";
import UserData from "./model/UserData";

export default class GameoverItem extends Laya.Script {
    private rankLab: Laya.Label;

    private avatarImg: Laya.Image;
    private myBg: Laya.Image;
    private nameLab: Laya.Label;

    private scoreLab: Laya.Label;


    onAwake() { 
        this.rankLab = this.owner.getChildByName("rankLab") as Laya.Label;
        this.avatarImg = this.owner.getChildByName("avatarImg") as Laya.Image;
        this.myBg = this.owner.getChildByName("myBg") as Laya.Image;
        this.nameLab = this.owner.getChildByName("nameLab") as Laya.Label;
        this.scoreLab = this.owner.getChildByName("scoreLab") as Laya.Label;
    }

    updateItem(itemData,_type:number){
        (this.owner as Laya.View).visible = true;
        this.rankLab.text = itemData.rank;
        if (itemData.avatarUrl && itemData.avatarUrl != "" ) {
            this.avatarImg.skin = itemData.avatarUrl;
        }
        this.myBg.visible = itemData.avatarUrl == UserData.avatarUrl;
        this.nameLab.text = itemData.nickname ? itemData.nickname : "神秘玩家";
        this.scoreLab.text = itemData.score||0;
        switch (_type) {
            case SORTTYPE.LEVEL:	
                this.scoreLab.text = itemData.score + "关"
            break;
            case SORTTYPE.ENDLESS:
                this.scoreLab.text = itemData.score;
            break;
        }
    }

    clean(){
        (this.owner as Laya.View).visible = false;
    }

}