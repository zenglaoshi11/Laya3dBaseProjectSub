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
            if(index == 0){
                this.best.visible = true;
                this.beyondImg.visible = false;
                this.head0.visible = false;
                this.head1.visible = false;
                this.head2.visible = false;
            }else{
                this.best.visible = false;
                this.beyondImg.visible = true;
            }
            let j = 3;
            for (let i = index - 1; i >= 0; i--) {
                j--;
                if(j<0){
                    break;
                }
                this["head" + j].skin = data[index].avatarUrl;
                this["head" + j].visible = true;
            }

        });
    }

    public closeView(): void {
        this.active = false;
    }
}