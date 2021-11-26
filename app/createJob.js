
window.addEventListener("load", (e) =>{
    var cpid = document.getElementById("id");     
    var cs = document.getElementById("s"); 
    var cp = document.getElementById("priority"); 
    var ccont = document.getElementById("typeProcess");
    var cnumOfProcesses = 0;
    let cjob = ["jobID"+jobID++, generaterandomNumber(1, 5),[],0]
    genJob.addEventListener("click", async (e)=>{

        e.preventDefault();
        const process = {ID: "processID"+parseInt(cpid.value), s: parseInt(cs.value), priority: parseInt(cp.value), content: [generaterandomNumber(0, 2)], e: 0, w: 0, o:order++};
        if(process.content[0] == 1){
            process.content.push(generaterandomNumber(1, parseInt(cs.value)-3))
        }
        cjob[2].push(process)
        cnumOfProcesses++;
        console.log(cnumOfProcesses);
        console.log(cjob);
    });

    finc.addEventListener("click",async (e) =>{
        e.preventDefault();
        for(i=0; i< batchArray[0].length; i++){
            if (batchArray[0][i] == 0){
                batchArray[0][i] = cjob;
                batchJobs[i].innerHTML = `<img src='images/process.png' class='processImg' id="${cjob[0].ID}">`
                break;               
            }
        }

        cnumOfProcesses = 0;
    } );
});