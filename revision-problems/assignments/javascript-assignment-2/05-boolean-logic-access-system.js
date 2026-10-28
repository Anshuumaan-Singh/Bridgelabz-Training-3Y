function checkHomeSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  const hasUnsafeCondition = !isDoorLocked || !isWindowClosed || !isAlarmOn || !isOwnerInside;
  const isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;

  console.log(`Door locked: ${isDoorLocked}, window closed: ${isWindowClosed}, alarm on: ${isAlarmOn}, owner inside: ${isOwnerInside}`);
  console.log(isSecure && !hasUnsafeCondition ? "Secure" : "Unsafe");
}

checkHomeSecurity(true, true, true, true);
checkHomeSecurity(true, true, false, true);
checkHomeSecurity(true, false, true, true);
