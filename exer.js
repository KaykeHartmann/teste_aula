console.log('digite há temperatura de sua preferencia (F) fahrenheit  (C) celsius (K) kelvin')
process.stdin.once('data' , function(data){
    let temp = data.toString().trim();

   
    if(temp == 'f' ){

        console.log('digite sua temperatura em Fahrenheit')

        process.stdin.once('data' , function(data){
            let temp2 = Number(data.toString().trim());

            let converter = (temp2 - 32) / 1.8
            let conta = converter + 273.15

            console.log(Math.round(converter), Math.round(conta))
        process.exit();
        })

    }else if( temp == 'c'){

        console.log('Digite sua temperatura em Celsius')

        process.stdin.once('data' , function(data){
            let temp3 = Number(data.toString().trim());

            let converter = (temp3 * 1.8) + 32
            let conta = temp3 + 273.15

            console.log(Math.round(converter), Math.round(conta))
        process.exit();
                
    })}else if(temp == 'k'){

        console.log('Digite sua temperatura em Kelvin')

        process.stdin.once('data', function(data){
            let temp4 = Number(data.toString().trim());

            let converter = (temp4 - 273.15)
            let conta = (temp4 - 273.15) * 1.8 + 32

            console.log(Math.round(converter), Math.round(conta))
        process.exit();
        
        })
    }
        
})