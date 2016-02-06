/**
 * Created by Chris.Rieger on 1/31/2016.
 */



module.exports = {
    monsterList: [
        {
            id: 1,
            name: 'Zombie',
            description: 'Overrun, more and more seem to be coming.',
            ability: 'On critical success spawn another zombie',
            HPAmount: 50
        },
        {
            id: 2,
            name: 'Werewolf',
            description: 'An angry ball of fur, teeth, and claws.',
            ability: 'On critical success get an infection deals 3 damage per round.',
            HPAmount: 150
        },
        {
            id: 3,
            name: 'Vampire',
            description: 'A big buck toothed baddy',
            ability: 'Each hit it lands sucks that much health to you and gains that much.',
            HPAmount: 100
        },
        {
            id: 4,
            name: 'Mummy',
            description: 'Mummy likes making food for other zombies and cleaning up. Loves cursing.',
            ability: 'On critical success summon guard for protection, each guard has 100hp. ',
            HPAmount: 150
        },
        {
            id: 5,
            name: 'Frankenstein',
            description: 'Flings bolts of lightning, very very frightening.',
            ability: 'Player is paralyzed and cant attack next round. ',
            HPAmount: 150
        },
        {
            id: 6,
            name: 'Basilisk',
            description: 'Do not worry this is just a huge snake with a really poor attitude. Nothing to stress about.',
            ability: 'Critical success means a player is incapacitated for 3 rounds.',
            HPAmount: 200
        },
        {
            id: 7,
            name: 'Golem',
            description: 'Likes rocks, but not rolls. Stone cold.',
            ability: 'Critical Success means target player incapacitated.',
            HPAmount: 200
        },
        {
            id: 8,
            name: 'Sphinx',
            description: 'Riddles you with random riddles. Probably the most irritatingly smug monster in the mix.',
            ability: 'Pick a player to find a riddle. If you fail take 20 damage. If you succeed gain 50xp and Sphinx disappears.',
            HPAmount: 1
        },
        {
            id: 9,
            name: 'Wraith',
            description: 'See through but not walk through. Seems to be upset about something. Probably just hungry.',
            ability: 'Reduces damage roll by 3.',
            HPAmount: 200
        },
        {
            id: 10,
            name: 'Windego',
            description: 'A poor mortal who was possessed by this ravenous spirit.',
            ability: 'Critical success possesses you and turns you against teammates.',
            HPAmount: 300
        },
    ]
};
