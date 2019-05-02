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
    'aboutDesc': 'The Economics Students Association is the governing federated body for all 900+ undergraduate Economics students at the University of Ottawa. From academic representation to social events, we strive to meet the needs of our undergraduate students. We partake in important decisions concerning programs and courses, and represent the students’ best interests. We also work in collaboration with many other associations and faculties on campus to deliver the best student experience and events as possible.'
  },
  'fr': {
      //Navigation
    'about': 'A propos',
    'services': 'Services',
    'news': 'Nouvelles',
    'team': 'Equipe',
    'contact': 'Contactez-nous',
      //Information
    'aboutDesc': 'L’Association des Étudiant(e)s des Sciences Économiques est la fédération qui gouverne pour toutes les 900+ étudiant(e)s de premier cycle en Sciences Économiques à l’Université d’Ottawa. De la représentation académique aux événements sociaux, on s’efforce de répondre aux besoins de nos étudiants de premier cycle. On participe en décisions importantes qui concernent les programmes et les cours et nous représentons les meilleurs intérêts des étudiants. On travaille aussi en collaboration avec plusieurs associations et facultés sur campus pour offrir la meilleur expérience et événements possible.'
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
    
  // Set HTML text to the translated string
  $("#nav-about").text(about);
  $("#nav-services").text(services);
  $("#nav-news").text(news);
  $("#nav-team").text(team);
  $("#nav-contact").text(contact);
  $("#aboutDesc").text(aboutDesc);
}).change(); // This last bit, ".change()" is to invoke the change manually to ensure that the text is fetched from the translation database right away