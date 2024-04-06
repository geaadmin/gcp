var stepNumber = $("#stepNumber");
var title = $("#HTML-title");
var desc = $("#HTML-desc");

function hello(a,b,c) {
  var updateContent = function() {
    stepNumber.html(a);
    title.html(b);
    desc.html(c);
  }
  
  var tl = new TimelineMax();
  tl.to(stepNumber, 1, {ease: Power4.easeOut, opacity: 0})
  .to(title, 1, {ease: Power4.easeOut, opacity: 0}, "-=0.80")
  .to(desc, 1, {ease: Power4.easeOut, opacity: 0}, "-=0.80")
  .call(updateContent)
  .to(stepNumber, 0, {ease: Power4.easeOut, y: 60})
  .to(title, 0, {ease: Power4.easeOut, y: 60})
  .to(desc, 0, {ease: Power4.easeOut, y: 60})
  .to(stepNumber, 1, {ease: Power4.easeOut, opacity: 1, y:0})
  .to(title, 1, {ease: Power4.easeOut, opacity: 1, y:0}, "-=0.8")
  .to(desc, 1.4, {ease: Power4.easeOut, opacity: 1, y:0}, "-=0.8")
  tl.timeScale(3);
  return tl;
};



var listMe = document.querySelectorAll("svg g#Sections path"); 

listMe.forEach(function(element) {
    element.onclick = function(event) {
      let hotpie = document.getElementsByClassName("active");
      while (hotpie.length)
        hotpie[0].classList.remove("active");
      event.target.classList.add("active");
     var pieSlice = element.id - 1;
      
     let stepText = ratingSteps.step[pieSlice].stepNumber;
     let titleText = ratingSteps.step[pieSlice].title;
     let descText = ratingSteps.step[pieSlice].desc;

     hello(stepText, titleText, descText);
     
     // document.querySelector("#stepNumber").innerText = ratingSteps.step[pieSlice].stepNumber;
     // document.querySelector("#HTML-title").innerText = ratingSteps.step[pieSlice].title;
     // document.querySelector("#HTML-desc").innerText = ratingSteps.step[pieSlice].desc;
  };
});



 // .add{$("#stepNumber").html(title)}







var ratingSteps = { 
  "step" : [
  {
    "index": 0,
    "stepNumber": "Step 1",
    "phase": "Consultant Engagement",
    "title": "Understanding and Integrating GEA Standards",
    "desc": "Consultants guide organizations to comprehend and integrate the GEA Standard into their management systems, aligning processes, policies, and practices.",
    "point2": "Comprehend GEA Standard requirements",
    "point3": "Integrate standards into management systems",
    "point4": "",
    "point5": "",
    "point6": ""
  },
  {
    "index": 1,
    "stepNumber": "Step 2",
    "phase": "Consultant Engagement",
    "title": "Developing and Enhancing Management Systems",
    "desc": "Building or refining management systems to ensure robustness, effectiveness, and compliance with the GEA Standard.",
    "point2": "Build or refine management systems",
    "point3": "Ensure GEA Standard compliance",
    "point4": "",
    "point5": "",
    "point6": ""
  },
  {
    "index": 2,
    "stepNumber": "Step 3",
    "phase": "Consultant Engagement",
    "title": "Conducting Internal Reviews and Gap Analyses",
    "desc": "Performing internal assessments to identify compliance status and improvement areas, guiding the organization in creating action plans.",
    "point2": "Identify compliance status and improvement areas",
    "point3": "Guide in action plan creation",
    "point4": "",
    "point5": "",
    "point6": ""
  },
  {
    "index": 3,
    "stepNumber": "Step 4",
    "phase": "Consultant Engagement",
    "title": "Implementing Targeted Improvements",
    "desc": "Assisting in the implementation of necessary improvements across the GEA Standard’s dimensions, ensuring readiness for external evaluation.",
    "point2": "Implement necessary improvements",
    "point3": "Ensure readiness for external evaluation",
    "point4": "",
    "point5": "",
    "point6": ""
  },
  {
    "index": 4,
    "stepNumber": "Step 5",
    "phase": "GLAB Preliminary Assessment",
    "title": "Preliminary Assessment by GLAB",
    "desc": "GLAB conducts preliminary assessment to evaluate the organization’s readiness and alignment with the GEA Standard, identifying any gaps.",
    "point2": "Evaluate organization’s readiness",
    "point3": "Identify gaps for improvement",
    "point4": "",
    "point5": "",
    "point6": ""
  },
  {
    "index": 5,
    "stepNumber": "Step 6",
    "phase": "Gap Rectification",
    "title": "Technical Guidance Sessions",
    "desc": "If gaps are identified, GLAB provides technical guidance to the organization, detailing the areas for improvement.",
    "point2": "Provide technical guidance for identified gaps",
    "point3": "Detail the areas for improvement",
    "point4": "",
    "point5": "",
    "point6": ""
  },
  {
    "index": 6,
    "stepNumber": "Step 7",
    "phase": "Consultant Engagement",
    "title": "Rectification and Improvement",
    "desc": "Organization works with consultants to address the identified gaps, refining the management system for GEA compliance.",
    "point2": "Address identified gaps with consultant help",
    "point3": "Refine management system for GEA compliance",
    "point4": "",
    "point5": "",
    "point6": ""
  },
  {
    "index": 7,
    "stepNumber": "Step 8",
    "phase": "GLAB Formal Assessment",
    "title": "Formal Audit and Certification",
    "desc": "Upon addressing the gaps, GLAB conducts a formal audit to verify full compliance with the GEA Standard, leading to certification.",
    "point2": "Conduct formal audit for full compliance",
    "point3": "Lead to certification upon successful compliance",
    "point4": "",
    "point5": "",
    "point6": ""
  },
  {
    "index": 8,
    "stepNumber": "Step 9",
    "phase": "Continuous Improvement",
    "title": "Continuous Improvement and Monitoring",
    "desc": "After certification, the organization commits to continuous improvement, regularly monitoring and enhancing compliance with the GEA Standard.",
    "point2": "Commit to continuous improvement",
    "point3": "Regularly monitor and enhance GEA compliance",
    "point4": "",
    "point5": "",
    "point6": ""
  },
  {
    "index": 9,
    "stepNumber": "Step 10",
    "phase": "Certification Maintenance",
    "title": "Maintaining Certification",
    "desc": "The organization prepares for periodic reassessment audits by GLAB to maintain GEA Certification, ensuring ongoing alignment with the Standard.",
    "point2": "Prepare for periodic reassessment audits",
    "point3": "Ensure ongoing alignment with GEA Standard",
    "point4": "",
    "point5": "",
    "point6": ""
  }
]
  
};