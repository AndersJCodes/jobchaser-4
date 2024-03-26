Länk till Trello:
https://trello.com/b/2GHlzw4j/job-seeker

Länk till designskiss (obsolete):
https://www.figma.com/file/pQ0pkXtYPl7BzkjDHfJ6M9/Jobseeker?type=design&node-id=0-1&mode=design&t=npDbeVqqJ7YR3163-0

# Svar på frågorna

## Del 3

### Vad menas med Reacts ekosystem?

Med ekosystem menas de verktyg och bibliotek som finns tilgängliga och kan användas tillsammans med react-biblioteket.

Eftersom react är öppen för att hämta in fler verktyg via npm install kan vi skapa beroende i vår kod som gör att vi kan använda andra verktyg än bara react. Det gör att språket kan utvecklas snabbare.

### Nämn några andra viktiga bibliotek i Reacts ekosystem förutom React Router och React Hook Form?

Andra exempel på verktyg än de ovan är Redux som hjälper oss hantera glabal stateUse context på ett enklare sätt.Tailwind som vi använder för att styla coh next.js som kan användas för serverrendering och statistik mfl.

### Vad är fördelen med att använda React Hook Form?

React Hook Form förenklar byggandet av formulär på flera sätt.

Det underlättar när vi utvecklar formulär. Det har verktyg för enklare hantering av validering av formulär. det är också en förhållandevis enkel syntax, vilket cokså hjälper till att göra det lättviktigt för prestanda. Min känsla är att det också fungerar väl med react och använder sig av till exempel useState för ytterligare finjustering.

### Vad är syftet med useContext? Vilket problem med props löser den?

UseContect är i princip en global useState. UseState kan jämföras med ett komponents minne och används för att uppdatera komponenten.

UseContext är samma sak fast på en global nivå och gär då minnet tillgängligt i hela din app. Då slipper man använda sig av så kallad propsdrilling, som används för att skicka en lokal useState ner till den komponent som behöver den. Med useContext gör man den tillgänglig i hela appen samtidigt.

Exempel på användningsområde kan vara för att berätta om en användare är inloggad eller ej.

### Vilka fördelar finns det att använda Tailwind / nackdelar?

Fördelarna med tailwind är att det kan gå snabbare att styla sina komponenter. Genom strukturerade förkortningar kan vi direkt i klassnamnen skapa vår styling eftersom det refererar ett redan färdigt bibliotek. Vi kan jobba snabbt och också skapa responsivitet.

Nackdelar är att det kan vara en inlärningskurva, det är många klasser man ska komma ihåg. Det kan cokså skapa en viss fragmentering och mycket kod i komponenten, där olika utvecklare löser styling på olika sätt.

Det är också färdiga verktyg, vilket till viss del begränsar dina designalternativ, vilket dock kan överbryggas.

## Del 2

### Vad är det för skillnad mellan state och props?

State är en lokal variabel som verkar inuti en komponent. Det är ett slags minne i komponenten som komponenten själv kan uppdatera och förändra. När vi uppdaterar den renderas vår komponent om på hemsidan. den gör våra komponenter interaktiva.

Props är eterna data som ägs av en parent-komponent. De kan endast läsas och kan jämföras med funktionsparametrar. När en child-komponent tar emot props så uppdateras den/renderas. Det kan därför bli ett sätt för en parent-komponent att påverka en child. Props går endast i en riktning, uppifrån och ner.

### Vad menas med en kontrollerad komponent i React?

En kontrollerad komponent eller element i react är kontrollerad av REACT och inte av DOM.

Det gör vi genom att skapa en deklarera en state, sen kan vi skapa logik kopplat till vår state med en handler och därefter kopplar vi vår handler till ett element som är den som användaren interagerar med som påverkar vårt state och vår komponent.

### Vad är en callback handler?

En callback handler är när vi skickar en funktion från en parent-komponent till en child-komponent som där hanterar ett event som sen "ringer" funktionen i vår parent-komponent. Vi använder UseState ovan, men istället för att hantera alla tre steg i en komponent, skickar vi ner vår handlerfunktion till en child.

### Vad menas med "lifting state up"?

Om vi har flera komponenter som behöver åtkomst till samma state så behöver vi lyfta den uppåt till den tidigast gemensamma komponent. Därefter använder vi props för att skicka den del av vår state som behövs i respektive komponent.

