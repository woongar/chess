
        let x=[];
        for(let i=1; i<=8; i++) {
        let row = [];
                for(let j=1; j<=8; j++) {
                    if(j%2==i%2) {
                    row.push(j + " White");
                } else {
                    row.push(j + " Black");
                }
            }
            x.push(row);
        }
        console.log(x) ;



    
       
       
    
    
    


  
