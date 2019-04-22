import { ui } from "../ui/layaMaxUI";
import FriendData from "./model/FriendData";
import UserData from "./model/UserData";
//即将超越其它玩家
export default class GoingSurpassOther extends ui.GoingSurpassOtherUI {
    
    constructor() { super(); }
    
    public openView(_type?: number): void {
        this.active = true;
        for (let index = 0; index < 2; index++) {
            this["head" + index].visible = false;
        }

        FriendData.instance.getFriends(_type,(data)=>{
            let index = 0;
            for(let i = 0; i < data.length; i++){
                if(data[i].avatarUrl == UserData.avatarUrl){
                    index = i;
                    break;
                }
            }
            let length = Math.min(index + 3,data.length);
            let j = 0;
            for (; index < length; index++) {
                this["head" + j].skin = data[index].avatarUrl;
                this["head" + j].visible = true;
                j++;
            }
        });
    }

    public closeView(): void {
        this.active = false;
    }
}