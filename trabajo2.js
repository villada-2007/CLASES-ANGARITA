 class contador {
     static cuenta =0;
  
    static incrementar(){
         contador.cuenta ++;
         console.log(`cuenta: ${contador.cuenta}`)
      }
 }
 contador.incrementar (1);
 contador.incrementar (4);
 contador.incrementar (2);
 
 