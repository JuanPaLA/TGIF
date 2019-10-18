

      var statistics = {
        "NumberOfDemocrats": 0,
        "NumberOfRepublicans": 0,
        "NumberOfIndependents":0,
        "DemocratsLoyalty": 0,
        "RepublicansLoyalty": 0,
        "IndependentsLoyalty": 0,
        "Members": [
                {   
                    "Name": "Paul",
                    "Party": "I",
                    "Chamber": "Senate",
                    "MissedVotes": 13,
                    "VotedWithParty": 26,
                    "TotalVotes": 63,                 
                    "Loyalty": 0,   
                },
            {
                    "Name": "John",
                    "Party": "I",
                    "Chamber": "House",
                    "MissedVotes": 3,
                    "VotedWithParty": 44,
                    "TotalVotes": 68,
                    "Loyalty": 0,
            },
            {
                    "Name": "Otto",
                    "Party": "D",
                    "Chamber": "House",
                    "MissedVotes": 4,
                    "VotedWithParty": 15,
                    "TotalVotes": 57,                
                    "Loyalty": 0,
            },
            {   
                    "Name": "Paul",
                    "Party": "I",
                    "Chamber": "Senate",
                    "MissedVotes": 23,
                    "VotedWithParty": 26,
                    "TotalVotes": 73,                 
                    "Loyalty": 0,   
                },
            {
                    "Name": "John",
                    "Party": "I",
                    "Chamber": "House",
                    "MissedVotes": 2,
                    "VotedWithParty": 30,
                    "TotalVotes": 61,                 "Loyalty": 0,   
            },
            {
                    "Name": "Diego",
                    "Party": "D",
                    "Chamber": "Senate",
                    "MissedVotes": 1,
                    "VotedWithParty": 39,
                    "TotalVotes": 50,                 "Loyalty": 0,   
            },
            {   
                    "Name": "Phill",
                    "Party": "I",
                    "Chamber": "House",
                    "MissedVotes": 13,
                    "VotedWithParty": 26,
                    "TotalVotes": 43,                 "Loyalty": 0,   
                },
            {
                    "Name": "Bert",
                    "Party": "D",
                    "Chamber": "Senate",
                    "MissedVotes": 3,
                    "VotedWithParty": 2,
                    "TotalVotes": 58,                 "Loyalty": 0,   
            },
            {
                    "Name": "Pam",
                    "Party": "D",
                    "Chamber": "House",
                    "MissedVotes": 13,
                    "VotedWithParty": 19,
                    "TotalVotes": 20,                 "Loyalty": 0,   
            },
            {   
                    "Name": "Gustav",
                    "Party": "R",
                    "Chamber": "Senate",
                    "MissedVotes": 23,
                    "VotedWithParty": 26,
                    "TotalVotes": 49,                 "Loyalty": 0,   
                },
            {
                    "Name": "Robert",
                    "Party": "R",
                    "Chamber":"House",
                    "MissedVotes": 20,
                    "VotedWithParty": 12,
                    "TotalVotes": 39,                 "Loyalty": 0,  
            },
            {
                    "Name": "Sophia",
                    "Party": "D",
                    "Chamber": "House",
                    "MissedVotes": 4,
                    "VotedWithParty": 58,
                    "TotalVotes": 66,                 "Loyalty": 0,   
            },
            {   
                    "Name": "Angela",
                    "Party": "I",
                    "Chamber": "House",
                    "MissedVotes": 23,
                    "VotedWithParty": 26,
                    "TotalVotes": 28,
                    "Loyalty": 0,
                },
            {
                    "Name": "Steve",
                    "Party": "D",
                    "Chamber": "Senate",
                    "MissedVotes": 12,
                    "VotedWithParty": 45,
                    "TotalVotes": 47,
                    "Loyalty": 0,
            },
            {
                    "Name": "Meredith",
                    "Party": "I",
                    "Chamber": "House",
                    "MissedVotes": 2,
                    "VotedWithParty": 55,
                    "TotalVotes": 65,
                    "Loyalty": 0,
            },
            {   
                    "Name": "Lia",
                    "Party": "I",
                    "Chamber": "Senate",
                    "MissedVotes": 23,
                    "VotedWithParty": 26,
                    "TotalVotes": 53,
                    "Loyalty": 0,
                },
            {
                    "Name": "Smith",
                    "Party": "D",
                    "Chamber": "Senate",
                    "MissedVotes": 5,
                    "VotedWithParty": 39,
                    "TotalVotes": 45,
                    "Loyalty": 0,
            },
            {
                    "Name": "Marco",
                    "Party": "D",
                    "Chamber": "House",
                    "MissedVotes": 6,
                    "VotedWithParty": 22,
                    "TotalVotes": 29,
                    "Loyalty": 0,
            },
            {   
                    "Name": "Ron",
                    "Party": "R",
                    "Chamber": "Senate",
                    "MissedVotes": 23,
                    "VotedWithParty": 26,
                    "TotalVotes": 63,
                     "Loyalty": 0,
                },
            {
                    "Name": "Rita",
                    "Party": "R",
                    "Chamber": "House",
                    "MissedVotes": 2,
                    "VotedWithParty": 34,
                    "TotalVotes": 49,
                    "Loyalty": 0,
            },
            {
                    "Name": "Lilian",
                    "Party": "I",
                    "Chamber": "Senate",
                    "MissedVotes": 4,
                    "VotedWithParty": 50,
                    "TotalVotes": 60,
                    "Loyalty": 0,
                    
            }
        ]
    }


