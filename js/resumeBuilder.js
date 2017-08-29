/*
This is empty on purpose! Your code to build the resume will go here.
  */
$(document).click(function(loc)
{

    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

var work = {
    "jobs": [{
            "employer": "Coca-Cola Brazil",
            "title": "C# Developer",
            "location": "Manaus",
            "dates": "2012-2014",
            "description":"Create project to desktop with C# and oracle using visual studio"
        },
        {
            "employer": "Samsung",
            "title": "Sw Developer",
            "location": "Manaus",
            "dates": "2014-until now",
            "description":"Working with android to solve samsung apps problems"
        }
    ]
 }

 var project = {
    "projects": [{
            "project": "Mobile App Projects",
            "title": "Bride Manager for android and Salmos MP3 for windows Phone",
            "dates": "2013 - 2014",
            "description": "Apps to manager marrieds and listening bible salmos",
            "images": ["images//app_noiva.png","images//app_salmos.png"]
        }
    ]
 }
var bio = {
    "name": "Iasmim Souza da Cunha",
    "role": "SW Developer",
    "welcomeMessage": "Hi! welcome to my page. =)",
    "skills":["HardWorking","Android","Java", "Focused"],
    "role":"Front End Developer"
    ,
    "contacts":{
      "mobile": "(92) 98261-5234",
        "email": "iasmim.souza26@gmail.com",
        "github": "https://github.com/Iasmim",
        "twitter": "iasmim_souza",
        "location": "Rua Manaus, 46 - Coroado 3, Manaus - AM, 69082-190"
    },
    "biopic":"images//biopic.jpg"

}
var educations = {
    "schools": [{
            "name": "Amazonas States University",
            "city": "Manaus",
            "degree": "Bachelor's degree",
            "dates":"2009-2014",
            "location":" Av. Darcy Vargas, 1200 - Parque Dez, Manaus - AM, 69050-020",
            "url":"www.uea.edu.br",
            "major":"CS"
        },
        {
            "name": "FUCAPI",
            "city": "Manaus",
            "degree": "MBA",
            "dates":"2016-2017",
            "location":"Mario Andreaza, Distrito, Manaus",
            "url":"www.fucapi.edu.br",
            "major":"CS"
        },
        {
            "name": "FISK",
            "city": "Manaus",
            "degree": "English Course",
            "dates":"2014-2017",
            "location":"Av. das Flôres, 246 - Aleixo, Manaus - AM, 69083-180",
            "url":"fisk.com.br",
            "major":"Advanced"
        }
    ],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://classroom.udacity.com/nanodegrees/"
    }]
}


bio.display = function()
{

     var formattedName = HTMLheaderName.replace("%data%", bio.name);
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
     var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
     $("#header").append(formattedName);
     $("#header").append(formattedRole);
     $("#header").append(formattedbioPic);
     $("#header").append(HTMLwelcomeMsg.replace("%data%", "welcome to my resumé"));

    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    for(i in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[i]);
        $("#footerContacts").append(formattedContactInfo[i]);
    }


    if(bio.skills.length > 0)
    {
         $("#header").append(HTMLskillsStart);
         for(i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }
}

bio.display();

work.display =  function(){
    for( job in work.jobs)
    {

        var employer =  HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = employer + title;
        var dates =  HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var description =  HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(dates);
        $(".work-entry:last").append(description);

    }
}

work.display();

project.display = function()
{
    for(p in project.projects)
    {
       $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.projects[p].title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.projects[p].dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.projects[p].description);

        $(".project-entry:last").append(formattedprojectTitle);
        $(".project-entry:last").append(formattedprojectDates);
        $(".project-entry:last").append(formattedprojectDescription);


        if(project.projects[p].images.length > 0)
        {
            for(img in project.projects[p].images)
            {
                  var formattedprojectImage = HTMLprojectImage.replace("%data%", project.projects[p].images[img]);
                  $(".project-entry:last").append(formattedprojectImage);
            }
        }
    }
}
project.display();

educations.display = function() {
    if(educations.schools.length > 0 || educations.onlineCourses.length > 0) {
        for(i in educations.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", educations.schools[i].name).replace("#",educations.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", educations.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", educations.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", educations.schools[i].location);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", educations.schools[i].major);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedschoolMajor);
        }

        if(educations.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in educations.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", educations.onlineCourses[i].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", educations.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", educations.onlineCourses[i].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", educations.onlineCourses[i].url).replace("#", educations.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }

    }
}

educations.display();

$("#mapDiv").append(googleMap);
initializeMap();