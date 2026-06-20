var users=[
    {
        "name":"john doe",
        "gender":"male",
        "image":"/images/john.png"
    },
    {
        "name":"jane doe",
        "gender":"female",
        "image":"/images/jane.png"
    }
]
var curId=0;

function toggle(){
    //toggle curId from 0 to 1 and vice versa
    curId=(curId+1)%2;
    //toggle rendered user deatils
    //image
    var user=users[curId];
    document.getElementById("user-img").src=user.image;
    //to do: update for name and gender !
    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;

}

