import { _decorator, Component, Node ,math, Label, tween} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NumJump')
export class NumJump extends Component {

    @property jumpSpeed:number=1.5;
    @property       isFormat:boolean=false;

    private timer:number;

    private initVal:number;
    private targetVal:number;

    private label:Label;


    protected onLoad(): void {
        this.label=this.getComponent(Label);
        this.init();
    }

    start() {
        this.test();
    }

    test(){
            //this.init(200);
            
            tween(this.node)
            .delay(2)
            .call(()=>{
                this.jumpNum(300);
            })
            .delay(2)
            .call(()=>{
                this.jumpNum(600);
            })
            .delay(2)
            .call(()=>{
                this.jumpNum(500,true);
            })
            .delay(2)
            .call(()=>{
                this.jumpNum(2000);
            })
            .start();
    }

    jumpNum(newVal:number,isReduce:boolean=false){

        if(isReduce){
            this.initVal =newVal;
            this.targetVal=this.initVal;
            this.timer=1;
        }else {
            this.targetVal=newVal;
            this.timer=0;
        }


    }

    init(initVal:number=0,timer:number=1){
        this.initVal=initVal;
        this.targetVal=this.initVal;
        this.timer =timer;

    
    }

    changeLabel(val:number){
        val=Math.floor(val);
        if(this.isFormat===false){
            this.label.string=val.toString();
        }else {
            this.label.string=val.toLocaleString('en-US');
        }
    }

    update(deltaTime: number) {
        this.timer+=deltaTime*this.jumpSpeed;
        let changeVal= math.lerp(this.initVal,this.targetVal,this.timer) 
        this.changeLabel(changeVal);

        if(this.timer>=1){
            this.timer=1;
            this.initVal =this.targetVal;
        }
    }
}


