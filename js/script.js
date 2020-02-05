var songs=["Moody-SheffG"];
var artists=[];
var durations=[];
var images=[];
var links=["https://www.youtube.com/watch?v=qYmyLzv8f7k"];
songs.forEach(function(songs){
    $(".list").append("<li>"+"Moody-SheffG"+"</li>");
})
artists.forEach(function(artists){
    $(".list").append("<li>"+artist+"</li>");
})
durations.forEach(function(durations){
    $(".list").append("<li>"+duration+"</li>");
})
images.forEach(function(images){
    $(".list").append("<li>"+image+"</li>");
})
links.forEach(function(links){
    $(".list").append("<li>"+"https://www.youtube.com/watch?v=qYmyLzv8f7k"+"</li>");
})