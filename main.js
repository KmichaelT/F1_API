

document.getElementById('get_data').addEventListener('click', (e) => {
  e.preventDefault();
  const series = document.getElementById('series').value;
  const season = document.getElementById('season').value;
  get_data(series,season)

});

function get_data(series,season){
    
    fetch(`https://ergast.com/api/${series}/${season}/driverStandings.json`)
    .then((res)=> res.json())
    .then((data)=>{
        let output =`<thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">position</th>
          <th scope="col">points</th>
          <th scope="col">wins</th>
        </tr>
      </thead>`;
        let c=data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        console.log(c)
        c.forEach(function(driver){
            output+=
            `<tbody><tr>
        <td>${driver.Driver.givenName}</td>
        <td>${driver.position}</td>
        <td>${driver.points}</td>
        <td>${driver.wins}</td>
        </tr></tbody>`;
        });
            document.getElementById('table').innerHTML=output;
    })
}


