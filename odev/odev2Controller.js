let MyData = {};
let day =  "16";
let month =  "04";
let year =  "1999";
let workExperienceId =0;
let educationId = 0;
let referenceId = 0;
let socialMediaId=0;
get();

function get(){
    axios.get("http://localhost:5000/api/get").then(res=>{
        MyData = res.data;

        setMyInformation(MyData.person);
        setMyWorkExperiences(MyData.workExperiences);
        setMyEducations(MyData.educations);
        setMyReferences(MyData.references);
        setMySocialMedias(MyData.socialMedias);

    });
}

function setMyInformation(person){
    document.getElementById("firstName").value = person.name;
    document.getElementById("lastName").value = person.lastName;
    document.getElementById("title").value = person.title;
    document.getElementById("dateOfBirth").value = `${year}-${month}-${day}`;
    document.getElementById("email").value = person.email;
    document.getElementById("address").value = person.address;
    document.getElementById("phone").value = person.phone;
    document.getElementById("about-me").value = person.aboutMe;

}

// function setAndConvertPhoneNumber(number){  
//     let phoneNumber =Array.from(number);
//     for(let index in phoneNumber){

//         if(index=== 1){
            
//         phoneNumber.splice(index,1)
//         index--;
//         }
//         if(index=== 4){
            
//             phoneNumber.splice(index,1)
//             index--;
//         }
//         if(index=== 8){
            
//             phoneNumber.splice(index,1)
//             index--;
//         }
//     }

//     let stringPhoneNumber = phoneNumber.join();

