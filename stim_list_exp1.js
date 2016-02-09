/* Different video types for Experiment1 */

/* Path of different stimuli types */

var fillerP = ["filler.rabbit.push.mp4", "filler.penguin.push.mp4", "filler.rabbit.cover.mp4", "filler.penguin.cover.mp4", "filler.panda.hit.mp4", "filler.penguin.hit.mp4", "filler.monkey.pull.mp4", "filler.caterpillar.pull.mp4", "filler.monkey.kick.mp4", "filler.frog.kick.mp4"];

var fillerS = ["filler.rabbit.eat.mp4", "filler.panda.ridebike.mp4", "filler.monkey.carry.mp4", "filler.frog.backflip.mp4", "filler.elephant.play.mp4"]

var stim_paths = $.merge($.merge([], fillerP),fillerS);

var shuffled_paths = jsPsych.randomization.repeat(stim_paths, 1);

for (var i =0; i < shuffled_paths.length; i++){
	/* Video http skeleton */
	shuffled_paths[i] = '<video width="800" height="400" autoplay preload="auto"> <source src="stim/' 
	+ shuffled_paths[i] + '" type="video/mp4"></video>';
	
};

