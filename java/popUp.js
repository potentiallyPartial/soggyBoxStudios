function myFunction() {
    var txt;
    if (confirm("Slect ok if you want to view NSFW content else press cancel")) {
      txt = "You pressed OK!";
    } else {
      window.location = "http://soggyboxstudios.net/";
    }
    document.getElementById("demo").innerHTML = txt;
  }