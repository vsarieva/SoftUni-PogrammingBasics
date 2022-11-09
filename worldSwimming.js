function worldSwimmingRecord(input) {
  let worldRecord = Number(input[0]);
  let distance = Number(input[1]);
  let timeMeter = Number(input[2]);
  let ivanchoTime = distance * timeMeter;
  let slowing = Math.floor(distance / 15);
  ivanchoTime = ivanchoTime + (slowing * 12.5)
  if (ivanchoTime < worldRecord) {
    console.log(`Yes, he succeeded! The new world record is ${ivanchoTime.toFixed(2)} seconds.`)
  } else {
    let nedostig = Math.abs(worldRecord - ivanchoTime);
    console.log(`No, he failed! He was ${nedostig.toFixed(2)} seconds slower.`)
  }



}
worldSwimmingRecord(["55555.67",
  "3017",
  "5.03"])

