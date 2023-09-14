let MyData = {};
let day =  "16";
let month =  "04";
let year =  "1999";
get();

function get(){
    axios.get("http://localhost:5000/api/get").then(res=>{
        MyData = res.data;
        setMyInformation(MyData.person);
        setMySkills(MyData.skills);
        setMySocialMedias(MyData.socialMedias);
        setMyworkExperiences(MyData.workExperiences);
        setMyEducations(MyData.educations);
        setMyReferences(MyData.references);
        setMyCertifications(MyData.certifications);
    });
}

function setMySkills(skills){
    document.getElementById("skills").innerHTML=createSkillHtmlTags(skills);
}
function createSkillHtmlTags(skills){
    let text = "";

    for(let skill of skills){

        text+=`<div class="skill">
        <div class="skill-name">${skill.title}</div>
        <div class="skill-bar">
          <div class="skill-per" per="${skill.rate}%" style="max-width:${skill.rate}%"></div>
        </div>
      </div>`;
    }
    return text;
}
function setMyInformation(person){

    document.getElementById("name").innerText = person.name;
    document.getElementById("lastName").innerText = person.lastName;
    document.getElementById("title").innerText = person.title;
    document.getElementById("aboutMe").innerHTML = person.aboutMe;
    document.getElementById("location").innerText = person.address;
    document.getElementById("phone").innerText = person.phone;
    document.getElementById("email").innerText = person.email;
    document.getElementById("dateOfBirth").innerText = setAndConvertDate(person.dateOfBirth);
    document.getElementById("img").src = person.img;
}

function setMySocialMedias(socialMedias){

    document.getElementById("socialMedias").innerHTML=createSocialMediaHtmlTags(socialMedias);
}

function setMyworkExperiences(workExperiences){

    document.getElementById("workExperiences").innerHTML=createworkExperienceHtmlTags(workExperiences);
}

function setMyEducations(educations){
    document.getElementById("educations").innerHTML=createEducationHtmlTags(educations);
}

function setMyReferences(references){
    document.getElementById("references").innerHTML=createReferenceHtmlTags(references);
}

function setMyCertifications(certifications){
    document.getElementById("certifications").innerHTML=createCertificationHtmlTags(certifications);
}

function createCertificationHtmlTags(certifications){
    let text ="";
    for(let certification of certifications){

        text += `<div class="certification_item">
        <h4 class="item_title">${certification.title}</h4>
        <p class="description">${certification.description}</p>
      </div>`;

    }
    
    return text;
}

function createReferenceHtmlTags(references){
    let text ="";
    for(let reference of references){

        text += `<div class="ref_item">
        <h4 class="item_title">${reference.referanceName}</h4>
        <p class="description">${reference.description}</p>
      </div>`;

    }
    
    return text;
}

function createEducationHtmlTags(educations){
    let text ="";
    for(let education of educations){

        text += `<div class="edu_item">
        <p class="item_preTitle">${education.date}</p>
        <h4 class="item_title">${education.location}</h4>
        <p class="item_subtitle">
        ${education.schoolName}
        </p>
        <p class="item_title">
        ${education.gap}
        </p>
      </div>`;

    }
    
    return text;
}
function createworkExperienceHtmlTags(workExperiences){
    let text ="";
    for(let workExperience of workExperiences){

        text += `<div class="exp_item">
          <p class="item_preTitle">${workExperience.startYear} - ${workExperience.endYear}</p>
          <h4 class="item_title">${workExperience.company}</h4>
          <p class="item_subtitle">${workExperience.title}</p>
          <p class=" description">${workExperience.description}</p>
        </div>`;

    }
    
    return text;
}

function createSocialMediaHtmlTags(socialMedias){

    let text ="";
    for(let socialMedia of socialMedias){
        text +=`<a href="${socialMedia.link}" target="_blank" class="social_item">
        <i data-feather="${socialMedia.title}"></i>
        <span>${socialMedia.text}</span>
      </a>`;
    }

    return text;
}

function setAndConvertDate(data){
    const date = new Date(data);   
    day =  date.getDate();
    day = day.toString().length === 1 ? "0" + day.toString() : day;

    month =  date.getMonth() + 1;
    month = month.toString().length === 1 ? "0" + month.toString() : month;

    year =  date.getFullYear();
    const dateString = `${day}/${month}/${year}`
    return dateString;
}