//     return stringPhoneNumber;
// }

    function setMyWorkExperiences(workExperiences){
        document.getElementById("workExperiences").innerHTML=createWorkExperienceHtmlTags(workExperiences);
    }

    function createWorkExperienceHtmlTags(workExperiences){
        
        let text = "";

        for(let workExperience of workExperiences){
            text+=`<div id="work-experience-${workExperience.id}" class="fields experience">
            <div class="input-field">
                <label>Start Date</label>
                <input id="start" value="${workExperience.startYear}"  type="text" placeholder="Enter your Start Date">
            </div>
            <div class="input-field">
                <label>End Date</label>
                <input id="end" value="${workExperience.endYear}" type="text" placeholder="Enter your End Date">
            </div>
            <div class="input-field">
                <label>Company</label>
                <input id="company" value="${workExperience.company}" type="text" placeholder="Enter your Company">
            </div>
            <div class="input-field">
                <label>Title</label>
                <input id="title" value="${workExperience.title}" type="text" placeholder="Enter your Title">
            </div>
            <div class="input-field">
                <label>Description</label>
                <input id="description" value="${workExperience.description}" type="text" placeholder="Enter your Description">
            </div>
            <button class="deleteButton" onclick="deleteExperinceDetail(${workExperience.id})">Çıkar +</button>
        </div>`;
        workExperienceId++;
        }

        return text;
    }

    function addworkExperiences(){
        workExperienceId++;
        document.getElementById("addworkExperience").innerHTML +=
        `<div id="work-experience-${workExperienceId}" class="fields experience">
        <div class="input-field">
            <label>Start Date</label>
            <input id="start" type="text" placeholder="Enter your Start Date">
        </div>
        <div class="input-field">
            <label>End Date</label>
            <input id="end" type="text" placeholder="Enter your End Date">
        </div>
        <div class="input-field">
            <label>Company</label>
            <input id="company" type="text" placeholder="Enter your Company">
        </div>
        <div class="input-field">
            <label>Title</label>
            <input id="title" type="text" placeholder="Enter your Title">
        </div>
        <div class="input-field">
            <label>Description</label>
            <input id="description" type="text" placeholder="Enter your Description">
        </div>
        <button class="deleteButton" onclick="deleteExperinceDetail(${workExperienceId})">Çıkar +</button>
    </div>`;
    }

    function deleteExperinceDetail(id){
        document.getElementById(`work-experience-${id}`).remove();
    }

    function setMyEducations(educations){
        document.getElementById("education").innerHTML = createEducationHtmlTags(educations);
    }

    function createEducationHtmlTags(educations){
        let text = "";

        for(let education of educations){

            text+= ` <div id="education-${education.id}" class="fields experience">
            <div class="input-field">
                <label>School Name</label>
                <input id="schoolName" value="${education.schoolName}" type="text" placeholder="Enter your School Name">
            </div>
            <div class="input-field">
                <label>Location</label>
                <input id="location" type="text" value="${education.location}" placeholder="Enter your School Location">
            </div>
            <div class="input-field">
                <label>Date</label>
                <input id="date" type="text" value="${education.date}" placeholder="Exp:  2017-2022">
            </div>
            <div class="input-field">
                <label>Gap</label>
                <input id="gap" type="text" value="${education.gap}" placeholder="Enter your GAP SCORE">
            </div>
            <button class="deleteButton" onclick="deleteEducationDetail(${education.id})">Çıkar +</button>
        </div>`;
        educationId++;
        }
        return text;
    }

    function addEducation(){
        educationId++;
        document.getElementById("educations").innerHTML+=
        ` <div id="education-${educationId}" class="fields experience">
        <div class="input-field">
            <label>School Name</label>
            <input id="schoolName"  type="text" placeholder="Enter your School Name">
        </div>
        <div class="input-field">
            <label>Location</label>
            <input id="location" type="text"  placeholder="Enter your School Location">
        </div>
        <div class="input-field">
            <label>Date</label>
            <input id="date" type="text"  placeholder="Exp:  2017-2022">
        </div>
        <div class="input-field">
            <label>Gap</label>
            <input id="gap" type="text"  placeholder="Enter your GAP SCORE">
        </div>
        <button class="deleteButton" onclick="deleteEducationDetail(${educationId})">Çıkar +</button>
    </div>`;
    }

    function deleteEducationDetail(ìd){
        document.getElementById(`education-${ìd}`).remove();
    }


    function setMyReferences(references){
        document.getElementById("reference").innerHTML = createReferenceHtmlTags(references);
    }
    function createReferenceHtmlTags(references){
        let text ="";

        for(let reference of references){
            text+=`<div id="reference-${reference.id}" class="fields experience">
            <div class="input-field">
                <label>Reference Name</label>
                <input id="referanceName"  type="text" value="${reference.name}" placeholder="Enter your reference name">
            </div>
            <div class="input-field">
                <label>Description</label>
                <input id="description" type="text" value="${reference.description}"  placeholder="Enter your Reference Description">
            </div>
            <button class="deleteButton" onclick="deleteReferanceDetail(${reference.id})">Çıkar +</button>
        </div>`;
        referenceId++;
        }

        return text;
    }

    function addReference(){
        referenceId++;
        document.getElementById("references").innerHTML+=
        ` <div id="reference-${referenceId}" class="fields experience">
        <div class="input-field">
            <label>Reference Name</label>
            <input id="referanceName"  type="text" placeholder="Enter your reference name">
        </div>
        <div class="input-field">
            <label>Description</label>
            <input id="description" type="text" placeholder="Enter your Reference Description">
        </div>
        <button class="deleteButton" onclick="deleteReferanceDetail(${referenceId})">Çıkar +</button>
    </div>`;
    }

    function deleteReferanceDetail(ìd){
        document.getElementById(`reference-${ìd}`).remove();
    }

    function setMySocialMedias(socialMedias){
        document.getElementById("socialMedia").innerHTML = createsocialMediaHtmlTags(socialMedias);
    }

    function createsocialMediaHtmlTags(socialMedias){
        let text="";
        for(let socialMedia of socialMedias){
            text+=`<div id="socialMedia-${socialMedia.id}" class="fields experience">
            <div class="input-field">
                <label>Title</label>
                <input id="title" type="text" value="${socialMedia.title}" placeholder="Exp: data-feather='linkedin' linkedin is a title">
            </div>
            <div class="input-field">
                <label>Text</label>
                <input id="text" value="${socialMedia.text}" type="text" placeholder="Exp: /MyLinkedIn">
            </div>
            <div class="input-field">
                <label>Link</label>
                <input id="link" value="${socialMedia.link}" type="text" placeholder="Enter your socail media link">
            </div>
            <button class="deleteButton" onclick="deleteSocialMediaDetail(${socialMedia.id})">Çıkar +</button>
        </div>`;
            socialMediaId++;
        }
        return text;
    }
    function addSocialMedia(){
        socialMediaId++;
        document.getElementById("socialMedias").innerHTML+=
        `<div id="socialMedia-${socialMediaId}" class="fields experience">
        <div class="input-field">
            <label>Title</label>
            <input id="title" type="text" placeholder="Exp: data-feather='linkedin' linkedin is a title">
        </div>
        <div class="input-field">
            <label>Text</label>
            <input id="text" type="text" placeholder="Exp: /MyLinkedIn">
        </div>
        <div class="input-field">
            <label>Link</label>
            <input id="link" type="text" placeholder="Enter your socail media link">
        </div>
        <button class="deleteButton" onclick="deleteSocialMediaDetail(${socialMediaId})">Çıkar +</button>
    </div>`;
    }
    function deleteSocialMediaDetail(ìd){
        document.getElementById(`socialMedia-${ìd}`).remove();
    }

function updatePersonalDetails(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const title = document.getElementById("title").value;
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const aboutMe = document.getElementById("about-me").value;

    axios.post("http://localhost:5000/api/set")
        .then(res=> {
                get();
            });
}