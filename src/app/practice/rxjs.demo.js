/**
 * 本文件内代码段均可使用在线JSBin测试
 * https://jsbin.com/nuhita/5/edit?js,console,output
 */

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
// var timer1 = Rx.Observable.interval(1000).take(10);
// var timer2 = Rx.Observable.interval(2000).take(6);
// var timer3 = Rx.Observable.interval(500).take(10);
// var merged = timer1.merge(timer2, timer3);
// merged.subscribe(x => console.log(x));

// Observable 懒执行
// var source = Rx.Observable.from([1,2,3,4,5]);
// var example = source.map(x => x + 1); // 此处不会执行

// example.subscribe(console.log) // 只有订阅后才会执行

// Observable 渐进式运算
// var source = Rx.Observable.from([1,2,3]);
// var example = source
//               .filter(x => x % 2 === 0)
//               .map(x => x + 1)

// example.subscribe(console.log);

// concatAll：顺序的连接内部Observable，将高阶Observable转化为一阶Observable(打平)
// var clicks = Rx.Observable.fromEvent(document, 'click');
// var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
// var firstOrder = higherOrder.concatAll();
// firstOrder.subscribe(x => console.log(x)) // 对于每一次点击，都将每隔1秒分别输出0-1-2-3，0-1-2-3，……

// concatMap：将每个值映射为 Observable, 然后使用concatAll将所有的 内部 Observables 打平。等同于 map + concatAll
// var clicks = Rx.Observable.fromEvent(document, 'click');
// var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
// result.subscribe(x => console.log(x)); // 和上一段代码等效

// concatMap实例2：连续发送请求
// function getPostData() {
//     return fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json())
// }

// var source = Rx.Observable.fromEvent(document.body, 'click')

// var example = source.concatMap(e => Rx.Observable.from(getPostData()))

// example.subscribe({
//     next: value => console.log(value),
//     error: err => console.log(`Error ${err}`),
//     complete: () => console.log('Finished')
// })


// switch：一旦有新的内部 Observable 出现，通过丢弃前一个，将 高级 Observable 打平
// var clicks = Rx.Observable.fromEvent(document.body, 'click')
// var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(5))
// var switched = higherOrder.switch()
// switched.subscribe(x => console.log(x))

// switchMap: 只要注意一个重点 switchMap 会在下一个 observable 被送出后直接退订前一个未处理完的 observable。等同于map + switch
// var clicks = Rx.Observable.fromEvent(document.body, 'click')
// var example = clicks.switchMap(e => Rx.Observable.interval(1000).take(5))
// example.subscribe(x => console.log(x))  // 和上一段代码等效

// switchMap示例2：连续发送请求，仅最后一个有打印（返回）
// function getPostData() {
//     return fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json())
// }
// var source = Rx.Observable.fromEvent(document.body, 'click')
// var example = source.switchMap(e => Rx.Observable.from(getPostData()))
// example.subscribe({
//     next: value => console.log(value),
//     error: err => console.log(`Error ${err}`),
//     complete: () => console.log('Finished')
// })


// merge: 通过把多个 Observables 的值混合到一个 Observable 中 来将其打平。
// var clicks = Rx.Observable.fromEvent(document, 'click');
// var timer = Rx.Observable.interval(1000);
// var clicksOrTimer = clicks.merge(timer);
// clicksOrTimer.subscribe(x => console.log(x));

// mergeAll: 将高阶 Observable 转换成一阶 Observable ，一阶 Observable 会同时发出在内部 Observables 上发出的所有值
// var clicks = Rx.Observable.fromEvent(document, 'click');
// var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
// var firstOrder = higherOrder.mergeAll();
// firstOrder.subscribe(x => console.log(x));

// mergeMap：将每个值映射成 Observable ，然后使用 mergeAll 打平所有的内部 Observables 。等同于map + merge
// var clicks = Rx.Observable.fromEvent(document, 'click')
// var example = clicks.mergeMap(ev => Rx.Observable.interval(1000))
// example.subscribe(x => console.log(x + 1)) // 和上一段代码等效

// mergeMap示例2：连续发送请求时，将处理每一个请求
// function getPostData() {
//     return fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json())
// }
// var source = Rx.Observable.fromEvent(document.body, 'click')
// var example = source.mergeMap(e => Rx.Observable.from(getPostData()))
// example.subscribe({
//     next: value => console.log(value),
//     error: err => console.log(`Error ${err}`),
//     complete: () => console.log('Finished')
// })


