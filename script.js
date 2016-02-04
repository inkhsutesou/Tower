/*

Mob
	.addStrength()
	.addDexterity()
	.addIntelligence()
	.reset()
	.sleep()
Tower
	.startCombat()

Mob
	.fight( mob )
	.defend()
	.magic( mob )

// Pseudo code stuffs

	if ( !isWin ) {

		restartGame()

	} else if ( isWin ) {

		startCombat();

	}

	if ( victory > 4 ) {

		youWin();

	}

	Math.random();
	Math.round( arg1 ); // < .5 >
	Math.ceil( arg1 ); // >
	Math.floor( arg1 ); // <

function Animal ( type, name, color, legs ) {

  this.type = type;
  this.name = name;
  this.color = color;
  this.legs = legs;

  return this;

}

new Animal( "cow", "bessy", "black & white", 4);

*/
( function init () {

	tower = {};

	var player = tower.player = new Mob()
		, mob = tower.mob = new Mob();

	function Mob () {

		this.xp = 10;
		this.str = 0;
		this.dex = 0;
		this.int = 0;
		this.hp = 0;
		this.mp = 0;
		this.atk = 0;
		this.def = 0;
		this.spd = 0;
		this.mv = 0;

		this.addStrength = addStrength;
		this.addDexterity = addDexterity;
		this.addIntelligence = addIntelligence;
		this.addAttribute = addAttribute;
		this.calcAttribute = calcAttribute;
		this.reset = reset;
		this.startCombat = startCombat;
		this.attack = attack;
		this.mobAttack = mobAttack;

		return this;

	}

	function addStrength () {

		return this.addAttribute( "str" );

	}

	function addDexterity () {

		return this.addAttribute( "dex" );

	}

	function addIntelligence () {

		return this.addAttribute( "int" );

	}

	function addAttribute ( attribute ) {

		if ( this.xp !== 0 ) {

			this[ attribute ] ++;
			this.xp --;		

		}

		return this.calcAttribute();

	}

	function calcAttribute () {

		this.hp = this.str * 10 + this.dex * 5 + this.int * 2;
		this.mp = this.str * 1 + this.dex * 2 + this.int * 3;
		this.mv = this.str * 1 + this.dex * 3 + this.int * 2;
		this.def = this.dex * 3 + this.int * 2;
		this.spd = this.str * 2 + this.dex * 3;
		this.atk = this.str * 2 + this.dex * 1;

		return this;

	}

	function reset () {

		for ( object in this ) {

			if ( typeof this[ object ] === "number" ) {

				this[ object ] = 0;			

			}

		}

		this.xp = 10;

		return this;

	}

	function startCombat () {

		if ( this.hp != 0 ) {

			console.log ( "Player vs. Mob" );
			console.log	( "Player HP =", player.hp , "Mob HP =", mob.hp );

		}

		return console.log ( "Prepare for combat" );

	}

	function attack ( target ) {

		mob.hp =  mob.hp  -  player.atk ;

		if ( mob.hp <= 0 ) {

			youWin();

			tower.mob.reset();

		}	else if ( mob.hp >= 0 ) {

			console.log ( "You land a solid hit.", player.atk );

		}

		return tower.mob.mobAttack()

	}

	function mobAttack () {

		player.hp =  player.hp  -  mob.atk ; 

		console.log ( player.hp );

		if ( player.hp >= 0 ) {

			console.log ( "The mob lands a solid hit.", mob.atk );

		}	else if ( mob.hp >= 0 ) {

			console.log ( "You land a solid hit.", player.atk );


		}

		return console.log	( "Player HP =", player.hp , "Mob HP =", mob.hp );

	}

	function youWin () {

		console.log ( "You blow hits hard then your opponent falls to the floor, dead. You win!" )

	}

}	)();
tower.mob
	.addIntelligence()
	.addIntelligence()
	.addIntelligence()
	.addIntelligence()
	.addIntelligence()
	.addIntelligence()
	.addStrength()
	.addStrength()
	.addStrength()
	.addDexterity()
tower.player
	.addDexterity()
	.addDexterity()
	.addDexterity()
	.addDexterity()
	.addDexterity()
	.addDexterity()
	.addStrength()
	.addStrength()
	.addStrength()
	.addIntelligence()
tower.mob.calcAttribute()
tower.player.calcAttribute()