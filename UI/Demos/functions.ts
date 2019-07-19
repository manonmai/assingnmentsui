function buildName(firstName: string, middleName?: string, lastName = "M", ...others:string[]) {
    if (middleName !== undefined)
        console.log("%s %s %s", firstName, middleName, lastName);
    else
        console.log("%s %s", firstName, lastName);
    
    if(others.length > 0){
        others.forEach(function(item){
            console.log(item);
        });
    }
}

buildName("Karthik");
buildName("Ashik", "Mohammed", "Ibrahim");
buildName("Ashik", "Mohammed", "Ibrahim","Test1","Test2");
