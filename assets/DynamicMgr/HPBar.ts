import { _decorator, Component, Node, Sprite, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HPBar')
export class HPBar extends Component {

    @property
    shadowSpeed:number=0.55;

    private hpBar:Sprite;
    private hpBarShadow:Sprite;
    protected onLoad(): void {
        this.hpBar=this.node.getChildByName("hpBar").getComponent(Sprite);
        this.hpBarShadow=this.node.getChildByName("hpBarShadow").getComponent(Sprite);
    }

    start() {
       // this.test();
    }

    test(){

        tween(this.node)
        .delay(1)
        .call(()=>{
            this.changeHp(60,100);
        })
        .delay(1)
        .call(()=>{
            this.changeHp(30,100);
        })
        .delay(1)
        .call(()=>{
            this.changeHp(90,100,false);
        })
        .delay(1)
        .call(()=>{
            this.changeHp(0,100);
        })
        .start();
    }

    changeHp(curHp:number,maxHp:number,isReduce:boolean=true){
        let f:number=curHp/maxHp;
        this.hpBar.fillRange=f;
        if(isReduce===false){
            this.hpBarShadow.fillRange=f;
        }
    }

    protected update(dt: number): void {
        if((this.hpBarShadow.fillRange-this.hpBar.fillRange)>0){
            this.hpBarShadow.fillRange-=dt*this.shadowSpeed;
        }
    }
}


