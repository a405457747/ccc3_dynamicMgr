import { _decorator, Button, Component, Node, tween,Sprite, Color, Vec3, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIPanel')
export class UIPanel extends Component {


    @property animalHalfCost:number=0.25;

    private closeBtn:Button;
    private initScale:Vec3;
   // private 单独:number=0.25;

    protected onLoad(): void {
     //   console.log(this.单独);
        this.closeBtn=this.node.getChildByName("closeButton").getComponent(Button);
        this.initScale=this.node.scale;

        this.closeBtn.node.on("click",()=>{
            this.node.active=false;
        },this);
    }

    protected onEnable(): void {
        console.log("onEnable");

        let scale1:Vec3=this.initScale.clone();
        let scale2:Vec3=this.initScale.clone();

         scale1.multiplyScalar(0.5);
         scale2.multiplyScalar(1);

        console.log(scale1+":"+scale2);
    

      let t1=  tween(this.node)
        .call(()=>{
            this.node.scale=scale1;
        })
        .to(this.animalHalfCost,{scale:new Vec3(scale2)})
        .start();

    let t2=  tween(this.node.getComponent(UIOpacity))
    .to(0,{opacity:0})
    .to(this.animalHalfCost,{opacity:255})
    .start();

    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}


