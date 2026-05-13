





const returnClarifaiRequestOptions = (req,res) => {

    const input = req.body.input;
    const PAT = "ea7cd18f70b1478eb2c72f6ae7685c99";
    const MODEL_ID = "face-detection";
    const USER_ID = "clarifai";
    const APP_ID = "main";
    

    fetch(`https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`, 
    {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: "Key " + PAT,
        },
        body: JSON.stringify({
            user_app_id: {
                user_id: USER_ID,
                app_id: APP_ID,
            },
            inputs: [
                {
                data: {
                    image: {
                    url: input,
                    },
                },
                },
            ],
        }),
  })
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => res.status(400).json('unable to work with API'));

};


const handleImage=(req,res,db)=>{
    const {id}= req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries =>{
        res.json(entries[0].entries )
    })
    .catch(err =>{res.status(400).json('unable to get entries')})
}

module.exports={
    handleImage,
    returnClarifaiRequestOptions
}