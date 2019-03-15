/**
 * 接口：
 * TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
 */
interface Person {
    name: string
    age: number
}

let tom: Person = {
    name: 'Tom',
    age: 25,
} // 定义的变量的属性必须和接口一致，多一些、少一些都不可以