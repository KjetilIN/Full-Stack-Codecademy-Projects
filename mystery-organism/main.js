// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


//P.aequor function 

const pAequorFactory = (first,second) =>{
  let result = {
    specimenNum: first,
    dna:second,

    getDNA(){
      return this.dna
    },
    setDNA(dna){
      this.dna = dna
    },

    mutate(){
      let finished = false
      while(!finished){
        let newBase = returnRandBase()
        let randIndex = Math.floor(Math.random()*this.dna.length)
        if(this.getDNA[randIndex] !== newBase){
          let dna = this.dna
          dna[randIndex] = newBase
          this.setDNA(dna)
          finished = true
          return dna
        }

      }
      
    },
    compareDNA(pAequor){
      let same = 0
      let dna = this.dna      
      for(let i = 0 ; i<dna.length; i++){
        if(dna[i] === pAequor.dna[i]){
          same +=1
        }
      }
      let equal = 0
      if(same !== 0){
        equal = Math.floor((same/dna.length) *100)
      }
      console.log(`Specmin #${this.specimenNum}, and specimin #${pAequor.specimenNum} is ${equal}% the same!`)


    },
    willLikelySurvive(){
      let count = 0
      for(let i in this.dna){
        if(this.dna[i] == 'C' || this.dna[i] == 'G'){
          count += 1
        }
      }
      let surviveRate = count/this.dna.length
      console.log(surviveRate)
      if(surviveRate >= 0.6){
        return true
      }
      return false 
    }
  }


  return result
}





//Exsample test cases for a study 
let exsample1 = pAequorFactory(1,mockUpStrand())
let exsample2 = pAequorFactory(2,mockUpStrand())
let exsample3 = pAequorFactory(3,mockUpStrand())
let exsample4 = pAequorFactory(4,mockUpStrand())
let exsample5 = pAequorFactory(1,mockUpStrand())
let exsample6 = pAequorFactory(2,mockUpStrand())
let exsample7 = pAequorFactory(3,mockUpStrand())
let exsample8 = pAequorFactory(4,mockUpStrand())
let exsample9 = pAequorFactory(1,mockUpStrand())
let exsample10 = pAequorFactory(2,mockUpStrand())
let exsample11 = pAequorFactory(3,mockUpStrand())
let exsample12 = pAequorFactory(4,mockUpStrand())
let exsample13 = pAequorFactory(1,mockUpStrand())
let exsample14 = pAequorFactory(2,mockUpStrand())
let exsample15 = pAequorFactory(3,mockUpStrand())
let exsample16 = pAequorFactory(4,mockUpStrand())
let exsample17 = pAequorFactory(1,mockUpStrand())
let exsample18 = pAequorFactory(2,mockUpStrand())
let exsample19 = pAequorFactory(3,mockUpStrand())
let exsample20 = pAequorFactory(4,mockUpStrand())
let exsample21 = pAequorFactory(1,mockUpStrand())
let exsample22 = pAequorFactory(2,mockUpStrand())
let exsample23 = pAequorFactory(3,mockUpStrand())
let exsample24 = pAequorFactory(4,mockUpStrand())

console.log("====== DNA TEST ======")
//Test how everyone is the same as the first one
console.log("THE MAIN BASE")
console.log(exsample1.getDNA)

console.log("====== Compared to the rest ====")
exsample1.compareDNA(exsample2)
exsample1.compareDNA(exsample3)
exsample1.compareDNA(exsample4)
exsample1.compareDNA(exsample5)
exsample1.compareDNA(exsample6)
exsample1.compareDNA(exsample7)
exsample1.compareDNA(exsample8)
exsample1.compareDNA(exsample9)
exsample1.compareDNA(exsample10)
exsample1.compareDNA(exsample11)
exsample1.compareDNA(exsample12)
exsample1.compareDNA(exsample13)
exsample1.compareDNA(exsample14)
exsample1.compareDNA(exsample15)
exsample1.compareDNA(exsample16)
exsample1.compareDNA(exsample17)
exsample1.compareDNA(exsample18)
exsample1.compareDNA(exsample19)
exsample1.compareDNA(exsample20)
exsample1.compareDNA(exsample21)
exsample1.compareDNA(exsample22)
exsample1.compareDNA(exsample23)
exsample1.compareDNA(exsample24)

console.log("====== WILL SURVIVE ======")

console.log(`DNA SURVIVE ${exsample1.dna}: ${exsample1.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample2.dna}: ${exsample2.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample3.dna}: ${exsample3.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample4.dna}: ${exsample4.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample5.dna}: ${exsample5.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample6.dna}: ${exsample6.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample7.dna}: ${exsample7.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample8.dna}: ${exsample8.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample9.dna}: ${exsample9.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample10.dna}: ${exsample10.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample11.dna}: ${exsample11.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample12.dna}: ${exsample12.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample13.dna}: ${exsample13.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample14.dna}: ${exsample14.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample15.dna}: ${exsample15.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample16.dna}: ${exsample16.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample17.dna}: ${exsample17.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample18.dna}: ${exsample18.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample19.dna}: ${exsample19.willLikelySurvive()}`)
console.log(`DNA SURVIVE ${exsample20.dna}: ${exsample20.willLikelySurvive()}`)

