import Entity from './Entity';
import Go from './traits/Go';
import Velocity from './traits/Velocity';
import Jump from './traits/Jump';
import { loadMarioSprite } from './sprites';

export function createMario() {
  return loadMarioSprite()
    .then(sprite => {
      const mario = new Entity();

      mario.size.set(14, 16);

      mario.addTrait(new Go());
      mario.addTrait(new Jump());
      // mario.addTrait(new Velocity());

      mario.draw = function drawMario(context) {
        sprite.draw('idle', context, 0, 0);
      };

      return mario;
    });
}
