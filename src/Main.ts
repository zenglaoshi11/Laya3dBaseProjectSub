import GameConfig from "./GameConfig";
import UserData from "./script/model/UserData";
import FriendData from "./script/model/FriendData";
import { FriendRankView } from "./script/rank/FriendRankView";
class Main {
	private friendRank:FriendRankView;

	constructor() {
		Laya.isWXOpenDataContext = true;
		Laya.isWXPosMsg = true;
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = GameConfig.scaleMode;
		Laya.stage.screenMode = GameConfig.screenMode;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError = true;

		this.onConfigLoaded();
		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		// Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

	onVersionLoaded(): void {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded(): void {
		if (!Laya.Browser.onMiniGame) return;
		window["wx"].getUserInfo({
			openIdList: ['selfOpenId'],
			lang: 'zh_CN',
			success: (res: any) => {
				let data = res.data;
				if (data[0].openId == "selfOpenId") {
					UserData.avatarUrl = data[0].avatarUrl;
					UserData.nickName = data[0].nickName;
				}
			}
		});
		
		let self = this;
		Laya.Browser.window.wx.onMessage(function (message) {
			if(message.url == "res/atlas/rank.atlas"){
				Laya.loader.load("res/atlas/rank.atlas");
			}
			switch (message['type']) {
				case "openFriendRank"://主界面排行榜-好友排行
					this.closeOtherView();
					this.friendRank = new FriendRankView();
					Laya.stage.addChild(this.friendRank);
					FriendData.instance.getFriends(this, function(){
						self.friendRank.drawRankList(FriendData.instance.friends);
					});
					break;
				case "closeFriendRank"://主界面排行榜UI关闭
					if (this.friendRank) {
						this.friendRank.close();
						this.friendRank = null;
					}
					break;
				case "upSelfScore"://更新子域分数显示
					FriendData.instance.updateSelfScore(message.data);
				break;
			}
		}.bind(this));
	}
}
//激活启动类
new Main();
