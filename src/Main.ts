import GameConfig from "./GameConfig";
import UserData from "./script/model/UserData";
import FriendData from "./script/model/FriendData";
import { Rank } from "./script/Rank";
import GameOver from "./script/GameOver";
import SurpassOther from "./script/SurpassOther";
import GoingSurpassOther from "./script/GoingSurpassOther";
import ProvocationOther from "./script/ProvocationOther";

class Main {
	private rankView:Rank;
	private gameOver:GameOver;
	private goingSurpassOther:GoingSurpassOther;
	private surpassOther:SurpassOther;
	private provocationOther:ProvocationOther;

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
		FriendData.instance.getFriends();
		let self = this;
		Laya.Browser.window.wx.onMessage(function (message) {
			if(message.url == "res/atlas/rank.atlas"){
				Laya.MiniFileMgr.ziyuFileData[message.url] = message.data;
				Laya.loader.load("res/atlas/rank.atlas",Laya.Handler.create(this,function(){
				}));
			}
			console.log("messageType:",message['type']);
			switch (message['type']) {
				case "initFrendData":
					FriendData.instance.getFriends();
				break;
				case "openFriendRank"://主界面排行榜-好友排行
					self.closeOtherView();
					if(!self.rankView){
						self.rankView = new Rank();
						Laya.stage.addChild(self.rankView);
					}
					self.rankView.openView(message.data);
					break;
				case "closeFriendRank":
					if (self.rankView) {
						self.rankView.closeView();
					}
					break;
				case "upSelfScore"://更新子域分数显示
					FriendData.instance.updateSelfScore(message.data);
					break;
				case "openGameOver"://
					if(!self.gameOver){
						self.gameOver = new GameOver();
						Laya.stage.addChild(self.gameOver);
					}
					self.gameOver.openView(message.data);
					break;
				case "closeGameOver"://
					if (self.gameOver) {
						self.gameOver.closeView();
					}
					break;
				case "openSurpassOther"://
					if(!self.surpassOther){
						self.surpassOther = new SurpassOther();
						Laya.stage.addChild(self.surpassOther);
					}
					self.surpassOther.openView(message.data);
					break;
				case "closeSurpassOther"://
					if (self.surpassOther) {
						self.surpassOther.closeView();
					}
					break;
				case "openGoingSurpassOther"://
					if(!self.goingSurpassOther){
						self.goingSurpassOther = new GoingSurpassOther();
						Laya.stage.addChild(self.goingSurpassOther);
					}
					self.goingSurpassOther.openView(message.data);
					break;
				case "closeGoingSurpassOther"://
					if (self.goingSurpassOther) {
						self.goingSurpassOther.closeView();
					}
					break;
				case "openProvocationOther"://
					if(!self.provocationOther){
						self.provocationOther = new ProvocationOther();
						Laya.stage.addChild(self.provocationOther);
					}
					self.provocationOther.openView(message.data);
					break;
				case "closeProvocationOther"://
					if (self.provocationOther) {
						self.provocationOther.closeView();
					}
					break;
				
			}
		}.bind(this));
	}

	closeOtherView(){
		let self = this;
		if(this.rankView){
			this.rankView.closeView();
		}
		if (self.provocationOther) {
			self.provocationOther.closeView();
		}
		if (self.goingSurpassOther) {
			self.goingSurpassOther.closeView();
		}
		if (self.surpassOther) {
			self.surpassOther.closeView();
		}
		if (self.gameOver) {
			self.gameOver.closeView();
		}
	}
}
//激活启动类
new Main();
