/**
 * Created by Chris.Rieger on 1/30/2016.
 */

class SupplyResource {
    constructor() {
        this.medicalList = [
            {
                id: 1,
                name: 'Hamburger',
                lvl: 1,
                quality: 'common',
                materials: ['meat', 'bread'],
                HPRestore: 10,
            },
            {
                id: 2,
                name: 'First Aid Kit',
                lvl: 5,
                quality: 'uncommon',
                materials: ['cloth', 'antiseptic', 'adhesive'],
                HPRestore: 50,
            },
            {
                id: 3,
                name: 'Trauma Kit',
                lvl: 8,
                materials: ['cloth', 'antiseptic', 'adhesive', 'scalpel', 'thread', 'needle'],
                quality: 'rare',
                HPRestore: 100,
            },
        ];
        this.rangedList = [
            {
                id: 1,
                name: 'Slingshot',
                description: 'While good at slaying Giants.. not really the best option for monsters.',
                lvl: 1,
                materials: ['wood', 'rubber'],
                quality: 'common',
                rollModifier: 1,
            },
            {
                id: 2,
                name: 'dart',
                description: 'Stings really bad, but overall quite ineffective.',
                lvl: 1,
                materials: ['wood', 'needle'],
                quality: 'common',
                rollModifier: 1,
            },
            {
                id: 3,
                name: 'Throwing Knife',
                description: 'When a 20 is rolled pin the enemy down. Creature unable to attack.',
                lvl: 4,
                materials: ['steel', 'cloth'],
                quality: 'uncommon',
                rollModifier: 2,
            },
            {
                id: 4,
                name: '9mm Handgun',
                description: 'When held sideways does 5 additional damage.',
                lvl: 5,
                materials: ['steel', 'spring', 'pipe', 'wood'],
                quality: 'uncommon',
                rollModifier: 2,
            },
            {
                id: 5,
                name: '12 Gauge Semi-Auto',
                description: 'Target up to 2 enemies per roll.',
                lvl: 8,
                materials: ['steel', 'spring', 'pipe', 'wood', 'spring'],
                quality: 'rare',
                rollModifier: 3,
            },
            {
                id: 6,
                name: 'Tater Gun',
                description: 'Incapacitates Enemy For Round',
                lvl: 5,
                materials: ['pipe', 'rubber', 'thread', 'gasoline', 'any additional item for ammo'],
                quality: 'uncommon',
                rollModifier: 2,
            },
        ];
        this.meleeList = [
            {
                id: 1,
                name: 'Shovel',
                description: 'Good for diggin holes not making them.',
                lvl: 1,
                materials: ['steel', 'wood'],
                quality: 'common',
                rollModifier: 1,
            },
            {
                id: 2,
                name: 'Bat',
                description: 'Boom home run!',
                lvl: 1,
                materials: ['wood'],
                quality: 'common',
                rollModifier: 1,
            },
            {
                id: 3,
                name: 'Barbed Wire Baseball Bat',
                description: 'Put a bleed effect on enemy. Enemy bleeds for 5 damage each turn.',
                lvl: 5,
                materials: ['wood', 'steel', 'wire'],
                quality: 'uncommon',
                rollModifier: 2,
            },
            {
                id: 4,
                name: 'Samarai Sword',
                description: 'On a super hit. Enemy loses a limb. If all limbs are gone enemy cant attack.',
                lvl: 5,
                materials: ['wood', 'steel', 'sharpening stone'],
                quality: 'uncommon',
                rollModifier: 2,
            },
            {
                id: 5,
                name: 'Chainsaw',
                description: 'You are more machine than human! Target up to 4 enemies.',
                lvl: 8,
                materials: ['plastic', 'steel', 'gasoline', 'spring', 'machinery', 'sharpening stone'],
                quality: 'rare',
                rollModifier: 3,
            },
            {
                id: 6,
                name: 'Pipe Hammer',
                description: 'A simple yet useful hammer.',
                lvl: 2,
                materials: ['pipe', 'thread', 'sharpening stone', 'sharpening stone'],
                quality: 'common',
                rollModifier: 1
            },
        ];
        this.craftingList = [
            {
                id: 1,
                name: 'plastic'
            },
            {
                id: 2,
                name: 'steel'
            },
            {
                id: 3,
                name: 'gasoline'
            },
            {
                id: 4,
                name: 'spring'
            },
            {
                id: 5,
                name: 'machinery'
            },
            {
                id: 6,
                name: 'sharpening stone'
            },
            {
                id: 7,
                name: 'wood'
            },
            {
                id: 8,
                name: 'wire'
            },
            {
                id: 9,
                name: 'pipe'
            },
            {
                id: 10,
                name: 'cloth'
            },
            {
                id: 11,
                name: 'needle'
            },
            {
                id: 12,
                name: 'rubber'
            },
            {
                id: 13,
                name: 'antiseptic'
            },
            {
                id: 14,
                name: 'adhesive'
            },
            {
                id: 15,
                name: 'scalpel'
            },
            {
                id: 16,
                name: 'thread'
            },
            {
                id: 17,
                name: 'meat'
            },
            {
                id: 18,
                name: 'bread'
            },
            {
                id: 19,
                name: 'nails'
            },
        ];
    }


}
;

module.exports = new SupplyResource();