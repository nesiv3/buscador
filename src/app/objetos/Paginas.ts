export class  Paginas
{

URL: string;
    Nombre:string;
Puntuacion:number;
   Reemplazo:boolean= false;
Descripcion:string;
      Fiabilidad:string;
      Contenido:string;
      Busqueda:string;



}

export const PaginasEspañol: Paginas[] = [

    {URL:'https://dtme.ranm.es/index.aspx ',Nombre:'DTM',Puntuacion:52,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Constructor de búsquedas bibliográficas médicas en HeTOP, PubMed, Lissa y DocCISMeF'},
    {URL:'https://crbm.chu-rouen.fr/querybuilder/# ',Nombre:'CRBM',Puntuacion:49,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Buscador médico en portales especializados de fiabilidad certificada'},
    {URL:'https://www.hon.ch/en/search.html?cref=http%3A%2F%2Fwww.hon.ch%2FCSE%2FHONCODE%2Fcontextlink.xml&q=brucomodin&sa=&hl=en&cof=FORID%3A11',Nombre:'HON',Puntuacion:45,Reemplazo:true,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Diccionario médico etimológico de la Universidad de Salamanca'},
    {URL:'https://dicciomed.usal.es/palabra/ ',Nombre:'Dicciomed',Puntuacion:44,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Manuales de conocimiento médico para profesionales y usuarios'},
    {URL:'https://www.msdmanuals.com/es/professional/SearchResults?query= ',Nombre:'MSD manuals',Puntuacion:44,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Portal gubernamental de EE. UU. de información médica para usuarios en español'},
    {URL:'https://vsearch.nlm.nih.gov/vivisimo/cgi-bin/query-meta?v%3Aproject=medlineplus-spanish&v%3Asources=medlineplus-spanish-bundle&query= ',Nombre:'MedLinePlus',Puntuacion:43,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Base de datos terminológica de la Organización Panamericana de la Salud (ES-PT-EN)'},
    {URL:'http://decs2020.bvsalud.org/cgi-bin/wxis1660.exe/decsserver/?IsisScript=../cgi-bin/decsserver/decsserver.xis&interface_language=e&previous_page=homepage&previous_task=NULL&task=start ',Nombre:'DeCS',Puntuacion:41,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Buscador científico de la RAE en diccionarios (Dicciomed) y corpus especializados'},
    {URL:'https://enclavedeciencia.rae.es/',Nombre:'Enclave de ciencia',Puntuacion:39,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Diccionario médico colaborativo elaborado por profesionales de la salud españoles'},
    {URL:'https://www.portalesmedicos.com/diccionario_medico/index.php?title= ',Nombre:'Medicopedia',Puntuacion:38,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Diccionario médico alfabético de la Clínica Universidad de Navarra'},
    {URL:'https://www.cun.es/diccionario-medico ',Nombre:'Diccionario médico CUN',Puntuacion:37,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Agregador de diccionarios generales y especializados monolingües y bilingües'},
    {URL:'https://es.thefreedictionary.com/',Nombre:'TheFreeDictionary ES',Puntuacion:37,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Tesauro de denominaciones comunes internacionales de la OMS'},
    {URL:'https://icd.who.int/browse11/l-m/es#/',Nombre:'Denominaciones comunes internacionales (DCI) ',Puntuacion:36,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Buscador bibliográfico médico en español en revistas especializadas'},
    {URL:'https://medes.com/Public/Home.aspx ',Nombre:'MEDES',Puntuacion:34,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Buscador farmacológico del Servei de Salut de les Illes Balears'},
    {URL:'https://www.elcomprimido.com/es/?option=com_googlesearch_cse&n=30&view=googlesearchs&Itemid=&cx=008151878029964939678%3Al2v68yhupyq&cof=FORID%3A11&ie=UTF-8&q=',Nombre:'elComprimido',Puntuacion:33,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Completo repertorio farmacológico internacional'},
    {URL:'https://www.vademecum.es/medicamentos-a_1   ',Nombre:'Vademécum',Puntuacion:33,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Portal de salud de la Consejería de Sanidad de Castilla y León'},
    {URL:'https://www.saludcastillayleon.es/es/buscar?formName=simpleSearchForm&formName=simpleSearchForm&lookForType=0&sortIndex=0&simpleSearchPattern=',Nombre:'Sacyl',Puntuacion:31,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Encliclopedia médica de múltiples especialidades'},
    {URL:'https://www.iqb.es/diccio/diccio1.htm',Nombre:'Medciclopedia IQB',Puntuacion:31,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Buscador bibliográfico multilingüe de evidencias médicas'},
    {URL:'https://www.epistemonikos.org/es/search?q=',Nombre:'Epistemonikos',Puntuacion:30,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Diccionario alfabético de términos médicos'},
    {URL:'https://www.diccionariomedico.net/diccionario-terminos ',Nombre:'Diccionario médico ',Puntuacion:28,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Diccionario de siglas y acrónimos utilizados en salud y medicina'},
    {URL:'http://www.laenfermeria.es/docuwiki/doku.php?id=siglas_medicas ',Nombre:'Diccionario laenfermeria – Siglas médicas',Puntuacion:26,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Base de datos terminológica sobre cáncer'},
    {URL:'http://www.ugr.es/~oncoterm/alpha-index.html ',Nombre:'OncoTerm',Puntuacion:25,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Encilopedia colaborativa de enfermería'},
    {URL:'http://www.laenfermeria.es/docuwiki/doku.php?id=start&do=backlink ',Nombre:'Diccionario laenfermeria WIKI',Puntuacion:24,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:''},

];

export const PaginasFrances: Paginas[] = [

    {URL:'http://dictionnaire.acadpharm.org/w/',Nombre:'Dictionnaire de l’Académie Nationale de Pharmacie',Puntuacion:54,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Constructeur de recherches bibliographiques médicales sur HeTOP, PubMed, Lissa et DocCISMeF.'},
    {URL:'https://crbm.chu-rouen.fr/querybuilder/# ',Nombre:'CRBM',Puntuacion:49,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Dictionnaire termninologique multidisciplinaire du Gouvernement du Québec'},
    {URL:'http://gdt.oqlf.gouv.qc.ca/ ',Nombre:'Grand dictionnaire terminologique',Puntuacion:47,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Site de référence des produits de santé et attention médicale'},
    {URL:'https://www.vidal.fr/recherche.html?query= ',Nombre:'Vidal',Puntuacion:45,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Moteur de recherche médicale dans des portails spécialisés à fiabilité certifiée'},
    {URL:'https://www.hon.ch/fr/search.html?cref=http%3A%2F%2Fwww.hon.ch%2FCSE%2FHONCODE%2Fcontextlink.xml&q=',Nombre:'HON',Puntuacion:45,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Site officiel de l&#39;Assurance maladie'},
    {URL:'https://www.ameli.fr/assure/recherche?text= ',Nombre:'Ameli',Puntuacion:44,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Manuels de connaissances médicales pour les professionnels et les utilisateurs'},
    {URL:'https://www.msdmanuals.com/fr/professional/SearchResults?query= ',Nombre:'MSD manuals',Puntuacion:44,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Portail de la Haute Autorité en Santé avec du contenu professionnel et utilisateur'},
    {URL:'https://www.has-sante.fr/jcms/fc_2875171/fr/resultat-de-recherche?text=',Nombre:'HAS Santé',Puntuacion:43,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Moteur de recherche bibliographique médicale en français'},
    {URL:'https://www.lissa.fr/dc/#env=lissa&q= ',Nombre:'Lissa',Puntuacion:43,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Dictionnaire alphabétique permettant des requêtes simples'},
    {URL:'https://dictionnaire.academie-medecine.fr/index.php?q=',Nombre:'Dictionnaire médical de l’Académie de Médecine',Puntuacion:43,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Moteur de recherche de ressources médicales en libre accès et en français'},
    {URL:'https://doccismef.chu-rouen.fr/dc/#env=basic&q=',Nombre:'DocCISMeF',Puntuacion:42,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Moteur de recherche bibliographique de la Banque de données en santé publique'},
    {URL:'https://bdsp-ehesp.inist.fr/vibad/index.php?action=search&lang=fr&terms= ',Nombre:'BDSP',Puntuacion:36,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Portail de santé publique pour les utilisateurs'},
    {URL:'https://www.santepubliquefrance.fr/recherche/#search=',Nombre:'Santé Publique France',Puntuacion:35,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Portail lexical général du CNRS et ATILF'},
    {URL:'https://www.cnrtl.fr/definition/ ',Nombre:'CNRTL',Puntuacion:34,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Thésaurus conceptuel de l&#39;Agence du numérique en santé'},
    {URL:'https://smt.esante.gouv.fr/explorer-les-concepts/?lang=fr ',Nombre:'SMT',Puntuacion:33,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Moteur de recherche spécialisé en médicine générale'},
    {URL:'https://doocteur.fr/results.html?q=',Nombre:'Doocteur',Puntuacion:32,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Moteur de recherche bibliographique multilingue en expériences cliniques'},
    {URL:'https://www.epistemonikos.org/fr/search?q=',Nombre:'Epistemonikos',Puntuacion:30,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Dictionnaire étimologique alphabétique de terminologie médicale'},
    {URL:'https://www.bio-top.net/Terminologie/Menu/terminologie__medicale_menu.htm ',Nombre:'LEXIQUE  DE  TERMINOLOGIE  MÉDICALE',Puntuacion:28,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Portail encyclopédique de santé pour les utilisateurs'},
    {URL:'https://www.doctissimo.fr/html/sante/encyclopedie/encyclopedie_medicale.htm ',Nombre:'Encyclopédie médicale Doctissimo',Puntuacion:28,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Moteur de recherche bibliographique et documentaire'},
    {URL:'https://www.urofrance.org/search/node/ ',Nombre:'Association Française d&#39;urologie',Puntuacion:27,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Portail documentaire sur les maladies neuromusculaires'},
    {URL:'https://www.myobase.org/ ',Nombre:'MyoBase',Puntuacion:27,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Portail divulgatif en santé incluant des dictionnaires de maladies et médicaments'},
    {URL:'https://www.medisite.fr/dictionnaire-des-maladies/5',Nombre:'Dictionnaires Medisite',Puntuacion:27,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Portail documentaire de divulgation médicale'},
    {URL:'https://www.vulgaris-medical.com/search/google?keys=',Nombre:'Vulgaris médical',Puntuacion:24,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Dictionnaire alphabétique médical'},
    {URL:'http://www.esculape.com/cherche/dico_medical.html#628 ',Nombre:'Esculape - Petit lexique de termes médicaux',Puntuacion:22,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:''},
];

export const PaginasEspañolFrances: Paginas[] = [

    {URL:'https://www.hetop.eu/hetop/es/?q= ',Nombre:'HeTOP',Puntuacion:47,Reemplazo:false,Fiabilidad:'***',Contenido:'**',Busqueda:'***',Descripcion:'Base de datos terminológica multidisciplinar multilingüe del Gobierno de Canadá'},
    {URL:'https://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-fra.html?lang=fra&i=1&srchtxt=',Nombre:'Termium',Puntuacion:47,Reemplazo:false,Fiabilidad:'**',Contenido:'***',Busqueda:'***',Descripcion:'Base de datos terminológica multidisciplinar multilingüe de la Unión Europea'},
    {URL:'https://iate.europa.eu/search/standard/ ',Nombre:'IATE',Puntuacion:38,Reemplazo:false,Fiabilidad:'**',Contenido:'**',Busqueda:'***',Descripcion:'Buscador en bases de datos terminológicas científicas (ES-FR-EN)'},
    {URL:'http://www.termsciences.fr/-/Index/Rechercher/Classique/Naviguer/Resultats/?aGrilleClassique=actualiser&qry=brucomodin&slng=es&x=0&y=0&ssrc=#',Nombre:'Termsciences',Puntuacion:39,Reemplazo:true,Fiabilidad:'**',Contenido:'**',Busqueda:'**',Descripcion:'Agregador de diccionarios y bases de datos monolingües y bilingües'},
    {URL:'http://traduction.sensagent.com/brucomodin/es-fr/',Nombre:'Sensagent',Puntuacion:36,Reemplazo:true,Fiabilidad:'*',Contenido:'***',Busqueda:'**',Descripcion:'Agregador de diccionarios general multilingüe'},
    {URL:'https://www.wordreference.com/esfr/',Nombre:'WordReference',Puntuacion:35,Reemplazo:false,Fiabilidad:'*',Contenido:'**',Busqueda:'**',Descripcion:'Diccionario multilingüe con traductor automático y búsqueda en contexto en la red'},
    {URL:'https://www.linguee.es/espanol-frances/',Nombre:'Linguee',Puntuacion:35,Reemplazo:false,Fiabilidad:'*',Contenido:'**',Busqueda:'**',Descripcion:'Agregador de diccionarios monolongües y multilingües, traducción automática y contextos'},
    {URL:'https://diccionario.reverso.net/espanol-frances/',Nombre:'Reverso',Puntuacion:30,Reemplazo:false,Fiabilidad:'*',Contenido:'**',Busqueda:'**',Descripcion:'Base de datos terminológica y contextual multidisciplinar de la Universidad de París'},
    {URL:'https://artes.app.univ-paris-diderot.fr/artes-symfony/web/app.php/fr/termedomaine?t_terme%5Bterme%5D=brucomodin&t_terme%5BrechercheType%5D=0&t_terme%5BnumLangue%5D=3&t_terme%5Bdomaines%5D=1159&t_terme%5BRechercher%5D=&t_terme%5B_token%5D=eeuMiTNeZOBbgFYzT1dd63kp7FUI5mULKYhM-y5piNE',Nombre:'ARTES',Puntuacion:28,Reemplazo:true,Fiabilidad:'**',Contenido:'***',Busqueda:'*',Descripcion:'Traductor automático'},
    {URL:'https://fr.pons.com/traduction/français-espagnol/',Nombre:'Pons',Puntuacion:25,Reemplazo:false,Fiabilidad:'*',Contenido:'**',Busqueda:'**',Descripcion:'Traductor automático basado en redes neuronales'},
    {URL:'https://www.deepl.com/translator#es/fr/',Nombre:'DeepL',Puntuacion:24,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'**',Descripcion:'Traductor automático'},
    {URL:'https://translate.google.com/?sl=es&tl=fr&text=',Nombre:'Google Translate',Puntuacion:24,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'**',Descripcion:'Base de datos terminológica multidisciplinar de Naciones Unidas'},
    {URL:'https://unterm.un.org/unterm/search?urlQuery=',Nombre:'UNTERM',Puntuacion:23,Reemplazo:false,Fiabilidad:'**',Contenido:'*',Busqueda:'**',Descripcion:'Foro de traductores y lingüistas profesionales'},
    {URL:'https://www.proz.com/search/',Nombre:'Proz.com',Puntuacion:22,Reemplazo:false,Fiabilidad:'*',Contenido:'**',Busqueda:'*',Descripcion:'Buscador en los glosarios multidisciplinares de la asociación de traductores española ACTA'},
    {URL:'https://www.acta.es/recursos/glosarios-especializados/glosarios-trilinguees',Nombre:'Glosarios trilingües ACTA',Puntuacion:20,Reemplazo:false,Fiabilidad:'**',Contenido:'*',Busqueda:'**',Descripcion:''},  
];



export const PaginasFrancesEspañol: Paginas[] = [

    {URL:'https://www.hetop.eu/hetop/fr/?q= ',Nombre:'HeTOP',Puntuacion:47,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Base de données termninologique multidisciplinaire multilingue du Gouvernement du Canada'},
    {URL:'https://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-fra.html?lang=fra&i=1&srchtxt=',Nombre:'Termium',Puntuacion:47,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Base de données terminologique multidisciplinaire multilingue de l&#39;Union Européenne'},
    {URL:'https://iate.europa.eu/search/standard/ ',Nombre:'IATE',Puntuacion:38,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Agrégateur de dictionnaires et bases de données monolingues et bilingues'},
    {URL:'http://traduction.sensagent.com/brucomodin/fr-es/',Nombre:'Sensagent',Puntuacion:36,Reemplazo:true,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Moteur de recherche dans des bases de données terminologiques scientifiques (FR-ES-EN)'},
    {URL:'http://www.termsciences.fr/-/Index/Rechercher/Classique/Naviguer/Resultats/?aGrilleClassique=actualiser&qry=brucomodin&slng=fr&x=0&y=0&ssrc=#',Nombre:'Termsciences',Puntuacion:36,Reemplazo:true,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Agrégateur de dictionnaires général multilingue'},
    {URL:'https://www.wordreference.com/fres/',Nombre:'WordReference',Puntuacion:35,Reemplazo:true,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Dictionnaire multilingüe avedc traduction automatique et recherche en contexte'},
    {URL:'https://www.linguee.es/espanol-frances/',Nombre:'Linguee',Puntuacion:35,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Agrégateur de dictionnaires monolingues et bilingues, traduction automatique et contextes'},
    {URL:'https://dictionnaire.reverso.net/francais-espagnol/',Nombre:'Reverso',Puntuacion:30,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Base de données terminologique et contextuelle multidisciplinaire de l&#39;Université de Paris'},
    {URL:'https://artes.app.univ-paris-diderot.fr/artes-symfony/web/app.php/fr/termedomaine?t_terme%5Bterme%5D=brucomodin&t_terme%5BrechercheType%5D=0&t_terme%5BnumLangue%5D=1&t_terme%5Bdomaines%5D=1159&t_terme%5BRechercher%5D=&t_terme%5B_token%5D=eeuMiTNeZOBbgFYzT1dd63kp7FUI5mULKYhM-y5piNE',Nombre:'ARTES',Puntuacion:28,Reemplazo:true,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Traducteur automatique'},
    {URL:'https://fr.pons.com/traduction/français-espagnol/',Nombre:'Pons',Puntuacion:25,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Traducteur automatique basé sur des réseaux neuronaux'},
    {URL:'https://www.deepl.com/translator#fr/es/',Nombre:'DeepL',Puntuacion:24,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Traducteur automatique'},
    {URL:'https://translate.google.com/?sl=fr&tl=es&text=',Nombre:'Google Translate',Puntuacion:24,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Base de données terminologique multidisciplinaire des Nations Unies'},
    {URL:'https://unterm.un.org/unterm/search?urlQuery=',Nombre:'UNTERM',Puntuacion:23,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Forum de traducteurs et linguistes professionnels'},
    {URL:'https://www.proz.com/search/',Nombre:'Proz.com',Puntuacion:22,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:'Moteur de recherche dans les glossaires de l&#39;association espagnole de traducteurs ACTA'},
    {URL:'https://www.acta.es/recursos/glosarios-especializados/glosarios-trilinguees',Nombre:'Glosarios trilingües ACTA',Puntuacion:20,Reemplazo:false,Fiabilidad:'*',Contenido:'*',Busqueda:'*',Descripcion:''},
];