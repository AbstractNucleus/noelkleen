# DiceSpace Structure

### References
- https://www.dicecloud.com
- https://github.com/ThaumRystra/DiceCloud
- https://getbootstrap.com/
- https://flask.palletsprojects.com/en/1.1.x/

## Desired features
*  Ability scores
    * From base ability scores
    * From classes, races etc

* Armor class
    * Equipped armour
    * Natural armour
    * Can set custom

* Movement speed
    * From race
    * Can set custom

* Initiave
    * Pull from dex

* Proficiency bonus
* Pull from LVL

* Saving throws
    * Ability scores
    * Proficiencies from class etc

* Skills
    * Ability scores
    * Proficiencies
    * Passive perception

* Conditions
    * Temporary effect
        * Blind
        * Deaf 
        * Frightened
        * Grappled
        * Incapacitated
        * Invisible
        * Paralysed
        * Petrified
        * Poisoned
        * Prone
        * Restrained
        * Stunned
        * Unconscious
        * Exhaustion -1
        * Exhaustion -2 
        * Exhaustion -3
        * Exhaustion -4
        * Exhaustion -5
        * Exhaustion -6
        * Add comment
    * Get effects from spells etc
    * Can be taken away with click

* HP bar
    * Max HP
        * Calculate from class
    * Add temporary HP
    * Death saves
        * Save under
        * Resets when long rest(reset button)

* Inventory
    * Net worth
        * Every item has a value
    * Weight of storage
        * Every item has a weight
    * Equiped
        * Add effect
    * Carried
    * Coins
        * Should be able to change easily
        * Add custom coins
    * Containers
        * Can be put off
        * Contains a certain ammount of items
        * Can be added
    * Library of items
        * Easy to add
        * Categories

* Spells
    * Spell slots
        * Pull from class
        * Be able to cross off
    * Containers
        * Sorting by level in containers
        * Short info about spells
        * Change save DC and attack bonus
            * Based on class
    * Spell list to take spells from
        * Library

* Persona
    * Name
    * Alignment
    * Gender
    * Race
    * Picture URL
    * Visual Description
        * Size
        * Height
        * Age
        * Weight
    * Boxes to write in
        * Personality traits 
        * IDeals 
        * Bonds
        * Flaws
        * Backgroud
    * Languages
        * Pull from race or other source

* Journal
    * EXP journal
        * Add encounters where you got XP
        * Name
        * Comment
        * Amount of XP
    * Add race
        * Add effects
        * Add proficiencies
    * Add class
        * Easily see what level all the classes combined should be
        * Add effects
        * Add proficiencies

* Effects, proficiencies, attacks, buffs
    * Effects
        * Ability scores
            * Base value
            * Add
            * Multiply
            * Min
            * Max
        * Saving throw
            * Base value
            * Add
            * Multiply
            * Min
            * Max
            * Advantage
            * Disadvantage
            * Passive bonus
            * Automatically fail
            * Conditional benefit
        * Skills
            * Multiply
            * Min
            * Max
            * Advantage
            * Disadvantage
            * Passive bonus
            * Automatically fail
            * Conditional
        * Stats
            * Hit points
            * Temporary hit points
            * Armor
            * Dexterity Armor bonus
            * Speed
            * Proficiency bonus
            * Ki points
            * Sorcery points
            * Rages
            * Rage damage
            * Expetice Dice
            * Superiority Dice
            * Carry capacity multiplier
            * Base Value, add, multiply, min, max
        * Spell slots
            * LVL 1-9
            * Base value, add, multiply, min max
        * Weakness/Resistance
            * Acid
            * Bludgeoning
            * Cold
            * Fire
            * Force
            * Lightning
            * Nerotic
            * Piercing
            * Poison
            * Psychic
            * Radiant
            * Slashing
            * Thunder
            * Resistance/vulnerability/immunity
    * Proficiency
        * Stat group
            * Skill
            * Saving throw
            * Weapon
            * Armour
            * Tool
            * Language
            * Proficient, half, double
            * Name
                * Library of ex skills
    * Attacks
        * Attack bonus(to hit)
            * Use variables
                * strengthMod
                * proficiencyBonus
                * Have a list of variables to use
        * Damage
            * Dice
            * Variables
        * Damage type
            * Choose from list
        * Comment
    * Buffs
        * Apply effect, proficiency or attack to conditions tab
        * "Apply to self"

## Front end
* Stat page
    * Ability Scores 
    * Ability Scores Modifier
    * Armor class
    * Speed
    * Initiative
    * Proficiency Bonus
    * Saving throws
    * Skills

* Inventory page
    * Total weight
    * Net worth
    * Library of items

* Spells
    * Spell slots
    * Library of spells

* Persona
    * Language
    
* Journal/Base

## User interactive values
* Stat page
    * Conditions(Add temporary effects)
    * Current Hp and Max hp’
    * Temporary health bars
    * Death saves

* Inventory
    * Equipped items
    * Carried
    * Coins
    * Containers

* Spells
    * Containers 
    * Selected spells

* Persona
    * Name
    * Gender
    * Alignment
    * Gender
    * Race
    * Picture URL
    * Visual Description
        * Size
        * Height
        * Age
        * Weight
    * Boxes
        * Personality traits 
        * Ideals 
        * Bonds
        * Flaws
        * Background

* Journal/Base
    * Experience journal
    * Race
    * Class