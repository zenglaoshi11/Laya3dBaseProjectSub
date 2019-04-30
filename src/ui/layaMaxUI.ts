/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
export module ui {
    export class GameOverUI extends Laya.Scene {
		public item0:Laya.Box;
		public avatarImg:Laya.Image;
		public nameLab:Laya.Label;
		public rankLab:Laya.Label;
		public scoreLab:Laya.Label;
		public item1:Laya.Box;
		public item2:Laya.Box;
        public static  uiView:any ={"type":"Scene","props":{"width":630,"height":286},"compId":2,"child":[{"type":"Box","props":{"y":0,"x":0,"width":210,"var":"item0","renderType":"render","name":"item0","height":286},"compId":4,"child":[{"type":"Image","props":{"y":0,"x":0,"width":210,"skin":"rank/bg_myself.png","sizeGrid":"0,2,0,1","name":"myBg","height":276},"compId":29},{"type":"Image","props":{"y":128,"x":122,"width":100,"var":"avatarImg","skin":"rank/img_default_avatar.png","name":"avatarImg","mouseEnabled":false,"height":100,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":128,"x":122,"width":100,"name":"mask","mouseEnabled":false,"height":100,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":10},{"type":"Label","props":{"y":209,"x":105,"var":"nameLab","text":"111","name":"nameLab","mouseEnabled":false,"fontSize":20,"font":"SimHei","color":"#000000","anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":7},{"type":"Label","props":{"y":37,"x":105,"width":76,"var":"rankLab","name":"rankLab","mouseEnabled":false,"height":37,"fontSize":30,"font":"SimHei","color":"#000000","centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":8},{"type":"Label","props":{"y":260,"x":105,"width":104,"var":"scoreLab","text":"111","name":"scoreLab","mouseEnabled":false,"height":45,"fontSize":30,"font":"SimHei","color":"#000000","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":9},{"type":"Script","props":{"runtime":"script/GameOverItem.ts"},"compId":23}]},{"type":"Box","props":{"y":0,"x":210,"width":210,"var":"item1","renderType":"render","name":"item1","height":286},"compId":11,"child":[{"type":"Image","props":{"y":0,"x":0,"width":210,"skin":"rank/bg_myself.png","sizeGrid":"0,2,0,1","name":"myBg","height":286},"compId":31},{"type":"Image","props":{"y":128,"x":122,"width":100,"skin":"rank/img_default_avatar.png","name":"avatarImg","mouseEnabled":false,"height":100,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":12},{"type":"Image","props":{"y":128,"x":122,"width":100,"name":"mask","mouseEnabled":false,"height":100,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":13},{"type":"Label","props":{"y":209,"x":105,"text":"111","name":"nameLab","mouseEnabled":false,"fontSize":20,"font":"SimHei","color":"#000000","anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":14},{"type":"Label","props":{"y":37,"x":105,"width":76,"name":"rankLab","mouseEnabled":false,"height":37,"fontSize":30,"font":"SimHei","color":"#000000","centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":15},{"type":"Label","props":{"y":260,"x":105,"width":104,"text":"111","name":"scoreLab","mouseEnabled":false,"height":45,"fontSize":30,"font":"SimHei","color":"#000000","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":16},{"type":"Script","props":{"runtime":"script/GameOverItem.ts"},"compId":24}]},{"type":"Box","props":{"y":0,"x":420,"width":210,"var":"item2","renderType":"render","name":"item2","height":286},"compId":17,"child":[{"type":"Image","props":{"y":0,"x":0,"width":210,"skin":"rank/bg_myself.png","sizeGrid":"0,2,0,1","name":"myBg","height":276},"compId":30},{"type":"Image","props":{"y":128,"x":122,"width":100,"skin":"rank/img_default_avatar.png","name":"avatarImg","mouseEnabled":false,"height":100,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":18},{"type":"Image","props":{"y":128,"x":122,"width":100,"name":"mask","mouseEnabled":false,"height":100,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":19},{"type":"Label","props":{"y":209,"x":105,"text":"111","name":"nameLab","mouseEnabled":false,"fontSize":20,"font":"SimHei","color":"#000000","anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":20},{"type":"Label","props":{"y":37,"x":105,"width":76,"name":"rankLab","mouseEnabled":false,"height":37,"fontSize":30,"font":"SimHei","color":"#000000","centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":21},{"type":"Label","props":{"y":260,"x":105,"width":104,"text":"111","name":"scoreLab","mouseEnabled":false,"height":45,"fontSize":30,"font":"SimHei","color":"#000000","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":22},{"type":"Script","props":{"runtime":"script/GameOverItem.ts"},"compId":25}]}],"loadList":["rank/bg_myself.png","rank/img_default_avatar.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(GameOverUI.uiView);
        }
    }
    export class GoingSurpassOtherUI extends Laya.Scene {
		public beyondImg:Laya.Image;
		public head0:Laya.Image;
		public head1:Laya.Image;
		public head2:Laya.Image;
		public best:laya.display.Text;
        public static  uiView:any ={"type":"Scene","props":{"width":750,"height":91},"compId":2,"child":[{"type":"Sprite","props":{"y":-1,"x":3,"texture":"rank/bg_gosuperpass.png"},"compId":9},{"type":"Image","props":{"y":30,"x":201,"width":128,"var":"beyondImg","skin":"rank/img_superpass.png","height":31},"compId":11},{"type":"Image","props":{"y":20,"x":350,"width":50,"var":"head0","skin":"rank/img_default_avatar.png","name":"head0","height":50,"centerX":0},"compId":3},{"type":"Image","props":{"y":20,"width":50,"var":"head1","skin":"rank/img_default_avatar.png","name":"head1","height":50,"centerX":58},"compId":4},{"type":"Image","props":{"y":20,"width":50,"var":"head2","skin":"rank/img_default_avatar.png","name":"head2","height":50,"centerX":116},"compId":5},{"type":"Text","props":{"y":33,"x":267,"var":"best","text":"当前无可超越的好友","name":"best","fontSize":24,"font":"SimHei","color":"#ffffff","runtime":"laya.display.Text"},"compId":12}],"loadList":["rank/bg_gosuperpass.png","rank/img_superpass.png","rank/img_default_avatar.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(GoingSurpassOtherUI.uiView);
        }
    }
    export class ProvocationOtherUI extends Laya.Scene {
		public nextHead:Laya.Image;
		public provocationOtherBg:Laya.Image;
		public provocationOtherText:laya.display.Text;
        public static  uiView:any ={"type":"Scene","props":{"width":750,"height":66},"compId":2,"child":[{"type":"Image","props":{"x":56,"width":66,"var":"nextHead","skin":"rank/img_default_avatar.png","name":"nextHead","height":66},"compId":3},{"type":"Image","props":{"y":2,"x":141,"width":440,"var":"provocationOtherBg","skin":"rank/bg_fight.png","sizeGrid":"0,15,0,31","name":"bg","height":62},"compId":4,"child":[{"type":"Text","props":{"y":15,"x":22,"var":"provocationOtherText","valign":"middle","text":"让大家见识一下你的极限！","name":"provocationOtherText","fontSize":26,"color":"#e6e6e6","runtime":"laya.display.Text"},"compId":5}]}],"loadList":["rank/img_default_avatar.png","rank/bg_fight.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(ProvocationOtherUI.uiView);
        }
    }
    export class RankUI extends Laya.Scene {
		public rankList:Laya.List;
		public selfRank:Laya.Image;
        public static  uiView:any ={"type":"Scene","props":{"width":561,"top":0,"right":0,"left":0,"height":828,"bottom":0},"compId":2,"child":[{"type":"List","props":{"y":0,"x":0,"width":560,"var":"rankList","spaceY":18,"repeatX":1,"height":700,"elasticEnabled":false},"compId":4,"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render","height":84},"compId":12,"child":[{"type":"Image","props":{"y":0,"x":0,"width":560,"skin":"rank/bg_item.png","sizeGrid":"8,10,9,10","name":"bg","height":82},"compId":5},{"type":"Image","props":{"y":5,"x":13,"width":52,"skin":"rank/img_rank1.png","name":"rankImg","height":62},"compId":6},{"type":"Label","props":{"y":41,"x":38,"width":76,"valign":"middle","text":"1","strokeColor":"#2c11f1","overflow":"visible","name":"rankLab","height":40,"fontSize":32,"color":"#8d430d","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":10},{"type":"Image","props":{"y":7,"x":80,"width":68,"skin":"rank/img_default_avatar.png","name":"avatarImg","height":68},"compId":7},{"type":"Label","props":{"y":34,"x":162,"width":110,"valign":"middle","overflow":"hidden","name":"nameLab","height":24,"fontSize":24,"color":"#010101","align":"center"},"compId":9},{"type":"Label","props":{"y":41,"x":538,"width":109,"valign":"middle","text":"1","overflow":"visible","name":"scoreLab","height":40,"fontSize":28,"color":"#000000","bold":true,"anchorY":0.5,"anchorX":1,"align":"right"},"compId":11}]}]},{"type":"Image","props":{"y":739,"x":0,"width":560,"visible":false,"var":"selfRank","skin":"rank/bg_myItem.png","sizeGrid":"8,10,9,10","height":82},"compId":13,"child":[{"type":"Image","props":{"y":5,"x":9,"width":61,"skin":"rank/img_rank1.png","name":"rankImg","height":73},"compId":27},{"type":"Label","props":{"y":41,"x":38,"width":76,"valign":"middle","text":"1","strokeColor":"#2c11f1","overflow":"visible","name":"rankLab","height":40,"fontSize":32,"color":"#8d430d","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":28},{"type":"Image","props":{"y":7,"x":80,"width":68,"skin":"rank/img_default_avatar.png","name":"avatarImg","height":68},"compId":29},{"type":"Label","props":{"y":29,"x":164,"width":222,"overflow":"hidden","name":"nameLab","height":24,"fontSize":24,"color":"#010101"},"compId":30},{"type":"Label","props":{"y":41,"x":429,"width":109,"valign":"middle","text":"1","overflow":"visible","name":"scoreLab","height":40,"fontSize":28,"color":"#000000","bold":true,"anchorY":0.5,"anchorX":0,"align":"right"},"compId":31}]}],"loadList":["rank/bg_item.png","rank/img_rank1.png","rank/img_default_avatar.png","rank/bg_myItem.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(RankUI.uiView);
        }
    }
    export class SurpassOtherUI extends Laya.Scene {
		public nextHead:Laya.Image;
        public static  uiView:any ={"type":"Scene","props":{"width":60,"height":60},"compId":2,"child":[{"type":"Image","props":{"width":60,"var":"nextHead","skin":"rank/img_default_avatar.png","name":"nextHead","height":60},"compId":3}],"loadList":["rank/img_default_avatar.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(SurpassOtherUI.uiView);
        }
    }
}