"use strict";
var a=1;
while (a<101)
{
  if (a % 5 == 0 && a % 3 == 0)
      {
      console.log(a + '  FizzBuzz') //(Делится на 3 и на 5)
      }
     else if (a % 3 == 0)
      {
      console.log(a + "  Buzz ") //(Делится на 3)
      }
     else if (a % 5 == 0 && a % 3 != 0)
      {
      console.log(a + "  Fizz ") //Делится на 5 но не на 3
      }
     else
      {
      console.log(a + "  (Спс BblDE3HAPу за куски кода)")
       }
a++;
}
