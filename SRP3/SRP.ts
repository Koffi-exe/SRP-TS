interface Ifile{
    name:string,
    size:number,
    type:string
}

class Validate{
    constructor(private file:Ifile){}
    vaildateFile(){
        if(this.file.type.includes("image")){
            throw new Error("Only images are allowed")
        }
        if(this.file.size> 5*1024*1024){
            throw new Error("File too large")
        }
    }
}

class Save{
    constructor(private file:Ifile){}
    saveFile(){
        console.log("Saving file:", this.file.name)
    }
}

class Upload{
    constructor(private file:Ifile){}
    uploadFile(){
        console.log(`${this.file.name}, Uploaded at ${new Date().toISOString()}`)
    }
}

class NotificationClass{
    constructor(private file:Ifile){}
    sendNotification(){
        console.log(`Notification: ${this.file.name}, uploaded successfully`)
    }
}

class FileUploaderClass{
    constructor(private file:Ifile){}
    execute(){
        new Validate(this.file).vaildateFile()
        new Save(this.file).saveFile()
        new Upload(this.file).uploadFile()
        new NotificationClass(this.file).sendNotification()
    }
}

const file:Ifile ={
    name:"profilePic",
    type:"Image",           // the string must be Image
    size: 7*1024*1024       // make it less than 5*1024*102
}

new FileUploaderClass(file).execute()