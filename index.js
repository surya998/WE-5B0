function weatherForecast(){
    let input=document.getElementById("inp").value;
    // let url="https://api.openweathermap.org/data/2.5/forecast?q="+input+"&appid=1eb020304c271ca87eb6279c2372f4f0";
    // let weData=fetch("https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=1eb020304c271ca87eb6279c2372f4f0");
    let url="https://api.openweathermap.org/data/2.5/forecast?q="+input+"&appid=1eb020304c271ca87eb6279c2372f4f0";
    let url1="https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=1eb020304c271ca87eb6279c2372f4f0";
    let weData=fetch(url1);
    weData.then((rwData)=>{
        rwData.json().then((data)=>{
            let {main:{temp,temp_min,temp_max}}=data;
            document.getElementById("rs").innerHTML+="Minimum temperature: "+temp_min+"<br>"+"Maximum Temperature: "+temp_max+"<br>";
        });
    })
    let wData=fetch(url);
    wData.then((rwData)=>{
        rwData.json().then((data)=>{
            
            
            let weatherArr=data.list;
            document.getElementById("rs").innerHTML+="Country Name: "+data.city.country+"<br>";
            var we=[];
            var dt=[];
            for(var i=0;i<weatherArr.length;i+=8){
                // console.log(weatherArr[i].main.temp);
                
                // document.getElementById("result").innerHTML+=weatherArr[i].main.temp+"<br>";
                we.push(weatherArr[i].main.temp);
                // console.log(weatherArr[i].dt_txt);
                var t=weatherArr[i].dt_txt.substring(0,11);
                dt.push(t);

            }
            // document.getElementById('rs').innerHTML+="Country Name: "+data.city.country+"<br>"+"Minimum Temperature: "++"<br>";
            // for(var j=0;j<dt.length;i++)
            // {
            //    dt[j]=dt[j].split(" ");
            // }
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'bar',
                data: {
                  labels: dt,
                  datasets: [{
                    backgroundColor:yield,
                    label: '# of Votes',
                    data: we,
                    borderWidth: 1
                  }]
                },
                options: {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }
              });
        });
    })
}