import { _decorator, Component, Node, tween, UIOpacity, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HeadMessage')
export class HeadMessage extends Component {

    
    @property duration:number=1.5;
    @property duration2:number=1.5;

    isOver =false;
    start() {
       let t1= tween()
        .target(this.node)
        .by(this.duration,{position:new Vec3(0,50,0)})
        .call(()=>{
            this.node.addComponent(UIOpacity);
        })
        .by(this.duration2,{position:new Vec3(0,50,0)})
        .destroySelf()
        .start();
    
    }

    protected update(dt: number): void {
        let op=this.node.getComponent(UIOpacity)
        if(op){
            op.opacity-=dt*200;
        }
    }

}


