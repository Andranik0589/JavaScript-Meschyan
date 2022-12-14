fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then(function(response){
    return response.json();
}).then(function(_response){
    debugger;
});