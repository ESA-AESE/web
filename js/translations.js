// Translation database
//Add entries to the dictionary with the id (key) on the left and its value on the right
var translations = {
  'en': {
      //Navigation
    'about': 'About',
    'services': 'Services',
    'news': 'News',
    'team': 'Team',
    'contact': 'Contact Us',
      //Information
    'aboutDesc': 'The Economics Students Association is the governing federated body for all 900+ undergraduate Economics students at the University of Ottawa. From academic representation to social events, we strive to meet the needs of our undergraduate students. We partake in important decisions concerning programs and courses, and represent the students’ best interests. We also work in collaboration with many other associations and faculties on campus to deliver the best student experience and events as possible.',
    
    'servicesDesc': 'Here are some things that the association does for you.',
    
    'academicRep': 'Academic Representation',
    'academicRepDesc': 'We represent the students interests to the department and faculty and aim to protect your rights as a student. If you have an issue with a professor or a course, you may contact the vice-president of academic affairs at vp.academic@ecouo.ca.',
    
    'events': 'Events',
    'eventsDesc': 'The ESA offers a mix of academic, social, and philanthropic events throughout the university year. From academic panels to holiday dinners, the ESA wants to provide an academic year full of well rounded events for all undergraduate economics students.',
    
    'esaTraditions': 'ESA Traditions',
    'esaTraditionsDesc': '101 Week, Econ Week, and our annual trip to New York City are all large traditions of the ESA. Additionnaly, our previous work with Shinerama and Relay for Life is and will continue to be important for our association.',
    
    'postsDesc': 'Updates from the association are posted here. Click on the post to read the update.',
    
    'teamDesc': 'Here are your representatives. Click on their image to read about them.',
      
    'contactDesc1': 'Have any questions? You can send an email to communications@ecouo.ca for general inquiries or an email to a specific executive member, or see us in person at FSS2040 during our office hours. Find our office hours here.',
    
    'contactDesc2': 'As well, be sure to follow us on our social media accounts! Links can be found at bottom of this page.',
      
    'contactDesc3': 'Please note that there will not be office hours during exam season, during the summer, holidays, or university holidays. Office hours are subject to change.'
    
  },
  'fr': {
      //Navigation
    'about': 'A propos',
    'services': 'Services',
    'news': 'Nouvelles',
    'team': 'Equipe',
    'contact': 'Contactez-nous',
      //Information
    'aboutDesc': 'L’Association des Étudiant(e)s des Sciences Économiques est la fédération qui gouverne pour toutes les 900+ étudiant(e)s de premier cycle en Sciences Économiques à l’Université d’Ottawa. De la représentation académique aux événements sociaux, on s’efforce de répondre aux besoins de nos étudiants de premier cycle. On participe en décisions importantes qui concernent les programmes et les cours et nous représentons les meilleurs intérêts des étudiants. On travaille aussi en collaboration avec plusieurs associations et facultés sur campus pour offrir la meilleur expérience et événements possible.',
      
    'servicesDesc': 'Voici quelques activites que l\'association fait pour vous',
    
    'academicRep': 'Représentation académique',
    'academicRepDesc': 'Nous représentons les intérêts des étudiantes auprès du département et de la faculté, et nous visons à protéger vos droits en tant qu\'étudiante. Si vous avez un problème avec un professeur ou un cours, vous pouvez contacter la vice-présidente aux affaires académiques à vp.academic@ecouo.ca',
    
    'events': 'Événements',
    'eventsDesc': 'L\'AÉSÉ propose un mélange d\'événements académiques, sociaux et philanthropiques tout au long de l\'année universitaire. Des panels académiques aux dîners de fête, l\'AÉSÉ souhaite organiser une année académique riche en événements bien organisés pour tous les étudiants en économie de premier cycle !',
    
    'esaTraditions': 'Traditions de l’AÉSÉ',
    'esaTraditionsDesc': 'La Semaine 101, la Semaine Écono et notre voyage annuel à New York font partie des grandes traditions de l\'AÉSÉ. De plus, notre travail précédent avec Shinerama et Relais pour la vie est et sera important pour notre association.',
    
    'postsDesc': 'Les mises à jour de l\'association sont affichées ici. Cliquez sur le post pour lire la mise à jour.',
    
    'teamDesc': 'Voici vos représentants. Cliquez sur leur image pour lire à leur sujet.',
      
    'contactDesc1': 'Avez-vous des questions ? Vous pouvez envoyer un courrier électronique à communications@ecouo.ca pour des demandes d\'ordre général ou un courrier électronique à un membre de la direction spécifique, ou nous voir en personne à FSS2040 pendant les heures de bureau. Retrouvez nos heures de bureau ici.',
    
    'contactDesc2': 'De plus, assurez-vous de nous suivre sur nos comptes de médias sociaux ! Les liens peuvent être trouvés en bas de cette page.',
      
    'contactDesc3': 'Veuillez noter qu'il n'y aura pas d\'heures de bureau pendant la saison des examens, l\'été, les vacances ou les vacances universitaires. Les heures de bureau sont sujettes à changement.'
  }
}

// Listen to changes in the select menu
$("#languageSelect").change(function() {
  
  // Get language code from the selected option
  var langCode = $("#languageSelect option:selected").val();
  
  // Fetch the string from the translation database
  // Create strings from the database by assigning a name to the string and then referencing the key 
    var about = translations[langCode]['about'];
    var services = translations[langCode]['services'];    
    var news = translations[langCode]['news']; 
    var team = translations[langCode]['team']; 
    var contact = translations[langCode]['contact']; 
    var aboutDesc = translations[langCode]['aboutDesc'];
    var servicesDesc = translations[langCode]['servicesDesc'];
    var academicRep = translations[langCode]['academicRep'];    
    var academicRepDesc = translations[langCode]['academicRepDesc']; 
    var events = translations[langCode]['events']; 
    var eventsDesc = translations[langCode]['eventsDesc']; 
    var esaTraditions = translations[langCode]['esaTraditions']; 
    var esaTraditionsDesc = translations[langCode]['esaTraditionsDesc']; 
    var postsDesc = translations[langCode]['postsDesc']; 
    var teamDesc = translations[langCode]['teamDesc']; 
    var contactDesc1 = translations[langCode]['contactDesc1']; 
    var contactDesc2 = translations[langCode]['contactDesc2']; 
    var contactDesc3 = translations[langCode]['contactDesc3']; 
    

  // Set HTML text to the translated string
  $("#nav-about").text(about);
  $("#nav-services").text(services);
  $("#nav-news").text(news);
  $("#nav-team").text(team);
  $("#nav-contact").text(contact);
  $("#aboutDesc").text(aboutDesc);
    
  $("#servicesDesc").text(servicesDesc);
  $("#academicRep").text(academicRep);
  $("#academicRepDesc").text(academicRepDesc);
  $("#events").text(events);
  $("#eventsDesc").text(eventsDesc);
  $("#esaTraditions").text(esaTraditions);
  $("#esaTraditionsDesc").text(esaTraditionsDesc);
  $("#postsDesc").text(postsDesc);
  $("#teamDesc").text(teamDesc);
  $("#contactDesc1").text(contactDesc1);
  $("#contactDesc2").text(contactDesc2);
  $("#contactDesc3").text(contactDesc3);
}).change(); // This last bit, ".change()" is to invoke the change manually to ensure that the text is fetched from the translation database right away