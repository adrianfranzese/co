class Co {
	constructor() {
		this._stack = new Set()
	}
	
	tick() {
		const next = fn => {
			const result = fn.next()
			if (result.done) this._stack.delete(fn)
		}
		this._stack.forEach(next)
	}
	
	routine(generator) {
		this._stack.add(generator())
	}
	
	clear() {
		this._stack.clear()
	}
}

const co = new Co()

co.routine(function* () {
	console.log('Start!')
	yield; console.log('Frame 1');
	yield; console.log('Frame 2');
	yield; console.log('Frame 3');
	yield; console.log('Frame 4');
	yield; console.log('Frame 5');
	yield; console.log('Frame 6');
	yield; console.log('Frame 7');
	yield; console.log('Frame 8');
	yield; console.log('Frame 9');
	yield; console.log('Frame 10');
	return console.log('Done!')
})

/*
	TODO Find a way to pass timestamp down to coroutine function
*/
const nextFrame = () => {
	requestAnimationFrame(nextFrame)
	co.tick()
}

nextFrame()