//1.1
O(1)

//1/2
O(n)

//2
O(n) because it needs to check one value at a time.

//3
O(n^k) because for each index in the first array it needs to traverse the second array.

//4
O(n) because it needs to read each index in the given array one time.

//5
O(n) because it needs to read each index in the given array one time.

//6
O(n^k) because for each index in i, it's traversing the array again to create j.

//7
This is a fibonnaci sequence algorithm. Runtime is O(n) because it is only going through the array one time.

//8
O(log(n)) because it continues to split the array until it finds the correct answer.

//9
O(1) because it's straightforward math equation that will take the same amount of time no matter how many indexes are in the array.

//10
O(1) odd numbers are true, even number false

//11
const hanoi = function(disc, src, aux, dst){
    if (disc > 0){
      hanoi(disc - 1, src, dst, aux);
      document.write("Move disc " + disc + " from " + src + " to " + dst + "<br />");
      hanoi(disc - 1, aux, src, dst)
    }
  }

