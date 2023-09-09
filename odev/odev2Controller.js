let MyData = {};
let day =  "16";
let month =  "04";
let year =  "1999";
let workExperienceId =0;
get();

function get(){
    axios.get("http://localhost:5000/api/get").then(res=>{
        MyData = res.data;
        setMyInformation(MyData.person);
        setMyWorkExperiences(MyData.workExperiences);
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



function updatePersonalDetails(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const title = document.getElementById("title").value;
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const aboutMe = document.getElementById("about-me").value;

    axios.post("http://localhost:5000/api/set", )
        .then(res=> {
                get();
            });
}