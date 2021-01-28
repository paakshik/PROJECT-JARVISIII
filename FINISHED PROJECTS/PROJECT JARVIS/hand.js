const fingerJoints = {


    thumb: [0,1,2,3,4],
    indexFinger: [0,5,6,7,8],
    middleFinger: [0,9,10,11,12],
    rightFinger: [0,13,14,15,16],
    pinky: [0,17,18,19,20]
}

function draw(predit,ctx){
if (predit.length >  0){
    predit.forEach(predicts => {

 const landmarks = predicts.landmarks;
 for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
    let finger = Object.keys(fingerJoints)[j];
    //  Loop through pairs of joints
    for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
      // Get pairs of joints
      const firstJointIndex = fingerJoints[finger][k];
      const secondJointIndex = fingerJoints[finger][k + 1];

      // Draw path
     
      ctx.beginPath();
          ctx.moveTo(
            landmarks[firstJointIndex][0],
            landmarks[firstJointIndex][1]
          );
          ctx.lineTo(
            landmarks[secondJointIndex][0],
            landmarks[secondJointIndex][1]
          );
          ctx.strokeStyle = "plum";
          ctx.lineWidth = 4;
          ctx.stroke();
        }
      }
for (i =0; i < landmarks.length; i++){

const x = landmarks[i][0]
const y = landmarks[i][1]

ctx.beginPath();
ctx.arc(x, y,  4,0, 3 * Math.PI);
ctx.lineWidth = 3;
ctx.strokeStyle = '#FF0000';
ctx.stroke();

}




})




}


}