import Camera from './Camera';
import Timer from './Timer';
import { loadLevel } from './loaders';
import { createMario } from './entities';
import { createCollisionLayer, createCameraLayer } from './layers';
import { setupKeyboard } from './input';
import { setupMouseControl } from './debug';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([
  createMario(),
  loadLevel('1-1')
])
  .then(([mario, level]) => {
    const camera = new Camera();

    mario.pos.set(64, 64);

    level.comp.layers.push(
      createCollisionLayer(level),
      createCameraLayer(camera)
    );

    level.entities.add(mario);

    const input = setupKeyboard(mario);
    input.listenTo(window);

    setupMouseControl(canvas, mario, camera);

    const timer = new Timer(1 / 60);

    timer.update = function update(deltaTime) {
      level.update(deltaTime);
      level.comp.draw(context, camera);
    };

    timer.start();
  });
