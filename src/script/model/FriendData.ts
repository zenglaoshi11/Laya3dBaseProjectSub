import UserData from "./UserData";

export default class FriendData {
    //一小时刷新一次好友数据
    private preFriendsTime:number = 0;
    private refreshTime:number = 1 * 60 * 60 * 1000;
    //好友数据
    public friends:Array<any> = [];
    // //缓存头像
    // public static avatarCache:any = {};

    public static readonly instance: FriendData = new FriendData();
    private constructor() {
    }

    //好友数据
    public getFriends(caller?:any, callback?:Function):void{
        let self = this;
        if(this.needRefresh(self.preFriendsTime)){
            window["wx"].getFriendCloudStorage({
                keyList: ["score"],
                success: res => {
                    self.preFriendsTime = Laya.Browser.now();
                    self.friends = [];
                    res.data.forEach((v:any)=>{
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
                    });
                    self.sortScore();
                    if(callback)
                        callback.call(caller, self.friends);
                }
            });
        } else{
            if(callback)
                callback.call(caller, self.friends);
        }
    }

    public updateSelfScore(score:number):void{
        for(let i = 0; i < this.friends.length; i++){
            if(this.friends[i].avatarUrl == UserData.avatarUrl){
                this.friends[i].score = score;
                break;
            }
        }
        this.sortScore();
    }
    
    private sortScore(){
        this.friends = this.friends.sort((a,b)=>{
            if(a.score > b.score)
                return -1;
            if(a.score < b.score)
                return 1;
            return 1;
        });
    }

    public needRefresh(pre:number):boolean{
        return Laya.Browser.now() - pre > this.refreshTime;
    }
}