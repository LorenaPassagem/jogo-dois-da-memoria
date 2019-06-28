(function () {
    const {hash} = location;
    const path = [];
    path[""] = login;
    path["#/login"] = login;
    path ["#/signup"] = signup;
    path["#/game"] = game;
    path["#/404"] = errou;
    

    if(path[hash] === undefined){
      path["#/404"]();
    }else{
      path[hash]();
    }
    
})();