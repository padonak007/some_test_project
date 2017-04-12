/**
 * Created by illiach on 12.04.2017.
 */

//7. Вычислите 1/2+1/4. Ответ: 0.75
var diff = 1/2+1/4;
console.log(diff);

// 8.Вычислите значение выражения (a+4b)(a−3b)+a2 при a=2 и b=3. Ответ:  -94
var a = 2;
var b = 3;
var result = (a+4*b)*(a-3*b)+a*a;
console.log(result);

//9.Вычислите |x|+x5, если x=−2.
var x=-2;
var result2 = Math.abs(x)+Math.pow(x,5);
console.log(result2);

//10.Вычислите значение выражения (x+1)2+3(x+1) при а) x=1.7; б) x=3. Ответ: а) 15.39 б) 28

var x1 = 1.7;
var x2 = 3;
function calc1 (x3){
    var result = Math.pow(x3+1,2)+(3*(x3+1));
    console.log("10="+result);
}
calc1(x1);
calc1(x2);
//somecomment
