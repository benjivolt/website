import assert from 'node:assert/strict';
import { test } from 'node:test';
import { setupVideoVisibility } from '../src/utils/video-visibility.mjs';

function videoTarget() {
  const video = new EventTarget();
  video.style = { opacity: '0', visibility: 'hidden' };
  video.loads = 0;
  video.load = () => { video.loads += 1; };
  return video;
}

test('media events reveal the video until its effect is cleaned up', () => {
  const video = videoTarget();
  const cleanup = setupVideoVisibility(video);
  assert.equal(video.loads, 1);
  for (const event of ['loadeddata', 'canplay', 'loadedmetadata']) {
    video.style.opacity = '0';
    video.style.visibility = 'hidden';
    video.dispatchEvent(new Event(event));
    assert.equal(video.style.opacity, '1');
    assert.equal(video.style.visibility, 'visible');
  }

  cleanup();
  for (const event of ['loadeddata', 'canplay', 'loadedmetadata']) {
    video.style.opacity = '0';
    video.style.visibility = 'hidden';
    video.dispatchEvent(new Event(event));
    assert.equal(video.style.opacity, '0');
    assert.equal(video.style.visibility, 'hidden');
  }
});

test('preview seeking is explicit and an absent video can be safely cleaned up', () => {
  const video = videoTarget();
  setupVideoVisibility(video, 0.1)();
  assert.equal(video.currentTime, 0.1);
  assert.doesNotThrow(() => setupVideoVisibility(null)());
});
