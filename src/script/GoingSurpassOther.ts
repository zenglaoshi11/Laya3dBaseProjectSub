import { ui } from "../ui/layaMaxUI";
import FriendData from "./model/FriendData";
import UserData from "./model/UserData";
//即将超越其它玩家
export default class GoingSurpassOther extends ui.GoingSurpassOtherUI {
    
    constructor() { super(); }
    
    public openView(_type?: number): void {
        for (let index = 0; index < 2; index++) {
            this.getChildByName("head" + index).active = false;
        }

        FriendData.instance.getFriends(_type,(data)=>{
            let index = 0;
            for(let i = 0; i < data.length; i++){
                if(data[i].avatarUrl == UserData.avatarUrl){
                    index = i;
                    break;
                }
            }
            let head:Laya.Image;
            let length = Math.min(index + 2,data.length - index);
            for (; index < length; index++) {
                head = this.getChildByName("head" + index) as Laya.Image;
                head.skin = data.avatarUrl;
                head.active = true;
            }
        });
    }

    public closeView(): void {
        this.active = false;
    }
}