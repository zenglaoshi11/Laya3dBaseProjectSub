export default class CommonData{
    //一小时刷新一次好友数据
    private static refreshTime:number = 1 * 60 * 60 * 1000;
    /**我自己的头像url */
    public static avatarUrl:string = "";
	public static nickName:string = "";
	public static avatarUrlGroup:string = "";
	public static nickNameGroup:string = "";
    //好友数据
    public static preFriendsTime:number = 0;
    public static friends:Array<any> = [];
    //缓存头像
    public static avatarCache:any = {};
    
    //好友数据
    public static GetFriends(caller:any, callback:Function):void{
        if(this.NeedRefresh(CommonData.preFriendsTime)){
            window["wx"].getFriendCloudStorage({
                keyList: ["level","viewId"],
                success: res => {
                    CommonData.preFriendsTime = Laya.Browser.now();
                    CommonData.friends = [];
                    res.data.forEach((v:any)=>{
                        if(v.KVDataList.length > 0){
                            let _score = 0;
                            let _skinId = 3001;
                            for(let i = 0; i < v.KVDataList.length; i++){
                                if(v.KVDataList[i].key == "level"){
                                    _score = parseInt(v.KVDataList[i].value);
                                }
                                // else if(v.KVDataList[i].key == "viewId"){
                                //     _skinId = v.KVDataList[i].value;
                                // }
                            }
                            CommonData.friends.push({
                                nickname:v.nickname,
                                avatarUrl:v.avatarUrl,
                                score:_score,
                                // score:_score>0 ? _score : 1,
                                viewId: _skinId
                            });
                            if(!CommonData.avatarCache[v.avatarUrl] && _score > 1){
                                let txt = new Laya.Texture();
                                txt.load(v.avatarUrl.replace("/132","/46"));
                                CommonData.avatarCache[v.avatarUrl] = txt;
                            }
                        }
                    });
                    this.SortScore(CommonData.friends);
                    if(callback)
                        callback.call(caller, CommonData.friends);
                }
            });
        } else{
            if(callback)
                callback.call(caller, CommonData.friends);
        }
    }

    public static NeedRefresh(pre:number):boolean{
        return Laya.Browser.now() - pre > CommonData.refreshTime;
    }

    public static UpdateSelfScore(score:number):void{
        for(let i = 0; i < CommonData.friends.length; i++){
            if(CommonData.friends[i].avatarUrl == CommonData.avatarUrl){
                console.log("刷新玩家数据:" + score);
                CommonData.friends[i].score = score;
                break;
            }
        }
        this.SortScore(CommonData.friends);
    }

    private static SortScore(data:any[]){
        data = data.sort((a,b)=>{
            if(a.score > b.score)
                return -1;
            if(a.score < b.score)
                return 1;
            return 1;
        });
    }
}