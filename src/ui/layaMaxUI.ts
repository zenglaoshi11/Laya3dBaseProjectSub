/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
export module ui {
    export class FriendRankUI extends Laya.View {
		public rankList:Laya.List;
		public selfRank:Laya.Image;
		public selfRankIcon:Laya.Image;
		public selfHead:Laya.Image;
		public selfSkin:Laya.Image;
		public selfName:Laya.Label;
		public selfRankLbl:Laya.Label;
		public selfScore:Laya.Label;
		public noRank:Laya.Label;
		public anchorS:Laya.Image;
        public static  uiView:any ={"type":"View","props":{"width":561,"top":0,"right":0,"left":0,"height":791,"bottom":0},"compId":2,"child":[{"type":"List","props":{"y":0,"x":0,"width":560,"var":"rankList","spaceY":18,"repeatX":1,"height":688,"elasticEnabled":true},"compId":4,"child":[{"type":"Box","props":{"y":0,"x":0,"renderType":"render"},"compId":12,"child":[{"type":"Image","props":{"width":560,"skin":"rank/kuan-phb-1@2x.png","sizeGrid":"12,13,12,12","name":"bg","height":82},"compId":5,"child":[{"type":"Image","props":{"y":4.5,"x":9,"width":61,"skin":"rank/1@2x.png","name":"img_rank","height":73},"compId":6},{"type":"Image","props":{"y":7,"x":80,"width":68,"name":"img_hand","height":68},"compId":7},{"type":"Image","props":{"y":16,"x":382,"width":46,"skin":"rank/wa_mini@2x@2x.png","name":"img_ski","height":48},"compId":8},{"type":"Label","props":{"y":34,"x":164,"width":110,"overflow":"hidden","name":"lbl_nickName","height":24,"fontSize":24,"color":"#004c4f"},"compId":9},{"type":"Label","props":{"y":41,"x":42,"width":76,"valign":"middle","text":"1","strokeColor":"#2c11f1","stroke":2,"overflow":"visible","name":"lbl_rankIndex","height":40,"fontSize":32,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":10},{"type":"Label","props":{"y":41,"x":429,"width":109,"valign":"middle","text":"1","overflow":"visible","name":"lbl_pass","height":40,"fontSize":36,"color":"#004c4f","anchorY":0.5,"anchorX":0,"align":"right"},"compId":11}]}]}]},{"type":"Image","props":{"y":700,"x":0,"width":560,"visible":false,"var":"selfRank","skin":"rank/kuan-phb-2@2x.png","sizeGrid":"12,13,12,12","height":82},"compId":13,"child":[{"type":"Image","props":{"y":4.5,"x":9,"width":61,"var":"selfRankIcon","skin":"rank/1@2x.png","height":73},"compId":14},{"type":"Image","props":{"y":7,"x":80,"width":68,"var":"selfHead","name":"img_hand","height":68},"compId":15},{"type":"Image","props":{"y":16,"x":383,"width":46,"var":"selfSkin","skin":"rank/wa_mini@2x@2x.png","height":48},"compId":16},{"type":"Label","props":{"y":34,"x":164,"width":110,"var":"selfName","overflow":"hidden","name":"lbl_nickName","height":24,"fontSize":24,"color":"#004c4f"},"compId":17},{"type":"Label","props":{"y":44,"x":40,"width":80,"var":"selfRankLbl","valign":"middle","text":"1","strokeColor":"#2c11f1","stroke":2,"overflow":"visible","name":"lbl_rankIndex","height":40,"fontSize":22,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":18},{"type":"Label","props":{"y":41,"x":429,"width":109,"var":"selfScore","valign":"middle","text":"1","overflow":"visible","name":"lbl_pass","height":40,"fontSize":36,"color":"#004c4f","anchorY":0.5,"anchorX":0,"align":"right"},"compId":19},{"type":"Label","props":{"y":46,"x":42,"width":76,"visible":false,"var":"noRank","valign":"middle","text":"100+","strokeColor":"#2c11f1","stroke":2,"overflow":"visible","name":"noRank","height":40,"fontSize":30,"color":"#ffffff","bold":false,"anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":20}]},{"type":"Image","props":{"width":561,"var":"anchorS","height":791},"compId":3}],"loadList":["rank/kuan-phb-1@2x.png","rank/1@2x.png","rank/wa_mini@2x@2x.png","rank/kuan-phb-2@2x.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(FriendRankUI.uiView);
        }
    }
}