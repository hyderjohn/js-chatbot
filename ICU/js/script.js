// create variable username 
var username="";
// create a function send_msg and access container elements and jquery
function send_msg(message){
    // variable prevState to display all chat history in container
    var prevState=$("#container").html();
        if(prevState.length>6){
            prevState=prevState+"<br>";
            }
            // container to create bot and display message(which will be provided by message parameter ai function  ) and previous chat and by class current_msg we add transition effects to it
        $("#container").html(prevState+"<span class='current_msg'>" + "<span class='ICU'>Bot: </span>" +message+"</span>");
    //    it first hides all messages from container
        $(".current_msg").hide();
// adds 500ms delay to display messages again and fadeIn transition effect
        $(".current_msg").delay(500).fadeIn();
        // to remove class current_msg after it is not in use by func removeClass
        $(".current_msg").removeClass("current_msg");
    }
    // gets called when instruction case is true
    function instr(message){
        var prevState=$("#container").html();
        if(prevState.length>6){
            prevState=prevState+"<br>";
        }
        $("#container").html(prevState+"<p><span class='ICU'>Bot: </span>"+message+"<ul><li>Tell about ICU Medical?</li><li>Where is the Headquarters of ICU Medical located?</li> <li>Is there an ICU Medical office located in India? </li><li>What is Plum360?</li><li>What is LifeCare PCA? </li><li>What are the advantages of using ICU Medical IV Therapy Solutions?</li><li>What are the Oncology solutions provided by ICU Medical?</li><li> What is ICU Medical MedNet Safety software?</li><li>What is the primary focus of ICU Medical business? </li><li> What is Diana?</li><li> What is NanoClave?</li><li> What are the different variants of Sapphire Infusion Pump?</li><li> Name the Needle free IV connectors provided by ICU Medical?</li></ul></p>");
        $(".current_msg").hide();
        // adds 500ms delay to display messages again and fadeIn transition effect
                $(".current_msg").delay(500).fadeIn();
                // to remove class current_msg after it is not in use by func removeClass
                $(".current_msg").removeClass("current_msg");
    }
    // calls function username
function get_username(){
    // call function send message
    send_msg("Hello, what is your name?");
    }
    // create function ai and pass parameters (message)
function ai(message){
    // to check if username is provided 
    //alert(message);
    if(username.length<1){
        // stores username in bot's memory
        username=message;
        // alert(username);
        // display message: Welcome to ICU Medical + username + how may i help you?"
        send_msg("Welcome to ICU Medical "+username+", how may i help you?");
        
    }
        else{
            // calls the func questionbank if username exists
            questionbank(message);
        }
        // loops by which the bot will check the user inputs and replies accordingly
    }
   function questionbank(message){
    switch(message){
        case "tell about icu medical":
        send_msg("ICU Medical connects patients and caregivers through safe, lifesaving, life enhancing IV therapy products, systems, and services.");
        break;
        
        case "where is the headquarters of icu medical located":
        send_msg("Headquarters of ICU Medical is located in San Clemente, California, USA.");
        break;
        
        case "is there an icu medical office located in india":
        send_msg("Yes, ICU Medical has a Devices R&D office located in Chennai, Tamilnadu.");
        break;
        
        case "what is plum360":
        send_msg("Plum360 is a Large Volume infusion pump which helps to deliver drugs into patient’s body through intravenous route.");
        break;
        
        case "what is lifecare pca":
        send_msg("");
        break;

        case "what are the advantages of using icu medical iv therapy solutions":
        send_msg("Lifecare PCA is a Patient-Controlled Analgesia Infusion System with Full IV-HER Interoperability. It helps to put the patients at ease with technology specifically designed for self-administration of pain medication.");   
        break;

        case "what are the oncology solutions provided by icu medical":
        send_msg("Diana Work Flow System, Diana ACS and PharmAssist, ChemoLock and ChemoClave are some of the Oncology solutions provided by ICU Medical.");
        break;

        case "what is icu medical mednet safety software":
        send_msg("MedNet is enterprise software which helps to eliminate IV Drug errors by providing IV-EMR interoperability and thereby increasing patient safety.");
        break;

        case "what is the primary focus of icu medical business":
        send_msg("The primary focus of ICU Medical business is to provide IV Sets, IV pumps, IV medication safety software and IV solutions.");
        break;
        
        case "what is diana":
        send_msg("Diana is a Drug Compounding workflow system which provides accurate, safe, and efficient automated drug compounding with remote pharmacist verification.");
        break;

        case "what is nanoclave":
        send_msg("NanoClave is a needle free Low Profile Neutral Displacement Connector designed to help keep neonatal and pediatric patients safe by minimizing flush volumes and providing a safe and effective microbial barrier");
        break;

        case "what are the different variants of sapphire infusion pump":
        send_msg("Sapphire Epidural, Sapphire Plus and Sapphire Multi-therapy are the different variants of Sapphire Infusion Pump.");
        break;

        case "name the needle free iv connectors provided by icu medical":
        send_msg("Neutron, NanoClave, MicroClave Clear, Antimicrobial MicroClave, Clave, Tego, CLC2000 are the Needle free IV connectors provided by ICU Medical.");
        break;

        case "instructions":
        // calls instr func and takes following parameters
        instr("Following are the Valid set of Questions ");
        break;

       default:
       send_msg("Please enter valid questions.For help enter -INSTRUCTIONS");
       break;    
    }
    
    
    }
    
// create function : its only executed when whole document is loaded
$(function(){
    get_username();
    // to select textbox
    $("#textbox").keypress(function(event){
    //    to check only for enter key (13 is value for enter)
        if(event.which==13){
            // to check if checkbox is checked
            if($("#enter").prop("checked")){
                // clear textbox when checkbox is clicked and user presses enter key
                $("#send").click();
                // to prevent creating new line on pressing Enter key, when checkbox is checked
                event.preventDefault();
                }
            }
            
    });		
    // text box gets empty when user press enter
    $("#send").click(function(){
                // variable username to set it before messages that are sent by you to system and span element to style the username
                var username ="<span class='username'>You: </span>";
                // before clearing the textbox we store its values in variable newmsg
                var newmsg=$("#textbox").val();
                $("#textbox").val("");
                // variable to store the previous contents of container
                var prevState=$("#container").html();
                // it checks if length of previous state is >3 it wont add line spaces
                if(prevState.length>3){
                    // adds break(or makes new line)
                    prevState=prevState+"<br>";}
                    // to display users message on screen
                $("#container").html(prevState+username+newmsg);
                // to scroll the contents in container in case of overflow  
                $("#container").scrollTop($("#container").prop("scrollHeight"));
                // converts all user inputs to lower case
                newmsg = newmsg.toLowerCase();
                // removes the special chracters in user input 
                 newmsg = newmsg.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
                // after message is displayed on screen we call func ai and pass newmsg papameters(newmsg is message entered from keyboard)
                 ai(newmsg);					
                });
    
    });
