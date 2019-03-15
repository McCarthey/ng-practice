const Rx = require('rxjs/Rx')
/** 
 * Observable被称为可观察序列，简单来说数据就在Observable中流动，你可以使用各种operator对流处理，例如：
 */
const ob = Rx.Observable.interval(1000)
ob.take(3).map(n => n * 2).filter(n => n >= 2).subscribe({
    next: n => console.log(n),
    error: err => console.log(err),
    complete: () => console.log('complete')
}) // 只有next是必须的，其他两个方法是可选的，因此等同于.subscribe(n => console.log(n))
