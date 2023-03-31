# type 和 interface

## type和interface的区别
type和interface都可以用来表示接口，但实际用的时候会有写差异。
### 相同点
- 都可以用于定义对象和函数的形状
```ts
interface Example {
  name: string;
  age: number;
}
interface ExampleFunc {
  (name: string, age: number): void;
}

type Example = {
  name: string;
  age: number;
};
type Example = (name: string, age: number) => void;
```
- 都可以实现继承，也可以相互继承，只不过形式不一样

`type` 是通过 `&` 实现继承，而 `interface` 是通过 `extends` 是实现
```ts
// type
type Type1 = {
  name: string;
};
// interface
interface Interface1 {
  name: string;
}

// type 继承
type Type2 = Type1 & {
  age: number;
};
type Type2 = Interface1 & {
  age: number;
};

// interface继承
interface Interface2 extends Type1 {
  age: number;
}
interface Interface2 extends Interface1 {
  age: number;
}
```

### 不同点

- **不同点1**： `type` 可以为**基本类型**，**联合类型** 或 **元组** 甚至**any等等** 赋值定义别名，`interface` 明显办不到

```ts
type A = string;
type B = string | unknown;
type C = B | [ 1, 2 ,3 ,4]; // 赋值当变量用
let test: C = '';

```
- **不同点2**：`interface` 定义重名了会**合并属性**，`type` 办不到(会报错提醒 重复定义)

```ts
// interface 定义重名了会合并属性,很多库ts源码里面都用到过类似方法作为扩展
interface A {
    name: string;
}

interface A {
    age: number;
}

const aObj: A = {
    name: '', // 必须
    age: 233 // 必须
};
```
