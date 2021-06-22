export class Paginas {

    URL: string;
    Nombre: string;
    Puntuacion: number;
    Descripcion: string;
    Fiabilidad: number;
    Contenido: number;
    Busqueda: number;
    Talcual: boolean = false;
    Reemplazo: boolean = false;
    Logo: string;

}

export const PaginasEspañol: Paginas[] = [
   
    {URL:'https://dtme.ranm.es/index.aspx ',Nombre:'DTM',Puntuacion:4,Fiabilidad:4,Contenido:4,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Diccionario de términos médicos de la Real Academia Nacional de Medicina (2012)',Logo:'/assets/icons/dtm.png'},
    {URL:'https://vsearch.nlm.nih.gov/vivisimo/cgi-bin/query-meta?v%3Aproject=medlineplus-spanish&v%3Asources=medlineplus-spanish-bundle&query= ',Nombre:'MedLinePlus',Puntuacion:4,Fiabilidad:4,Contenido:2,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Portal gubernamental de EE. UU. de información médica para usuarios en español',Logo:'/assets/icons/medline.jpg'},
    {URL:'https://www.msdmanuals.com/es/professional/SearchResults?query= ',Nombre:'MSD manuals',Puntuacion:4,Fiabilidad:3,Contenido:4,Busqueda:3,Reemplazo:false,Talcual:false,Descripcion:'Manuales de conocimiento médico para profesionales y usuarios',Logo:'/assets/icons/msd.jpg'},
    {URL:'https://www.epistemonikos.org/es/search?q=',Nombre:'Epistemonikos',Puntuacion:3,Fiabilidad:4,Contenido:2,Busqueda:3,Reemplazo:false,Talcual:false,Descripcion:'Buscador bibliográfico multilingüe de evidencias médicas',Logo:'/assets/icons/epistemonikos.jpg'},
    {URL:'http://decs2020.bvsalud.org/cgi-bin/wxis1660.exe/decsserver/?IsisScript=../cgi-bin/decsserver/decsserver.xis&interface_language=e&previous_page=homepage&previous_task=NULL&task=start ',Nombre:'DeCS',Puntuacion:4,Fiabilidad:4,Contenido:4,Busqueda:2,Reemplazo:false,Talcual:true,Descripcion:'Base de datos terminológica de la Organización Panamericana de la Salud (ES-PT-EN)',Logo:'/assets/icons/decs.gif'},
    {URL:'https://dicciomed.usal.es/palabra/ ',Nombre:'Dicciomed',Puntuacion:4,Fiabilidad:4,Contenido:3,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Diccionario médico etimológico de la Universidad de Salamanca',Logo:'/assets/icons/dicciomed.jpg'},
    {URL:'https://medes.com/Public/Home.aspx ',Nombre:'MEDES',Puntuacion:3,Fiabilidad:4,Contenido:2,Busqueda:3,Reemplazo:false,Talcual:true,Descripcion:'Buscador bibliográfico médico en español en revistas especializadas',Logo:'/assets/icons/medes.png'},
    {URL:'https://enclavedeciencia.rae.es/',Nombre:'Enclave de ciencia',Puntuacion:3,Fiabilidad:4,Contenido:4,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Buscador científico de la RAE en diccionarios (Dicciomed) y corpus especializados',Logo:'/assets/icons/edc.png'},
    {URL:'https://cima.aemps.es/cima/publico/home.html',Nombre:'Cima',Puntuacion:4,Fiabilidad:4,Contenido:4,Busqueda:3,Reemplazo:false,Talcual:true,Descripcion:'Aplicación para consulta de información sobre medicamentos',Logo:'/assets/icons/cima.gif'},
    {URL:'https://www.elcomprimido.com/es/?option=com_googlesearch_cse&n=30&view=googlesearchs&Itemid=&cx=008151878029964939678%3Al2v68yhupyq&cof=FORID%3A11&ie=UTF-8&q=',Nombre:'elComprimido',Puntuacion:3,Fiabilidad:4,Contenido:2,Busqueda:3,Reemplazo:false,Talcual:false,Descripcion:'Buscador farmacológico del Servei de Salut de les Illes Balears',Logo:'/assets/icons/elcomprimido.png'},
    {URL:'https://www.portalesmedicos.com/diccionario_medico/index.php?title= ',Nombre:'Medicopedia',Puntuacion:3,Fiabilidad:3,Contenido:4,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Diccionario médico colaborativo elaborado por profesionales de la salud españoles',Logo:''},
    {URL:'https://www.saludcastillayleon.es/es/buscar?formName=simpleSearchForm&formName=simpleSearchForm&lookForType=0&sortIndex=0&simpleSearchPattern=',Nombre:'Sacyl',Puntuacion:3,Fiabilidad:3,Contenido:2,Busqueda:3,Reemplazo:false,Talcual:false,Descripcion:'Portal de salud de la Consejería de Sanidad de Castilla y León',Logo:'/assets/icons/sacyl.png'},
    {URL:'https://www.cun.es/diccionario-medico ',Nombre:'Diccionario médico CUN',Puntuacion:2,Fiabilidad:3,Contenido:3,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Diccionario médico alfabético de la Clínica Universidad de Navarra',Logo:'/assets/icons/cun.jpg'},
    {URL:'https://www.vademecum.es/medicamentos-a_1   ',Nombre:'Vademécum',Puntuacion:2,Fiabilidad:3,Contenido:2,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Repertorio internacional de medicamentos',Logo:'/assets/icons/vademecum.jpg'},
    {URL:'https://www.iqb.es/diccio/diccio1.htm',Nombre:'Medciclopedia IQB',Puntuacion:2,Fiabilidad:3,Contenido:4,Busqueda:1,Reemplazo:false,Talcual:true,Descripcion:'Encliclopedia médica de múltiples especialidades',Logo:'/assets/icons/medciclopedia.gif'},
    {URL:'https://www.diccionariomedico.net/diccionario-terminos ',Nombre:'DiccionarioMédico.net ',Puntuacion:2,Fiabilidad:3,Contenido:1,Busqueda:3,Reemplazo:false,Talcual:false,Descripcion:'Diccionario alfabético de términos médicos',Logo:''},
    {URL:'http://www.laenfermeria.es/docuwiki/doku.php?id=siglas_medicas ',Nombre:'Diccionario laenfermeria – Siglas médicas',Puntuacion:2,Fiabilidad:3,Contenido:2,Busqueda:1,Reemplazo:false,Talcual:true,Descripcion:'Diccionario de siglas y acrónimos utilizados en salud y medicina',Logo:''},
    {URL:'https://icd.who.int/browse11/l-m/es#/',Nombre:'Denominaciones comunes internacionales (DCI) ',Puntuacion:3,Fiabilidad:4,Contenido:3,Busqueda:2,Reemplazo:false,Talcual:true,Descripcion:'Tesauro de denominaciones comunes internacionales de la OMS',Logo:'/assets/icons/oms.png'}, 
    {URL:'https://www.aecc.es/es/todo-sobre-cancer/glosario ',Nombre:'Glosario AECC',Puntuacion:1,Fiabilidad:3,Contenido:1,Busqueda:1,Reemplazo:false,Talcual:true,Descripcion:'Diccionario alfabético sobre cáncer',Logo:'/assets/icons/aecc.png'},
    {URL:'https://pubmed.ncbi.nlm.nih.gov/?term=',Nombre:'PubMed',Puntuacion:4,Fiabilidad:4,Contenido:2,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Moteur de recherche bibliographique médicale en anglais',Logo:'/assets/icons/pubmed.png'},

];

export const PaginasFrances: Paginas[] = [

{URL:'http://dictionnaire.acadpharm.org/w/',Nombre:'Dictionnaire de l’Académie Nationale de Pharmacie',Puntuacion:4,Fiabilidad:4,Contenido:4,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Dictionnaire avec plus de 11000 entrées et équivalents en anglais et espagnol',Logo:'/assets/icons/acadpharm.jpg'},
{URL:'https://doccismef.chu-rouen.fr/dc/#env=basic&q=',Nombre:'Doc’CISMeF',Puntuacion:4,Fiabilidad:4,Contenido:3,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Moteur de recherche de ressources médicales en libre accès et en français',Logo:'/assets/icons/cismef.gif'},
{URL:'https://www.has-sante.fr/jcms/fc_2875171/fr/resultat-de-recherche?text=brucomodin ',Nombre:'HAS Santé',Puntuacion:4,Fiabilidad:4,Contenido:2,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Portail de la Haute Autorité en Santé avec du contenu professionnel et utilisateur',Logo:'/assets/icons/has.png'},
{URL:'https://www.ameli.fr/assure/recherche?text= ',Nombre:'Ameli',Puntuacion:4,Fiabilidad:4,Contenido:3,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Site officiel de l`Assurance maladie',Logo:'/assets/icons/ameli.jpg'},
{URL:'https://crbm.chu-rouen.fr/querybuilder/# ',Nombre:'CRBM',Puntuacion:4,Fiabilidad:4,Contenido:3,Busqueda:4,Reemplazo:false,Talcual:true,Descripcion:'Constructeur de recherches bibliographiques médicales sur HeTOP, PubMed, Lissa et DocCISMeF.',Logo:'/assets/icons/crbm.png'},
{URL:'https://www.lissa.fr/dc/#env=lissa&q= ',Nombre:'Lissa',Puntuacion:4,Fiabilidad:4,Contenido:2,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Moteur de recherche bibliographique médicale en français',Logo:'/assets/icons/lissa.png'},
{URL:'http://gdt.oqlf.gouv.qc.ca/ ',Nombre:'Grand dictionnaire terminologique',Puntuacion:4,Fiabilidad:3,Contenido:4,Busqueda:3,Reemplazo:false,Talcual:true,Descripcion:'Dictionnaire termninologique multidisciplinaire du Gouvernement du Québec',Logo:'/assets/icons/gdt.png'},
{URL:'https://dictionnaire.academie-medecine.fr/index.php?q=',Nombre:'Dictionnaire médical de l’Académie de Médecine',Puntuacion:4,Fiabilidad:4,Contenido:4,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Dictionnaire alphabétique permettant des requêtes simples',Logo:'/assets/icons/anm.png'},
{URL:'https://www.msdmanuals.com/es/professional/SearchResults?query= ',Nombre:'MSD manuals',Puntuacion:4,Fiabilidad:3,Contenido:4,Busqueda:3,Reemplazo:false,Talcual:false,Descripcion:'Manuels de connaissances médicales pour les professionnels et les utilisateurs',Logo:'/assets/icons/msd.jpg'},
{URL:'https://www.hon.ch/fr/search.html?cref=http%3A%2F%2Fwww.hon.ch%2FCSE%2FHONCODE%2Fcontextlink.xml&q=brucomodin&sa=&hl=en&cof=FORID%3A11',Nombre:'HON',Puntuacion:3,Fiabilidad:4,Contenido:1,Busqueda:3,Reemplazo:true,Talcual:false,Descripcion:'Moteur de recherche médicale dans des portails spécialisés à fiabilité certifiée',Logo:'/assets/icons/hon.jpg'},
{URL:'https://www.vidal.fr/recherche.html?query= ',Nombre:'Vidal',Puntuacion:4,Fiabilidad:4,Contenido:4,Busqueda:3,Reemplazo:false,Talcual:false,Descripcion:'Site de référence des produits de santé et attention médicale',Logo:'/assets/icons/vidal.png'},
{URL:'https://bdsp-ehesp.inist.fr/vibad/index.php?action=search&lang=fr&terms= ',Nombre:'BDSP',Puntuacion:3,Fiabilidad:4,Contenido:2,Busqueda:3,Reemplazo:false,Talcual:false,Descripcion:'Moteur de recherche bibliographique de la Banque de données en santé publique',Logo:'/assets/icons/bdsp.png'},
{URL:'https://doocteur.fr/results.html?q=',Nombre:'Doocteur',Puntuacion:3,Fiabilidad:4,Contenido:2,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Moteur de recherche spécialisé en médicine générale',Logo:'/assets/icons/doocteur.png'},
{URL:'https://www.santepubliquefrance.fr/recherche/#search=',Nombre:'Santé Publique France',Puntuacion:3,Fiabilidad:4,Contenido:2,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Portail de santé publique pour les utilisateurs',Logo:'/assets/icons/santepubliquefrance.png'},
{URL:'https://www.bio-top.net/Terminologie/Menu/terminologie__medicale_menu.htm ',Nombre:'BioTop',Puntuacion:3,Fiabilidad:4,Contenido:4,Busqueda:1,Reemplazo:false,Talcual:true,Descripcion:'Dictionnaire étimologique alphabétique de terminologie médicale',Logo:'/assets/icons/biotop.png'},
{URL:'https://smt.esante.gouv.fr/explorer-les-concepts/?lang=fr ',Nombre:'SMT',Puntuacion:2,Fiabilidad:4,Contenido:2,Busqueda:2,Reemplazo:false,Talcual:true,Descripcion:'Thésaurus conceptuel de l`Agence du nunñerique en santé',Logo:'/assets/icons/smt.webp'},
{URL:'https://www.epistemonikos.org/es/search?q=',Nombre:'Epistemonikos',Puntuacion:3,Fiabilidad:4,Contenido:2,Busqueda:3,Reemplazo:false,Talcual:false,Descripcion:'Moteur de recherche bibliographique multilingue en expériences cliniques',Logo:'/assets/icons/epistemonikos.jpg'},
{URL:'https://www.cnrtl.fr/definition/ ',Nombre:'CNRTL',Puntuacion:2,Fiabilidad:2,Contenido:4,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Portail lexical général du CNRS et ATILF',Logo:'/assets/icons/CNRTL.jpg'},
{URL:'https://www.myobase.org/ ',Nombre:'MyoBase',Puntuacion:2,Fiabilidad:4,Contenido:2,Busqueda:2,Reemplazo:false,Talcual:true,Descripcion:'Portail documentaire sur les maladies neuromusculaires',Logo:'/assets/icons/myobase.jpeg'},
{URL:'https://www.urofrance.org/search/node/ ',Nombre:'Association Française d`urologie',Puntuacion:2,Fiabilidad:4,Contenido:2,Busqueda:3,Reemplazo:false,Talcual:false,Descripcion:'Moteur de recherche bibliographique et documentaire',Logo:'/assets/icons/afu.webp'},
{URL:'https://www.doctissimo.fr/html/sante/encyclopedie/encyclopedie_medicale.htm ',Nombre:'Doctissimo',Puntuacion:2,Fiabilidad:3,Contenido:3,Busqueda:2,Reemplazo:false,Talcual:true,Descripcion:'Portail encyclopédique de santé pour les utilisateurs',Logo:'/assets/icons/doctissimo.jpg'},
{URL:'https://www.vulgaris-medical.com/search/google?keys=',Nombre:'Vulgaris médical',Puntuacion:2,Fiabilidad:4,Contenido:2,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Portail documentaire de divulgation médicale',Logo:'/assets/icons/doctissimo.jpg'},
{URL:'https://www.medisite.fr/dictionnaire-des-maladies/5',Nombre:'Dictionnaires Medisite',Puntuacion:2,Fiabilidad:3,Contenido:3,Busqueda:1,Reemplazo:false,Talcual:true,Descripcion:'Portail divulgatif en santé incluant des dictionnaires de maladies et médicaments',Logo:'/assets/icons/medisite.jpg'},
{URL:'http://www.esculape.com/cherche/dico_medical.html#628 ',Nombre:'Esculape - Petit lexique de termes médicaux',Puntuacion:1,Fiabilidad:3,Contenido:2,Busqueda:1,Reemplazo:false,Talcual:true,Descripcion:'Dictionnaire alphabétique médical',Logo:'/assets/icons/esculape.gif'},
{URL:'http://www.myonet.org/GENETIQUE/glossaire.html ',Nombre:'GLOSSAIRE de GENETIQUE MOLECULAIRE - GENIE GENETIQUE',Puntuacion:1,Fiabilidad:2,Contenido:1,Busqueda:1,Reemplazo:false,Talcual:true,Descripcion:'',Logo:''},
{URL:'https://pubmed.ncbi.nlm.nih.gov/?term=',Nombre:'PubMed',Puntuacion:4,Fiabilidad:4,Contenido:2,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Moteur de recherche bibliographique médicale en anglais',Logo:'/assets/icons/pubmed.png'},


];

export const PaginasEspañolFrances: Paginas[] = [
    
    {URL:'https://www.hetop.eu/hetop/es/?q= ',Nombre:'HeTOP',Puntuacion:4,Fiabilidad:4,Contenido:3,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Buscador médico multilingüe en múltiples bases terminológicas médicas',Logo:'/assets/icons/hetop.png'},
    {URL:'http://www.termsciences.fr/-/Index/Rechercher/Classique/Naviguer/Resultats/?aGrilleClassique=actualiser&qry=brucomodin&slng=es&x=0&y=0&ssrc=#',Nombre:'Termsciences',Puntuacion:3,Fiabilidad:3,Contenido:3,Busqueda:3,Reemplazo:true,Talcual:false,Descripcion:'Moteur de recherche dans des bases de données terminologiques scientifiques (FR-ES-EN)',Logo:'/assets/icons/termsciences.png'},
    {URL:'https://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-fra.html?lang=fra&i=1&srchtxt=',Nombre:'Termium',Puntuacion:4,Fiabilidad:3,Contenido:4,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Base de données termninologique multidisciplinaire multilingue du Gouvernement du Canada',Logo:'/assets/icons/termium.png'},
    {URL:'https://iate.europa.eu/search/standard/ ',Nombre:'IATE',Puntuacion:3,Fiabilidad:3,Contenido:3,Busqueda:3,Reemplazo:false,Talcual:true,Descripcion:'Base de datos terminológica multidisciplinar multilingüe de la Unión Europea',Logo:'/assets/icons/iate.png'},
    {URL:'https://www.acta.es/recursos/glosarios-especializados/glosarios-trilinguees',Nombre:'Glosarios trilingües ACTA',Puntuacion:1,Fiabilidad:3,Contenido:1,Busqueda:2,Reemplazo:false,Talcual:true,Descripcion:'Buscador en los glosarios multidisciplinares de la asociación de traductores española ACTA',Logo:'/assets/icons/acta.jpg'},
    {URL:'http://traduction.sensagent.com/traduire/es-fr/',Nombre:'Sensagent',Puntuacion:3,Fiabilidad:1,Contenido:4,Busqueda:3,Reemplazo:true,Talcual:false,Descripcion:'Agregador de diccionarios y bases de datos monolingües y bilingües',Logo:'/assets/icons/sensagent.jpg'},
    {URL:'https://www.linguee.es/espanol-frances/',Nombre:'Linguee',Puntuacion:3,Fiabilidad:2,Contenido:3,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Diccionario multilingüe con traductor automático y búsqueda en contexto en la red',Logo:'/assets/icons/linguee.png'},
    {URL:'https://www.wordreference.com/esfr/',Nombre:'WordReference',Puntuacion:3,Fiabilidad:2,Contenido:3,Busqueda:4,Reemplazo:true,Talcual:false,Descripcion:'Agregador de diccionarios general multilingüe',Logo:'/assets/icons/WR.png'},
    {URL:'https://es.thefreedictionary.com/',Nombre:'TheFreeDictionary ES',Puntuacion:3,Fiabilidad:2,Contenido:4,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Agregador de diccionarios generales y especializados monolingües y bilingües',Logo:'/assets/icons/thefreedictionary.jpg'},
    {URL:'https://diccionario.reverso.net/espanol-frances/',Nombre:'Reverso',Puntuacion:2,Fiabilidad:2,Contenido:4,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Agregador de diccionarios monolongües y multilingües, traducción automática y contextos',Logo:'/assets/icons/reverso.png'},
    {URL:'https://artes.app.univ-paris-diderot.fr/artes-symfony/web/app.php/fr/termedomaine?t_terme%5Bterme%5D=brucomodin&t_terme%5BrechercheType%5D=0&t_terme%5BnumLangue%5D=1&t_terme%5Bdomaines%5D=1159&t_terme%5BRechercher%5D=&t_terme%5B_token%5D=eeuMiTNeZOBbgFYzT1dd63kp7FUI5mULKYhM-y5piNE',Nombre:'ARTES',Puntuacion:2,Fiabilidad:2,Contenido:4,Busqueda:1,Reemplazo:true,Talcual:false,Descripcion:'',Logo:'/assets/icons/artes.png'},
    {URL:'https://es.pons.com/traducción/español-francés/',Nombre:'Pons',Puntuacion:2,Fiabilidad:2,Contenido:2,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Traductor automático',Logo:'/assets/icons/pons.jpg'},
    {URL:'https://translate.google.com/?sl=fr&tl=es&text=',Nombre:'Google Translate',Puntuacion:2,Fiabilidad:2,Contenido:1,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Traductor automático',Logo:'/assets/icons/gt.jpg'},
    {URL:'https://www.deepl.com/translator#es/fr/',Nombre:'DeepL',Puntuacion:1,Fiabilidad:2,Contenido:1,Busqueda:3,Reemplazo:false,Talcual:false,Descripcion:'Traductor automático basado en redes neuronales',Logo:'/assets/icons/deepl.jpg'},
    {URL:'https://www.proz.com/search/',Nombre:'Proz.com',Puntuacion:1,Fiabilidad:2,Contenido:2,Busqueda:2,Reemplazo:false,Talcual:true,Descripcion:'Foro de traductores y lingüistas profesionales',Logo:'/assets/icons/proz.jpg'},


];

export const PaginasFrancesEspañol: Paginas[] = [
    
    {URL:'https://www.hetop.eu/hetop/fr/?q= ',Nombre:'HeTOP',Puntuacion:4,Fiabilidad:4,Contenido:3,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Moteur de recherche multilingue dans nombreuses bases terminologiques médicales',Logo:'/assets/icons/hetop.png'},
    {URL:'https://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-fra.html?lang=fra&i=1&srchtxt=',Nombre:'Termium',Puntuacion:4,Fiabilidad:3,Contenido:4,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Base de données termninologique multidisciplinaire multilingue du Gouvernement du Canada',Logo:'/assets/icons/termium.png'},
    {URL:'http://www.termsciences.fr/-/Index/Rechercher/Classique/Naviguer/Resultats/?aGrilleClassique=actualiser&qry=',Nombre:'Termsciences',Puntuacion:3,Fiabilidad:3,Contenido:3,Busqueda:3,Reemplazo:true,Talcual:false,Descripcion:'Moteur de recherche dans des bases de données terminologiques scientifiques (FR-ES-EN)',Logo:'/assets/icons/termsciences.png'},
    {URL:'https://iate.europa.eu/search/standard/ ',Nombre:'IATE',Puntuacion:3,Fiabilidad:3,Contenido:3,Busqueda:3,Reemplazo:false,Talcual:true,Descripcion:'Base de données terminologique multidisciplinaire multilingue de l`Union Européenne',Logo:'/assets/icons/iate.png'},
    {URL:'https://www.linguee.es/espanol-frances/',Nombre:'Linguee',Puntuacion:3,Fiabilidad:2,Contenido:3,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Dictionnaire multilingüe avedc traduction automatique et recherche en contexte',Logo:'/assets/icons/linguee.png'},
    {URL:'https://translate.google.com/?sl=fr&tl=es&text=',Nombre:'Google Translate',Puntuacion:2,Fiabilidad:2,Contenido:1,Busqueda:4,Reemplazo:false,Talcual:false,Descripcion:'Traducteur automatique',Logo:'/assets/icons/gt.jpg'},
    {URL:'https://www.acta.es/recursos/glosarios-especializados/glosarios-trilinguees',Nombre:'Glosarios trilingües ACTA',Puntuacion:1,Fiabilidad:3,Contenido:1,Busqueda:2,Reemplazo:false,Talcual:true,Descripcion:'Moteur de recherche dans les glossaires de l`association espagnole de traducteurs ACTA',Logo:'/assets/icons/acta.jpg'},
    {URL:'https://www.wordreference.com/fres/',Nombre:'WordReference',Puntuacion:3,Fiabilidad:2,Contenido:3,Busqueda:4,Reemplazo:true,Talcual:false,Descripcion:'Agrégateur de dictionnaires général multilingue',Logo:'/assets/icons/WR.png'},
    {URL:'https://es.thefreedictionary.com/',Nombre:'TheFreeDictionary',Puntuacion:3,Fiabilidad:2,Contenido:4,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Agrégateur de dictionnaires généraux et spécialisées monolingues y bilingues',Logo:'/assets/icons/thefreedictionary.jpg'},
    {URL:'https://diccionario.reverso.net/frances-espanol/',Nombre:'Reverso',Puntuacion:2,Fiabilidad:2,Contenido:4,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Agrégateur de dictionnaires monolingues et bilingues, traduction automatique et contextes',Logo:'/assets/icons/reverso.png'},
    {URL:'http://traduction.sensagent.com/traduire/fr-es/',Nombre:'Sensagent',Puntuacion:3,Fiabilidad:1,Contenido:4,Busqueda:3,Reemplazo:true,Talcual:false,Descripcion:'Agrégateur de dictionnaires et bases de données monolingues et bilingues',Logo:'/assets/icons/'},
    {URL:'https://artes.app.univ-paris-diderot.fr/artes-symfony/web/app.php/fr/termedomaine?t_terme%5Bterme%5D=brucomodin&t_terme%5BrechercheType%5D=0&t_terme%5BnumLangue%5D=1&t_terme%5Bdomaines%5D=1159&t_terme%5BRechercher%5D=&t_terme%5B_token%5D=eeuMiTNeZOBbgFYzT1dd63kp7FUI5mULKYhM-y5piNE',Nombre:'ARTES',Puntuacion:2,Fiabilidad:2,Contenido:4,Busqueda:1,Reemplazo:true,Talcual:true,Descripcion:'Base de données terminologique scientifique',Logo:'/assets/icons/artes.png'},
    {URL:'https://fr.pons.com/traduction/français-espagnol/',Nombre:'Pons',Puntuacion:2,Fiabilidad:2,Contenido:2,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Traducteur automatique',Logo:'/assets/icons/pons.jpg'},
    {URL:'https://www.deepl.com/translator#fr/es/',Nombre:'DeepL',Puntuacion:1,Fiabilidad:2,Contenido:1,Busqueda:3,Reemplazo:false,Talcual:false,Descripcion:'Traducteur automatique basé sur des réseaux neuronaux',Logo:'/assets/icons/deepl.jpg'},
    {URL:'https://www.proz.com/search/',Nombre:'Proz.com',Puntuacion:1,Fiabilidad:2,Contenido:2,Busqueda:2,Reemplazo:false,Talcual:true,Descripcion:'Forum de traducteurs et linguistes professionnels',Logo:'/assets/icons/proz.jpg'},
    {URL:'https://unterm.un.org/unterm/search?urlQuery=',Nombre:'UNTERM',Puntuacion:1,Fiabilidad:3,Contenido:1,Busqueda:2,Reemplazo:false,Talcual:false,Descripcion:'Base de données terminologique multidisciplinaire des Nations Unies',Logo:'/assets/icons/unterm.jpg'},
   
    
    

];