const zod = require('zod')

function validateEmailAndPassword(obj){
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    })

    const response = schema.safeParse(obj)
    console.log(response);

}

validateEmailAndPassword({
    email : "prakashvishal93@gmail.com",
    password : "1213429e4233"
})