
class Me {
    name: string;
    career: string;
    description: string:
    constructor(theName, theCareer, theDescription ) {
        this.name = theName;
        this.career = theCareer;
        this.description = theDescription
    }

    header() {
        console.log(`Name: ${this.name}`)
        console.log(`Career: ${this.career}`)
        console.log(`Description: ${this.description}`)
    }

}

let josieResumeHeader = new Me("Josie Kilcullen", "Web Dev Student", "idk what to say")
josieResumeHeader.header();

class MyInterests extends Me {
    int1: string;
    int2: string;
    int3: string;
    constructor(int, inter, interest) {
        super(int,inter, interest);
        this.int1 = int;
        this.int2 = inter;
        this.int3 = interest; 
    }
    interests () {
        console.log(`* ${this.int1}`)
        console.log(`* ${this.int2}`)
        console.log(`* ${this.int3}`)
    }
}
let josieSkills = new MyInterests("drawinf", "readinf", "cookinf")
josieSkills.interests(); 

class MyPastJobs extends Me {
    position: string;
    location: string;
    description: string;
    constructor(pos, loc, des) {
        super(1,2,3) 
        this.position = pos;
        this.location = loc;
        this.description = des;
    }

    prevExp () {
        console.log(`* ${this.position} at ${this.location} - ${this.description}`)
    }

}

let job1 = new MyPastJobs ("Web Dev Student", "Innovate Bham", "did coding bootcamp")
job1.prevExp();

let job2 = new MyPastJobs ("General Manager", "Revelator Coffee", "did management stuff")
job2.prevExp();

let job3 = new MyPastJobs ("Bar Manager", "Black Market Bar", "did beer wine and liqour orderin")
job3.prevExp();



