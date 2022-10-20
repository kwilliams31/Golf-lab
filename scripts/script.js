$(document).ready(function() {  

  $(function () {
    let gameStuff = "";

    $.each(gamerArray, (index, value) => {

    //gameStuff = `<h1> ${ gamerArray[index].name } </h1>`;   

    //   <div class="card col-md-4">
    // <div class="card-body">
    //   <h4 class="card-title">Kristina's Games</h4>
    //   <a class="btn btn-secondary" href="https://kwilliams31.github.io/Echo-Cool-Games/" target="_blank">Game link :)</a>
    // </div> 

    console.log('<div class="card col-md-4"> ' +
    value.name +
    '<div class="card-body">' +
    value.gameName +
    '<a href="' +
    gamerArray[index].gameUrl + '">LINK TO GAME</a></div></div>'
);

    // $('#gamerRow').append(
      
    //   '<div class="card col-md-4"> ' +
    //   value.name +
    //   '<div class="card-body">' +
    //   value.gameName +
    //   '<a href="' +
    //   gamerArray[index].gameUrl +">LINK TO GAME</a></div></div>")

    $('#gamerRow').append(

      `
      <div class="card col-md-4">
      <div class="card-body">
        <h4 class="card-title">${ gamerArray[index].name }'s Games</h4>
        <a id="button" class="btn btn-secondary" href=${ gamerArray[index].gameUrl } target="_blank">${ gamerArray[index].gameName }</a>
      </div>
    </div>
      `
    )


});
});
});


let gamerArray = [
  {
  name: "Kristina",
  gameName: "Echo Game",
  gameUrl: "https://kwilliams31.github.io/Echo-Cool-Games/" 
  },
  {
  name: "Rachel",
  gameName: "Bravo Game",
  gameUrl: "https://github.com/panhead63/bravo/tree/main" 
    },
    {
  name: "Meghan",
  gameName: "Echo Game",
  gameUrl: "https://mskel1.github.io/sturdy-rotary-phone/" 
      }

]


