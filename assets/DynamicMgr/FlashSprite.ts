import { _decorator, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FlashSprite')
export class FlashSprite extends Component {

    sp:Sprite =null;
    is_show:boolean =true;

   @property count:number=5;
   @property cd:number=0.5;

    start() {
        this.sp =this.node.getComponent(Sprite);

        this.schedule(()=>{
            this.is_show=!this.is_show;

            this.sp.enabled=this.is_show;
        },this.cd,this.count,this.cd);
    }
}


