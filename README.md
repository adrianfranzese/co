# co
Quick and simple coroutine runner in Javascript

```js
import { co } from 'co'

co.routine(function* () {
	console.log('Start!')
	yield; console.log('Frame 1');
	yield; console.log('Frame 2');
	yield; console.log('Frame 3');
	yield; console.log('Frame 4');
	yield; console.log('Frame 5');
	return console.log('Done!')
})

const nextFrame = () => {
	requestAnimationFrame(nextFrame)
	co.tick()
}

nextFrame()
// Frame 1
// Frame 2
// ...
```