(function(){

var P={

"Web Development":["HTML","CSS","JavaScript","Git & GitHub","React.js","Responsive Projects"],

"Full Stack Development":["HTML & CSS","JavaScript","React.js","Node.js","Express.js","MongoDB"],

"App Development":["Programming Basics","Dart","Flutter UI","State Management","APIs","Publishing"],

"Software Engineering":["Programming Basics","Data Structures","Algorithms","Git & GitHub","System Design","Testing"],

"Artificial Intelligence":["Python","Math Basics","Data Handling","ML Basics","Neural Networks","AI Projects"],

"Machine Learning":["Python","Statistics","Pandas & NumPy","Supervised Learning","Model Evaluation","Deployment"],

"Data Science":["Python","SQL","Statistics","Visualization","Machine Learning","Case Studies"],

"Cybersecurity":["Networking","Linux","Security Basics","Web Security","Ethical Hacking","Incident Response"],

"UI/UX Design":["Design Basics","Color & Type","Wireframing","Figma","Prototyping","Case Study"],

"Cloud Computing":["Linux","Networking","Cloud Basics","Compute & Storage","Serverless","Cloud Projects"],

"DevOps Engineering":["Linux","Git & GitHub","Docker","CI/CD","Kubernetes","Monitoring"],

"Data Analytics":["Excel","SQL","Statistics","Visualization","Dashboards","Case Studies"]

};

var $=function(id){return document.getElementById(id)};

var chk='<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg>';

var lock='<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>';



var tech=["HTML","CSS","JavaScript","Git & GitHub","React.js"];

var stage=0; /* 0 lessons done, 1 project submitted, 2 under review, 3 approved(unlock) */

var cur=0;

var labels=["Mark lessons complete","Submit project","Approve project (preview)","Approve project (preview)"];

function render(){

  var ul=$("nodes");ul.innerHTML="";

  tech.forEach(function(t,i){

    var s=i<cur?"done":i===cur?"now":"locked";

    var sub=s==="done"?"Project approved":s==="locked"?"Locked until the previous project is approved":

      ["Lessons in progress","Project required","Submitted, under review"][Math.min(stage,2)];

    var li=document.createElement("li");li.className="node "+s;

    li.innerHTML='<span class="dot">'+(s==="done"?chk:s==="locked"?lock:(i+1))+'</span><div><b>'+t+'</b><small>'+sub+'</small></div>';

    ul.appendChild(li);

  });

  var pct=Math.round((cur*3+Math.min(stage,3))/(tech.length*3)*100);

  $("rmPct").textContent=pct+"% complete";$("rmBar").style.width=pct+"%";

  var b=$("sim");

  if(cur>=tech.length){b.textContent="Restart preview";b.disabled=false;return}

  b.textContent=["Complete lessons","Submit project","Approve project (preview)"][Math.min(stage,2)];

}

$("sim").onclick=function(){

  if(cur>=tech.length){cur=0;stage=0;render();return}

  if(stage<2){stage++}else{cur++;stage=0}

  render();

};

render();




var list=$("pathList"),sel="Web Development";

Object.keys(P).forEach(function(k){

 var b=document.createElement("button");b.className="path";b.type="button";

 b.setAttribute("aria-pressed",k===sel);

 b.innerHTML='<span>'+k+'</span><small>'+P[k].length+' modules</small>';

b.onclick=function(){sel=k;[].forEach.call(list.children,function(c){c.setAttribute("aria-pressed",c===b)});road();det()};

list.appendChild(b);

});

function road(){

$("rdTitle").textContent=sel;$("rdCount").textContent=P[sel].length+" modules";

$("rdList").innerHTML=P[sel].map(function(m,i){return '<li>'+m+'<span>'+(i===0?"Starts here":"Locked")+'</span></li>'}).join("");

}

road();


var D={

"Web Development":{s:"Build websites and web apps that people use in the browser.",w:"Anyone who wants to design and ship websites, from first page to a deployed React app.",dur:"6–8 months",lvl:"Beginner friendly",roles:["Frontend Developer","Web Developer","Freelance Web Designer"],tools:["VS Code","Chrome DevTools","Git","React"],m:["7|Personal portfolio","10|Responsive landing page","21|Quiz application","4|Open-source contribution","21|Task management dashboard","14|Product showcase site"]},

"Full Stack Development":{s:"Own an entire product: the interface, the server and the database.",w:"Learners who want to build complete apps on their own.",dur:"9–12 months",lvl:"Beginner friendly",roles:["Full Stack Developer","MERN Developer","Startup Engineer"],tools:["React","Node.js","Express","MongoDB"],m:["14|Portfolio site","21|Weather dashboard","21|E-commerce interface","14|REST API","10|Login and auth server","14|Full MERN application"]},

"App Development":{s:"Create mobile apps for Android and iOS from a single codebase.",w:"Students who want to publish their own mobile apps.",dur:"5–7 months",lvl:"Basic coding helps",roles:["Mobile App Developer","Flutter Developer","Cross-platform Engineer"],tools:["Dart","Flutter","Android Studio","Firebase"],m:["10|Command-line calculator","14|Expense tracker logic","14|Recipe app interface","10|Shopping cart","10|News reader app","5|Store-ready app"]},

"Software Engineering":{s:"Learn the fundamentals that every strong engineer relies on.",w:"Learners aiming for software roles and technical interviews.",dur:"8–10 months",lvl:"Beginner friendly",roles:["Software Engineer","Backend Engineer","SDE"],tools:["Python or Java","Git","Unit testing","Diagramming"],m:["14|Library management system","21|Custom data collections","21|Pathfinding visualizer","5|Team repository workflow","14|URL shortener design","7|Test suite for a project"]},

"Artificial Intelligence":{s:"Understand how intelligent systems learn, then build your own.",w:"Curious learners ready to work with Python and some math.",dur:"8–10 months",lvl:"Some math comfort",roles:["AI Engineer","Prompt Engineer","AI Product Developer"],tools:["Python","NumPy","PyTorch","Jupyter"],m:["14|Text analyzer","14|Linear algebra notebook","10|Dataset cleaner","14|House price predictor","21|Handwritten digit classifier","21|Question answering chatbot"]},

"Machine Learning":{s:"Train models that learn from data and put them into use.",w:"Students who enjoy statistics and want to build predictive models.",dur:"7–9 months",lvl:"Basic Python helps",roles:["ML Engineer","Applied Scientist","Data Scientist"],tools:["Python","Pandas","scikit-learn","Flask"],m:["14|Data processing script","14|A/B test analysis","10|Exploratory analysis report","21|Customer churn predictor","10|Model comparison study","10|Prediction API"]},

"Data Science":{s:"Turn raw data into answers, forecasts and decisions.",w:"Learners who like numbers, questions and storytelling.",dur:"7–9 months",lvl:"Beginner friendly",roles:["Data Scientist","Data Analyst","Research Associate"],tools:["Python","SQL","Matplotlib","Jupyter"],m:["14|Data toolkit","14|Sales database queries","14|Survey analysis","10|Insights dashboard","21|Demand forecast model","14|End-to-end case study"]},

"Cybersecurity":{s:"Learn how systems are attacked so you can defend them.",w:"Learners who enjoy puzzles, networks and thinking like an attacker.",dur:"7–9 months",lvl:"Basic IT helps",roles:["Security Analyst","Penetration Tester","SOC Analyst"],tools:["Linux","Wireshark","Burp Suite","Nmap"],m:["14|Home network map","10|Hardened Linux server","10|Password audit tool","14|Vulnerability report","21|Capture the flag write-ups","10|Incident response playbook"]},

"UI/UX Design":{s:"Design products that are clear, usable and good to look at.",w:"Creative learners who want to design apps and websites.",dur:"4–6 months",lvl:"No coding needed",roles:["UI Designer","UX Designer","Product Designer"],tools:["Figma","FigJam","Miro","Notion"],m:["7|Poster design","7|Brand style guide","10|App wireframes","14|Mobile app interface","10|Clickable prototype","14|Portfolio case study"]},

"Cloud Computing":{s:"Run applications on the internet’s infrastructure, reliably and at scale.",w:"Learners who want to deploy and manage real systems.",dur:"6–8 months",lvl:"Basic IT helps",roles:["Cloud Engineer","Solutions Architect","Site Reliability Engineer"],tools:["AWS","Linux","Terraform","CLI"],m:["10|Server setup","10|Network diagram","10|Static site hosting","14|Scalable web app","10|Serverless API","14|Three-tier deployment"]},

"DevOps Engineering":{s:"Connect development and operations with automation.",w:"Learners who like tooling, scripting and shipping software faster.",dur:"6–8 months",lvl:"Basic coding helps",roles:["DevOps Engineer","Platform Engineer","Release Engineer"],tools:["Docker","GitHub Actions","Kubernetes","Grafana"],m:["10|Shell scripts toolkit","5|Branching workflow","10|Containerized app","10|Automated pipeline","14|Cluster deployment","7|Metrics dashboard"]},

"Data Analytics":{s:"Find patterns in business data and present them clearly.",w:"Learners who want a fast route to analyst roles.",dur:"4–6 months",lvl:"Beginner friendly",roles:["Data Analyst","Business Analyst","BI Developer"],tools:["Excel","SQL","Power BI","Tableau"],m:["10|Sales workbook","14|Reporting queries","10|Trend analysis","10|Chart story","14|KPI dashboard","14|Business case study"]}

};

function det(){

  var d=D[sel],mods=P[sel],days=0;

  var rows=d.m.map(function(x,i){var p=x.split("|");days+=+p[0];return '<li><span class="i">'+(i+1)+'</span><span class="nm">'+mods[i]+'</span><em>'+p[0]+' days</em><small>Project: '+p[1]+'</small></li>'}).join("");

  var chips=function(a){return '<div class="chips">'+a.map(function(t){return '<span>'+t+'</span>'}).join("")+'</div>'};

  $("det").innerHTML='<div><h3>'+sel+'</h3><p class="lede">'+d.s+'</p>'+

   '<div class="facts"><div><b>'+d.dur+'</b>Typical duration</div><div><b>'+mods.length+'</b>Modules</div><div><b>'+days+'</b>Learning days</div><div><b>'+d.lvl+'</b>Starting level</div></div>'+

   '<h4>Who it is for</h4><p style="margin-top:6px">'+d.w+'</p><h4>Career roles</h4>'+chips(d.roles)+'<h4>Tools you will use</h4>'+chips(d.tools)+'</div>'+

   '<div><h4 style="margin-top:0">Module-by-module roadmap</h4><p style="font-size:.88rem;margin-top:4px">Each module ends with a project. Approval unlocks the next one.</p><ol class="dl">'+rows+'</ol></div>';

}

det();

})();
