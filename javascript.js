function getHistory()
{
    return document.getElementById("history-value").innerHTML;
}
function getOutput()
{
    return document.getElementById("output-value").innerHTML;
}
function printOutput(number)
{
    if(number == "")
    {
        document.getElementById("output-value").innerHTML = "";    
    }
    else
        document.getElementById("output-value").innerHTML = getNumberFormat(number);
}
function printHistory(number)
{
    if(number == "")
    {   
        document.getElementById("history-value").innerHTML = "";    
    }
    else
        document.getElementById("history-value").innerHTML = number;
}
function getNumberFormat(num)
{
    var x = Number(num);
    return x.toLocaleString("en");
}
function getNumber(num)
{
    return Number(num.replace(/,/g,''));
}
var num = document.getElementsByClassName("num");
for(var i=0;i<num.length;i++)
{
    num[i].addEventListener('click',function(){
        var x = getNumber(getOutput()) + this.value;
        printOutput(x);
    })
}
var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++)
{
    operator[i].addEventListener('click',function(){
        if(this.value=="C")
        {
            printOutput("");
            printHistory("");
        }
        else if(this.value == "CE")
        {
            var x = getNumber(getOutput()).toString();
            x = x.substr(0,x.length-1);
            if(x == "-")
                printOutput("");
            else
            printOutput(x);
        }
        else
        {
            var history = getHistory();
            var num = getOutput();
            if(this.value == "=")
            {
                var res = eval(history+getNumber(num).toString());
                printOutput(res);
                printHistory("");
                
            }
            else
            {
                history = history + getNumber(num).toString()+this.value;
                printHistory(history);
                printOutput("");
            }
        
        }
    })
}