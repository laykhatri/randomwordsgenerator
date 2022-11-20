import * as fs from "fs";

fs.readFile("package.json",function(err,data){
    if(err) throw err;

    var jsonData = JSON.parse(data.toString("utf-8"));
    delete jsonData.scripts;
    delete jsonData.files;
    delete jsonData.devDependencies;
    
    fs.writeFile("dist/package.json",JSON.stringify(jsonData), function(err){
        if(err) throw err;
    });
    
})
