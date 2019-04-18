import { ui } from "../ui/layaMaxUI";
import FriendData from "./model/FriendData";
import UserData from "./model/UserData";
//超越其它玩家
export default class SurpassOther extends ui.SurpassOtherUI {
    constructor() { super(); }
    
    public openView(_d): void {
        let _s:number = _d.score;
        let _type:number = _d._type;
        this.visible = true;
        this.nextHead.visible = false;
        FriendData.instance.getFriends(_type,(data)=>{
            let index = -1;
            for(let i = data.length - 1; i >= 0; i--){
                if(data[i].score > _s){
                    if(data[i].avatarUrl != UserData.avatarUrl){
                        index = i;
                    }else{
                        index = i-1;
                    }
                    break;
                }
            }
            var curSurpass = data[index];
            if(index == -1 || !curSurpass){
                return;
            }
            //存在可以超越的好友
            this.nextHead.visible = true;
            this.nextHead.skin = curSurpass.avatarUrl;
        })
    }

    public closeView(): void {
        this.nextHead.visible = false;
        this.visible = false;
    }
}