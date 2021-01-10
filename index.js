//In my D&D Group we have a lot of NPCS so to solve it using the menu app video to input NPCS, their names, extra info, location & occupation 
//so I need classes of NPC(name, occupation),  allignment ,and location (extra info)?  

class NPC {
    constructor (name, occupation) {
        this.name = name;
        this.occupation = occupation;
    } 
       describe() {
        return `${this.name} does this for a living ${this.occupation}.`;
    }
}

class AllignmentGroup {
    constructor (allignment) {
        this.allignment = allignment;
        //if the user didnt input any data, it will give an empty array.
        this.npcs = [];
    } 
       addnpc(name, occupation) {
           this.npcs.push(new NPC(name, occupation));

       }
       getAllNPCNames() {
           //returns an array of strings of all the npcs of this class group
           return this.npcs.map((abd) => abd.name);
       }
       
       describe() {
           return `These ${this.npcs} has this allignment ${this.allignment}.`;
       }
    }
//add 
    class Menu {
        constructor() {
            this.allignmentGroups = [];
//then below is a variable for whatever selected AllignmentGroup is selected. Because when we are managing npcs we're going to be managing one at a 
//time. So this helps us know which is selected. We set it = null to start because when we start we have selected nothing=null. 
            this.selectedAllignmentGroup = null;
        }
        //This is the start method thats going to start up the menu application/entry point to our application. 
        start() {
            //Below are methods that dont exist YET and to build out our menu; what we think it will look like and then we are going to implement 
            //those methods this is referred to as the top-down development approach. Where we start from the top then implement those methods.
            //this.showMainMenuOptions(method) will return the selection that the user gives us 
            let selection = this.showMainMenuOptions();
            //selection is a variable we're gonna use to get user input of what option out menu has the user selected. We will use 0=exit and do 
            //something based off of it, so below is a switch. 
            while (selection != 0) {
                switch (selection) {
                    case "1":
     //reminder that these are sort of placeholders that will be implemented later according to the top down development approach
                        this.createAllignmentGroup();
                        break;
                    case "2":
                        this.viewAllignmentGroup();
                        break;
                    case "3":
                        this.deleteAllignmentGroup();
                        break;
                    case "4":
                        this.displayAllignmentGroup();
                        break;
                    default:
                        selection = 0;
                }
    //outside of our switch here we get the selection like at the beginning to ensure the loop keeps looping as long as we do not select 0 
    //or select 1-4
    //So this is basically the flow of our application, we are going to prompt/show the menu options the user is going to select something
     //we're going to say as long as 0 isnt selected we are going to continue with our determination of what they did select and based on 
     //what they selected it will show the cases above. 
                selection = this.showMainMenuOptions();
            }
            alert("Farewell!");
        }

    
//Now we are going to program the methods the implementation of these methods. What the below method does is it is going to return a prompt w/ a
//a template literal. prompt is pop up and the return is the selected item is the returned value.
        showMainMenuOptions() {
            return prompt(`
            0) exit
            1) create new allignment group
            2) view allignment group
            3) delete allignment group
            4) display all allignment groups
            `);
        }
//added @21 mins,this will allow us the option to go back,create a NPC,delete a NPC and display the AllignmentGroup info that was passed in
        showAllignmentMenuOptions(allignmentInfo) {
            return prompt(`
                0) back
                1) create NPC
                2) delete NPC
                -----------------------
                ${allignmentInfo}
                `);
        }
//We are gonna start w/implementing the displaynpcs method 
        displayAllignmentGroup() {
//Starting w/a blank string cuz we need to build a string that has all the info on the AllignmentGroup so we can put up in a msg box or prompt
            let allignmentString = "";
            //using a for loop iterate thru all the npcs
            for (let i = 0; i < this.allignmentGroups.length; i++) {
//Below is all the AllignmentGroup info about our npcs w/ concatenation.We use i/index to identify the idea of each AllignmentGroup + grabs the
//current AllignmentGroup that is selected/looking at for this iteration. Then we add the new line "\n" 
//So this is going to create a blank string,iterate thru the npcs,grab the each AllignmentGroup and then get that name specific AllignmentGroup 
//and then add a new line so all the AllignmentGroup names will show up w/ an index numbering system. 
                allignmentString += i + ") " + this.allignmentGroups[i].allignment + "\n";
            }
            //After the for loop/outside of the for loop we will alet the AllignmentGroup string so that way we will be able see all npcs. 
            alert(allignmentString);
        }
//We use the argument name to create the AllignmentGroup name and push to the array. for our createAllignmentGroup method
        createAllignmentGroup() {
            //prompt to assign names 
            let allignment = prompt("Enter new allignment group:");
            //array where we keep all our npcs
            this.allignmentGroups.push(new AllignmentGroup(allignment));
        }
//method to view AllignmentGroup 
        viewAllignmentGroup() {
//to start we are going to ask the user what AllignmentGroup they wish to view,we do that by prompt them by entering the index with the text to let
 //them know they have to enter the AllignmentGroup they wish to view 
            let index = prompt("Enter the index of the allignment group you wish to view:");
//w/the AllignmentGroup returned this validates the users input cause the index(AllignmentGroup)cannot be less than 0,or more than the npcs length 
//cuz it will create an error. Users are crazy and can crash things by putting in anything they want. So we validate the input to not crash. 
            if (index > -1 && index < this.allignmentGroups.length) {
                //this is where we set the selected AllignmentGroup = the users inputed AllignmentGroup. 
                this.selectedAllignmentGroup = this.allignmentGroups[index];
                //Where we start w/ the description of the npcs. 
                
                let description = "Allignment Group: " + this.selectedAllignmentGroup.allignment + "\n";
//Now what we want to do is add the description of all the NPCs to the AllignmentGroup so below we accomplish that by creating a for loop
//Remember each AllignmentGroup has a NPCs array so we are looking at that NPCs array, we have to iterate thru it so we use the length from
//that array. 
                for (let i = 0; i < this.selectedAllignmentGroup.npcs.length; i++) {
//adding on to the description to print out the selectedAllignmentGroup array, i is the specific NPC that we're looking at for this
//iteration and the name of the NPC is what we get w/ posistion w/new line. that will build a list of the AllignmentGroup NPCs.
                    description += i + ") " + this.selectedAllignmentGroup.npcs[i].name
                     + " - " + this.selectedAllignmentGroup.npcs[i].occupation + "\n";
                }
    
//this is using top down development again since we have not created this yet. we are going to display the AllignmentGroup and the show all the 
//options for the AllignmentGroup then we add a switch 
                let selection = this.showAllignmentMenuOptions(description);
//This selection option is different from our overall selection our over all menu option, this is a SUB MENU of the full menu thats 
//why we are creating another selection variable within the scope of view AllignmentGroup and creating another switch for the sub selection.
                switch (selection) {
                    case "1": 
                        this.createNPC();
                        break;
                    case "2":
                        this.deleteNPC();
                }
            }
            
        }
//Always make sure that what we are adding is outside the method its not within another method right here if it doesnt need to be and we are still
//within our class, therefore we have access to that so we will 
    
    
    //deleteAllignmentGroup method
        deleteAllignmentGroup() {
            //similar to delete NPC, prompts user to direct program to which AllignmentGroup needs to be deleted. 
            let index = prompt("Enter the index of the Allignment Group you wish to delete:");
            //Validates user data
            if (index > -1 && index < this.allignmentGroups.length) {
                //.splice removes it c: 
                this.allignmentGroups.splice(index, 1);
            }
        }
        //createNPC method
        createNPC() {
        //prompts user to put in name and posistion of NPC
            let name = prompt("Enter name for new NPC:");
            let occupation = prompt("Enter occupation for new NPC:");
//then this pushes NPC to the previously selected AllignmentGroup to that selected AllignmentGroup.This is why we use the selected AllignmentGroup 
//any time w/o knowing what the AllignmentGroup is that the user selected. We do not need to access that info, we do not have to pass around  
//that info we can just reference it so we know what AllignmentGroup is. 
            this.selectedAllignmentGroup.npcs.push(new NPC(name, occupation));
        }
        //deleteNPC Method
        deleteNPC() {
            //prompts user to direct the program which NPC to delete
            let index = prompt("Enter the index of the NPC you wish to delete:");
            //Validates the user inputed data
            if (index > -1 && index < this.selectedAllignmentGroup.npcs.length) {
                //.splice removes it :) 
                this.selectedAllignmentGroup.npcs.splice(index, 1);
            }
        }
    }
let menu = new Menu();
menu.start(); 