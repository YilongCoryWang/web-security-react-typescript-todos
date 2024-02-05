// const video = {
//   play() {
//     return true;
//   },
// };

export default function Video() {
  function play() {
    return true;
  }

  return (
    <div onClick={play}>video</div>
  )
}
// module.exports = video;