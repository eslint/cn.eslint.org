---
title: Code Conventions
layout: doc
---

# Code Conventions

# 代码 约定

Programming language style guides are important for the long-term maintainability of software. This guide is based on the [Code Conventions for the Java Programming Language](http://java.sun.com/docs/codeconv/) and [Douglas Crockford's Code Conventions for the JavaScript Programming Language](http://javascript.crockford.com/code.html). Modifications have been made due to my personal experience and preferences.

编程语言的格式指导对于软件的长期可维护性至关重要，这个指导是基于 [java编程语言代码规范](http://java.sun.com/docs/codeconv/) 和 [Douglas Crockford所写的 javascript编程语言代码规范](http://javascript.crockford.com/code.html). 并根据我的经验和个人风格进行了修改。


## File Format

## 文件 格式

Each file has this same basic format:

每个文件都要有一个相同的 基础格式:

```js
/**
 * @fileoverview Description of the file
 * @author Your Name
 * @copyright 2016 Your Name. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// require() statements

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

// private methods/data

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

// exported objects/methods
module.exports = {

};
```

The `@author` field gives you credit for having created the file. The `@copyright` field indicates that you are the copyright holder for the file.

`@author` 区域填写创建文件的作者，`@copyright`区域说明了你拥有这个文件的版权

Your submission may touch other parts of the ESLint code that you did not write. In that case, you are welcome to add a copyright notice to the top of the file if you have done any amount of significant work on the file (we leave it up to you to decide what "significant" means - if you aren't sure, just ask). You should never change the `@author` field, but you can add another `@copyright` field on top of the existing ones, such as:

你有可能提交并不是你写的ESLint代码。这种情况下，你只需在头部增加一个版权标注就可以了，前提是你认为你的修改是重要的（你可以自己把握‘重要’的意义，如果你不确定，尽管来问）。你不能修改`@author`这个区域，但是你可以在原有的`@copyright`前 再增加一个,如下：

```js
/**
 * @fileoverview Description of the file
 * @author Author's Name
 * @copyright 2015 Your Name. All rights reserved.
 * @copyright 2014 Author's Name. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
```

## Indentation

## 缩进

Each indentation level is made up of four spaces. Do not use tabs.

每个缩进级别由4个空格组成，而不是使用tabs.

    // Good
    if (true) {
        doSomething();
    }

## Primitive Literals

## 基本数据类型

Strings should always use double quotes (never single quotes) and should always appear on a single line. Never use a slash to create a new line in a string.

字符串 应该保持使用算引号（坚决不要单引号）并且保持在同一行中，坚决不要把一个字符串截断成新的一行。

    // Good
    var name = "Nicholas";

    // Bad: Single quotes
    var name = 'Nicholas';

    // Bad: Wrapping to second line
    var longString = "Here's the story, of a man \
    named Brady.";

Numbers should be written as decimal integers, e-notation integers, hexadecimal integers or floating-point decimals with at least one digit before and one digit after the decimal point. Never use octal literals.

数字类型应该书写成 十进制整数，科学计数整数，16进制整数或是在小数点前后都至少有一个数的浮点小数，不要使用八进制数



    // Good
    var count = 10;

    // Good
    var price = 10.0;
    var price = 10.00;

    // Good
    var num = 0xA2;

    // Good
    var num = 1e23;

    // Bad: Hanging decimal point
    var price = 10.;

    // Bad: Leading decimal point
    var price = .1;

    // Bad: Octal (base 8) is deprecated
    var num = 010;

The special value `null` should be used only in the following situations:

特殊值 `null` 应该仅在以下情况使用:

1. To initialize a variable that may later be assign an object value.
1. 为了初始化一个后续将赋予一个对象值的变量.
1. To compare against an initialized variable that may or may not have an object value.
1. 要比较一个初始化变量是不是具有一个对象类型的值
1. To pass into a function where an object is expected.
1. 为了给函数传递一个预期存在的对象类型参数
1. To return from a function where an object is expected.
1. 为了从函数返回一个预期存在的对象类型值

Examples:

例如:

    // Good
    var person = null;

    // Good
    function getPerson() {
        if (condition) {
            return new Person("Nicholas");
        } else {
            return null;
        }
    }

    // Good
    var person = getPerson();
    if (person !== null){
        doSomething();
    }

    // Bad: Testing against uninitialized variable
    var person;
    if (person != null){
        doSomething();
    }

    // Bad: Testing to see if an argument was passed
    function doSomething(arg1, arg2, arg3, arg4){
        if (arg4 != null){
            doSomethingElse();
        }
    }

Never use the special value `undefined`. To see if a variable has been defined, use the `typeof` operator:

不要是用特殊值 `undefined`。如果想查看一个值是不是被定义，可以使用 `typeof` 操作符

    // Good
    if (typeof variable == "undefined") {
        // do something
    }

    // Bad: Using undefined literal
    if (variable == undefined) {
        // do something
    }

## Operator Spacing

## 操作符 间距

Operators with two operands must be preceded and followed by a single space to make the expression clear. Operators include assignments and logical operators.

双目操作符 必须在 前后分别有1个空格使得表达式清晰。操作符包含赋值运算符和逻辑操作符

    // Good
    var found = (values[i] === item);

    // Good
    if (found && (count > 10)) {
        doSomething();
    }

    // Good
    for (i = 0; i < count; i++) {
        process(i);
    }

    // Bad: Missing spaces
    var found = (values[i]===item);

    // Bad: Missing spaces
    if (found&&(count>10)) {
        doSomething();
    }

    // Bad: Missing spaces
    for (i=0; i<count; i++) {
        process(i);
    }

## Parentheses Spacing

## 括号 间距

When parentheses are used, there should be no white space immediately after the opening paren or immediately before the closing paren.

当使用括号的时候，在开括号后或闭括号前 不应该有空格。

    // Good
    var found = (values[i] === item);

    // Good
    if (found && (count > 10)) {
        doSomething();
    }

    // Good
    for (i = 0; i < count; i++) {
        process(i);
    }

    // Bad: Extra space after opening paren
    var found = ( values[i] === item);

    // Bad: Extra space before closing paren
    if (found && (count > 10) ) {
        doSomething();
    }

    // Bad: Extra space around argument
    for (i = 0; i < count; i++) {
        process( i );
    }

## Object Literals

## 对象数据类型

Object literals should have the following format:

对象数据类型应该具有以下规范：

* The opening brace should be on the same line as the containing statement.
* 左大括号应该在对象声明的同一行
* Each property-value pair should be indented one level with the first property appearing on the next line after the opening brace.
* 每一个键值对应该保持一级缩进，第一个属性应该被写在左大括号后的再另起一行。
* Each property-value pair should have an unquoted property name, followed by a colon (no space preceding it), followed by the value.
* 每一个键值对的属性不带引号，跟随一个冒号（中间没有空格），再后边接键值对的值。
* If the value is a function, it should wrap under the property name and should have a blank line both before and after the function.
* 如果值是函数类型，它应该包含在给该属性名下，并且在上下都留有一个空行
* Additional empty lines may be inserted to group related properties or otherwise improve readability.
* 为有联系的属性或其他提高可读性的目的 增加额外的空行分割
* The closing brace should be on a separate line.
* 右大括号在独立的一行

Examples:

例如:

    // Good
    var object = {

        key1: value1,
        key2: value2,

        func: function() {
            // do something
        },

        key3: value3
    };

    // Bad: Improper indentation
    var object = {
                    key1: value1,
                    key2: value2
                };

    // Bad: Missing blank lines around function
    var object = {

        key1: value1,
        key2: value2,
        func: function() {
            // do something
        },
        key3: value3
    };

When an object literal is passed to a function, the opening brace should be on the same line as if the value is a variable. All other formatting rules from above still apply.

当对象变量被传进函数时， 左大括号应该与函数同一行 剩下其他的规范规则 沿用上面的规则。

    // Good
    doSomething({
        key1: value1,
        key2: value2
    });

    // Bad: All on one line
    doSomething({ key1: value1, key2: value2 });

## Comments

## 注释

Make frequent use of comments to aid others in understanding your code. Use comments when:

多用注释帮助别人理解你的代码。在以下情况使用：

* Code is difficult to understand.
* 代码难以理解
* The code might be mistaken for an error.
* 代码可能被误解为错误代码
* Browser-specific code is necessary but not obvious.
* 为浏览器兼容而写的必要但不易被察觉的代码
* Documentation generation is necessary for an object, method, or property (use appropriate documentation comments).
* 为一个对象、方法、属性生成一个文档是必要的（使用一个恰当文件注释）


### Single-Line Comments

### 单行注释

Single-line comments should be used to documentation one line of code or a group of related lines of code. A single-line comment may be used in three ways:

单行注释应该适用于文件的一行或一组多行间有联系的代码，单行注释使用于以下三个途径：

1. On a separate line, describing the code beneath it.
1. 独占一行，解释下一行代码
1. At the end of a line, describing the code before it.
1. 在代码行尾部，解释前面的代码
1. On multiple lines, to comment out sections of code.
1. 注释大段代码

When on a separate line, a single-line comment should be at the same indentation level as the code it describes and be preceded by a single line. Never use multiple single-line comments on consecutive lines, use a multi-line comment instead.

在单独一行中，单行代码应该与 解释的代码有同样的缩进 并在该代码之上。不要用多个单行注释 跨行注释，应该用多行注释符替代

    // Good
    if (condition){

        // if you made it here, then all security checks passed
        allowed();
    }

    // Bad: No empty line preceding comment
    if (condition){
        // if you made it here, then all security checks passed
        allowed();
    }

    // Bad: Wrong indentation
    if (condition){

    // if you made it here, then all security checks passed
        allowed();
    }

    // Bad: This should be a multi-line comment
    // This next piece of code is quite difficult, so let me explain.
    // What you want to do is determine if the condition is true
    // and only then allow the user in. The condition is calculated
    // from several different functions and may change during the
    // lifetime of the session.
    if (condition){
        // if you made it here, then all security checks passed
        allowed();
    }

For single-line comments at the end of a line, ensure there is at least one indentation level between the end of the code and the beginning of the comment:

在行尾的单行注释，确保至少有一个缩进在代码和注释之间

    // Good
    var result = something + somethingElse;    // somethingElse will never be null

    // Bad: Not enough space between code and comment
    var result = something + somethingElse;// somethingElse will never be null

The only acceptable time to have multiple single-line comments on successive lines is to comment out large sections of code. Multi-line comments should not be used for this purpose.

多行使用单行注释的情况只能在大段注释代码的时候可以被接受，多行注释不能在这种情况下被使用

    // Good
    // if (condition){
    //    doSomething();
    //    thenDoSomethingElse();
    // }

### Multi-Line Comments

### 多行注释

Multi-line comments should be used to document code that requires more explanation. Each multi-line comment should have at least three lines:

多行注释应该在需要更详细解释的时候被使用，每个多行注释至少应注意以下三点

1. The first line contains only the `/*` comment opening. No further text is allowed on this line.
1. 注释的第一行仅包含`/*`，其他注释文字描述等不能书写
1. The next line(s) have a `*` aligned with the `*` in the first line. Text is allowed on these lines.
1. 接下来行的`*`要对齐第一行的`*`，注释文字允许书写在这些行中
1. The last line has the `*/` comment opening aligned with the preceding lines. No other text is allowed on this line.
1. 最后一行 以`*/`单独结束注释，其他注释文字描述等不能书写。

The first line of multi-comments should be indented to the same level as the code it describes. Each subsequent line should have the same indentation plus one space (for proper alignment of the `*` characters). Each multi-line comment should be preceded by one empty line.

多行注释第一行应该和被描述的代码保持同样的缩进。接下来行都应该空一格（为了对齐`*`字符）。每个多行注释前应该用一个空行分隔

    // Good
    if (condition){

        /*
         * if you made it here,
         * then all security checks passed
         */
        allowed();
    }

    // Bad: No empty line preceding comment
    if (condition){
        /*
         * if you made it here,
         * then all security checks passed
         */
        allowed();
    }

    // Bad: Missing a space after asterisk
    if (condition){

        /*
         *if you made it here,
         *then all security checks passed
         */
        allowed();
    }

    // Bad: Wrong indentation
    if (condition){

    /*
     * if you made it here,
     * then all security checks passed
     */
        allowed();
    }

    // Bad: Don't use multi-line comments for trailing comments
    var result = something + somethingElse;    /*somethingElse will never be null*/

### Comment Annotations

### 注释 批注

Comments may be used to annotate pieces of code with additional information. These annotations take the form of a single word followed by a colon. The acceptable annotations are:

注释有可能被使用去注释一段代码的额外信息，这些注释使用一个单词后跟着冒号的形式。可被接受的注释包含：

* `TODO` - indicates that the code is not yet complete. Information about the next steps should be included.
* `TODO` - 说明代码还没有完成，提供了接下来的计划的信息
* `HACK` - indicates that the code is using a shortcut. Information about why the hack is being used should be included. This may also indicate that it would be nice to come up with a better way to solve the problem.
* `HACK` - 说明该代码正使用一些便捷方法，提供了为什么这个方法的信息。也有可能被使用以表达 该问题被一个更好的办法解决了
* `XXX` - indicates that the code is problematic and should be fixed as soon as possible.
* `XXX` - 说明该代码有问题，应该被尽可能快的解决掉
* `FIXME` - indicates that the code is problematic and should be fixed soon. Less important than `XXX`.
* `FIXME` - 说明该代码有问题，需要尽快解决，但重要程度不及`XXX`.
* `REVIEW` - indicates that the code needs to be reviewed for potential changes.
* `REVIEW` - 说明该代码因为潜在的变动需要被代码复查.

These annotations may be used with either single-line or multi-line comments and should follow the same formatting rules as the general comment type. Examples:

这些批注可能出现在任何一个单行或多行注释中，应该保持同样的格式规范在全局注释中，例如：

    // Good
    // TODO: I'd like to find a way to make this faster
    doSomething();

    // Good
    /*
     * HACK: Have to do this for IE. I plan on revisiting in
     * the future when I have more time. This probably should
     * get replaced before v1.2.
     */
    if (document.all) {
        doSomething();
    }

    // Good
    // REVIEW: Is there a better way to do this?
    if (document.all) {
        doSomething();
    }

    // Bad: Annotation spacing is incorrect
    // TODO : I'd like to find a way to make this faster
    doSomething();

    // Bad: Comment should be at the same indentation as code
        // REVIEW: Is there a better way to do this?
    if (document.all) {
        doSomething();
    }


## Variable Declarations

## 变量声明

All variables should be declared before they are used. Variable declarations should take place at the beginning of a function using a single `var` statement with one variable per line. All lines after the first should be indented one level so the variable names line up. Variables should be initialized when declared if applicable and the equals operator should be at a consistent indentation level. Initialized variables should come first followed by uninitialized variables.

所有的变量在使用前都要被声明，变量声明应该发生在函数的开始，并使用一个`var`声明，每行一个变量。第一行后的每行应保持同一个缩进排列。声明变量的时候要进行初始化。尽可能将赋值保持在同一个缩进水平。先书写初始化的变量，再写为初始化的变量声明

    // Good
    var count   = 10,
        name    = "Nicholas",
        found   = false,
        empty;

    // Bad: Improper initialization alignment
    var count = 10,
        name = "Nicholas",
        found= false,
        empty;

    // Bad: Incorrect indentation
    var count   = 10,
    name    = "Nicholas",
    found   = false,
    empty;

    // Bad: Multiple declarations on one line
    var count   = 10, name = "Nicholas",
        found   = false, empty;

    // Bad: Uninitialized variables first
    var empty,
        count   = 10,
        name    = "Nicholas",
        found   = false;

    // Bad: Multiple var statements
    var count   = 10,
        name    = "Nicholas";

    var found   = false,
        empty;

Always declare variables. Implied globals should not be used.

保持变量声明，全局变量不应该被使用

## Function Declarations

## 函数声明

Functions should be declared before they are used. When a function is not a method (not attached to an object) it should be defined using function declaration format (not function expression format nor using the `Function` constructor). There should be no space between the function name and the opening parentheses. There should be one space between the closing parentheses and the right brace. The right brace should be on the same line as the `function` keyword. There should be no space after the opening parentheses or before the closing parentheses. Named arguments should have a space after the comma but not before it. The function body should be indented one level.

函数应该在使用前被声明，当一个函数不是一个方法（不赋值给一个对象）应该使用函数声明格式去定义（非函数表达式，也不会调用`Function`构造器）。在函数名和左括号之间不应该有空格。在右括号和左大括号间需要有一个空格。而且左大括号需要同关键字`function` 同一行。 在左括号后边和右括号前边不应该加空格，参数名字的逗号后边需要有个空格，函数体内的代码需要保持一个缩进级别



    // Good
    function doSomething(arg1, arg2) {
        return arg1 + arg2;
    }

    // Bad: Improper spacing of first line
    function doSomething (arg1, arg2){
        return arg1 + arg2;
    }

    // Bad: Function expression
    var doSomething = function(arg1, arg2) {
        return arg1 + arg2;
    };

    // Bad: Left brace on wrong line
    function doSomething(arg1, arg2)
    {
        return arg1 + arg2;
    }

    // Bad: Using Function constructor
    var doSomething = new Function("arg1", "arg2", "return arg1 + arg2");

Functions declared inside of other functions should be declared immediately after the `var` statement.

在其他函数中声明的函数应该在`var`声明后马上被声明

    // Good
    function outer() {

        var count   = 10,
            name    = "Nicholas",
            found   = false,
            empty;

        function inner() {
            // code
        }

        // code that uses inner()
    }

    // Bad: Inner function declared before variables
    function outer() {

        function inner() {
            // code
        }

        var count   = 10,
            name    = "Nicholas",
            found   = false,
            empty;

        // code that uses inner()
    }

Anonymous functions may be used for assignment of object methods or as arguments to other functions. There should be no space between the `function` keyword and the opening parentheses.

匿名函数有可能被使用在分别对象的方法或作为另外函数的参数，在`function`和开括号间不应该有空格

    // Good
    object.method = function() {
        // code
    };

    // Bad: Incorrect spacing
    object.method = function () {
        // code
    };

Immediately-invoked functions should surround the entire function call with parentheses.

立即执行的函数应该整体被括号包裹

    // Good
    var value = (function() {

        // function body

        return {
            message: "Hi"
        }
    }());

    // Bad: No parentheses around function call
    var value = function() {

        // function body

        return {
            message: "Hi"
        }
    }();

    // Bad: Improper parentheses placement
    var value = (function() {

        // function body

        return {
            message: "Hi"
        }
    })();

## Naming

Care should be taken to name variables and functions properly. Names should be limited to alphanumeric characters and, in some cases, the underscore character. Do not use the dollar sign (`$`) or back slash (`\`) characters in any names.

应该注意命名变量和函数的正确性，命名应该使用有限的数字或字母或是下划线。不要使用美元符号 (`$`) 或反斜杠(`\`)在你的命名中。

Variable names should be formatted in camel case with the first letter being lowercase and the first letter of each subsequent word being uppercase. The first word of a variable name should be a noun (not a verb) to avoid confusion with functions. Do not use underscore for variable names.

变量命名应该遵守驼峰式规则，首字母小写，后续的每个词的首字母大写。变量命名时的首个词应该是名词（不能是动词），避免与函数名混乱，不要使用下划线作为连接。

    // Good
    var accountNumber = "8401-1";

    // Bad: Begins with uppercase letter
    var AccountNumber = "8401-1";

    // Bad: Begins with verb
    var getAccountNumber = "8401-1";

    // Bad: Uses underscore
    var account_number = "8401-1";

Function names should also be formatted using camel case. The first word of a function name should be a verb (not a noun) to avoid confusion with variables. Do not use underscore for function names.

函数命名应该遵守驼峰式命名规则，第一个词应该是一个动词（非名词），避免与变量混淆。不要使用下划线作为连接

    // Good
    function doSomething() {
        // code
    }

    // Bad: Begins with uppercase letter
    function DoSomething() {
        // code
    }

    // Bad: Begins with noun
    function car() {
        // code
    }

    // Bad: Uses underscores
    function do_something() {
        // code
    }

Constructor functions, those functions used with the `new` operator to create new objects, should be formatted in camel case but must begin with an uppercase letter. Constructor function names should begin with a non-verb because `new` is the action of creating an object instance.

构建函数，使用`new` 创建一个新的对象，应该遵守驼峰式并且首字母大写。构建函数命名的首词不能是动词，因为`new` 是一个创建对象实例的行为。

    // Good
    function MyObject() {
        // code
    }

    // Bad: Begins with lowercase letter
    function myObject() {
        // code
    }

    // Bad: Uses underscores
    function My_Object() {
        // code
    }

    // Bad: Begins with verb
    function getMyObject() {
        // code
    }

Variables that act as constants (values that won't be changed) should be formatted using all uppercase letters with words separated by a single underscore.

常数变量（变量内容不改变）应该全部使用大写字母，用下划线分割

    // Good
    var TOTAL_COUNT = 10;

    // Bad: Camel case
    var totalCount = 10;

    // Bad: Mixed case
    var total_COUNT = 10;

Object properties follow the same naming conventions as variables. Object methods follow the same naming conventions as functions. If a property or method is meant to be private, then it should be prefixed with an underscore character.

对象的属性应该遵循变量的规定。对象的方法应该遵循方法的规定。如果方法或变量是私有的需要在命名前加下划线前缀

    // Good
    var object = {
        _count: 10,

        _getCount: function () {
            return this._count;
        }
    };

## Strict Mode

## 严格模式

Strict mode should be used only inside of functions and never globally.

严格模式应该被使用在函数内部而不是全局使用

    // Bad: Global strict mode
    "use strict";

    function doSomething() {
        // code
    }

    // Good
    function doSomething() {
        "use strict";

        // code
    }

If you want strict mode to apply to multiple functions without needing to write `"use strict"` multiple times, use immediate function invocation:

如果你想对多个函数应用严格模式，你不需要写`"use strict"`多次，使用一个立即执行函数调用。

    // Good
    (function() {
        "use strict";

        function doSomething() {
            // code
        }

        function doSomethingElse() {
            // code
        }

    }());

## Assignments

## 赋值

When assigning a value to a variable, use parentheses around a right-side expression that contains a comparison.

把一个比较的结果值赋予一个变量时，需要用括号把赋值表达式右边括起来。

    // Good
    var flag = (i < count);

    // Bad: Missing parentheses
    var flag = i < count;

## Equality Operators

## 相等比较

Use `===` and `!==` instead of `==` and `!=`. This avoids type coercion errors.

使用 `===` 和 `!==` 替代 `==` 和 `!=`. 这将避免强制类型转换错误

    // Good
    var same = (a === b);

    // Bad: Using ==
    var same = (a == b);

## Ternary Operator

## 三目运算符 

The ternary operator should be used only for assigning values conditionally and never as a shortcut for an `if` statement.

三目运算符仅在条件选择赋值时使用，不要作为`if`的捷径使用。

    // Good
    var value = condition ? value1 : value2;

    // Bad: no assignment, should be an if statement
    condition ? doSomething() : doSomethingElse();

## Statements

## 语句

### Simple Statements

### 简易语句

Each line should contain at most one statement. All simple statements should end with a semicolon (`;`).

每一行最多只包含一个语句，所有的简单语句应该使用分号(`;`)结束

    // Good
    count++;
    a = b;

    // Bad: Multiple statements on one line
    count++; a = b;

### return Statement

### 返回语句

A return statement with a value should not use parentheses unless they make the return value more obvious in some way. Example:

一个带值返回语句不应该使用括号，除非返回值明显符合以下情况，例如：

    return;

    return collection.size();

    return (size > 0 ? size : defaultSize);

### Compound Statements

### 复合语句

Compound statements are lists of statements enclosed inside of braces.

复合语句是用括号闭合的语句列表

* The enclosed statements should be indented one more level than the compound statement.
* 被闭合的语句应该保持同样的缩进级别
* The opening brace should be at the end of the line that begins the compound statement; the closing brace should begin a line and be indented to the beginning of the compound statement.
* 开括号应该在复合语句的第一行；闭括号应该独立一行并于复合语句开始保持同样缩进
* Braces are used around all statements, even single statements, when they are part of a control structure, such as a `if` or `for` statement. This makes it easier to add statements without accidentally introducing bugs due to forgetting to add braces.
* 当语句是控制结构体一部分，例如`if` or `for`语句时，哪怕语句再简单，括号也要完整包括。
* The statement beginning keyword, such as `if`, should be followed by one space and the opening brace should be preceded by a space.
* 语句的开始关键词，例如`if`，应该在左括号前 和 左大括号与右括号间留有一个空格

### if Statement

### if 语句

The `if` class of statements should have the following form:

`if`类型的语句应该保持如下的类型：

    if (condition) {
        statements
    }

    if (condition) {
        statements
    } else {
        statements
    }

    if (condition) {
        statements
    } else if (condition) {
        statements
    } else {
        statements
    }

It is never permissible to omit the braces in any part of an `if` statement.

绝不允许在 `if`语句中忽略使用括号

    // Good
    if (condition) {
        doSomething();
    }

    // Bad: Improper spacing
    if(condition){
        doSomething();
    }

    // Bad: Missing braces
    if (condition)
        doSomething();

    // Bad: All on one line
    if (condition) { doSomething(); }

    // Bad: All on one line without braces
    if (condition) doSomething();

### for Statement

### for 语句

The `for` class of statements should have the following form:

`for` 类型语句应该遵守如下的格式：

    for (initialization; condition; update) {
        statements
    }

    for (variable in object) {
        statements
    }

Variables should not be declared in the initialization section of a `for` statement.

在一个`for`语句中变量不应该被声明在初始化片段

    // Good
    var i,
        len;

    for (i=0, len=10; i < len; i++) {
        // code
    }

    // Bad: Variables declared during initialization
    for (var i=0, len=10; i < len; i++) {
        // code
    }

    // Bad: Variables declared during initialization
    for (var prop in object) {
        // code
    }

When using a `for-in` statement, double-check whether or not you need to use `hasOwnProperty()` to filter out object members.

当使用 `for-in` 语句时，再检查一遍你有没有使用  `hasOwnProperty()` 去过滤掉对象的成员

### while Statement

### while 语句

The `while` class of statements should have the following form:

`while` 类型语句应该遵守如下的格式：

    while (condition) {
        statements
    }

### do Statement

### do 语句

The `do` class of statements should have the following form:

`do` 类型语句应该遵守如下的格式：

    do {
        statements
    } while (condition);

Note the use of a semicolon as the final part of this statement. There should be a space before and after the `while` keyword.

注意语句最终部分要加分号，在`while`的前后都要加一个空格

### switch Statement

### switch 语句

The `switch` class of statements should have the following form:

`switch` 类型语句应该遵守如下的格式：

    switch (expression) {
        case expression:
            statements

        default:
            statements
    }

Each `case` is indented one level under the `switch`. Each `case` after the first, including `default`, should be preceded by a single empty line.

每个`case`都应该对齐`switch`的下一个缩进级别。除了第一个以后的`case`包括`default`应该在前边空出一行。

Each group of statements (except the default) should end with `break`, `return`, `throw`, or a comment indicating fall through.

每组语句(除了default)，都应该以`break`, `return`, `throw`或一个fall through的注释说明。

    // Good
    switch (value) {
        case 1:
            /* falls through */

        case 2:
            doSomething();
            break;

        case 3:
            return true;

        default:
            throw new Error("This shouldn't happen.);
    }

If a `switch` doesn't have a `default` case, then it should be indicated with a comment.

如果一个`switch`没有`default` 块，那么需要有注释说明一下。

    // Good
    switch (value) {
        case 1:
            /*falls through*/

        case 2:
            doSomething();
            break;

        case 3:
            return true;

        // no default
    }

### try Statement

### try 语句

The `try` class of statements should have the following form:

`try` 类型语句应该遵守如下的格式：

    try {
        statements
    } catch (variable) {
        statements
    }

    try {
        statements
    } catch (variable) {
        statements
    } finally {
        statements
    }

## White Space

## 空格

Blank lines improve readability by setting off sections of code that are logically related.

有逻辑联系的代码片段前后添加空行会增加可读性

Two blank lines should always be used in the following circumstances:

在如下情况应该保持使用两个空行

* Between sections of a source file
* 源文件片段之间 
* Between class and interface definitions
* 在类和接口定义之间

One blank line should always be used in the following circumstances:

在如下情况下应该用一个空行

* Between methods
* 方法之间
* Between the local variables in a method and its first statement
* 在方法的变量和第一行语句之间
* Before a multi-line or single-line comment
* 在一个多行或单行注释前
* Between logical sections inside a method to improve readability
* 为提高可读性，在一个方法的逻辑片段前

Blank spaces should be used in the following circumstances:

以下情况下应该使用空格

* A keyword followed by a parenthesis should be separated by a space.
* 关键词后跟一个括号应该被空格分隔
* A blank space should appear after commas in argument lists.
* 在参数列表的逗号后应该跟一个空格
* All binary operators except dot (`.`) should be separated from their operands by spaces. Blank spaces should never separate unary operators such as unary minus, increment (`++`), and decrement (`--`) from their operands.
* 所有的二元运算符不包括 点(`.`)应该被空格分隔操作符，空格不能分隔一元操作符比如负号，自增(`++`)和自减(`--`)
* The expressions in a `for` statement should be separated by blank spaces.
* 在`for` 语句的表达式应该被空格分隔

## Things to Avoid

## 要避免做的事

* Never use the primitive wrapper types, such as `String`, to create new objects.
* 不要使用原始的包装类型例如`String`，要创建一个新的对象
* Never use `eval()`.
* 不要使用`eval()`。
* Never use the `with` statement. This statement isn't available in strict mode and likely won't be available in future ECMAScript editions.
* 不要使用 `with`语句，这个语句在严格模式下不被允许并且在未来的ECMAScript版本中也不被支持。