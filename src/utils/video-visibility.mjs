const VISIBILITY_EVENTS = ['loadeddata', 'canplay', 'loadedmetadata'];

export function setupVideoVisibility(video, previewTime) {
  if (!video) return () => {};

  const reveal = () => {
    video.style.opacity = '1';
    video.style.visibility = 'visible';
  };

  for (const event of VISIBILITY_EVENTS) video.addEventListener(event, reveal);
  video.load();
  reveal();
  if (previewTime !== undefined) video.currentTime = previewTime;

  return () => {
    for (const event of VISIBILITY_EVENTS) video.removeEventListener(event, reveal);
  };
}
