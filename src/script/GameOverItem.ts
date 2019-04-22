import { SORTTYPE } from "./model/FriendData";

export default class GameoverItem extends Laya.Box {
    private rankLab: Laya.Label;

    private avatarImg: Laya.Image;
    private nameLab: Laya.Label;

    private scoreLab: Laya.Label;

    constructor() { 
        super(); 
        this.rankLab = this.getChildByName("rankLab") as Laya.Label;

        this.avatarImg = this.getChildByName("avatarImg") as Laya.Image;
        this.nameLab = this.getChildByName("nameLab") as Laya.Label;

        this.scoreLab = this.getChildByName("scoreLab") as Laya.Label;
    }

    updateItem(itemData,_type:number){
        this.rankLab.text = itemData.index;
        if (itemData.headImage && itemData.headImage != "" ) {
            this.avatarImg.skin = itemData.headImage;
        }
        this.nameLab.text = itemData.nickname ? itemData.nickname : "神秘玩家";

        this.scoreLab.text = itemData.score;
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
        this.active = false;
    }

}