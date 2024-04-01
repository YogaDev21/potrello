import React from "react";

const defaultYoutubeLink =
  "https://www.youtube.com/embed/BbeeuzU5Qc8?si=W-bQiGp5LeP4HBUK";
const defaultVideoWidth = "560";
const defaultVideoHeight = "315";

/**
 * Renders a video player using an iframe.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string | number} props.src - The URL of the video to be displayed.
 * @param {string} props.title - The title of the iframe
 * @param {number} props.width - The width of the video player.
 * @param {number} props.height - The height of the video player.
 * @returns {JSX.Element} - The rendered video player component.
 */
function Video({
  src = defaultYoutubeLink,
  title = "Youtube video player",
  width = defaultVideoWidth,
  height = defaultVideoHeight,
  ...props
}) {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title={title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      {...props}
    ></iframe>
  );
}

export default Video;
