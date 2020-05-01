# Gangle

## Sharing data between Vue and Phaser

You might want to expose some game state that lives inside of your Phaser code
to your Vue components and vice versa, for example a highscore. Here are two
ways you can achieve sharing state between the frameworks.

* Import a Phaser <a href="https://photonstorm.github.io/phaser3-docs/Phaser.Events.EventEmitter.html" target="_blank">EventEmitter</a> instance in
both your Vue components and Phaser modules. Both sides can then listen to and
emit events on that emitter.

* Have both sides share a <a href="https://vuex.vuejs.org/guide/" target="_blank">
Vuex</a> store instance. It works like an event emitter, but can also hold
state. While the store is nicely integrated into your Vue components, on the
Phaser side you'll have to use the raw store
<a href="https://vuex.vuejs.org/api/#vuex-store-instance-properties" target="_blank">API</a>.
