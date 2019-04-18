import { ui } from "../ui/layaMaxUI";
import GameoverItem from "./GameOverItem";
import FriendData, { SORTTYPE } from "./model/FriendData";
import UserData from "./model/UserData";
//游戏结束
export default class GameOver extends ui.GameOverUI {
    private _items = [];
  
    constructor() { 
        super();
        for (let index = 0; index < 2; index++) {
            // let item = this.getChildByName("item" + index).addComponent(GameoverItem);
            this._items.push(this.getChildByName("item" + index));
        }
    }
    
    public openView(_type?: number): void {
        this._items.forEach(element => {
            (element.getComponent(GameoverItem) as GameoverItem).clean();
        });
        FriendData.instance.getFriends(_type,(data)=>{
            let list = [];
            switch(data.length){
                case 1:
                case 2:
                case 3:
                    list = data;
                break;
                default:
                for(let i = 0; i < data.length; i++){
					if(data[i].avatarUrl == UserData.avatarUrl){
						if(i > 0 && i < data.length - 1){
							list.push(data[i-1]);
							list[0].rank = i
							list.push(data[i]);
							list[1].rank = i+1;
							list.push(data[i+1]);
							list[2].rank = i+2;
						}else if(i == 0 ){
							if(i!= data.length-1){
								list.push(data[i]);
								list[0].rank = i+1;
								list.push(data[i+1]);
								list[1].rank = i+2;
								list.push(data[i+2]);
								list[2].rank = i+3;
							}
						}else if(i == data.length - 1){
							list.push(data[i-2]);
							list[0].rank = i-1;
							list.push(data[i-1]);
							list[1].rank = i;
							list.push(data[i]);
							list[2].rank = i+1;
						}
						break;
					}
				}
                break;
            }
            for (let index = 0; index < list.length; index++) {
                const element:GameoverItem = this._items[index].getComponent(GameoverItem);
                element.updateItem(_type,list[index]);
            }
        });
    }

    public closeView(): void {
        this.active = false;
    }
}