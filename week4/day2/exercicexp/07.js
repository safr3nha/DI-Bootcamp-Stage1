(function(userName) {
    const nav = document.getElementById("navbar");
    
    const userDiv = document.createElement("div");
    userDiv.className = "user-info";
    
    const nameText = document.createElement("span");
    nameText.textContent = userName;
    
    const profilePic = document.createElement("img");
    profilePic.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
    profilePic.style.width = "40px";
    profilePic.style.height = "40px";
    
    userDiv.appendChild(nameText);
    userDiv.appendChild(profilePic);
    nav.appendChild(userDiv);
})("John");