export function RoseVideo() {
  return (
    <video
      className="w-full h-auto"
      autoPlay
      muted
      playsInline
    >
      <source src="./videos/White_rose.webm" type="video/webm" />
    </video>
  );
}