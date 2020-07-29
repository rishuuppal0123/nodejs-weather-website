const request = require('postman-request')

const geoCode = (address,callback) =>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoibWloaXJzYWhhaSIsImEiOiJja2QwbXJhYmgwdjZrMzFwZ3RzMmt5djZnIn0.5gmNZ7vYGdWjIDrpsi2hTQ&limit=1"
    
    request({url,json:true}, (error,{body})=>{
        if(error){
            callback('Unable to connect to location service', undefined)
        }
        else if(body.features.length===0)
        {
            callback('Unable to find location.',undefined)
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            })
        }
    })
}

module.exports = geoCode