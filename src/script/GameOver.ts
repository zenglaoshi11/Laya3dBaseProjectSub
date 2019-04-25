import { ui } from "../ui/layaMaxUI";
import GameoverItem from "./GameOverItem";
import FriendData, { SORTTYPE } from "./model/FriendData";
import UserData from "./model/UserData";
//游戏结束
export default class GameOver extends ui.GameOverUI {
    private _items = [];
  
    constructor() { 
        super();
        for (let index = 0; index < 3; index++) {
            // let item = this.getChildByName("item" + index).addComponent(GameoverItem);
            this._items.push(this.getChildByName("item" + index));
        }
    }
    
    public openView(_type?: number): void {
        this.visible = true;
        this._items.forEach(element => {
            (element.getComponent(GameoverItem) as GameoverItem).clean();
        });
       
        FriendData.instance.getGameOverData(_type,(list)=>{
            for (let index = 0; index < list.length; index++) {
                const element:GameoverItem = this._items[index].getComponent(GameoverItem);
                element.updateItem(list[index],_type);
            }
        });
    }

    public closeView(): void {
        this.visible = false;
    }
}