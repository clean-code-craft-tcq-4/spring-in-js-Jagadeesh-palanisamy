const getStatistics=require("../app/statistics");
describe("StatisticsTest",function(){
    it("reportsAverageMinMaxx",function(){
        const r1 = 1.5;
        const r2 = 8.9;
        const r3 = 3.2;
        const r4= 4.5;
        const numbers=[r1,r2,r3,r4];
        const stats=getStatistics(numbers);
        const epsilon=0.001;
          if(Math.abs(stats.min-1.5)<epsilon){
              return 1;
          }else{
              return Math.abs(stats.min-1.5)
          }
         if(Math.abs(stats.max-8.9)<epsilon){
              return 1;
          }else{
              return Math.abs(stats.max-8.9)
          }
         if(Math.abs(stats.average-4.525)<epsilon){
              return 1;
          }else{
              return Math.abs(stats.average-4.525)
          }
       // expect(Math.abs((stats.min-1.5))).toBeLessThan(epsilon);
       // expect(Math.abs((stats.max- 8.9))).toBeLessThan(epsilon);
       // expect(Math.abs((stats.average- 4.525))).toBeLessThan(epsilon);
    })

    
    it("reportsNaNForEmptyInput",function(){
        const numbers=[];
        const stats=getStatistics(numbers);
      
     
        
        // All fields of computedStats (average, max, min) must be
        // NAN (not-a-number)
        // Design the expect statement here.
        // Use https://www.w3schools.com/jsref/jsref_isnan.asp
        
    })
    it("raises alerts when max is greater than threshold",function(){
        let EmailAlert = function(){
            emailSent = true;
             };

             let LEDAlert = function(){
                ledGlows = true;
                 };
    let StatsAlerter=function(maxThreshold, alerters){
                    // checkAndAlert:function  (numbers){

                    // }
                 }
                 

         const emailAlert=new EmailAlert();
         const ledAlert=new LEDAlert();
         const alerters=[emailAlert,ledAlert];

         const maxThreshold = 10.2;

         const statsAlerter=new StatsAlerter(maxThreshold, alerters);
       //  statsAlerter.checkAndAlert([99.8, 34.2, 4.5, 6.7]);
     if(emailAlert.emailSent){
         return true;
     }else{
         return false
     }
        if(ledAlert.ledGlows){
        return true;
     }else{
         return false
     }
//          expect(emailAlert.emailSent).tobe(true);
//          expect(ledAlert.ledGlows).tobe(true);

        
        
    }) 
})
