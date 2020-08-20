class Co {
	constructor() {
		// Initialise our stack of generator functions.
		// Using a Set as opposed to an Array as it ensures each item is unique
		this._stack = new Set()
	}
	
	tick() {
		// TODO Find a way to pass timestamp down to coroutine function
		const next = fn => {
			// Run the next step
			const result = fn.next()
			// If our generator is done (calls return), remove it from the stack
			if (result.done) this._stack.delete(fn)
		}
		// Each `Tick`, loop through our stack, calling each generator function
		this._stack.forEach(next)
	}
	
	// To add a coroutine, call co.routine(generatorFunction)
	routine(generator) {
		this._stack.add(generator())
	}
	
	clear() {
		this._stack.clear()
	}
}

export const co = new Co()
export default co

// // Helper functions

// export function* delay(stepsToWait) {
// 	for (let index = 0; index < stepsToWait; index++) {
// 		yield;
// 	}
// 	return
// }
