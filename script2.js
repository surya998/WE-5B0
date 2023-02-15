function weatherForecast(){
    let input=document.getElementById("inp").value;
    let url="https://api.openweathermap.org/data/2.5/forecast?q="+input+"&appid=1eb020304c271ca87eb6279c2372f4f0"
    
    let wdata1=fetch("https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=1eb020304c271ca87eb6279c2372f4f0")

    let wData=fetch(url);
    wData.then((rwData)=>{
        rwData.json().then((data)=>{
            var xValues=new Array;
            var yValues=new Array;
            let weatherArr=data.list;
            document.getElementById("result").innerHTML+="Country Name: "+data.city.country+"<br>";
            for(var i=0;i<weatherArr.length;i+=8){
                yValues.push(weatherArr[i].main.temp);
                document.getElementById("result").innerHTML+=weatherArr[i].main.temp+"<br>";
                xValues.push(weatherArr[i].dt_txt);
                
            }
            console.log(xValues)
            var barColors = ["red", "green","blue","orange","brown"];
    
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
    });
        });
    })
    
}
