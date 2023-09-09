const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const todos=[];
let id = 0;

let person = {

    id : 1,
    name : "Oğuzhan",
    lastName : "MURATOĞLU",
    title : "SOFTWARE DEVELOPER",
    dateOfBirth : new Date("1999-04-16"),
    email : "oguzhanmuratoglu14@gmail.com",
    address : "Bolu/Turkey",
    img : "/odev/yg.jpg",
    phone : "0 (543) 463 8570",
    aboutMe : "<p class='description profile_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim adminim veniam</p>"

}

let skills = [

    {
        id : 1,
        title : "C#",
        rate : 70
    },

    {
        id : 2,
        title : "MS SQL",
        rate : 60
    },

    {
        id : 1,
        title : "JavaScript",
        rate : 40
    },

    {
        id : 1,
        title : "Angular",
        rate : 75
    },

    {
        id : 1,
        title : "Node.js",
        rate : 60
    }
]


let socialMedias = [
    {
        id : 1,
        title : "github",
        text : "/MyGitHub",
        link: "https://github.com/oguzhanmuratoglu"
    },
    {
        id : 2,
        title : "linkedin",
        text : "/MyLinkedIn",
        link: "https://www.linkedin.com/in/o%C4%9Fuzhan-murato%C4%9Flu-148400233/"
    },
]

let workExperiences = [
    {
        id : 1,
        startYear: 2019,
        endYear : 2020,
        company : "MURATOGLU LLC",
        title : "Full-Stack .Net Developer",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci"
    },
    {
        id : 2,
        startYear: 2021,
        endYear : 2022,
        company : "ANKA LLC",
        title : "Full-Stack .Net Developer",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci"
    },
    {
        id : 3,
        startYear: 2012,
        endYear : "Present",
        company : "DELTA LTD. ŞTİ",
        title : "Full-Stack .Net Developer",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci"
    },

]


let educations = [
    {
        id: 1,
        schoolName: "Karabük Anatolian Teacher High School",
        location : "Karabuk in TR",
        date : "2013-2017",
        gap : "86.67"
    },
    {
        id: 2,
        schoolName: "Kocaeli University - Civil Engineering",
        location : "Kocaeli in TR",
        date : "2013-2017",
        gap : "3.05"
    },
]

let references = [
    {
        id : 1,
        name: "Taner Saydam",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci"
    },
    {
        id : 2,
        name: "Caner Mollaoğlu",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci"
    },
]

let certifications = [
    {
        id : 1,
        title : "Sıfırdan İleri Seviye Yazılım Mühendisi Yetiştirme Programı",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci"

    },
    {
        id : 1,
        title : "Komple ASP.NET Web Geliştirme Eğitimi",
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci"

    },
    {
        id : 1,
        title : "AspNet Core Web/API+Çok Katmanlı Mimari",
        description : "Fatih Çakıroğlu"

    },
]


app.get("/api/get", (req,res)=>{
    const myInformation = {
        person: person,
        skills: skills,
        socialMedias: socialMedias,
        workExperiences: workExperiences,
        educations: educations,
        references: references,
        certifications: certifications

    }
    res.json(myInformation);
});

app.get("/api/remove/:id",(req,res)=>{
    const id = req.params.id;

    const index = skills.findIndex(p=>p.id === +id);
    if(index===-1) res.status(500).json({message: "The record you want to delete was no found!"});
    else{
        skills.splice(index,1);
        res.json({message: "Remove is successful"});
    }

});

app.post("/api/set", (req,res)=> {
    const body = req.body;

    person = body.person;
    skills = body.skills;
    socialMedias = body.socialMedias;
    workExperiences = body.workExperiences;
    educations = body.educations;
    references = body.references;
    certifications = body.certifications

    res.json({message: "Update is successful"})
})

app.listen(5000,()=> console.log("Your api is running"));