/*1. Open your Senate Attendance HTML file.

2. Write code to create and fill three variables, one for a list of the 
Democrat objects, one for the Republican objects, and one for the Independents. 
See your Resources for help with JSON and looping.
3. Then update your statistics object with the number of members in each 
party, e.g. for the key "Number of Democrats" replace the default value 
of zero with the length of the list of Democrat objects.
4. Use console.log() to print your updated statistics object to the 
Developer Console so that you can inspect it to verify that it contains the correct answers. 
See Resources for help with console.log() */

/*--------SORTING BY PARTY------------------*/

var independents= [];
var republicans= [];
var democrats= [];         
var contadorI = 0;
var contadorD = 0;
var contadorR = 0;   
function sortByParty(){    
    for(i = 0; i < statistics.Members.length; i++){
            if(statistics.Members[i].Party=="I"){                                
                independents[contadorI]=statistics.Members[i];  
                contadorI++;
            }else if(statistics.Members[i].Party=="R"){
                republicans[contadorR]=statistics.Members[i];                
                contadorR++;
            }else if(statistics.Members[i].Party=="D"){
                democrats[contadorD]=statistics.Members[i];                
                contadorD++;
            }                 
        }
        statistics.NumberOfDemocrats = contadorD;
        statistics.NumberOfIndependents = contadorI;
        statistics.NumberOfRepublicans = contadorR;
    } 

sortByParty();

console.log("Numbers of Democrats " + contadorD, "Numbers of Republicans " + contadorI, "Numbers of Independents " +  contadorR);
console.log(JSON.stringify(statistics, null, 2));
/*---------------------SORT BY CHAMBER--------------------------------*/ 
var senators = [];
var congressmans = [];
function sortByChamber(){
    var senateCounter=0;
    var congressCounter=0;
    for(i = 0; i < statistics.Members.length; i++){
        if(statistics.Members[i].Chamber=="Senate"){
            senators[senateCounter]=statistics.Members[i];
            senateCounter++;
        }else if(statistics.Members[i].Chamber=="House"){
            congressmans[congressCounter]=statistics.Members[i]; 
            congressCounter++;
        }
    }
}

sortByChamber();

/*---------------------AVERAGE--------------------------------*/ 
/* Calculate the Average "Votes with Party" for Each Party
1. Open your statistics javascript file.
2. To get an average of an array of data, you first sum up the relevant 
numbers from that array, then divide by the size of the array. Do that 
with the list of Democrats, using the percent party votes for each member.
3. Store the result in your statistics object.
4. Repeat for the list of Republicans.
5. Call your results in your Senate Party Loyalty HTML file. 
6. Use console.log to print this object to the Developer Console so that you can inspect 
and verify it contains the correct answers. (Remember to stringify.)*/
   
