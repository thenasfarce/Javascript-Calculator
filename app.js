var solve = function(expression){
    var solution = eval(expression)
    return solution;
}



$(document).ready(function(){
    var $button = $("button");
    var $result = $("#result");
    var temp1 = ''
    var temp2 = '';
    
    $button.on('click', function(){
    var val = $(this).text();
        if (!isNaN(val) || val==="."){
            temp1 += val;
            $result.html(temp1);
        } else if (val === "*" || val==="+" || val==="/" || val==="-" || val==="%"){
            temp2 += temp1;
            temp1 = '';
            temp2 += val;
        }
        else if (val === "="){
            temp2 += temp1;
            var solution = solve(temp2)
            $result.html(solution);
            temp1=solution;
            temp2=''
        }
        else if (val === "AC"){
            temp1 = '';
            temp2 = '';
            $result.html(0)
        }
        else if (val === "CE"){
            temp1 = '';
            $result.html(0);
        }
});
    
});
