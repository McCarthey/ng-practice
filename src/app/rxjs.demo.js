const Rx = require('rxjs/Rx')
/** 
 * Observable被称为可观察序列，简单来说数据就在Observable中流动，你可以使用各种operator对流处理，例如：
 */
const ob = Rx.Observable.interval(1000)
ob.take(3).map(n => n * 2).filter(n => n >= 2).subscribe({
    next: n => console.log(n),
    error: err => console.log(err),
    complete: () => console.log('complete')
}) 
// subscribe中包含三个函数的参数对象被称为observer（观察者），表示的是对序列结果的处理方式。
// next表示数据正常流动，没有出现异常；error表示流中出错，可能是运行出错，http报错等等；complete表示流结束，不再发射新的数据。
// 其中只有next是必须的，其他两个方法是可选的，因此等同于.subscribe(n => console.log(n))

/**
 * 创建可观察序列的几种方式
 */
Observable.of(...args) // Observable.of()可以将普通Javascript数据转为可观察序列。
Observable.fromPromise(promise) // 将promise转换为Observable
Observable.fromEvent(element, eventName) // 从DOM是事件创建序列，例如Observable.fromEvent($input, 'click')
Observable.ajax(url | AjaxRequest) // 发送http请求