function democratsSenateVWP(){    
    var democratsTotalVote=0;
    var democratsTotalVoteWP=0;
    for(i = 0; i < democrats.length; i++){
        democratsTotalVote+=democrats[i].TotalVotes;
        democratsTotalVoteWP+=democrats[i].VotedWithParty;
    }
    statistics.DemocratsLoyalty=(democratsTotalVoteWP*100)/democratsTotalVote;    
    console.log("PROMEDIO DE VOTO DEMÓCRATA LEAL -> " + statistics.DemocratsLoyalty); 
    // return statistics.DemocratsLoyalty;
}

function republicansSenateVWP(){
    var RepublicansTotalVote = 0;
    var RepublicansTotalVoteWP = 0;    
    for(i = 0; i < republicans.length; i++){
        RepublicansTotalVote += republicans[i].TotalVotes;
        RepublicansTotalVoteWP += republicans[i].VotedWithParty;
    }    
    statistics.RepublicansLoyalty=(RepublicansTotalVoteWP*100)/RepublicansTotalVote;
    console.log("EL PROMEDIO DE VOTO REPUBLICANO LEAL ES -> " + statistics.RepublicansLoyalty);   
    // return totalVotedWPR;    
}

function independentsSenateWWP(){
    var IndependentsTotalVote=0;
    var IndependentsTotalVoteWP=0;
    for(i = 0; i < independents.length; i++){
        IndependentsTotalVote+=independents[i].TotalVotes;
        IndependentsTotalVoteWP+=independents[i].VotedWithParty;        
    }
    statistics.IndependentsLoyalty=((IndependentsTotalVoteWP*100)/IndependentsTotalVote).toFixed(2);
    console.log("EL PROMEDIO DE VOTO INDEPENDIENTE LEAL ES -> " + statistics.IndependentsLoyalty);   
}

democratsSenateVWP();
republicansSenateVWP();
independentsSenateWWP();

/*--------LEAST LOYALTY MEMBERS------------------*/
/*Identify the Members Who Least Often Vote with Their Party
This is a non-trivial problem, and there are multiple ways to solve it, some simpler than others.
1. Think about the problem in general, which is
Given a list of N numbers and a percentage K
Example: 100 values and you want to find the 10% of those values that are the smallest values in the set.
Sort the values so there are listed from least to greatest
Calculate how many values represents the 10% of them
Take the amount of values from the previus calculus
2. Develop and test code to solve this problem, then apply it to the data on voting with one's party. 
Your goal is to generate a list of the names of the 10% of Senators who vote least often with their party.
3. Call your code in the Senate Party Loyalty HTML file and use console.log to check your answers on 
different test data. */

function avrgLoyalty(){    
    for(i = 0; i < statistics.Members.length; i++){
        statistics.Members[i].Loyalty = (statistics.Members[i].VotedWithParty * 100) / statistics.Members[i].TotalVotes;        
    }    
    statistics.Members.sort((a, b) => (a.Loyalty) - (b.Loyalty)); 
    var contLenght = statistics.Members.length/10;
    for(i = 0; i < contLenght; i++){        
        if(statistics.Members[i].Chamber == "Senate"){
            console.log("SENADORES MENOS LEALES - POSICIÓN " + contLenght + ":" + JSON.stringify(statistics.Members[i]));
            contLenght++;
        }
    }
    console.log(JSON.stringify(statistics));
}

avrgLoyalty();

/*--------SORTING BY PARTY & CHAMBER------------------*/

