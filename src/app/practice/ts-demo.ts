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

/**
 * 接口的可选属性:
 * 有时不希望完全匹配一个形状，即可以使用可选属性
 */
interface Police {
    car: boolean
    gun?: boolean
}

let bob: Police = {
    car: true,
}

/**
 * 接口的任意属性：
 */
interface Student {
    name: string
    age: number
    [propName: string]: any 
}

let alice: Student = {
    name: 'Alice',
    age: 12,
    gender: 'female'
}

// 一旦定义了任意属性，那么确定属性和可选属性都必须是它的类型的在子集： 下面会报错

// interface Teacher {
//     name: string
//     age: number
//     [propName: string]: string 
// }

// let ryan: Teacher = {
//     name: 'Ryan',
//     age: 34,
//     gender: 'male'
// }

/**
 * 只读属性————该属性只能在创建时被赋值：
 */
interface Gun {
    readonly id: number
    name: string
    producer: string
}

let ak47: Gun = {
    id: 41,
    name: 'AK47',
    producer: 'RU'
}

// ak47.id = 43 // 不可修改只读属性，会报错