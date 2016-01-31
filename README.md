# m20-server
Trying my hand at building a service for a game engine. Going to base it around a d20 tabletop game. Once the restful service is up i'll build a UI for it later. For now this is just an exercise of building a service to compliment a tabletop game.

##Z20
###Rules

####Combat
Upon entering a structure. Draw the number of monster cards necessary to fill the building. Since all monsters are territorial they attack immediately
If your health reaches 0 you lose your current equipment and faint until someone comes to rescue you.

Roll 1 D20 for each combat action taking place.
* 15-20 Super successful: Not only did you complete your task. But it cost you no action points.
* 10-15 succesful: Task completed.
* 5-10 failure: Task failed.
* 1-5 super failure: Not only did you fail your task but it’s going to cost you something. Whatever equipment you were using in the task breaks.

####Action Points
* Each player starts at 10 action points everyday.

####Inventory
* Start with a 5 slot bag
* Can  pick up better bags for inventory

####Structures
Each tile has 1 structure on it.
That structure is decided at random from a pool of structures. Roll for amount of creatures in spawn.
Structure size is small, medium, or large.
* Small structures have 1 resource and 1 enemy spawns.
* Medium structures have 2 resources and 2 enemy spawns.
* Large structures have 3 resourrces and 3 enemy spawns.

####Stats
Start out with a base of 1 in each catagory
* Strength- Melee weapons
* Marksmenship- Shoot range weapons
* Scavenging- Gather more resources (Can generate 1 resource point for them specifically)
	* Every 2 stat points is an additional resource of your choice.
* Building- Build better defense for base
* Crafting- 
	* Hit 4- unlock COMMON crafting (i.e. baseball bat)
	* Hit 7- unlock UNCOMMON crafting (i.e. baseball bat w/ barbed wire)
	* Hit 10- unlock RARE crafting (i.e. napalm bat)
* Stamina- increase number of action points per day
	* Every 2 skill points is 1 extra action point per day

####Resources:
Resources are associated with a building. A hospital which is a large structure would have 3 resources that are medical supplies. Whereas a construction store which is a large structure would have 3 resources that are 1 weapon, 1 building resource, and 1 food.
The resource types are weapons, building resources, food, and medical.
Weapons:
Weapons are an item that increase your combat effectiveness. This is also broken down in to 3 categories which are common weapons, uncommon weapons, and rare weapons.
* Common weapons just add a maximum of 1 to your roll.
* Uncommon weapons add a maximum of 2 to your roll and have a trait associated with them.
* Rare weapons add a maximum of 3 to your roll and have a trait associated with them.

#####Example Common:
* Shovel
* +1 to rolls.
* Requires 1 strength

#####Example uncommon:
* 12 ga shotgun
* +2 to rolls
* Requires 2 marksmanship
* targets two enemies at once.

#####Example rare:
* Chainsaw
* +3 to rolls.
* You are a mad man target 4 enemies at once.
* Requires 5 strength.

####XP
Even split of xp betweeen attackers unless 1st attacker kills creature all xp goes to that player
####Level
For each level gain that level amt in skill points
* 1-2: 200xp
* 2-3: 300xp
* 3-4: 400xp
* 4-5: 500xp
* 5-6: 600xp
* 6-7: 700xp
* 7-8: 800xp
* 8-9: 900xp
* 9-10: 1000xp

####Health
* Level 1- 100
* Level 2- 120
* Level 3- 140
* Level 4- 160
* Level 5- 180
* Level 6- 200
* Level 7- 220
* Level 8- 240
* Level 9- 260
* Level 10- 280

####Characters
Each player starts with 10 stats spread into whatever skill they want.