var independientesSenate = [];
var republicanosSenate = [];
var democratasSenate = [];
var democratasHouse = [];
var independientesHouse = [];
var republicanosHouse = [];
var contIA = 0;
var contIB = 0;
var contDA = 0;
var contDB = 0;
var contRA = 0;
var contRB = 0;
function sortByPartyChamber(){    
    for(i = 0; i < statistics.Members.length; i++){
            if(statistics.Members[i].Party=="I"){
               switch(statistics.Members[i].Chamber){
                case "Senate":
                    independientesSenate[contIA]=statistics.Members[i];
                    contIA++;
                    break;
                case "House":
                    independientesHouse[contIB]=statistics.Members[i];
                    contIB++;
                }
            }else if(statistics.Members[i].Party=="R"){
              switch(statistics.Members[i].Chamber){
                case "Senate":
                    republicanosSenate[contRA]=statistics.Members[i];
                    contRA++;
                    break;
                  case "House":
                      republicanosHouse[contRB]=statistics.Members[i];
                      contRB++;
                      break;
                }
            }else if(statistics.Members[i].Party=="D"){
                switch(statistics.Members[i].Chamber){
                    case "Senate":
                        democratasSenate[contDA]=statistics.Members[i];
                        contDA++;
                        break;
                    case "House":
                        democratasHouse[contDB]=statistics.Members[i];
                        contDB++;
                        break;
                }
            }               
        }
    }            
            


/* Get the Remaining Statistics
The remaining statistics are the same logic, differing only in what numbers are looked 
at and whether to collect the smallest or biggest values.
1. The real challenge now is to generalize your code into a few functions that can get 
these answers, with as little repeated code as possible. Can you come up with one function 
that, given the appropriate parameters, can do all these statistics?
2. Collect and store the results into your statistics object with the appropriate keys.
3. Call the results in Senate Party Attendance HTML file and in the Senate Attendance HTML file.
SUBMIT: Submit your Senate HTML files and statistics javascript file for mentor review.*/ 

sortByPartyChamber();


/*Create HTML Table to Display the Statistics

Add the HTML elements for the table to display your statistics.
1. Write JavaScript code to loop through your statistics object and construct the each table's rows. 
You will be creating three tables of calculated data from the same statistics object for each Senate page:
Attendance Page: Senate at a Glance Table, Most Engaged Table, Least Engaged Table
Party Loyalty Page: Senate at a Glance Table, Most Loyal Table, Least Loyal Table
TIP: For review- refer to the previous task on constructing HTML tables from JSON data.
2. Once you have the code in place for all the tables, call the appropriate functions in the HTML to create each 
table as specified in Step 1.  
Remove any remaining calls to the javascript from previous steps.
3. Refer to the wireframes and style the first page with bootstrap.  Repeat with the second page. */

/* -------TABLA 1----------------------*/
function senateAtGlance(){
    var aux = "<tr><th>Party</th> <th>Numbers of Reps</th> <th>% Voted W/Party</th></tr>";

    aux+= "<tr><td>Republican </td>";
    aux+= "<td>" + statistics.NumberOfRepublicans + "</td>";
    aux+= "<td>" + statistics.RepublicansLoyalty.toFixed(2) + "</td> </tr>";
    
    aux+= "<tr><td>Democrat</td>";
    aux+= "<td>" + statistics.NumberOfDemocrats + "</td>";
    aux+= "<td>" + statistics.DemocratsLoyalty.toFixed(2) + "</td> </tr>";
    
    aux+= "<tr><td>Independent</td>";
    aux+= "<td>" + statistics.NumberOfIndependents + "</td>";
    aux+= "<td>" + statistics.IndependentsLoyalty + "</td></tr> ";    
    
    return (aux);        
}


/* -----------------TABLA 2----------------------*/
senators.sort((a, b) => (a.MissedVotes) - (b.MissedVotes)); 
function leastEngagedSenateAttendance(){        
    var c = senators.length - 1;
    var aux = "<tr><th>Name</th><th> Number of Missed Votes</th><th>% Missed</th></tr><tr><td>";
    for(i = 0; i < 5; i++){        
        aux+=senators[c].Name + "</td><td>" + senators[c].MissedVotes + "</td>" +
        "<td>" + (senators[c].MissedVotes*100/senators[c].TotalVotes).toFixed(2);
        aux+="</td></tr>";        
        c--;
        if(i < 4){
            aux+="<tr><td>";
        }
    }
    return aux;
}


