import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AutoDestory')
export class AutoDestory extends Component {
    @property saveTime:number=1;

    start() {
        this.autoDes(this.saveTime);
    }

    autoDes(t:number){
        this.scheduleOnce(()=>{
            this.node.destroy();
        },t);
    }
}


