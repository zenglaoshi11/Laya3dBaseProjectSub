import UserData from "./UserData";

export enum SORTTYPE {
    LEVEL = 0,
    ENDLESS
}

export default class FriendData {
    //一小时刷新一次好友数据
    private preFriendsTime:number = 0;
    private refreshTime:number = 1 * 60 * 60 * 1000;
    //好友数据
    private friends:Array<any> = [];
    // //缓存头像
    // public static avatarCache:any = {};

    public static readonly instance: FriendData = new FriendData();
    private constructor() {
    }

    //好友数据
    public getFriends(_type?:number,callback?:Function):void{
        let self = this;
        if(this.needRefresh(self.preFriendsTime)){
            window["wx"].getFriendCloudStorage({
                keyList: ["score","level"],
                success: res => {
                    self.preFriendsTime = Laya.Browser.now();
                    self.friends = [];
                    for (let index = 0; index < res.data.length; index++) {
                        const v = res.data[index];
                        if(v.KVDataList.length > 0){
                            let _score = 0;
                            for(let i = 0; i < v.KVDataList.length; i++){
                                if(v.KVDataList[i].key == "score"){
                                    _score = parseInt(v.KVDataList[i].value);
                                }
                            }
                            self.friends.push({
                                nickname:v.nickname,
                                avatarUrl:v.avatarUrl,
                                score:_score,
                            });
                            // if(!self.avatarCache[v.avatarUrl] && _score > 1){
                            //     let txt = new Laya.Texture();
                            //     txt.load(v.avatarUrl.replace("/132","/46"));
                            //     self.avatarCache[v.avatarUrl] = txt;
                            // }
                        }
                    }
                    if(callback){
                        _type == SORTTYPE.LEVEL ? this.sortLevel() : this.sortScore()
                        callback(self.friends);
                    }
                }
            });
        } else{
            if(callback){
                _type == SORTTYPE.LEVEL ? this.sortLevel() : this.sortScore()
                callback(self.friends);
            }
        }
    }

    getGameOverData(_type,callback){
        this.getFriends(_type,(data)=>{
            let list = [];
            switch(data.length){
                case 1:
                case 2:
                case 3:
                    list = data.concat();
                break;
                default:
                for(let i = 0; i < data.length; i++){
                    if(data[i].avatarUrl == UserData.avatarUrl){
                        if(i > 0 && i < data.length - 1){
                            list.push(data[i-1]);
                            list.push(data[i]);
                            list.push(data[i+1]);
                        }else if(i == 0 ){
                            if(i!= data.length-1){
                                list.push(data[i]);
                                list.push(data[i+1]);
                                list.push(data[i+2]);
                            }
                        }else if(i == data.length - 1){
                            list.push(data[i-2]);
                            list.push(data[i-1]);
                            list.push(data[i]);
                        }
                        break;
                    }
                }
                break;
            }
            callback(list);
        });
    }

    public updateSelfScore(score:number):void{
        for(let i = 0; i < this.friends.length; i++){
            if(this.friends[i].avatarUrl == UserData.avatarUrl){
                this.friends[i].score = score;
                break;
            }
        }
    }
    
    public sortScore(){
        this.friends.sort((a,b)=>{
            if(a.score > b.score)
                return -1;
            if(a.score < b.score)
                return 1;
            return 1;
        });
    }

    public sortLevel(){
        this.friends.sort((a,b)=>{
            if(a.level > b.level)
                return -1;
            if(a.level < b.level)
                return 1;
            return 1;
        });
    }

    public needRefresh(pre:number):boolean{
        console.log(pre)
        console.log(Laya.Browser.now() - pre)
        console.log(this.refreshTime)
        return Laya.Browser.now() - pre > this.refreshTime;
    }
}