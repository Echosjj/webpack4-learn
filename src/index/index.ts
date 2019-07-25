import Vue from 'vue';
// import $ from 'jquery';
console.log(Vue);
new Vue({
  el: '#app',
  data: {
    msg: 'hello world'
  },
  created(){
    
  }

})
// window.onload = function() {
//   let idDone: boolean = false;
//   let x: [string, number, boolean];
//   x = ['hello', 10, false];
//   x[2] = true;

//   // enum 枚举类型
//   enum Color {Red, Green, Blue}
//   let c: Color = Color.Green;
//   console.log(c);

//   enum Color1 {Red= 1, Green=2, Blue}
//   let c1 : Color1 = Color1.Green;
//   console.log(c1,'212');

//   enum Color2 {Red= 1, Green, Blue}
//   let c2: string = Color2[2];
//   console.log(c2);

//   // Any 
//   let notSure: any = 4;
//   notSure = 'maybe a string instead';
//   notSure = false;

//   let prettySure: Object = 4;
  
//   let list: any[] = [1, true, 'free'];
//   list[1] = 100;

//   //void, 当一个函数木有返回值时，通常函数的返回值类型会被定义为void; void 类型的变量只能赋值null， undefined
//   function warnUser() : void{
//     console.log('this is warnning message');
//   }
  
//   let unusable: void = null;

// // 类型断言
// let str:any = 'this id a string';
// let strLen:number = (<string>str).length;
// let strLen2: number = (str as string).length; 

// // 变量声明： 

// // 对象解构， 属性重命名， 解构用于函数声明



// // 接口interface
// //接口初探：
// interface LabelValue{
//   label: string
// }
// function printLabel(labelObj: LabelValue){
//   console.log(labelObj.label);
// }
// let myObj = {label: '初探接口', size: 10}
// printLabel(myObj);


// //可选属性
// interface squreConfig{
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }
// function createSqure(config: squreConfig): {color: string; area: number} {
//   let  newSqure = {color: 'white', area: 100};
//   if(config.color){
//     newSqure.color = config.color;
//   }
//   if(config.width){
//     newSqure.area = config.width * config.width;
//   }
//   return newSqure ;
// }
// let mysqure = createSqure({color: 'black'})
// console.log(mysqure);


// //只读属性
// interface Point{
//   readonly x: number;
//   readonly y: number;
// }


// //混合类型
// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }

// function getCounter(): Counter{
//   let counter =  <Counter>function(start: number) {};
//   counter.interval = 123;
//   counter.reset = function(){}
//   return counter;
// }

// let counter = getCounter();
// counter(10);
// counter.reset();
// counter.interval = 5.0;


// //接口继承类
// class Control {
//   private state: any;
// }

// interface SelectableControl extends Control{
//   select(): void;
// }

// class Button extends Control {
//   selct() {}
// }

// class TextBox extends Control {

// }


// //类
// class Greeter{
//   greeting: string;
//   constructor(message: string){
//     this.greeting = message;
//   }
//   greet() {
//     return 'hello,' + this.greeting;
//   }
// }
// let greeter = new Greeter('world')


// class Animal {
//   name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   };
//   move(distanceInMeters: number = 0){
//     console.log(`${this.name} moved ${distanceInMeters}`)
//   }
// }

// class Snake extends Animal { //构造函数的派生类必须使用super
//   constructor(name: string){
//     super(name)
//   }
//   move(distanceInMeters = 5){
//     console.log('slithering');
//     super.move(distanceInMeters);
//   }
// }

// class horse extends Animal{
//   constructor(name: string){super(name);}
//   move(distanceInMeters = 45){
//     console.log('galloping...')
//     super.move(distanceInMeters)
//   }
// }

// let snake = new Snake('Sally');
// snake.move();
// let tom: Animal = new horse('Tommy');
// tom.move(32);

// // 公有，私有与受保护的修饰符

// // public修饰符
// class Animal1{
//   public name: string;
//   public constructor(theName: string){
//     this.name = theName;
//   };
//   public move (distanceInMeters: number){
//    console.log(`${this.name} moved ${distanceInMeters}`);
//  }
// }

// class Cat extends Animal1{
//   constructor() {super('katty')}
// }
// let cat1 = new Animal('mime')
// let cat = new Cat();
// console.log(cat1 = cat);

// //private修饰符
// class Animal2{
//   private name: string;
//   constructor(theName: string){
//     this.name = theName
//   } 
// }

// //readonly修饰符

// //参数属性
// class Octpus{
//   readonly numberOfLegs: number = 8;
//   constructor(readonly name: string){}; 
// }

// //存取器
// let passcode = 'secret passcode';
// class Employee{
//   private _fullName: string;
//   get fullName(): string{
//     return this._fullName
//   };
//   set fullName(newName: string){
//     if(passcode && passcode == 'secret passcode'){
//       this._fullName = newName;
//     }else{
//       console.log("Error: has no permission!")
//     }
//   }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if(employee.fullName){
//  console.log(employee.fullName)
// }

// //静态属性
// class Grid{
//   static origin = {x:0, y:0};
//   calculateDistanceFromOrigin(point: {x:number, y: number;}){
//     let xDist = (point.x - Grid.origin.x);
//     let yDist = (point.y - Grid.origin.y);
//     return Math.sqrt(xDist*xDist + yDist*yDist) / this.scale;
//   }
//   constructor(public scale: number){}
// }
// let grid1 = new Grid(1.0);
// let grid2 = new Grid(5.0);
// console.log(grid1.calculateDistanceFromOrigin({x: 10, y:10}))

