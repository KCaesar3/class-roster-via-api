// My Scripts


// Data source from AirTable API
// Note: We're using NoCode API to make connecting to AirTable easier
const url = "https://v1.nocodeapi.com/pmanikoth/airtable/rsqhQzAAKcMyyPPW?tableName=Roster";



// Get data
fetch(url)
  .then( response  => response.json())
  .then( data  => {
    // check-check: get one image
    // Note: Webflow returns data in array called `items`
    console.log(data.records);
    console.log(data.records[0].fields);
    console.log(data.records[0].fields.Name);
    console.log(data.records[0].fields.Emoji);
    console.log(data.records[0].fields.Color);
    console.log(data.records[0].fields.Image[0].url);

    // get container for data
    const gallery = document.querySelector(".gallery");

    // loop through data
    data.records.forEach( student => {
      
      // template
      const template = `
          <figure>
            <figcaption>${student.fields.Name}</figcaption>
            <p>${student.fields.Emoji}</p>
            <img src="${student.fields.Image[0].url}" alt="${student.fields.Name}">
          </figure>
       `;

      // insert EACH `student` record into container
      gallery.insertAdjacentHTML("afterbegin", template);
    }); 







  // Data source
const url = "https://picsum.photos/v2/list";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
  
//   console.log( data );
// // fisrst index
//   console.log( data[0] );
  
// //   get first photographer name?
//   console.log( data[0].author );
//   //  Log out URL to image
//   console.log( data[0].download_url );
  
  //  get name
//   const author = document.querySelector('h3');
//   //  get image
//   const image = document.querySelector('img');
  
// //   Set it
//   author.textContent = data[0].author;
//   image.src = data[0].download_url;
  
  // Get Parent
    const gallery = document.querySelector('.gallery');
  
//   CALL back fcntion
  data.forEach( (image) => {
   
          let img = document.createElement('img');
      
      img.src = `${image.download_url}`;
      
      gallery.append(img);
    
  });
  
  
});




    

  });
