function TransMod(){
	this.translate = function(lang, token) {
		return library[lang][token];
	}
    
    /**
    *
    *English library starts here
    *
    **/
	
	var library = new Array();
	
	library["en"] = new Array();
    
    //Navigation items
    library["en"]["translatable.nav-about"] = "About";
    library["en"]["translatable.nav-services"] = "Services";
    library["en"]["translatable.nav-news"] = "News"
    library["en"]["translatable.nav-team"] = "Team"
    library["en"]["translatable.nav-contact"] = "Contact Us"
    
    /**Information items **/
    
    //About
	library["en"]["translatable.about"] = "The Economics Students Association is the governing federated body for all 900+ undergraduate Economics students at the University of Ottawa. From academic representation to social events, we strive to meet the needs of our undergraduate students. We partake in important decisions concerning programs and courses, and represent the students’ best interests. We also work in collaboration with many other associations and faculties on campus to deliver the best student experience and events as possible.";
    
    //Services
    library["en"]["translatable.services-desc"] = "Here are some of the things that the association does for you."
    
    library["en"]["translatable.services-academic-representation-header"] = "Academic Representation"
	library["en"]["translatable.services-academic-representation"] = "We represent the students' interests to the department and faculty and aim to protect your rights as a student. If you have an issue with a professor or a course, you may contact the vice-president of academic affairs at vp.academic@ecouo.ca.";
    
    library["en"]["translatable.services-events-header"] = "Events"
	library["en"]["translatable.events"] = "The ESA offers a mix of academic, social, and philanthropic events throughout the school year. From academic panels to holiday dinners, the ESA wants to provide an academic year full of well rounded events for all undergraduate economics students!";
    
    library["en"]["translatable.services-esa-traditions-header"] = "ESA Traditions"
    library["en"]["translatable.esa-traditions"] = "101 Week, Econ Week, and our annual trip to New York City are all large traditions of the ESA. Additionnaly, our previous work with Shinerama and Relay for Life is and will continue to be important for our association";
	
    //News
    library["en"]["translatable.news-desc"] = "Updates from the association are posted here. Click on the post to read the update."
    
    //Team
    library["en"]["translatable.team-desc"] = "Here are your representatives. Click on their image to read their biography."
    
    library["en"]["translatable.team-president"] = "President"
    library["en"]["translatable.team-president-desc"] = "Text"
    
    library["en"]["translatable.team-vp-internal"] = "Vice President of Internal Affairs"
    library["en"]["translatable.team-vp-internal-desc"] = "Text"
    
    library["en"]["translatable.team-vp-finance"] = "Vice President of Finance"
    library["en"]["translatable.team-vp-finance-desc"] = "Text"
    
    library["en"]["translatable.team-vp-communications"] = "Vice President of Communications"
    library["en"]["translatable.team-vp-finance-desc"] = "Text"
    
    library["en"]["translatable.team-vp-academic"] = "Vice President of Academic Affairs"
    library["en"]["translatable.team-vp-academic-desc"] = "Text"
    
    library["en"]["translatable.team-vp-social"] = "Vice President of Social Affairs"
    library["en"]["translatable.team-vp-social-desc"] = "Text"
    
    library["en"]["translatable.team-vp-bilingual"] = "Vice President of Bilingualism and Outreach"
    library["en"]["translatable.team-vp-bilingual-desc"] = "Text"
    
    library["en"]["translatable.team-vp-philanthropy"] = "Vice President of Philanthropy"
    library["en"]["translatable.team-vp-philanthropy-desc"] = "Text"
    
    library["en"]["translatable.team-dir-it"] = "Director of Information Technology"
    library["en"]["translatable.team-dir-it-desc"] = "Text"
    
    library["en"]["translatable.team-dir-external"] = "Director of External Affairs"
    library["en"]["translatable.team-dir-external-desc"] = "Text"
    
    library["en"]["translatable.team-dir-promo"] = "Director of Promotions"
    library["en"]["translatable.team-dir-promo-desc"] = "Text"
    
    library["en"]["translatable.team-jvp-academic"] = "Junior Vice President of Academic Affairs"
    library["en"]["translatable.team-jvp-academic-desc"] = "Text"
    
    library["en"]["translatable.team-jvp-social"] = "Junior Vice President of Social Affairs"
    library["en"]["translatable.team-jvp-social-desc"] = "Text"
    
    library["en"]["translatable.team-jvp-philanthropy"] = "Junior Vice President of Philanthropy"
    library["en"]["translatable.team-jvp-philanthropy-desc"] = "Text"
    
    library["en"]["translatable.team-jvp-bilingual"] = "Junior Vice President of Bilingualism and Outreach"
    library["en"]["translatable.team-jvp-bilingual-desc"] = "Text"
    
    //Contact us
    library["en"]["translatable.contact"] = "101 Week, Econ Week, and our annual trip to New York City are all large traditions of the ESA. Additionnaly, our previous work with Shinerama and Relay for Life is and will continue to be important for our association";
    
    //
    
    /**
    *
    *French library starts here
    *
    **/
	
    
	library["fr"] = new Array();
    
    //Navigation items
    library["fr"]["translatable.nav-about"] = "Autour";
    library["fr"]["translatable.nav-services"] = "Services";
    library["fr"]["translatable.nav-news"] = "Nouvelles"
    library["fr"]["translatable.nav-team"] = "Équipe"
    library["fr"]["translatable.nav-contact"] = "Contactez-nous"
    
	library["fr"]["translatable.about"] = "L’Association des Étudiant(e)s des Sciences Économiques est la fédération qui gouverne pour toutes les 900+ étudiant(e)s de premier cycle en Sciences Économiques à l’Université d’Ottawa. De la représentation académique aux événements sociaux, on s’efforce de répondre aux besoins de nos étudiants de premier cycle. On participe en décisions importantes qui concernent les programmes et les cours et nous représentons les meilleurs intérêts des étudiants. On travaille aussi en collaboration avec plusieurs associations et facultés sur campus pour offrir la meilleur expérience et événements possible.";
	
    //Services
    library["fr"]["translatable.services-desc"] = "Here are some of the things that the association does for you."
    
    library["fr"]["translatable.services-academic-representation-header"] = "Représentation académique"
	library["fr"]["translatable.services-academic-representation"] = "We represent the students' interests to the department and faculty and aim to protect your rights as a student. If you have an issue with a professor or a course, you may contact the vice-president of academic affairs at vp.academic@ecouo.ca.";
    
    library["fr"]["translatable.services-events-header"] = "Events"
	library["fr"]["translatable.events"] = "The ESA offers a mix of academic, social, and philanthropic events throughout the school year. From academic panels to holiday dinners, the ESA wants to provide an academic year full of well rounded events for all undergraduate economics students!";
    
    library["fr"]["translatable.services-esa-traditions-header"] = "ESA Traditions"
    library["fr"]["translatable.esa-traditions"] = "101 Week, Econ Week, and our annual trip to New York City are all large traditions of the ESA. Additionnaly, our previous work with Shinerama and Relay for Life is and will continue to be important for our association";
	
    //News
    library["fr"]["translatable.news-desc"] = "Updates from the association are posted here. Click on the post to read the update."
    
    //Team
    library["fr"]["translatable.team-desc"] = "Here are your representatives. Click on their image to read their biography."
    
    library["fr"]["translatable.team-president"] = "President"
    library["fr"]["translatable.team-president-desc"] = "Text"
    
    library["fr"]["translatable.team-vp-internal"] = "Vice President of Internal Affairs"
    library["fr"]["translatable.team-vp-internal-desc"] = "Text"
    
    library["fr"]["translatable.team-vp-finance"] = "Vice President of Finance"
    library["fr"]["translatable.team-vp-finance-desc"] = "Text"
    
    library["fr"]["translatable.team-vp-communications"] = "Vice President of Communications"
    library["fr"]["translatable.team-vp-finance-desc"] = "Text"
    
    library["fr"]["translatable.team-vp-academic"] = "Vice President of Academic Affairs"
    library["fr"]["translatable.team-vp-academic-desc"] = "Text"
    
    library["fr"]["translatable.team-vp-social"] = "Vice President of Social Affairs"
    library["fr"]["translatable.team-vp-social-desc"] = "Text"
    
    library["fr"]["translatable.team-vp-bilingual"] = "Vice President of Bilingualism and Outreach"
    library["fr"]["translatable.team-vp-bilingual-desc"] = "Text"
    
    library["fr"]["translatable.team-vp-philanthropy"] = "Vice President of Philanthropy"
    library["fr"]["translatable.team-vp-philanthropy-desc"] = "Text"
    
    library["fr"]["translatable.team-dir-it"] = "Director of Information Technology"
    library["fr"]["translatable.team-dir-it-desc"] = "Text"
    
    library["fr"]["translatable.team-dir-external"] = "Director of External Affairs"
    library["fr"]["translatable.team-dir-external-desc"] = "Text"
    
    library["fr"]["translatable.team-dir-promo"] = "Director of Promotions"
    library["fr"]["translatable.team-dir-promo-desc"] = "Text"
    
    library["fr"]["translatable.team-jvp-academic"] = "Junior Vice President of Academic Affairs"
    library["fr"]["translatable.team-jvp-academic-desc"] = "Text"
    
    library["fr"]["translatable.team-jvp-social"] = "Junior Vice President of Social Affairs"
    library["fr"]["translatable.team-jvp-social-desc"] = "Text"
    
    library["fr"]["translatable.team-jvp-philanthropy"] = "Junior Vice President of Philanthropy"
    library["fr"]["translatable.team-jvp-philanthropy-desc"] = "Text"
    
    library["fr"]["translatable.team-jvp-bilingual"] = "Junior Vice President of Bilingualism and Outreach"
    library["fr"]["translatable.team-jvp-bilingual-desc"] = "Text"
    
    //Contact us
    library["fr"]["translatable.contact"] = "101 Week, Econ Week, and our annual trip to New York City are all large traditions of the ESA. Additionnaly, our previous work with Shinerama and Relay for Life is and will continue to be important for our association";
	
}

( function(){
	
	function InitStaticText(lang){
		var langModule = new TransMod();
        
        //Navigation items
        $("#nav-about").html(langModule.translate(lang, $("#nav-about").attr("data-token")));
        $("#nav-services").html(langModule.translate(lang, $("#nav-services").attr("data-token")));
        $("#nav-news").html(langModule.translate(lang, $("#nav-news").attr("data-token")));
        $("#nav-team").html(langModule.translate(lang, $("#nav-team").attr("data-token")));
        $("#nav-contact").html(langModule.translate(lang, $("#nav-contact").attr("data-token")));
        
        //Information items
		
		$("#title").html(langModule.translate(lang, $("#title").attr("data-token")));
		$("#intro").html(langModule.translate(lang, $("#intro").attr("data-token")));
		$("#first-item").html(langModule.translate(lang, $("#first-item").attr("data-token")));
		$("#second-item").html(langModule.translate(lang, $("#second-item").attr("data-token")));
		$("#third-item").html(langModule.translate(lang, $("#third-item").attr("data-token")));
	}	
	
	InitStaticText("en");
	$("#en").click(function(){ 
		InitStaticText("en");
	});
	$("#fr").click(function(){ 
		InitStaticText("fr");
	});
	
})();