/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Tanuki's Dream",
	ref: "https://s4g.itch.io/tanukis-dream",
    subTitel:
      "S4G School for Games GmbH, 3rd Semester Project",
    description:
      "Tanuki's Dream is a 2D top-down, action-adventure game. Defeat enemies to appropiate their abilities and use them to your advantage! Fight your way through the kappa-infested swamp and find the hidden Tanuki village. Made with the Unity Engine!",
    subTitel2:
	"My Responsibilities",
	responsibilities:
	"Leading a Team of 5 during 10 weeks, I was responsible for the Programming, Game Design and Production. Some key tasks I did contain the making of AI for the Enemies, an immersive interaction system, intricate combat mechanics and more",
	researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/project-page/tanukisdream.png",
    citation: {
      vancouver:
        "School 4 Games.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",
  },

  {
    title: "Convoy of Hope",
	ref: "https://s4g.itch.io/convoy-of-hope",
    subTitel:
      "S4G School for Games GmbH, 4th Semester Project",
    description:
      "3D Casual Survival Game, set in a burnt landscape with a board game aesthetic, where players strategically place hexes to ensure the survival of their elephant convoy and guide them to safety.",
    subTitel2:
	"My Responsibilities",
	responsibilities:
	"As the 2nd Programmer in this Team, I focused on the system behind the main mechanic, the stats system. And some other gameplay mechanics like movement and the followers of the main unit.",
	researchYr: 2023,
    citebox: "popup2",
    image: "assets/images/project-page/convoyofhope.png",
    citation: {
      vancouver:
        "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
  },

  {
    title:
      "Urban Outcasts",
	ref: "https://s4g.itch.io/urban-outcasts",
    subTitel: "S4G School for Games GmbH, 2nd Semester Project",
    description:
      "Urban Outcasts is an isometric 2.5D Adventure with RPG elements. The player’s goal is to explore the setting of the story through a variety of characters by talking and completing quests. The world is filled with diverse characters from different worlds, cultures and creature races. Made with the Unity Engine!",
    subTitel2:
	"My Responsibilities",
	responsibilities:
	"My responsibilities during the 10 weeks were mainly programming. Some key tasks I did were the Movement in this 2.5D World, AI for the NPC's, a Interaction System, Quest System and more",
	researchYr: 2022,
    citebox: "popup3",
    image: "assets/images/project-page/urbanoutcasts.png",
    citation: {
      vancouver:
        "Npreh",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },

  {
    title:
      "Presidential Driver",
	ref: "https://s4g.itch.io/presidential-driver",
    subTitel:
      "S4G School for Games GmbH, 1st Semester Project",
    description:
      "Presidential Driver is a 2D-Action-Platformer in a sci-fi setting. With the help of Wall jumps, the goal is to reach the top as fast as possible! Made with the Godot Engine!",
    subTitel2:
	"My Responsibilities",
	responsibilities:
	"In a Team of 7, as the only programmer I was responsible for everything in-engine and code related. Some Key tasks were making sure the movement is smooth, Enemy AI, Save and Load System",
	researchYr: 2022,
    citebox: "popup4",
    image: "assets/images/project-page/presidentialdriver.png",
    citation: {
      vancouver:
        "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 4",
    absbox: "absPopup4",
  }
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
	  ref,
      subTitel,
	  subTitel2,
	  responsibilities,
      description,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${ref}" target="_blank" class="paperTitle"> ${title} </a> 
                    <div class = "subTitel"> ${subTitel} </div> 
                    
                    <div class="rdescription"> ${description} 
                    <div class="researchY">${researchYr}</div>
					</div>
					
					&nbsp
					<div class = "subTitel"> ${subTitel2} </div> 
                    
                    <div class="rdescription"> ${responsibilities} 
                    </div>
					
                    
                    
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
