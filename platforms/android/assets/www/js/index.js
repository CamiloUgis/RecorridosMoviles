// Initialize your app
var myApp = new Framework7();

var mostrarRapido = false;
var mostrarTrece = false;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener("deviceready", function () {
    $('#geo').bind('click', geo);
    $('#rapidoIda').bind('change', lineaRapido);
    $('#rapidoVuelta').bind('change', lineaRapido);
    $('#13ida').bind('change', linea13);
    $('#13vuelta').bind('change', linea13);
});

function geo() {
    myApp.showPreloader('Localizando... Espere unos segundos...');
    navigator.geolocation.getCurrentPosition(
            function (position) {
                $('#lat').html(position.coords.latitude);
                $('#lon').html(position.coords.longitude);
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: position.coords.latitude, lng: position.coords.longitude},
                    zoom: 16
                });
                var marker = new google.maps.Marker({
                    position: {lat: position.coords.latitude, lng: position.coords.longitude},
                    map: map,
                    title: 'Mi posición'
                });
                myApp.hidePreloader();
                var directionsService = new google.maps.DirectionsService;
                var directionsDisplay = new google.maps.DirectionsRenderer({
                    map: map
                });

//            <!--
                function renderDirections(result) {
                    var directionsRenderer = new google.maps.DirectionsRenderer;
                    directionsRenderer.setMap(map);
                    directionsRenderer.setDirections(result);
                }

                var directionsService = new google.maps.DirectionsService;
                function requestDirections(start, end) {
                    directionsService.route({
                        origin: start,
                        destination: end,
                        travelMode: google.maps.DirectionsTravelMode.WALKING
                    }, function (result) {
                        renderDirections(result);
                    });
                }

                //Línea Rápido Ida
                var coordenadasRapidoIda = [
                    {lat: -36.62591678228322, lng: -72.0678998529911},
                    {lat: -36.62561541759914, lng: -72.06952661275864},
                    {lat: -36.625593891505204, lng: -72.07119092345238},
                    {lat: -36.63117325388117, lng: -72.07284852862358},
                    {lat: -36.63037253688364, lng: -72.07706227898598},
                    {lat: -36.6256670802001, lng: -72.07567557692528},
                    {lat: -36.625408766849056, lng: -72.08317503333092},
                    {lat: -36.627072720179065, lng: -72.083325907588},
                    {lat: -36.62817052224152, lng: -72.08304360508919},
                    {lat: -36.62882704345378, lng: -72.0867745578289},
                    {lat: -36.62822218312979, lng: -72.08803988993168},
                    {lat: -36.62880228947675, lng: -72.08850793540478},
                    {lat: -36.628867941311455, lng: -72.09021247923374},
                    {lat: -36.626872531058424, lng: -72.09546826779842},
                    {lat: -36.624329222933945, lng: -72.09400109946728},
                    {lat: -36.623740472273916, lng: -72.09791041910648},
                    {lat: -36.621225046320085, lng: -72.09607981145382},
                    {lat: -36.61943072356408, lng: -72.09517523646355},
                    {lat: -36.61918100046982, lng: -72.09524162113667},
                    {lat: -36.617460903044666, lng: -72.09629707038403},
                    {lat: -36.61726176538231, lng: -72.09622733294964},
                    {lat: -36.6098136474811, lng: -72.09346398711205},
                    {lat: -36.60828927278529, lng: -72.09976986050606},
                    {lat: -36.610646873456076, lng: -72.10067057982087},
                    {lat: -36.60767133265258, lng: -72.11289390921593},
                    {lat: -36.59778577060809, lng: -72.1091978251934},
                    {lat: -36.60237665311492, lng: -72.09060341119766},
                    {lat: -36.60096087303316, lng: -72.0899174362421},
                    {lat: -36.60282022297362, lng: -72.08551123738289},
                    {lat: -36.6039097575278, lng: -72.08315022289753},
                    {lat: -36.60464400039528, lng: -72.08156369626522},
                    {lat: -36.604086320967035, lng: -72.08011999726295},
                    {lat: -36.60290204626116, lng: -72.07891836762428},
                    {lat: -36.59441564780987, lng: -72.07229599356651}           
                ];
                //Línea Rápido Vuelta

                var coordenadasRapidoVuelta = [
                    {lat: -36.59435319686095, lng: -72.07226078957319},
                    {lat: -36.60097271616822, lng: -72.07741901278496},
                    {lat: -36.60361261326646, lng: -72.07953125238419},
                    {lat: -36.604103546646776, lng: -72.08013743162155},
                    {lat: -36.60464400039528, lng: -72.08156369626522},
                    {lat: -36.60551603929597, lng: -72.08406955003738},
                    {lat: -36.60513492721144, lng: -72.08645805716515},
                    {lat: -36.6039614346738, lng: -72.08599671721458},
                    {lat: -36.60330470170112, lng: -72.0886467397213},
                    {lat: -36.60323149177746, lng: -72.08871111273766},
                    {lat: -36.60286005800602, lng: -72.08854950964451},
                    {lat: -36.60272548011122, lng: -72.08907321095467},
                    {lat: -36.602420794889895, lng: -72.09027417004108},
                    {lat: -36.602211928707256, lng: -72.09071673452854},
                    {lat: -36.60141198752993, lng: -72.09386564791203},
                    {lat: -36.60123757125925, lng: -72.09442622959614},
                    {lat: -36.598339188843205, lng: -72.10621520876884},
                    {lat: -36.597673794451204, lng: -72.10916832089424},
                    {lat: -36.59766518089394, lng: -72.10946537554264},
                    {lat: -36.59774162618103, lng: -72.10952840745449},
                    {lat: -36.60391298735044, lng: -72.11178950965405},
                    {lat: -36.6085347249833, lng: -72.0931850373745},
                    {lat: -36.60977919866818, lng: -72.09365710616112},
                    {lat: -36.608293578970944, lng: -72.09975913167},
                    {lat: -36.61581396529315, lng: -72.10258886218071},
                    {lat: -36.617282217382154, lng: -72.09636613726616},
                    {lat: -36.61916593094686, lng: -72.09525100886822},
                    {lat: -36.61945225137916, lng: -72.09517791867256},
                    {lat: -36.62122827541757, lng: -72.09608383476734},
                    {lat: -36.62373616695088, lng: -72.09792450070381},
                    {lat: -36.62402677571599, lng: -72.09623001515865},
                    {lat: -36.62418822455651, lng: -72.09485605359077},
                    {lat: -36.62434321512527, lng: -72.0940051227808},
                    {lat: -36.62601580185079, lng: -72.09490433335304},
                    {lat: -36.62686822591033, lng: -72.09546558558941},
                    {lat: -36.62887009382969, lng: -72.09017023444176},
                    {lat: -36.62880336573678, lng: -72.08849653601646},
                    {lat: -36.628235098346444, lng: -72.08802983164787},
                    {lat: -36.62882166215509, lng: -72.08678059279919},
                    {lat: -36.62818128492942, lng: -72.08303824067116},
                    {lat: -36.62706303362068, lng: -72.08332724869251},
                    {lat: -36.62539585115878, lng: -72.08318307995796},
                    {lat: -36.625589586285685, lng: -72.08070538938046},
                    {lat: -36.625675690630224, lng: -72.07567825913429},
                    {lat: -36.62777660682968, lng: -72.07627438008785},
                    {lat: -36.63036930816923, lng: -72.0770575851202},
                    {lat: -36.63121630294644, lng: -72.07264803349972},
                    {lat: -36.62566169868079, lng: -72.07092069089413},
                    {lat: -36.625605730857615, lng: -72.0697981864214},
                    {lat: -36.62567246171904, lng: -72.0689157396555},
                    {lat: -36.62592754528586, lng: -72.06788375973701}     
                ];
                //Línea 13 Ida
                var coordenadasLinea13Ida = [
                    {lat: -36.626829479566695, lng: -72.13505767285824},
                    {lat: -36.6266034588406, lng: -72.13664151728153},
                    {lat: -36.62773678466779, lng: -72.1369781345129},
                    {lat: -36.62780781878001, lng: -72.13717125356197},
                    {lat: -36.62781104760173, lng: -72.13759236037731},
                    {lat: -36.62811993758819, lng: -72.13787131011486},
                    {lat: -36.62888408519668, lng: -72.13827230036259},
                    {lat: -36.62924463108535, lng: -72.13578756898642},
                    {lat: -36.62933449823081, lng: -72.1351270750165},
                    {lat: -36.62944266154237, lng: -72.13411286473274},
                    {lat: -36.629853788366326, lng: -72.13126100599766},
                    {lat: -36.62744296105356, lng: -72.13061258196831},
                    {lat: -36.62764314869255, lng: -72.12910786271095},
                    {lat: -36.62810809862197, lng: -72.1261440217495},
                    {lat: -36.63293824583703, lng: -72.12736710906029},
                    {lat: -36.63322236271571, lng: -72.12588384747505},
                    {lat: -36.63132392550439, lng: -72.1253876388073},
                    {lat: -36.63186418847418, lng: -72.12374076247215},
                    {lat: -36.632083736487104, lng: -72.12378837168217},
                    {lat: -36.63214400445965, lng: -72.12371192872524},
                    {lat: -36.63231512219623, lng: -72.12288312613964},
                    {lat: -36.63041558639621, lng: -72.12230578064919},
                    {lat: -36.630478008146724, lng: -72.12188467383385},
                    {lat: -36.63061361384428, lng: -72.12081179022789},
                    {lat: -36.629091802884766, lng: -72.12019219994545},
                    {lat: -36.62949647407863, lng: -72.11876794695854},
                    {lat: -36.628382546916576, lng: -72.11814634501934},
                    {lat: -36.62867582881782, lng: -72.11725886911154},
                    {lat: -36.62845411856607, lng: -72.11678931489587},
                    {lat: -36.62883323194679, lng: -72.11635882034898},
                    {lat: -36.62918355365421, lng: -72.11590083315969},
                    {lat: -36.62929602219034, lng: -72.11563428863883},
                    {lat: -36.62978490863253, lng: -72.11388096213341},
                    {lat: -36.63004966477281, lng: -72.11298443377018},
                    {lat: -36.630642672177, lng: -72.11217306554317},
                    {lat: -36.63119047351017, lng: -72.11141668260098},
                    {lat: -36.62914776817649, lng: -72.11106464266777},
                    {lat: -36.62862685888991, lng: -72.11044169962406},
                    {lat: -36.62808549695414, lng: -72.11128123104572},
                    {lat: -36.627329951672905, lng: -72.11072199046612},
                    {lat: -36.62611697388627, lng: -72.1103947609663},
                    {lat: -36.62613634723963, lng: -72.10927829146385},
                    {lat: -36.62662067949067, lng: -72.10770919919014},
                    {lat: -36.626952176254726, lng: -72.1065665781498},
                    {lat: -36.6248426270602, lng: -72.10559830069542},
                    {lat: -36.622745936265, lng: -72.10457906126976},
                    {lat: -36.62163083517805, lng: -72.1046756207943},
                    {lat: -36.62082356081203, lng: -72.10487678647041},
                    {lat: -36.62016912418825, lng: -72.10522010922432},
                    {lat: -36.619958153303024, lng: -72.10533812642097},
                    {lat: -36.618610509331845, lng: -72.105163782835},
                    {lat: -36.617460903044666, lng: -72.10443422198296},
                    {lat: -36.61538338753113, lng: -72.10342839360237},
                    {lat: -36.61523160829684, lng: -72.1040553599596},
                    {lat: -36.61029592924612, lng: -72.10219793021679},
                    {lat: -36.606678742494246, lng: -72.10087157785892},
                    {lat: -36.608571327437126, lng: -72.09298118948936},
                    {lat: -36.60430756299876, lng: -72.09136884659529},
                    {lat: -36.6044959681216, lng: -72.08974074572325},
                    {lat: -36.60464292379797, lng: -72.08810325711966},
                    {lat: -36.60486470253037, lng: -72.08637021481991},
                    {lat: -36.605140310163605, lng: -72.08644933998585},
                    {lat: -36.60529856878915, lng: -72.08505593240261},
                    {lat: -36.60539438507811, lng: -72.08414532244205},
                    {lat: -36.60676271482438, lng: -72.08341576159},
                    {lat: -36.60688759658217, lng: -72.08332724869251},
                    {lat: -36.60643113124493, lng: -72.08283640444279},
                    {lat: -36.60673687719407, lng: -72.08107821643353},
                    {lat: -36.609092372249066, lng: -72.08170786499977},
                    {lat: -36.611499467460405, lng: -72.0825769007206},
                    {lat: -36.612235791060264, lng: -72.082829028368},
                    {lat: -36.612735281429764, lng: -72.08327427506447},
                    {lat: -36.6130345435064, lng: -72.08366587758064},
                    {lat: -36.6139387815737, lng: -72.0840172469616},
                    {lat: -36.614849467766895, lng: -72.08429351449013},
                    {lat: -36.61544151566939, lng: -72.08452418446541},
                    {lat: -36.61600987737896, lng: -72.08487287163734},
                    {lat: -36.61828543513498, lng: -72.08549246191978},
                    {lat: -36.6185351611301, lng: -72.08408161997795},
                    {lat: -36.61889898462358, lng: -72.08350494503975},
                    {lat: -36.61984836210373, lng: -72.07888349890709},
                    {lat: -36.619163778157635, lng: -72.07864478230476},
                    {lat: -36.61943287634586, lng: -72.07717224955559},
                    {lat: -36.616666502168236, lng: -72.07635685801506},
                    {lat: -36.61417129821998, lng: -72.07557365298271},
                    {lat: -36.614373673248835, lng: -72.07444176077843},
                    {lat: -36.61258672644238, lng: -72.07388252019882},
                    {lat: -36.61165986603652, lng: -72.07360692322254},
                    {lat: -36.61191284297853, lng: -72.07227990031242},
                    {lat: -36.610401427980186, lng: -72.07179509103298}                                 
                ];
                
                var coordenadasLinea13Vuelta = [
                    {lat: -36.610401427980186, lng: -72.07179509103298},
                    {lat: -36.61012583914648, lng: -72.07314692437649},
                    {lat: -36.61438013201761, lng: -72.07444712519646},
                    {lat: -36.61416914529128, lng: -72.07557901740074},
                    {lat: -36.61943287634586, lng: -72.07718063145876},
                    {lat: -36.61916108717101, lng: -72.07864712923765},
                    {lat: -36.619855896798875, lng: -72.0788898691535},
                    {lat: -36.61931877882875, lng: -72.08148255944252},
                    {lat: -36.61890329021677, lng: -72.08351500332355},
                    {lat: -36.61852870270938, lng: -72.08408497273922},
                    {lat: -36.61827467106528, lng: -72.08549983799458},
                    {lat: -36.615995883675055, lng: -72.08487756550312},
                    {lat: -36.61543398054283, lng: -72.08453021943569},
                    {lat: -36.61482901512175, lng: -72.08429150283337},
                    {lat: -36.61393016983259, lng: -72.08401523530483},
                    {lat: -36.61314219145139, lng: -72.08374701440334},
                    {lat: -36.612735281429764, lng: -72.08329103887081},
                    {lat: -36.612219643688306, lng: -72.0828203111887},
                    {lat: -36.61112376747621, lng: -72.08242736756802},
                    {lat: -36.609084836502085, lng: -72.08171255886555},
                    {lat: -36.60672288180737, lng: -72.0810916274786},
                    {lat: -36.60642682495531, lng: -72.08281762897968},
                    {lat: -36.60675517884976, lng: -72.0831985026598},
                    {lat: -36.60656031982201, lng: -72.08339564502239},
                    {lat: -36.606590463792195, lng: -72.0834868401289},
                    {lat: -36.60541053387914, lng: -72.08412788808346},
                    {lat: -36.60536639381499, lng: -72.0842619985342},
                    {lat: -36.605136003801896, lng: -72.08645738661289},
                    {lat: -36.60487331528382, lng: -72.086386308074},
                    {lat: -36.604483587227655, lng: -72.08973504602909},
                    {lat: -36.60429841188108, lng: -72.09137789905071},
                    {lat: -36.603625532605975, lng: -72.09112845361233},
                    {lat: -36.603581391520386, lng: -72.09129743278027},
                    {lat: -36.607245015668006, lng: -72.09268614649773},
                    {lat: -36.605725973114474, lng: -72.09883075207472},
                    {lat: -36.615600829601476, lng: -72.10250571370125},
                    {lat: -36.61538554042592, lng: -72.10342034697533},
                    {lat: -36.61743937467354, lng: -72.10443824529648},
                    {lat: -36.61825529573604, lng: -72.10498407483101},
                    {lat: -36.61866002382433, lng: -72.10518255829811},
                    {lat: -36.62018849903651, lng: -72.10533007979393},
                    {lat: -36.620218637679706, lng: -72.10798278450966},
                    {lat: -36.620440371620916, lng: -72.1090342104435},
                    {lat: -36.62080418612336, lng: -72.11155280470848},
                    {lat: -36.62097855814605, lng: -72.11404725909233},
                    {lat: -36.621047445750015, lng: -72.11514964699745},
                    {lat: -36.62078481142983, lng: -72.1183468401432},
                    {lat: -36.619396279047436, lng: -72.11998030543327},
                    {lat: -36.618343561085375, lng: -72.11844071745872},
                    {lat: -36.61815411338199, lng: -72.11871966719627},
                    {lat: -36.61799480472563, lng: -72.11929097771645},
                    {lat: -36.61750395976891, lng: -72.1207956969738},
                    {lat: -36.61745013885986, lng: -72.12150916457176},
                    {lat: -36.61762451846884, lng: -72.1222896873951},
                    {lat: -36.61809814010782, lng: -72.12316945195198},
                    {lat: -36.61852439709527, lng: -72.12351277470589},
                    {lat: -36.61723916053408, lng: -72.12594017386436},
                    {lat: -36.6163780185233, lng: -72.12752804160118},
                    {lat: -36.615372623056274, lng: -72.12936334311962},
                    {lat: -36.61355878758236, lng: -72.12760247290134},
                    {lat: -36.61263086237431, lng: -72.12682463228703},
                    {lat: -36.61069101049825, lng: -72.1253440529108},
                    {lat: -36.60970707141632, lng: -72.12461851537228},
                    {lat: -36.61188270108856, lng: -72.11983613669872},
                    {lat: -36.612304686475994, lng: -72.11612597107887},
                    {lat: -36.61266853936939, lng: -72.11479291319847},
                    {lat: -36.603982966807756, lng: -72.11153671145439},
                    {lat: -36.60708783759936, lng: -72.09933802485466},
                    {lat: -36.61560728826746, lng: -72.10250303149223},
                    {lat: -36.61537908174136, lng: -72.1034337580204},
                    {lat: -36.61745229169694, lng: -72.10443422198296},
                    {lat: -36.61838231169463, lng: -72.10503503680229},
                    {lat: -36.618682628255975, lng: -72.10518725216389},
                    {lat: -36.61999152118555, lng: -72.10533745586872},
                    {lat: -36.62018526989548, lng: -72.10520602762699},
                    {lat: -36.62113893700387, lng: -72.10477821528912},
                    {lat: -36.62170187491757, lng: -72.10466019809246},
                    {lat: -36.622716874954904, lng: -72.10456363856792},
                    {lat: -36.623990180598454, lng: -72.10517652332783},
                    {lat: -36.62524947318438, lng: -72.10576929152012},
                    {lat: -36.62694894739702, lng: -72.10656993091106},
                    {lat: -36.626142805022994, lng: -72.10928902029991},
                    {lat: -36.62611266869599, lng: -72.11039677262306},
                    {lat: -36.627326722831015, lng: -72.11072400212288},
                    {lat: -36.62808226814392, lng: -72.111287266016},
                    {lat: -36.628633316464615, lng: -72.11044237017632},
                    {lat: -36.62915422570753, lng: -72.11106732487679},
                    {lat: -36.630970922952294, lng: -72.11138918995857},
                    {lat: -36.629853788366326, lng: -72.11299315094948},
                    {lat: -36.62953091408212, lng: -72.11413845419884},
                    {lat: -36.62931996881919, lng: -72.11437717080116},
                    {lat: -36.628478334522654, lng: -72.11569681763649},
                    {lat: -36.62814038670736, lng: -72.1162761747837},
                    {lat: -36.6286742144251, lng: -72.11721494793892},
                    {lat: -36.628387928245914, lng: -72.11813226342201},
                    {lat: -36.629494321577894, lng: -72.11876593530178},
                    {lat: -36.629085345348486, lng: -72.12020561099052},
                    {lat: -36.630217558439256, lng: -72.12060660123825},
                    {lat: -36.63062868112929, lng: -72.12082251906395},
                    {lat: -36.63041558639621, lng: -72.12230645120144},
                    {lat: -36.63142293812496, lng: -72.12261356413364},
                    {lat: -36.63093755982258, lng: -72.1244253963232},
                    {lat: -36.630708322443915, lng: -72.12472446262836},
                    {lat: -36.630600699026225, lng: -72.12521128356457},
                    {lat: -36.63322666750885, lng: -72.12588854134083 },
                    {lat: -36.63293394102778, lng: -72.12735638022423},
                    {lat: -36.63271439543721, lng: -72.12888792157173},
                    {lat: -36.627875624007885, lng: -72.12762996554375},
                    {lat: -36.62743004570415, lng: -72.13060788810253},
                    {lat: -36.63107316471149, lng: -72.13158018887043},
                    {lat: -36.630434958669014, lng: -72.13611714541912},
                    {lat: -36.62681387339501, lng: -72.13513042777777},
                    {lat: -36.62661798876436, lng: -72.13660698384047}
                ];
                
                
                
                var polylineRapidoIda = new google.maps.Polyline({
                    path: coordenadasRapidoIda,
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
                var polylineRapidoVuelta = new google.maps.Polyline({
                    path: coordenadasRapidoVuelta,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
                var polylineLinea13Ida = new google.maps.Polyline({
                    path: coordenadasLinea13Ida,
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
                
                var polylineLinea13Vuelta = new google.maps.Polyline({
                    path: coordenadasLinea13Vuelta,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });

                //Mostrar puntos en pantalla

                if (mostrarRapidoIda == true) {
                     polylineRapidoIda.setMap(map);
                }

                if (mostrarRapidoVuelta == true) {
                    polylineRapidoVuelta.setMap(map);
                }
                if(mostrarTreceIda == true){
                    polylineLinea13Ida.setMap(map);
                }
                if(mostrarTreceVuelta == true){
                    polylineLinea13Vuelta.setMap(map);
                }
 
            },
            function (error) {
                myApp.alert('Se ha producido un error, active GPS', 'APP_Recorrido');
                myApp.hidePreloader();
            }
    ,
            {
                maximumAge: 3000,
                timeout: 5000,
                enableHighAccuracy: true
            }
    );
}

function lineaRapido() {
    if (document.getElementById('rapidoIda').checked) {
        mostrarRapidoIda = true;
        mostrarRapidoVuelta = false;
        mostrarTreceIda = false;
        mostrarTreceVuelta = false;
        geo();
    } else {
        if (document.getElementById('rapidoVuelta').checked) {
            mostrarRapidoIda = false;
            mostrarRapidoVuelta = true;
            mostrarTreceIda = false;
            mostrarTreceVuelta = false;
            geo();   
        }

   }
}
function linea13(){
    if(document.getElementById('13ida').checked){
        mostrarRapidoIda = false;
        mostrarRapidoVuelta = false;
        mostrarTreceIda = true;
        mostrarTreceVuelta = false;
        geo();
    } else {
        if (document.getElementById('13vuelta').checked) {
            mostrarRapidoIda = false;
            mostrarRapidoVuelta = false;
            mostrarTreceIda = false;
            mostrarTreceVuelta = true;
            geo();   
        }

    }
}
    

//Descarga de imagen línea Rápido
function initRapido() {
    console.log('Inicio de descarga');
    window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

        console.log('file system open: ' + fs.name);

        // Make sure you add the domain name to the Content-Security-Policy <meta> element.
        var fotoRapido = 'http://i.imgur.com/krdlB2M.jpg';
        // Parameters passed to getFile create a new file or return the file if it already exists.
        fs.root.getFile('downloaded-Rapido.png', {create: true, exclusive: false}, function (fileEntry) {
            downloadRapido(fileEntry, fotoRapido, true);

        }, error);
        
    }, error);
}

function error() {
    console.log("Error");
}

function downloadRapido(fileEntry, uri, readBinaryData) {

    var fileTransfer = new FileTransfer();
    var fileURL = fileEntry.toURL();

    fileTransfer.download(
            uri,
            fileURL,
            function (entry) {
                console.log("Successful download...");
                console.log("download complete: " + entry.toURL());
                displayImageByFileURLRapido(entry);
            },
            function (error) {
                console.log("download error source " + error.source);
                console.log("download error target " + error.target);
                console.log("upload error code" + error.code);
            },
            null, // or, pass false
            {
                //headers: {
                //    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                //}
            }
    );
}

function displayImageByFileURLRapido(fileEntry) {
    var elem = document.getElementById('imgRapido');
    elem.src = fileEntry.toURL();
}

//Descaga Imagen línea 13
function initTrece() {
    console.log('Inicio de descarga');
    window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

        console.log('file system open: ' + fs.name);

        // Make sure you add the domain name to the Content-Security-Policy <meta> element.
        var fotoTrece = 'http://i.imgur.com/3YdtsL9.jpg';
        fs.root.getFile('downloaded-Trece.png', {create: true, exclusive: false}, function (fileEntry) {
            downloadTrece(fileEntry, fotoTrece, true);
        }, error);    
    }, error);
}

function downloadTrece(fileEntry, uri, readBinaryData) {

    var fileTransfer = new FileTransfer();
    var fileURL = fileEntry.toURL();

    fileTransfer.download(
            uri,
            fileURL,
            function (entry) {
                console.log("Successful download...");
                console.log("download complete: " + entry.toURL());
                displayImageByFileURLTrece(entry);
            },
            function (error) {
                console.log("download error source " + error.source);
                console.log("download error target " + error.target);
                console.log("upload error code" + error.code);
            },
            null, // or, pass false
            {
                //headers: {
                //    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                //}
            }
    );
}

function displayImageByFileURLTrece(fileEntry) {
    var elem = document.getElementById('imgTrece');
    elem.src = fileEntry.toURL();
}