var _INPUT = "2\n3 9\n17 24";
var no = _INPUT.split("\n");
var no2 = no.join(" ");
no = no2.split(" ");
var T = (no[0]);
var i;
var j;
var res = 0;

console.log(_INPUT);
console.log("\n");

function solution (A, B, res)
{
    for (var k = A; k <= B; k++) {
        j = Math.sqrt(k);
        if (j%1 == 0)
        {
            res++;
        }
    }
    
    console.log(res);
}

for (i = 1; i < (no.length); i++) 
{
    var A = no[i];
    i++;
    var B = no[i];
    solution(A, B, res);
}

