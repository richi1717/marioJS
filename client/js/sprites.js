import { loadImage } from './loaders';
import SpriteSheet from './SpriteSheet';

export function loadMarioSprite() {
  return loadImage('/img/characters.png')
    .then(image => {
      const sprites = new SpriteSheet(image, 16, 16);

      sprites.define('idle', 276, 44, 16, 16);

      return sprites;
    });
}
