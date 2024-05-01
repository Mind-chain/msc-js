const {getStats} = require("msc-js")

async function getstatus (){
    try{
        const stats = await getStats()
        console.log(stats)

    }catch (err){
        console.log(err)
    }
}
getstatus()