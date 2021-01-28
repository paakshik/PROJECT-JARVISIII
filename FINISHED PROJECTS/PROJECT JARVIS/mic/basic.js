
// function alarm

function alarm(){


    
    }
    
//function lyrics maker
const api = '51a2674ac77ddc81d5f44f327a0fe9d8';
const request = new XMLHttpRequest();
function music(){
   
    const song = window.prompt('Please tell the song you want to search');
    const artist = window.prompt('Please tell the artist of the song');
    
    request.open("GET", `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&callback=callback&q_track=${song}&q_artist=${artist}&apikey=51a2674ac77ddc81d5f44f327a0fe9d8`);
    request.send();
    request.onload = () => {
    if (request.status === 200) {
            resa = (request.response);
            resa = resa.replace(`\n\n******* This Lyrics is NOT for Commercial use *******\n(1409620934796)","script_tracking_url":"https:\/\/tracking.musixmatch.com\/t1.0\/m_js\/e_1\/sn_0\/l_19488402\/su_0\/rs_0\/tr_3vUCAApybzXOb-BbLTk52Aa24Ybews66I4V9iMXp-YbzpvXza14LL87M9oS9kJqjdDW95zFyLBNd6CoAUMptG5_xspwAtLKU_cT6c0924LDUg_XNr85Yz8n_9eZ8LVd0Omv5gyI9kCztmznYxuJoHiVVMlVTQewLGLJ6ZvcVUhyY6lMGDjxIbVBJMPmW8WTumBkP37B0TF3S4CKNJrHLEnkC9HsvuQ4ssl6xmUqZKqqUsB-TBeOCWPqs52ecwyJrhl5C1cm_WXJ6zMUtoKDSfVT1XsoTPrCa4BH3johv4nV8fW-Zj_yi1bu-e4oa4_0QJb81ADds1GOLXUyRrKe_aeTbBqc9vjYQtOL82I7kyxeXVUsjqvkbnZVQ1Gk7gHxQRDFFWDzQCiXQix4Ia3sIXusFKb784xbfPT5B7fz54mAr_0dTXbdUk2TTh4rh84DBMQVIYTHFP2c_KSm3FnTXBWyc1ld0\/","pixel_tracking_url":"https:\/\/tracking.musixmatch.com\/t1.0\/m_img\/e_1\/sn_0\/l_19488402\/su_0\/rs_0\/tr_3vUCACIisyW-kW2fr3A-jMEjds6kgnUAQq7kYXnNB4T5epSUwOp0PPWmcLgVcm7UcfzJhswKiC7rrjlJCYo5j3t2tPXwL0UCVthUF8pZrj_r0uoR0nOQjTqeHa1Ya5dJKtfpGI41Hf8NOllt8reGMQCvZkCl0dZvNf9oUJeIpaWm-alHcvdCJ-yCuc92BDTtOesGY3OhCpeuWVbyAsR3hF-YP_P0AFiVk90Ag5WTbFgAsHJeVvjhpaLBjXCjCvF_emHjLGmGcMglxnF5f5XuJKrpgRscZezB41uSnAfZ4KgYniNU1c1-Xr05dLtLLTscSHdfTDZdZRZzOw57foGWCkgHaDK1oRorNMOQOo2jGpvlA8AkbIrfBtQX4EsBLqSLfUYrg0jxWxQcvp-xiWC7Q2ZOKvs45VE_1wSGcpTGzXev2EhYtEw3g3F4p6qcEEmMLszR_ehUXQfKZLjK8e3ZWwTUMy17\/","lyrics_copyright":"Lyrics powered by www.musixmatch.com. This Lyrics is NOT for Commercial use and only 30% of the lyrics are returned.","updated_time":"2019-08-01T07:40:37Z"}}}});`, "");
            console.log(resa)
        }
    }

}

// for getting weather details

function getWeatherDetails() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
  
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
        let responce = await fetch(api_url);
        let data = await responce.json();
        manipulateWeatherData(data)
      })
    }
  }

// for getting location details

function getLocationDetails() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
  
        let latitude1 = position.coords.latitude;
        let longitude1 = position.coords.longitude;
        console.log(`Your location is ${latitude1} and ${longitude1}`)
      });
    }
  }

// for getting currect time



  // forgetting weather data

  function manipulateWeatherData(data) {
    let city = data.name;
  
    let temprature = data.main.temp;
    let description = data.weather[0].main
    console.log(`current temperature is ${temprature},your location is ${city},your description is ${description}`)
  
  }

// for getting jokes data
async function generateJokes() {
    const jokes = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const jokesRes = await jokes.json();
    console.log(jokesRes.joke)
  }
  // for getting notes data
  function notes_generator() {
    var note = window.prompt("The text you want to add to the note")
    var notes = localStorage.getItem("notes")
  
    if (notes === null) {
      notesA = [];
    }
    else {
      notesA = JSON.parse(notes)
    }
    notesA.push(note)
    localStorage.setItem("notes", JSON.stringify(notesA))
  }

  // for getting news data
 function news_generator(){
    var search = prompt("Please tell the news you want to search for");
    var timed = prompt("The time you want the news for", "yy-mm-dd");
    var countd = prompt("The country you want the news for", "us,de,mx,gb")
    var AP1 = 'e046589d165d1a5c16dc321f5602e72b'
    var url = `http://api.mediastack.com/v1/news?access_key=${AP1}&keywords=${search}&date=${timed}&countries=${countd}&search=india&=sources=${search}`;
    fetch(url)
        .then((res) => res.json())
        .then((dataed) => {
            dataed.data.forEach(function (value) {
                console.log(`The headline for the news is: '${value.title}'`);
                console.log(`This is the description for the news: '${value.description}'`);
                console.log(`For reading further click on: '${value.url}'`);
            })
        });



 }
  //for getting  picture details
function videos(){
    
}


   // for getting email function
   function sendEmail(name, email, text) {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "rbadjatya@gmail.com",
      Password: "xeibigtvizjlmuib",
      To: email,
      From: "rbadjatya@gmail.com",
      Subject: name,
      Body: text
    }).then(
      message => alert('mail sent successfully')
    );
  };
  // for getting covid data

  function corona(){
    var count = window.prompt('Which country covid data do you want?');
    URLs = 'https://api.covid19india.org/data.json';
    fetch(URLs)
        .then((res) => res.json())
        .then((datas) => {
            pro = (datas.statewise)
            pro.forEach(element => {

                if (element.state === count) {
                    const active = element.active
                    const confirmed = element.confirmed
                    const recovered = element.recovered
                    const deaths = element.deaths;
                    console.log("The state you searched for is " + count);
                    console.log("the active cases are " + active);
                    console.log("The confirmed cases are " + confirmed)
                    console.log("The recovered cases are " + recovered);
                    console.log("The deaths are " + deaths);
                }

            });

        });


  }