### Vad är syftet med useEffect-hook i React?

UseEffect-hook använder vi för saker som händer utanför själva komponenten, som inte direkt behöver uppdatera UI delen av komponenten. Rent teoretiskt skulle vi kunna använda state, men eftersom vi har ett annat syfte och behov, vill vi använda ett annat namn. Exempel är till exempel en fetch som sker en gång när vi laddar in komponenten. Det är alltså data eller funktionalitet som behövs för komponenten

### Vad är syftet kring den s.k dependency-arrayen i useEffect?

Med dependancy arrayen kan vi skapa en sidoeffekt som är kopplad till exempelvis en state. På så sätt kan vi få något att hända vid ett specifikt tillfälle. Till exempel om något i UI ändras genom en useState. Med dependancy-arrayen kopplar vi helt enkelt vår useEffect till att något särskilt händer, som till exempel en knapptryckning. Inte själva knapptryckningen, men kanske något mer som ska loggas eller fixas i sambandmed att knappen trycks på.

## Del 1

### Allmänt om ramverket React: Hur/Varför uppkom det? Vad är dess kännetecken?

React är ett JavaScript-bibliotek som utvecklades av Facebook. Det skapades för att hantera gränssnittskomponenter i stora, dynamiska webbapplikationer.

React är ett populärt deklarativt, komponentbaserat och tillståndsdrivet JavaScript-bibliotek för att bygga användargränssnitt, skapat av Facebook.

**Komponenter** är byggstenarna i användargränssnittet. Vi använder dessa komponenter för att bygga sidor och sedan kombinera dem likt legobitar.

Vi beskriver hur komponenter ser ut och hur de fungerar med hjälp av en **deklarativ** syntax som kallas JSX. Och det är deklarativt eftersom vi berättar för React hur en komponent ska se ut baserat på det aktuella tillståndet. Det är ett abstraktionslager bort från DOM: vi rör aldrig DOM:en. Istället använder vi JSX, mer om det nedan.

**Tillståndsdrivet**: Baserat på ett initialt tillstånd kommer komponenterna att renderas. När tillståndet ändras kommer React automatiskt att reagera på tillståndsändringarna och visa dem på sidan.

**JavaScript-bibliotek**: Vi behöver importera flera externa bibliotek för att bygga kompletta applikationer. Det finns ramverk som är byggda ovanpå JavaScript, som Next.js eller remix.

**Populärt och backat av Facebook**: Många företag har anpassat sig till React och de behöver React-utvecklare. Stor och livlig React-community. Tack vare detta finns det en gigantiskt bibliotek byggt kring React.

### Vad är JSX?

JSX är en syntaxutökning för JavaScript som används i React för att beskriva hur användargränssnitt ska se ut. Syntaxen kombinerar HTML, CSS och JavaScript samt refererar till andra system.

### Vad är en komponent i React?

I React är en komponent en återanvändbar och isolerad bit av användargränssnittet. Den kan innehålla HTML-markup, JavaScript-logik och andra komponenter. Komponenter möjliggör strukturerad och modulär kod och underlättar återanvändning och underhåll av gränssnittselement.

Med hjälp av flera komponenter skapar vi ett träd med nästlade komponenter som i sin tur utgör hela gränssnittet.

### Vad är props i React?

Props (förkortning för "properties") är en mekanism för att överföra data från en överordnad komponent till en underordnad komponent i React. Props är oföränderliga (immutable) och används för att konfigurera eller anpassa en komponents beteende eller utseende. De kan endast ärvas nedåt (se one-way-dataflow nedan).

### Vad menas med one-way-dataflow?

One-way-dataflow är en grundläggande princip i React där data flyter i enbart en riktning genom komponenthierarkin. Det innebär att data bara kan passeras neråt från en överordnad komponent till dess underordnade komponenter via props. Detta bidrar till att göra koden lättare att förstå och felsöka.

### Hur kan man använda sig av conditionell rendering i React?

I React kan conditionell rendering utföras genom att använda JavaScript-uttryck eller ternära operatorer inom JSX-markupen. Det innebär att du kan använda logik för att göra villkorsbaserade renderingar av användargränssnittet. Till exempel med ternära operatorer eller logiska operatorer/short circuts som && och || för att styra renderingen av olika komponenter.
