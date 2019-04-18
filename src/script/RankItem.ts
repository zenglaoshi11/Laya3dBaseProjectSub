import { SORTTYPE } from "./model/FriendData";

export default class RankItem extends Laya.Box {
    private rankImg: Laya.Image;
    private rankLab: Laya.Label;

    private avatarImg: Laya.Image;
    private nameLab: Laya.Label;

    private scoreLab: Laya.Label;

    constructor() { 
        super(); 
        this.rankImg = this.getChildByName("rankImg") as Laya.Image;
        this.rankLab = this.getChildByName("rankLab") as Laya.Label;

        this.avatarImg = this.getChildByName("avatarImg") as Laya.Image;
        this.nameLab = this.getChildByName("nameLab") as Laya.Label;

        this.scoreLab = this.getChildByName("scoreLab") as Laya.Label;
    }

    updateItem(itemData,_type:number){
        this.rankImg.active = false;
        this.rankLab.text = itemData.index;
        switch(itemData.index){
            case 1:
            case 2:
            case 3:
                this.rankLab.text = "";
                this.rankImg.skin = "rank/"+ itemData.index +".png";
                this.rankImg.active = true;
            break;
        }

        if (itemData.headImage && itemData.headImage != "" ) {
            let avatarUrl = itemData.headImage.replace("/132", "/46");
            this.avatarImg.skin = avatarUrl;
        }
        let name = itemData.user_nickname.length > 6 ? itemData.user_nickname.substr(0, 8) : itemData.user_nickname;
        this.nameLab.text = name!=""?name:"神秘玩家";

        switch (_type) {
            case SORTTYPE.LEVEL:	
                this.scoreLab.text = itemData.score + "关"
            break;
            case SORTTYPE.ENDLESS:
                this.scoreLab.text = itemData.score;
            break;
        }
    }

}