/* -----------------TABLA 3----------------------*/
function MostEngagedSenateAttendance(){            
    var aux = "<tr><th>Name</th><th> Number of Missed Votes</th><th>% Missed</th></tr><tr><td>";
    for(i = 0; i < 5; i++){        
        aux+=senators[i].Name + "</td><td>" + senators[i].MissedVotes + "</td>" +
        "<td>" + (senators[i].MissedVotes*100/senators[i].TotalVotes).toFixed(2);
        aux+="</td></tr>";        
        if(i < 4){
            aux+="<tr><td>";
        }
    }
    return aux;
}

/*------------------------SENATE PARTY LOYALTY------------- */
/* Senate at glance */
function senateAtGlanceLoyalty(){
    var aux = "<tr><th>Party</th> <th>Numbers of Reps</th> <th>% Voted W/Party</th></tr>";
    
    aux+= "<tr><td>Republican </td>";
    aux+= "<td>" + republicanosSenate.length + "</td>";
    aux+= "<td>" + statistics.RepublicansLoyalty.toFixed(2); + "</td> </tr>";
    
    aux+= "<tr><td>Democrat</td>";
    aux+= "<td>" + democratasSenate.length + "</td>";
    aux+= "<td>" + statistics.DemocratsLoyalty.toFixed(2); + "</td> </tr>";
    
    aux+= "<tr><td>Independent</td>";
    aux+= "<td>" + independientesSenate.lenght + "</td>";
    aux+= "<td>" + statistics.IndependentsLoyalty + "</td></tr> ";    
    
    return (aux);        
}



/* ------Least Loyal (Bottom 10% of Party) ------------*/

function leastLoyalBottom(){
    senators.sort((a, b) => (a.Loyalty) - (b.Loyalty));
    var aux = "<tr><th>Name</th><th>Number Votes Party</th><th> Party Votes Pte</th></tr>";
    for(i=0; i <5; i++){
        aux+="<tr><td>" + senators[i].Name + "</td><td>" +
        senators[i].VotedWithParty + "</td><td>" +
        senators[i].Loyalty.toFixed(2) + "</td></tr>";
    }
    return aux;
}



/* -  MOST LOYAL   - -- - - - - - - - - - - - - */

function MostLoyalTop(){
    senators.sort((a, b) => (a.Loyalty) - (b.Loyalty));
    var c = senators.length - 1;
    var aux = "<tr><th>Name</th><th>Number Votes Party</th><th> Party Votes Pte</th></tr>";
    for(i = 0 ; i <5; i++){
        aux+="<tr><td>" + senators[c].Name + "</td><td>" +
        senators[c].VotedWithParty + "</td><td>" +
        senators[c].Loyalty.toFixed(2) + "</td></tr>";
        c--;
    }
    return aux;
}

/*--------------HOUSE ATTENDANCE ---------   */
var rephouse = []; var indhouse = []; var demohouse = [];
cr=19; ci=12; cd=15;
function houseAtGlance(){
    for(i=0; i< congressmans.lenght; i++){
        if(congressmans[i].Party=="D"){
            demohouse[cd]=congressmans[i];
            cd++;
        }else if(congressmans[i].Party=="R"){
            rephouse[cr]=congressmans[i];
            cr++;
        }else if(congressmans[i].Party=="I"){
            demohouse[ci]=congressmans[i];
            ci++;
        }
    }

    var aux = "<tr><th>Party</th> <th>Numbers of Reps</th> <th>% Voted W/Party</th></tr>";

    aux+= "<tr><td>Republican </td>";
    aux+= "<td>" + cr + "</td>";
    aux+= "<td>" + statistics.RepublicansLoyalty.toFixed(2) + "</td> </tr>";
    
    aux+= "<tr><td>Democrat</td>";
    aux+= "<td>" + ci + "</td>";
    aux+= "<td>" + statistics.DemocratsLoyalty.toFixed(2) + "</td> </tr>";
    
    aux+= "<tr><td>Independent</td>";
    aux+= "<td>" + cd + "</td>";
    aux+= "<td>" + statistics.IndependentsLoyalty + "</td></tr> ";    
    
    aux+= "<tr><td>Total</td>";
    aux+= "<td>" + (ci + cd + cr) + "</td>";
    aux+= "<td>" + statistics.IndependentsLoyalty + "</td></tr> ";    
    console.log(aux);
    return aux;        
}


