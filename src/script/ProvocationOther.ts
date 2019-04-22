import { ui } from "../ui/layaMaxUI";
import FriendData, { SORTTYPE } from "./model/FriendData";
import UserData from "./model/UserData";
//挑衅其它玩家
export default class ProvocationOther extends ui.ProvocationOtherUI {
    //挑衅文本
    private proClassicTxt = ["我玩到了#分哦，你能赢过我吗？","是青铜还是王者，请开始你的表演！","#分以后的风景独好~飘了飘了~"];
    private proLevelTxt = ["已经玩到了#关，谁能超越我！","后面的关卡果然不一样，我等你哦！","一口气拿下10关，没难度啊！"];
   
    constructor() { super(); }
    
    //type 0：经典，1：关卡
    public openView(_type:number): void {
        let text:string = "让大家见识一下你的极限！";
        
        FriendData.instance.getFriends(_type,(data)=>{
            this.visible = true;
            let rank = -1;
            let length = data.length;
            for(let i = 0; i < length; i++){
                if(data[i].avatarUrl == UserData.avatarUrl){
                    rank = i;
                    break;
                }
            }
            var avatarUrl;
            if(rank == 0 && length > 1){
                avatarUrl = data[1].avatarUrl;
            }else if(rank == -1 || rank == 0){
                avatarUrl = UserData.avatarUrl;
            }else if(rank > 0){
                let random = Math.floor(Math.random() * rank);
                if(random < rank){
                    let index = 0;
                    switch(_type){
                        case SORTTYPE.LEVEL:
                            index = Math.floor(Math.random() * this.proClassicTxt.length);
                            text = this.proClassicTxt[index];
                        break;
                        default:
                            index = Math.floor(Math.random() * this.proLevelTxt.length);
                            text = this.proLevelTxt[index];
                        break;
                    }
                    avatarUrl = data[random].avatarUrl
                }
            }
            this.nextHead.skin = avatarUrl;
            this.provocationOtherText.text = text;
            this.provocationOtherBg.width = this.provocationOtherText.width + 40;
        });
    }

    public closeView(): void {
        this.visible = false;
    }
}