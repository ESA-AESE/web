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
    
    'newsDesc': 'Updates from the association are posted here. Click on the post to read the update.',
    
    'teamDesc': 'Here are your representatives. Click on their image to read about them.',
      
    'contactDesc1': 'Have any questions? You can send an email to communications@ecouo.ca for general inquiries or an email to a specific executive member, or see us in person at FSS2040 during our office hours. Find our office hours here.',
    
    'contactDesc2': 'As well, be sure to follow us on our social media accounts! Links can be found at bottom of this page.',
      
    'contactDesc3': 'Please note that there will not be office hours during exam season, during the summer, holidays, or university holidays. Office hours are subject to change.',
    
    //Positions

    'president': 'President',

    'vpInternal': 'Vice-President of Internal Affairs',

    'vpFinance': 'Vice-President of Finance',

    'vpAcademic': 'Vice=President of Academic Affairs',

    'vpSocial': 'Vice-President of Social Affairs',

    'vpCommunications': 'Vice-President of Communications',

    'vpBilingual': 'Vice-President of Bilingualism and Outreach',

    'vpPhilanthropy': 'Vice-President of Philanthropy',

    'dirIT': 'Director of IT',

    'dirExternal': 'Director of External Affairs',

    'dirPromo': 'Director of External Affairs',

    'jvpSocial': 'Junior Vice-President of Social Affairs',

    'jvpAcademic': 'Junior Vice-President of Academic Affairs',

    'jvpBilingual': 'Junior Vice-President of Bilingualism',

    'jvpPhilanthropy': 'Junior Vice-President of Philanthropy',

    //Biographies
    
    'presidentBio': 'Hey Everyone, my name is Michael DiLosa, and I am the President of the Economics Students Association this year! As president, it is my job to ensure the smooth operation of the executive, support the executive team in their roles, manage our relationships with external bodies and much more. But most importantly, I am here to make sure that we are properly representing you, our students! This means that we are hosting the events that you want, and doing what is best for the undergraduate Economics student body. Remember that we aren’t just here for events, we are also here to represent you to the department and faculty. If you have an idea for an event, or need help with a problem, just shoot me an email or come by my office hours! Fun fact, I always tap the outside of the plane as I board it for good luck.',

    'vpInternalBio': 'My name is Elliot Hernandez and I am the VP of Internal Affairs for the ESA/l’AÉSÉ. As VP of Internal Affairs it is my duty to plan the annual NYC trip, lead the Rational agents and manage the office. I am in my second year in the Honours of Economics program here at uOttawa. I am also an avid soccer and basketball fan and my favourite movie is The Martian!',

    'vpFinanceBio': 'Hey, I’m Liam, the VP Finance for the ESA this year and served as JVP Social and then in the role of VP Social last year. This year I get to manage the finances of the Economics Student Association to make sure that your student fees are going to places where they will be well utilized. The shift from an events based position is definitely going to be a change, but I’m looking forward to working with the rest of the executive to make our events more cost efficient but even more fun ! Fun fact: I run on iced coffee',

    'vpAcademicBio': 'Hi there! My name is Abigail Marsh and I am your VP Academic for the 2019-2020 school year. I am in my second year of Honours Economics. My role is to advocate for economic students and plan events that enhance the academic experience. These events include guest speakers and our annual Econ Week. If you have any questions or suggestions, feel free to email vp.academic@ecouo.ca! Some more about me: I love movies, especially horror, and coffee!',
    
    'vpSocialBio': 'Hey, my name is Corinne and I am your VP Social! As VP Social, I plan events for economic students throughout the year! Major events that I am responsible for are 101 week and the Social Science Ball. I am a third year student in Joint Honours in Economics and Political Science. I love to play sports especially hockey, field hockey and swimming, reading and socializing. A fun fact about me is on my first scuba dive I got bitten by a bottom feeder and I’m kind of a mind reader.',

    'vpPhilanthropyBio': 'Hey econ students, my name is Ty and I am your VP Phil! In this role, I get to organize fundraising and awareness initiatives for a variety of charitable organizations. I’m always looking for input and new ideas from fellow students – feel free to email vp.philanthropy@ecouo.ca with any questions or suggestions about the ESA’s philanthropic initiatives. Fun fact: I have three golden retrievers!!',

    'vpBilingualBio': 'Howdy y\'all! My name is Mona Makinejad and I am the VP of Bilingualism and Outreach for the ESA. My job is to translate all our documents and communication to both french or english (including these biographies), and to host brilliant events for our francophone and international students! I am in my second year of Environmental Economics and Public Policy in french immersion. If anyone has questions about my program or french immersion in general at uOttawa, ask away! My fun fact is that my music taste varies wildly from heavy metal to musicals!',

    'dirExternalBio': 'Hey there! My name is Lahn and I am the Director of External Affairs for the ESA. This year, I get the pleasure of working with different members of the team to coordinate outreach and sponsorship for different events that we run! Working with the team for the past 2 years has been a privilege, and this 2019/2020 year is no doubt going to be the best one yet. Fun fact, as a child, I used to think I could control traffic lights with my mind.',

    'dirPromo': 'Hi, my name is Nicole, and I am your Director of Promotions! I am in charge of all things promotional, and helping out with our website. I am in my fourth year of Joint Honours Economics and Political Science, and if you need help with anything school related, I am always down to chat and help with homework! Some more about me, I was the Golden Gloves featherweight boxing champion of lower mainland BC (a long time ago), and I’m terrified of fish!',

    'weekCoordinatorBio': 'Hi! My name is Yasmin and I am m the ESA\'s 101 Week Coordinator. This summer, I will be working with our VP Social to plan 101 Week for the incoming first year students.This will be my first time working with ESA and I am so excited and honoured to be planning this amazing week. The first week of your very first year at university makes a lasting impression, so with the help of ESA\'s hardworking exec team, I hope to make this 101 Week an extremely fun and welcoming experience.'
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
      
    'contactDesc3': 'Veuillez noter qu\'il n\'y aura pas d\'heures de bureau pendant la saison des examens, l\'été, les vacances ou les vacances universitaires. Les heures de bureau sont sujettes à changement.',
    
    //Positions

    'president': 'President',

    //Biographies

    'weekCoordinatorBio': 'Bonjour! Je m\'appelle Yasmin et je suis la Coordinatrice de la Semaine 101 pour l\'AÉSÉ. Cet été je collabore avec notre Vice-Présidente des Affaires Sociales pour planifier la Semaine 101 pour les étudiants en première année entrants. C\'est la première fois que je travaille avec l\'AÉSÉ et je suis très enthousiaste et fier d’organiser cette semaine magnifique. La première semaine de la première année d\'université laisse une impression inoubliable, alors avec l\'aide des membres exécutifs de l\'AÉSÉ, j\'espère créer une expérience amusante et accueillante pour la Semaine 101.'

    //Posts

  }
}

// Listen to changes in the select menu
$('#languageSelect').change(function() {
  
  // Get language code from the selected option
  var langCode = $('#languageSelect option:selected').val();
  
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
  $('#nav-about').text(about);
  $('#nav-services').text(services);
  $('#nav-news').text(news);
  $('#nav-team').text(team);
  $('#nav-contact').text(contact);
  $('#aboutDesc').text(aboutDesc);
    
  $('#servicesDesc').text(servicesDesc);
  $('#academicRep').text(academicRep);
  $('#academicRepDesc').text(academicRepDesc);
  $('#events').text(events);
  $('#eventsDesc').text(eventsDesc);
  $('#esaTraditions').text(esaTraditions);
  $('#esaTraditionsDesc').text(esaTraditionsDesc);
  $('#postsDesc').text(postsDesc);
  $('#teamDesc').text(teamDesc);
  $('#contactDesc1').text(contactDesc1);
  $('#contactDesc2').text(contactDesc2);
  $('#contactDesc3').text(contactDesc3);
}).change(); // This last bit, '.change()' is to invoke the change manually to ensure that the text is fetched from the translation database right away