congressmans.sort((a, b) => (a.MissedVotes) - (b.MissedVotes));
/* -----------------TABLA 2----------------------*/

function leastEngagedHouseAttendance(){        
    congressmans.sort((a, b) => (a.MissedVotes) - (b.MissedVotes));
    var c = congressmans.length - 1;
    var aux = "<tr><th>Name</th><th> Number of Missed Votes</th><th>% Missed</th></tr><tr><td>";
    for(i = 0; i < 5; i++){        
        aux+=congressmans[c].Name + "</td><td>" + congressmans[c].MissedVotes + "</td>" +
        "<td>" + (congressmans[c].MissedVotes*100/congressmans[c].TotalVotes).toFixed(2);
        aux+="</td></tr>";        
        c--;
        if(i < 4){
            aux+="<tr><td>";
        }
    }
    return aux;
}

/* -----------------TABLA 3----------------------*/
function MostEngagedHouseAttendance(){     
    congressmans.sort((a, b) => (a.MissedVotes) - (b.MissedVotes));
    var aux = "<tr><th>Name</th><th> Number of Missed Votes</th><th>% Missed</th></tr><tr><td>";
    for(i = 0; i < 5; i++){        
        aux+=congressmans[i].Name + "</td><td>" + congressmans[i].MissedVotes + "</td>" +
        "<td>" + (congressmans[i].MissedVotes*100/congressmans[i].TotalVotes).toFixed(2);
        aux+="</td></tr>";        
        if(i < 4){
            aux+="<tr><td>";
        }
    }
    return aux;
}


/*--------------HOUSE LOYALTY ---------   */
function houseAtGlanceLoyalty(){
    var aux = "<tr><th>Party</th> <th>Numbers of Reps</th> <th>% Voted W/Party</th></tr>";

    aux+= "<tr><td>Republican </td>";
    aux+= "<td>" + contRB + "</td>";
    aux+= "<td>" + statistics.RepublicansLoyalty.toFixed(2) + "</td> </tr>";
    
    aux+= "<tr><td>Democrat</td>";
    aux+= "<td>" + contDB + "</td>";
    aux+= "<td>" + statistics.DemocratsLoyalty.toFixed(2) + "</td> </tr>";
    
    aux+= "<tr><td>Independent</td>";
    aux+= "<td>" + contIB + "</td>";
    aux+= "<td>" + statistics.IndependentsLoyalty + "</td></tr> ";    
    
    aux+= "<tr><td>Total</td>";
    aux+= "<td>" + ((contIB)  + (contRB) + (contDB)) + "</td>";
    aux+= "<td>" + statistics.IndependentsLoyalty + "</td></tr> ";    
    
    return aux;        
}

/* ------Least Loyal (Bottom 10% of Party) ------------*/

function leastLoyalBottomHouse(){
    congressmans.sort((a, b) => (a.Loyalty) - (b.Loyalty));
    var aux = "<tr><th>Name</th><th>Number Votes Party</th><th> Party Votes Pte</th></tr>";
    for(i=0; i <5; i++){
        aux+="<tr><td>" + congressmans[i].Name + "</td><td>" +
        congressmans[i].VotedWithParty + "</td><td>" +
        congressmans[i].Loyalty.toFixed(2) + "</td></tr>";
    }
    return aux;
}



/* -  MOST LOYAL   - -- - - - - - - - - - - - - */

 function MostLoyalTopHouse(){     
     var c = congressmans.length - 1;
     var aux = "<tr><th>Name</th><th>Number Votes Party</th><th> Party Votes Pte</th></tr>";
     for(i = 0 ; i <5; i++){
         aux+="<tr><td>" + congressmans[c].Name + "</td><td>" +
         congressmans[c].VotedWithParty + "</td><td>" +
         congressmans[c].Loyalty.toFixed(2) + "</td></tr>";
         c--;
     }
     return aux;
 }