// //函数: this参数
// interface Card{
//   suit: string,
//   card: number
// }
// interface Deck{
//   suits: string[];
//   cards: number[];
//   createCardPicker(this: Deck): () => Card
// }
// let deck: Deck ={
//   suits: ['hearts', 'speads', 'clubs', 'diamonds'],
//   cards: Array(52),
//   createCardPicker: function(this: Deck){
//     return () => {
//       let pickedCard = Math.floor(Math.random()*52);
//       let pickedSuit = Math.floor(pickedCard /13);
//       return {suit: this.suits[pickedSuit], card: pickedCard % 13}
//     }
//   }
// }
// let result = deck.createCardPicker()();

// console.log('deck'+ result.card)

// //this参数在回调函数里: 利用箭头函数不会捕获this

// //重载
// let suits = ['hearts', 'spead', 'clubs', 'diamonds'];
// function pickCard(x:{suit: string, card: number}[]): number;
// function pickCard(x: number): {suit: string, card: number}
// function pickCard(x:any): any{
//   if(typeof x == 'object'){
//     let pickedCard = Math.floor(Math.random() * x.length);
//     return pickedCard
//   }else if(typeof x == 'number'){
//     let pickedSuit = Math.floor(x/13);
//     return {suit: suits[pickedSuit], card: x%13};
//   }
// }
// let myDeck = [{suit: 'diamonds', card: 2}, {suit: 'spead', card: 10}, {suit: 'hearts', card: 4}];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// console.log('card:'+ pickedCard1.card + 'of' + pickedCard1.suit);
// let pickedCard2 = pickCard(15);
// console.log('card:'+ pickedCard2.card + 'of' + pickedCard2.suit);

// }

//泛型
// function identity(arg: number): number{
//   return arg;
// }
// function identity1(arg: any) :any{
//   return arg;
// }
// // 利用类型变量
// function identity2<T>(arg: T): T{
//   return arg
// }

// let output = identity2<string>('mystring');
// console.log('output', output);

// function identity3<T>(arg: T[]): T[]{
//   console.log(arg.length);
//   return arg;
// }
// function identity4<T>(arg: Array<T>): Array<T>{
//   console.log(arg.length);
//   return arg;
// }

// //泛型接口
// interface GenericIdentityFn<T>{
//   (arg: T): T;
// }
// function identity6<T>(arg: T): T{
//   return arg;
// }
// let myIndentity: GenericIdentityFn<number> = identity;

// //泛型类
// class GeneRicNumber<T>{
//   zeroValue: T;
//   add: (x:T, y: T) => T;
// }
// let myGenericNumber = new GeneRicNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x,y){return x+y};


// //数字枚举
// enum Direction{
//   Up=1,
//   Down,
//   Left,
//   Right
// }
// enum Direction1{
//   Up, 
//   Down, 
//   Left, 
//   Right
// }

// // 字符串枚举
// enum Directions{
//   Up = 'up',
//   Down = 'down',
//   Left = 'left',
//   Right = 'rigth'
// } 

// //异构枚举
// enum BooleanLikeHeterogeneousEnum{
//   No = 0,
//   Yes = 'YES'
// }

// //类型兼容性
// interface Named{
//   name: String;
// }
// let x: Named;
// let y = {name: 'Alice', location: 'Seattle'};
// x=y;

// function greet(n: Named){
//   alert('hello'+ n.name);
// }
// greet(y);

//比较两个函数
//函数参数双向协变
// enum EventType {Mouse, Keybord}
// interface Event{timeStamp: number;}
// interface MouseEvent extends Event{x: number; y: number}
// interface KeyEvent extends Event{keyCode: number}
// function listenEvent (eventType: EventType, handler: (n: Event) => void){

// }
// listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));
// listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));


//泛型
// interface Empty<T>{
  
// }

// //高级类型
// interface Padder{
//   getPaddingString() : string
// }
// class SpaceRepeatingPadder implements Padder{
//   constructor(private numSpaces: number){}
//   getPaddingString() {
//     return Array(this.numSpaces+1).join(" ");
//   }
// }
// class StringPadder implements Padder{
//   constructor(private value: string){}
//   getPaddingString() {
//     return this.value;
//   }
// }

// function getRandomPadder() {
//   return Math.random() < 0.5? new SpaceRepeatingPadder(4): new StringPadder(" ");
// }

// let padder: Padder = getRandomPadder();


// //合并接口
// interface Box{
//   height: number;
//   width: number;
// }

// interface Box{
//   scale: number;
// }
// let box: Box = {height: 5,width: 6, scale: 10}

// // symbols
// // let sym1 = Symbol();
// // let sym2 = Symbol('key');

// // let obj2 = {
// //   [sym2]: "value"
// // }
// // console.log(obj2[sym2]);
// export interface stringValidator{
//   isAcceptable(s: string): boolean;
// }

// export const numberReg = /^[0-9]+$/;
// export class ZipCodeValidator implements stringValidator{
//   isAcceptable(s: string){
//     return s.length === 5 && numberReg.test(s)
//   }
// }




