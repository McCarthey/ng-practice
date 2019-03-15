const Rx = require('rxjs/Rx')
/** 
 * Observable被称为可观察序列，简单来说数据就在Observable中流动，你可以使用各种operator对流处理，例如：
 */
// const ob = Rx.Observable.interval(1000)
// ob.take(3).map(n => n * 2).filter(n => n >= 2).subscribe({
//     next: n => console.log(n),
//     error: err => console.log(err),
//     complete: () => console.log('complete')
// }) 

// /**
//  * 合并序列之Observable.concat() ： 
//  * Observable 顺序的、串行的将所有输入 Observable 的值合并给输出 Observable。
//  */
// // exp1-1
// var timer = Rx.Observable.interval(1000).take(4);
// var sequence = Rx.Observable.range(1, 10);
// var result = timer.concat(sequence);
// result.subscribe(x => console.log(x));

// // exp1-2
// var timer1 = Rx.Observable.interval(1000).take(10)
// var timer2 = Rx.Observable.interval(2000).take(6)
// var timer3 = Rx.Observable.interval(500).take(10)
// var result = timer1.concat(timer2, timer3)
// result.subscribe(x => console.log(x))

/**
 * 合并序列之Observable.merge() ：
 * 所有的输入 Observable 都完成了，输出 Observable 才能完成。该 Observable 发出的项是每个输入 Observable 的结果。 
 */
// exp2-1
var timer1 = Rx.Observable.interval(1000).take(10);
var timer2 = Rx.Observable.interval(2000).take(6);
var timer3 = Rx.Observable.interval(500).take(10);
var merged = timer1.merge(timer2, timer3);
merged.subscribe(x => console.log(x));

