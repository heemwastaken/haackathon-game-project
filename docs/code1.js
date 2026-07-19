gdjs.maingameCode = {};
gdjs.maingameCode.localVariables = [];
gdjs.maingameCode.idToCallbackMap = new Map();
gdjs.maingameCode.forEachIndex4 = 0;

gdjs.maingameCode.forEachIndex7 = 0;

gdjs.maingameCode.forEachObjects4 = [];

gdjs.maingameCode.forEachObjects7 = [];

gdjs.maingameCode.forEachTemporary4 = null;

gdjs.maingameCode.forEachTemporary7 = null;

gdjs.maingameCode.forEachTotalCount4 = 0;

gdjs.maingameCode.forEachTotalCount7 = 0;

gdjs.maingameCode.GDACardObjects1= [];
gdjs.maingameCode.GDACardObjects2= [];
gdjs.maingameCode.GDACardObjects3= [];
gdjs.maingameCode.GDACardObjects4= [];
gdjs.maingameCode.GDACardObjects5= [];
gdjs.maingameCode.GDACardObjects6= [];
gdjs.maingameCode.GDACardObjects7= [];
gdjs.maingameCode.GDACardObjects8= [];
gdjs.maingameCode.GDreferenceObjects1= [];
gdjs.maingameCode.GDreferenceObjects2= [];
gdjs.maingameCode.GDreferenceObjects3= [];
gdjs.maingameCode.GDreferenceObjects4= [];
gdjs.maingameCode.GDreferenceObjects5= [];
gdjs.maingameCode.GDreferenceObjects6= [];
gdjs.maingameCode.GDreferenceObjects7= [];
gdjs.maingameCode.GDreferenceObjects8= [];
gdjs.maingameCode.GDBGObjects1= [];
gdjs.maingameCode.GDBGObjects2= [];
gdjs.maingameCode.GDBGObjects3= [];
gdjs.maingameCode.GDBGObjects4= [];
gdjs.maingameCode.GDBGObjects5= [];
gdjs.maingameCode.GDBGObjects6= [];
gdjs.maingameCode.GDBGObjects7= [];
gdjs.maingameCode.GDBGObjects8= [];
gdjs.maingameCode.GDhand_9595holdObjects1= [];
gdjs.maingameCode.GDhand_9595holdObjects2= [];
gdjs.maingameCode.GDhand_9595holdObjects3= [];
gdjs.maingameCode.GDhand_9595holdObjects4= [];
gdjs.maingameCode.GDhand_9595holdObjects5= [];
gdjs.maingameCode.GDhand_9595holdObjects6= [];
gdjs.maingameCode.GDhand_9595holdObjects7= [];
gdjs.maingameCode.GDhand_9595holdObjects8= [];
gdjs.maingameCode.GDDeckCardObjects1= [];
gdjs.maingameCode.GDDeckCardObjects2= [];
gdjs.maingameCode.GDDeckCardObjects3= [];
gdjs.maingameCode.GDDeckCardObjects4= [];
gdjs.maingameCode.GDDeckCardObjects5= [];
gdjs.maingameCode.GDDeckCardObjects6= [];
gdjs.maingameCode.GDDeckCardObjects7= [];
gdjs.maingameCode.GDDeckCardObjects8= [];
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects1= [];
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2= [];
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects3= [];
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects4= [];
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects5= [];
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects6= [];
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects7= [];
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects8= [];
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects1= [];
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects2= [];
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects3= [];
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects4= [];
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects5= [];
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects6= [];
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects7= [];
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects8= [];
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects1= [];
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects2= [];
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects3= [];
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects4= [];
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects5= [];
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects6= [];
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects7= [];
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects8= [];
gdjs.maingameCode.GDdeck_9595bgObjects1= [];
gdjs.maingameCode.GDdeck_9595bgObjects2= [];
gdjs.maingameCode.GDdeck_9595bgObjects3= [];
gdjs.maingameCode.GDdeck_9595bgObjects4= [];
gdjs.maingameCode.GDdeck_9595bgObjects5= [];
gdjs.maingameCode.GDdeck_9595bgObjects6= [];
gdjs.maingameCode.GDdeck_9595bgObjects7= [];
gdjs.maingameCode.GDdeck_9595bgObjects8= [];
gdjs.maingameCode.GDtimeprompt_9595bgObjects1= [];
gdjs.maingameCode.GDtimeprompt_9595bgObjects2= [];
gdjs.maingameCode.GDtimeprompt_9595bgObjects3= [];
gdjs.maingameCode.GDtimeprompt_9595bgObjects4= [];
gdjs.maingameCode.GDtimeprompt_9595bgObjects5= [];
gdjs.maingameCode.GDtimeprompt_9595bgObjects6= [];
gdjs.maingameCode.GDtimeprompt_9595bgObjects7= [];
gdjs.maingameCode.GDtimeprompt_9595bgObjects8= [];
gdjs.maingameCode.GDtprompt_9595rightselectionObjects1= [];
gdjs.maingameCode.GDtprompt_9595rightselectionObjects2= [];
gdjs.maingameCode.GDtprompt_9595rightselectionObjects3= [];
gdjs.maingameCode.GDtprompt_9595rightselectionObjects4= [];
gdjs.maingameCode.GDtprompt_9595rightselectionObjects5= [];
gdjs.maingameCode.GDtprompt_9595rightselectionObjects6= [];
gdjs.maingameCode.GDtprompt_9595rightselectionObjects7= [];
gdjs.maingameCode.GDtprompt_9595rightselectionObjects8= [];
gdjs.maingameCode.GDtprompt_9595leftselectionObjects1= [];
gdjs.maingameCode.GDtprompt_9595leftselectionObjects2= [];
gdjs.maingameCode.GDtprompt_9595leftselectionObjects3= [];
gdjs.maingameCode.GDtprompt_9595leftselectionObjects4= [];
gdjs.maingameCode.GDtprompt_9595leftselectionObjects5= [];
gdjs.maingameCode.GDtprompt_9595leftselectionObjects6= [];
gdjs.maingameCode.GDtprompt_9595leftselectionObjects7= [];
gdjs.maingameCode.GDtprompt_9595leftselectionObjects8= [];
gdjs.maingameCode.GDred_9595confettiObjects1= [];
gdjs.maingameCode.GDred_9595confettiObjects2= [];
gdjs.maingameCode.GDred_9595confettiObjects3= [];
gdjs.maingameCode.GDred_9595confettiObjects4= [];
gdjs.maingameCode.GDred_9595confettiObjects5= [];
gdjs.maingameCode.GDred_9595confettiObjects6= [];
gdjs.maingameCode.GDred_9595confettiObjects7= [];
gdjs.maingameCode.GDred_9595confettiObjects8= [];
gdjs.maingameCode.GDwhite_9595confettiObjects1= [];
gdjs.maingameCode.GDwhite_9595confettiObjects2= [];
gdjs.maingameCode.GDwhite_9595confettiObjects3= [];
gdjs.maingameCode.GDwhite_9595confettiObjects4= [];
gdjs.maingameCode.GDwhite_9595confettiObjects5= [];
gdjs.maingameCode.GDwhite_9595confettiObjects6= [];
gdjs.maingameCode.GDwhite_9595confettiObjects7= [];
gdjs.maingameCode.GDwhite_9595confettiObjects8= [];
gdjs.maingameCode.GDgreen_9595confettiObjects1= [];
gdjs.maingameCode.GDgreen_9595confettiObjects2= [];
gdjs.maingameCode.GDgreen_9595confettiObjects3= [];
gdjs.maingameCode.GDgreen_9595confettiObjects4= [];
gdjs.maingameCode.GDgreen_9595confettiObjects5= [];
gdjs.maingameCode.GDgreen_9595confettiObjects6= [];
gdjs.maingameCode.GDgreen_9595confettiObjects7= [];
gdjs.maingameCode.GDgreen_9595confettiObjects8= [];
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects1= [];
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects2= [];
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects3= [];
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects4= [];
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects5= [];
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects6= [];
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects7= [];
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects8= [];
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects1= [];
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2= [];
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects3= [];
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects4= [];
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects5= [];
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects6= [];
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects7= [];
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects8= [];
gdjs.maingameCode.GDPlr_9595NetCashObjects1= [];
gdjs.maingameCode.GDPlr_9595NetCashObjects2= [];
gdjs.maingameCode.GDPlr_9595NetCashObjects3= [];
gdjs.maingameCode.GDPlr_9595NetCashObjects4= [];
gdjs.maingameCode.GDPlr_9595NetCashObjects5= [];
gdjs.maingameCode.GDPlr_9595NetCashObjects6= [];
gdjs.maingameCode.GDPlr_9595NetCashObjects7= [];
gdjs.maingameCode.GDPlr_9595NetCashObjects8= [];
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects1= [];
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects2= [];
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects3= [];
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects4= [];
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects5= [];
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects6= [];
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects7= [];
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects8= [];
gdjs.maingameCode.GDtraceObjects1= [];
gdjs.maingameCode.GDtraceObjects2= [];
gdjs.maingameCode.GDtraceObjects3= [];
gdjs.maingameCode.GDtraceObjects4= [];
gdjs.maingameCode.GDtraceObjects5= [];
gdjs.maingameCode.GDtraceObjects6= [];
gdjs.maingameCode.GDtraceObjects7= [];
gdjs.maingameCode.GDtraceObjects8= [];
gdjs.maingameCode.GDPlayerHandObjects1= [];
gdjs.maingameCode.GDPlayerHandObjects2= [];
gdjs.maingameCode.GDPlayerHandObjects3= [];
gdjs.maingameCode.GDPlayerHandObjects4= [];
gdjs.maingameCode.GDPlayerHandObjects5= [];
gdjs.maingameCode.GDPlayerHandObjects6= [];
gdjs.maingameCode.GDPlayerHandObjects7= [];
gdjs.maingameCode.GDPlayerHandObjects8= [];


gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDPlayerHandObjects1Objects = Hashtable.newFrom({"PlayerHand": gdjs.maingameCode.GDPlayerHandObjects1});
gdjs.maingameCode.eventsList0 = function(runtimeScene) {

};gdjs.maingameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "game_minutes_going_up", 5, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12576980);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(10).add(1);
}
}

}


};gdjs.maingameCode.eventsList2 = function(runtimeScene, asyncObjectsList) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(21).getChild("0").getChild("Participant1IsHome").getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(11).getChild("Name").setString(runtimeScene.getScene().getVariables().getFromIndex(21).getChild("0").getChild("Participant1").getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(12).getChild("Name").setString(runtimeScene.getScene().getVariables().getFromIndex(21).getChild("0").getChild("Participant2").getAsString());
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{runtimeScene.getScene().getVariables().getFromIndex(11).getChild("Name").setString(runtimeScene.getScene().getVariables().getFromIndex(21).getChild("0").getChild("Participant2").getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(12).getChild("Name").setString(runtimeScene.getScene().getVariables().getFromIndex(21).getChild("0").getChild("Participant1").getAsString());
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.maingameCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("current_childstat", variable);
}
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("current_childstat_name", variable);
}
gdjs.maingameCode.localVariables.push(variables);
}
const keyIteratorReference6 = gdjs.maingameCode.localVariables[1].getFromIndex(1);
const valueIteratorReference6 = gdjs.maingameCode.localVariables[1].getFromIndex(0);
const iterableReference6 = gdjs.maingameCode.localVariables[0].getFromIndex(0);
if(!iterableReference6.isPrimitive()) {
for(
    const iteratorKey6 in 
    iterableReference6.getType() === "structure"
      ? iterableReference6.getAllChildren()
      : iterableReference6.getType() === "array"
        ? iterableReference6.getAllChildrenArray()
        : []
) {
    if(iterableReference6.getType() === "structure")
        keyIteratorReference6.setString(iteratorKey6);
    else if(iterableReference6.getType() === "array")
        keyIteratorReference6.setNumber(iteratorKey6);
    const structureChildVariable6 = iterableReference6.getChild(iteratorKey6)
    valueIteratorReference6.castTo(structureChildVariable6.getType())
    if(structureChildVariable6.isPrimitive()) {
        valueIteratorReference6.setValue(structureChildVariable6.getValue());
    } else if (structureChildVariable6.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference6.replaceChildren(structureChildVariable6.getAllChildren());
    } else if (structureChildVariable6.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference6.replaceChildrenArray(structureChildVariable6.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.maingameCode.localVariables[1].getFromIndex(1).getAsString() == "FixtureId");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.maingameCode.localVariables[1].getFromIndex(0).getAsString() == "18257739");
}
}
if (isConditionTrue_0)
{
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(21));
}
{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getScene().getVariables().getFromIndex(21), gdjs.maingameCode.localVariables[0].getFromIndex(0));
}

{ //Subevents: 
gdjs.maingameCode.eventsList2(runtimeScene, asyncObjectsList);} //Subevents end.
}
}
}
gdjs.maingameCode.localVariables.pop();

}


};gdjs.maingameCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variables._declare("Current_Child", variable);
}
gdjs.maingameCode.localVariables.push(variables);
}
const valueIteratorReference4 = gdjs.maingameCode.localVariables[0].getFromIndex(0);
const iterableReference4 = runtimeScene.getScene().getVariables().getFromIndex(20);
if(!iterableReference4.isPrimitive()) {
for(
    const iteratorKey4 in 
    iterableReference4.getType() === "structure"
      ? iterableReference4.getAllChildren()
      : iterableReference4.getType() === "array"
        ? iterableReference4.getAllChildrenArray()
        : []
) {
    const structureChildVariable4 = iterableReference4.getChild(iteratorKey4)
    valueIteratorReference4.castTo(structureChildVariable4.getType())
    if(structureChildVariable4.isPrimitive()) {
        valueIteratorReference4.setValue(structureChildVariable4.getValue());
    } else if (structureChildVariable4.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference4.replaceChildren(structureChildVariable4.getAllChildren());
    } else if (structureChildVariable4.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference4.replaceChildrenArray(structureChildVariable4.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(gdjs.maingameCode.localVariables[0].getFromIndex(0), "FixtureId");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10833580);
}
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.maingameCode.eventsList3(runtimeScene, asyncObjectsList);} //Subevents end.
}
}
}
gdjs.maingameCode.localVariables.pop();

}


};gdjs.maingameCode.asyncCallback11460404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);

{ //Subevents
gdjs.maingameCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(11460404, gdjs.maingameCode.asyncCallback11460404);
gdjs.maingameCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(19), runtimeScene.getScene().getVariables().getFromIndex(20), null), (runtimeScene) => (gdjs.maingameCode.asyncCallback11460404(runtimeScene, asyncObjectsList)), 11460404, asyncObjectsList);
}
}

}


};gdjs.maingameCode.asyncCallback9774508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);

{ //Subevents
gdjs.maingameCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(9774508, gdjs.maingameCode.asyncCallback9774508);
gdjs.maingameCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "GetFixtureID", runtimeScene.getScene().getVariables().getFromIndex(19), null), (runtimeScene) => (gdjs.maingameCode.asyncCallback9774508(runtimeScene, asyncObjectsList)), 9774508, asyncObjectsList);
}
}

}


};gdjs.maingameCode.asyncCallback16366460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(16366460, gdjs.maingameCode.asyncCallback16366460);
gdjs.maingameCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ReadResponseJSON.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(23), runtimeScene.getScene().getVariables().getFromIndex(24), null), (runtimeScene) => (gdjs.maingameCode.asyncCallback16366460(runtimeScene, asyncObjectsList)), 16366460, asyncObjectsList);
}
}

}


};gdjs.maingameCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AdvancedHTTP__ResponseSuccess.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(24), null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13885908);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(24));
}

{ //Subevents
gdjs.maingameCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(Math.ceil(runtimeScene.getScene().getVariables().getFromIndex(24).getChild("0").getChild("Clock").getChild("Seconds").getAsNumber() / 60));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(11).getChild("Goals").setNumber(runtimeScene.getScene().getVariables().getFromIndex(24).getChild("0").getChild("Participant1").getChild("Goals").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(12).getChild("Goals").setNumber(runtimeScene.getScene().getVariables().getFromIndex(24).getChild("0").getChild("Participant2").getChild("Goals").getAsNumber());
}
}

}


};gdjs.maingameCode.asyncCallback13541332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(24));
}

{ //Subevents
gdjs.maingameCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(13541332, gdjs.maingameCode.asyncCallback13541332);
gdjs.maingameCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "GetMatchData", runtimeScene.getScene().getVariables().getFromIndex(23), null), (runtimeScene) => (gdjs.maingameCode.asyncCallback13541332(runtimeScene, asyncObjectsList)), 13541332, asyncObjectsList);
}
}

}


};gdjs.maingameCode.asyncCallback17054876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "BG Music.mp3", 8, true, 30, 1);
}
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(17054876, gdjs.maingameCode.asyncCallback17054876);
gdjs.maingameCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs.maingameCode.asyncCallback17054876(runtimeScene, asyncObjectsList)), 17054876, asyncObjectsList);
}
}

}


};gdjs.maingameCode.userFunc0xad0300 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);


const options = {
  method: 'GET',
  headers: {Authorization: 'Bearer <token>', 'X-Api-Token': '<api-key>'}
};

fetch('https://txline.txodds.com/api/scores/updates/{fixtureId}', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
};
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDACardObjects2Objects = Hashtable.newFrom({"ACard": gdjs.maingameCode.GDACardObjects2});
gdjs.maingameCode.eventsList11 = function(runtimeScene) {

{

/* Reuse gdjs.maingameCode.GDACardObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects2[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects2[k] = gdjs.maingameCode.GDACardObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects2[i].getBehavior("Animation").getAnimationIndex() > 1 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects2[k] = gdjs.maingameCode.GDACardObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDPlayerHandObjects2 */
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects2[i].returnVariable(gdjs.maingameCode.GDPlayerHandObjects2[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
}

}


};gdjs.maingameCode.asyncCallback16737348 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("timeprompt_bg"), gdjs.maingameCode.GDtimeprompt_9595bgObjects3);
gdjs.copyArray(runtimeScene.getObjects("tprompt_leftselection"), gdjs.maingameCode.GDtprompt_9595leftselectionObjects3);
gdjs.copyArray(runtimeScene.getObjects("tprompt_rightselection"), gdjs.maingameCode.GDtprompt_9595rightselectionObjects3);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}
{for(var i = 0, len = gdjs.maingameCode.GDtimeprompt_9595bgObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDtimeprompt_9595bgObjects3[i].hide(false);
}
for(var i = 0, len = gdjs.maingameCode.GDtprompt_9595leftselectionObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDtprompt_9595leftselectionObjects3[i].hide(false);
}
for(var i = 0, len = gdjs.maingameCode.GDtprompt_9595rightselectionObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDtprompt_9595rightselectionObjects3[i].hide(false);
}
}
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(16737348, gdjs.maingameCode.asyncCallback16737348);
gdjs.maingameCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.maingameCode.asyncCallback16737348(runtimeScene, asyncObjectsList)), 16737348, asyncObjectsList);
}
}

}


};gdjs.maingameCode.eventsList13 = function(runtimeScene, asyncObjectsList) {

};gdjs.maingameCode.asyncCallback10398604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}

{ //Subevents
gdjs.maingameCode.eventsList13(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(10398604, gdjs.maingameCode.asyncCallback10398604);
gdjs.maingameCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.maingameCode.asyncCallback10398604(runtimeScene, asyncObjectsList)), 10398604, asyncObjectsList);
}
}

}


};gdjs.maingameCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

};gdjs.maingameCode.eventsList16 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("ACard"), gdjs.maingameCode.GDACardObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects6.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects6[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects6[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects6[k] = gdjs.maingameCode.GDACardObjects6[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects6.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDACardObjects6 */
gdjs.copyArray(gdjs.maingameCode.GDPlayerHandObjects5, gdjs.maingameCode.GDPlayerHandObjects6);

{for(var i = 0, len = gdjs.maingameCode.GDACardObjects6.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects6[i].returnVariable(gdjs.maingameCode.GDACardObjects6[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects6.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects6[i].returnVariable(gdjs.maingameCode.GDPlayerHandObjects6[i].getVariables().getFromIndex(3)).setNumber(gdjs.maingameCode.GDPlayerHandObjects6[i].getVariables().getFromIndex(1).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects6.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects6[i].returnVariable(gdjs.maingameCode.GDPlayerHandObjects6[i].getVariables().getFromIndex(1)).setNumber(0);
}
}

{ //Subevents
gdjs.maingameCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
}

}


{

gdjs.copyArray(asyncObjectsList.getObjects("ACard"), gdjs.maingameCode.GDACardObjects6);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects6.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects6[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects6[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects6[k] = gdjs.maingameCode.GDACardObjects6[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects6.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects6[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects6[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects6[k] = gdjs.maingameCode.GDACardObjects6[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects6.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDACardObjects6 */
{runtimeScene.getScene().getVariables().getFromIndex(13).getChild("Team").setString((( gdjs.maingameCode.GDACardObjects6.length === 0 ) ? "" :gdjs.maingameCode.GDACardObjects6[0].getBehavior("Animation").getAnimationName()));
}
}

}


{

gdjs.copyArray(asyncObjectsList.getObjects("ACard"), gdjs.maingameCode.GDACardObjects6);


for (gdjs.maingameCode.forEachIndex7 = 0;gdjs.maingameCode.forEachIndex7 < gdjs.maingameCode.GDACardObjects6.length;++gdjs.maingameCode.forEachIndex7) {
gdjs.maingameCode.GDACardObjects7.length = 0;


gdjs.maingameCode.forEachTemporary7 = gdjs.maingameCode.GDACardObjects6[gdjs.maingameCode.forEachIndex7];
gdjs.maingameCode.GDACardObjects7.push(gdjs.maingameCode.forEachTemporary7);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects7.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects7[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects7[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects7[k] = gdjs.maingameCode.GDACardObjects7[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects7.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects7.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects7[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects7[i].getVariables().getFromIndex(4), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects7[k] = gdjs.maingameCode.GDACardObjects7[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects7.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(13).getChild("Actions"), (( gdjs.maingameCode.GDACardObjects7.length === 0 ) ? "" :gdjs.maingameCode.GDACardObjects7[0].getBehavior("Animation").getAnimationName()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.maingameCode.asyncCallback13476188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects5);

{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(7));
}
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects5.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects5[i].returnVariable(gdjs.maingameCode.GDPlayerHandObjects5[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects5.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects5[i].returnVariable(gdjs.maingameCode.GDPlayerHandObjects5[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects5.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects5[i].returnVariable(gdjs.maingameCode.GDPlayerHandObjects5[i].getVariables().getFromIndex(2)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects5.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects5[i].getBehavior("Scale").setScale(1);
}
}

{ //Subevents
gdjs.maingameCode.eventsList16(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(13476188, gdjs.maingameCode.asyncCallback13476188);
gdjs.maingameCode.eventsList17 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
for (const obj of gdjs.maingameCode.GDACardObjects4) asyncObjectsList.addObject("ACard", obj);
for (const obj of gdjs.maingameCode.GDPlayerHandObjects4) asyncObjectsList.addObject("PlayerHand", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.maingameCode.asyncCallback13476188(runtimeScene, asyncObjectsList)), 13476188, asyncObjectsList);
}
}

}


};gdjs.maingameCode.asyncCallback8536588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ACard"), gdjs.maingameCode.GDACardObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects4);

{for(var i = 0, len = gdjs.maingameCode.GDACardObjects4.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects4[i].getBehavior("Sticker").Unstick(null);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects4.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects4[i].setZOrder((( gdjs.maingameCode.GDPlayerHandObjects4.length === 0 ) ? 0 :gdjs.maingameCode.GDPlayerHandObjects4[0].getZOrder()) - 1);
}
}

{ //Subevents
gdjs.maingameCode.eventsList17(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(8536588, gdjs.maingameCode.asyncCallback8536588);
gdjs.maingameCode.eventsList18 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
/* Don't save ACard as it will be provided by the parent asyncObjectsList. */
/* Don't save PlayerHand as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.maingameCode.asyncCallback8536588(runtimeScene, asyncObjectsList)), 8536588, asyncObjectsList);
}
}

}


};gdjs.maingameCode.asyncCallback11243956 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "ribhavagrawal-hit-by-a-wood-230542.mp3", false, 100, 1);
}

{ //Subevents
gdjs.maingameCode.eventsList18(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(11243956, gdjs.maingameCode.asyncCallback11243956);
gdjs.maingameCode.eventsList19 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
/* Don't save ACard as it will be provided by the parent asyncObjectsList. */
/* Don't save PlayerHand as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.maingameCode.asyncCallback11243956(runtimeScene, asyncObjectsList)), 11243956, asyncObjectsList);
}
}

}


};gdjs.maingameCode.asyncCallback13890396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "zoedit-thinking-hmm-533581.mp3", false, 100, 1);
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.2, 0, 0.09, null);
}

{ //Subevents
gdjs.maingameCode.eventsList19(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(13890396, gdjs.maingameCode.asyncCallback13890396);
gdjs.maingameCode.eventsList20 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
for (const obj of gdjs.maingameCode.GDACardObjects1) asyncObjectsList.addObject("ACard", obj);
for (const obj of gdjs.maingameCode.GDPlayerHandObjects1) asyncObjectsList.addObject("PlayerHand", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.maingameCode.asyncCallback13890396(runtimeScene, asyncObjectsList)), 13890396, asyncObjectsList);
}
}

}


};gdjs.maingameCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}

{ //Subevents
gdjs.maingameCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15989292);
}
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDPlayerHandObjects1 */
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects1[i].returnVariable(gdjs.maingameCode.GDPlayerHandObjects1[i].getVariables().getFromIndex(2)).setBoolean(true);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "soundreality-whoosh-motion-243505.mp3", false, 100, 1);
}

{ //Subevents
gdjs.maingameCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.maingameCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.maingameCode.GDPlayerHandObjects1 */
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.common.lerp((gdjs.maingameCode.GDPlayerHandObjects1[i].getBehavior("Scale").getScale()), 0.5, 0.5));
}
}
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects1[i].getBehavior("Tween").addObjectPositionXTween2("Xpos_slam", 150, "linear", 0.1, false);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects1[i].setCenterYInScene(720 - (gdjs.maingameCode.GDPlayerHandObjects1[i].getPointY("Base")) + (gdjs.maingameCode.GDPlayerHandObjects1[i].getCenterYInScene()));
}
}

{ //Subevents
gdjs.maingameCode.eventsList21(runtimeScene);} //End of subevents
}

}


};gdjs.maingameCode.eventsList23 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects2[i].getVariableBoolean(gdjs.maingameCode.GDPlayerHandObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects2[k] = gdjs.maingameCode.GDPlayerHandObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDPlayerHandObjects2 */
gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.maingameCode.GDtraceObjects2);
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects2[i].setCenterXInScene(gdjs.evtTools.common.lerp((gdjs.maingameCode.GDPlayerHandObjects2[i].getCenterXInScene()), (( gdjs.maingameCode.GDtraceObjects2.length === 0 ) ? 0 :gdjs.maingameCode.GDtraceObjects2[0].getCenterXInScene()), (gdjs.maingameCode.GDPlayerHandObjects2[i].getDistanceToObject((gdjs.maingameCode.GDtraceObjects2.length !== 0 ? gdjs.maingameCode.GDtraceObjects2[0] : null))) * 0.00013333));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects2[i].getCenterYInScene() >= 360 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects2[k] = gdjs.maingameCode.GDPlayerHandObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects2[i].getVariableBoolean(gdjs.maingameCode.GDPlayerHandObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects2[k] = gdjs.maingameCode.GDPlayerHandObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDPlayerHandObjects2 */
gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.maingameCode.GDtraceObjects2);
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects2[i].setCenterYInScene(gdjs.evtTools.common.lerp((gdjs.maingameCode.GDPlayerHandObjects2[i].getCenterYInScene()), (( gdjs.maingameCode.GDtraceObjects2.length === 0 ) ? 0 :gdjs.maingameCode.GDtraceObjects2[0].getCenterYInScene()), 0.04));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects2);
gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.maingameCode.GDtraceObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDtraceObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDtraceObjects2[i].getCenterYInScene() > 360 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDtraceObjects2[k] = gdjs.maingameCode.GDtraceObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDtraceObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects2[i].getCenterYInScene() <= 360 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects2[k] = gdjs.maingameCode.GDPlayerHandObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects2[i].getVariableBoolean(gdjs.maingameCode.GDPlayerHandObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects2[k] = gdjs.maingameCode.GDPlayerHandObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDPlayerHandObjects2 */
/* Reuse gdjs.maingameCode.GDtraceObjects2 */
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects2[i].setCenterYInScene(gdjs.evtTools.common.lerp((gdjs.maingameCode.GDPlayerHandObjects2[i].getCenterYInScene()), (( gdjs.maingameCode.GDtraceObjects2.length === 0 ) ? 0 :gdjs.maingameCode.GDtraceObjects2[0].getCenterYInScene()), 0.04));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ACard"), gdjs.maingameCode.GDACardObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects2);
gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.maingameCode.GDtraceObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects2[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects2[k] = gdjs.maingameCode.GDACardObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects2[i].getBehavior("Animation").getAnimationIndex() < 2 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects2[k] = gdjs.maingameCode.GDACardObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects2[i].getVariableBoolean(gdjs.maingameCode.GDPlayerHandObjects2[i].getVariables().getFromIndex(2), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects2[k] = gdjs.maingameCode.GDPlayerHandObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDtraceObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDtraceObjects2[i].getCenterYInScene() < 570 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDtraceObjects2[k] = gdjs.maingameCode.GDtraceObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDtraceObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDtraceObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDtraceObjects2[i].getCenterXInScene() < 1044 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDtraceObjects2[k] = gdjs.maingameCode.GDtraceObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDtraceObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects2[i].getVariableNumber(gdjs.maingameCode.GDPlayerHandObjects2[i].getVariables().getFromIndex(1)) > 1 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects2[k] = gdjs.maingameCode.GDPlayerHandObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects2.length = k;
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDACardObjects2 */
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDACardObjects2Objects);
}

{ //Subevents
gdjs.maingameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ACard"), gdjs.maingameCode.GDACardObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects1.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects1[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects1[k] = gdjs.maingameCode.GDACardObjects1[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects1.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects1[i].getVariableBoolean(gdjs.maingameCode.GDPlayerHandObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects1[k] = gdjs.maingameCode.GDPlayerHandObjects1[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}

{ //Subevents
gdjs.maingameCode.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.maingameCode.eventsList24 = function(runtimeScene) {

{

/* Reuse gdjs.maingameCode.GDACardObjects1 */
/* Reuse gdjs.maingameCode.GDPlayerHandObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects1.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects1[i].getVariableNumber(gdjs.maingameCode.GDACardObjects1[i].getVariables().getFromIndex(1)) == ((gdjs.maingameCode.GDPlayerHandObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.maingameCode.GDPlayerHandObjects1[0].getVariables()).getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects1[k] = gdjs.maingameCode.GDACardObjects1[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDACardObjects1 */
/* Reuse gdjs.maingameCode.GDPlayerHandObjects1 */
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects1[i].rotateTowardAngle(7.5 * runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), 0, runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(((gdjs.maingameCode.GDPlayerHandObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.maingameCode.GDPlayerHandObjects1[0].getVariables()).getFromIndex(1).getAsNumber());
}
}

}


};gdjs.maingameCode.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ACard"), gdjs.maingameCode.GDACardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects2.length;i<l;++i) {
    if ( !(gdjs.maingameCode.GDACardObjects2[i].getBehavior("InOnScreen").IsOnScreen(0, null)) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects2[k] = gdjs.maingameCode.GDACardObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDACardObjects2 */
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ACard"), gdjs.maingameCode.GDACardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects2[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects2[k] = gdjs.maingameCode.GDACardObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDACardObjects2 */
gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects2);
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects2[i].getBehavior("Scale").setScale((( gdjs.maingameCode.GDPlayerHandObjects2.length === 0 ) ? 0 :gdjs.maingameCode.GDPlayerHandObjects2[0].getBehavior("Scale").getScale()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ACard"), gdjs.maingameCode.GDACardObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects1.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects1[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects1[k] = gdjs.maingameCode.GDACardObjects1[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects1.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects1[i].getVariableNumber(gdjs.maingameCode.GDPlayerHandObjects1[i].getVariables().getFromIndex(1)) > 1 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects1[k] = gdjs.maingameCode.GDPlayerHandObjects1[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < ((gdjs.maingameCode.GDPlayerHandObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.maingameCode.GDPlayerHandObjects1[0].getVariables()).getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14602732);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDACardObjects1 */
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects1[i].setAngle(gdjs.maingameCode.GDACardObjects1[i].getAngle() - (7.5));
}
}

{ //Subevents
gdjs.maingameCode.eventsList24(runtimeScene);} //End of subevents
}

}


};gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDdeck_95959595scroll_95959595leftObjects3Objects = Hashtable.newFrom({"deck_scroll_left": gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects3});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtraceObjects3Objects = Hashtable.newFrom({"trace": gdjs.maingameCode.GDtraceObjects3});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDDeckCardObjects3Objects = Hashtable.newFrom({"DeckCard": gdjs.maingameCode.GDDeckCardObjects3});
gdjs.maingameCode.eventsList26 = function(runtimeScene) {

{

/* Reuse gdjs.maingameCode.GDDeckCardObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDDeckCardObjects3.length;i<l;++i) {
    if ( gdjs.maingameCode.GDDeckCardObjects3[i].getBehavior("Animation").getAnimationIndex() > 1 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDDeckCardObjects3[k] = gdjs.maingameCode.GDDeckCardObjects3[i];
        ++k;
    }
}
gdjs.maingameCode.GDDeckCardObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDDeckCardObjects3 */
{for(var i = 0, len = gdjs.maingameCode.GDDeckCardObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDDeckCardObjects3[i].getBehavior("Animation").setAnimationIndex(gdjs.maingameCode.GDDeckCardObjects3[i].getBehavior("Animation").getAnimationIndex() - (1));
}
}
}

}


};gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDdeck_95959595scroll_95959595rightObjects2Objects = Hashtable.newFrom({"deck_scroll_right": gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects2});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtraceObjects2Objects = Hashtable.newFrom({"trace": gdjs.maingameCode.GDtraceObjects2});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDDeckCardObjects2Objects = Hashtable.newFrom({"DeckCard": gdjs.maingameCode.GDDeckCardObjects2});
gdjs.maingameCode.eventsList27 = function(runtimeScene) {

{

/* Reuse gdjs.maingameCode.GDDeckCardObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDDeckCardObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDDeckCardObjects2[i].getBehavior("Animation").getAnimationIndex() > 1 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDDeckCardObjects2[k] = gdjs.maingameCode.GDDeckCardObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDDeckCardObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDDeckCardObjects2 */
{for(var i = 0, len = gdjs.maingameCode.GDDeckCardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDDeckCardObjects2[i].getBehavior("Animation").setAnimationIndex(gdjs.maingameCode.GDDeckCardObjects2[i].getBehavior("Animation").getAnimationIndex() + (1));
}
}
}

}


};gdjs.maingameCode.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DeckCard"), gdjs.maingameCode.GDDeckCardObjects3);
gdjs.copyArray(runtimeScene.getObjects("deck_scroll_left"), gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects3);
gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.maingameCode.GDtraceObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDdeck_95959595scroll_95959595leftObjects3Objects, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtraceObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDDeckCardObjects3.length;i<l;++i) {
    if ( gdjs.maingameCode.GDDeckCardObjects3[i].getVariableNumber(gdjs.maingameCode.GDDeckCardObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDDeckCardObjects3[k] = gdjs.maingameCode.GDDeckCardObjects3[i];
        ++k;
    }
}
gdjs.maingameCode.GDDeckCardObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDDeckCardObjects3.length;i<l;++i) {
    if ( gdjs.maingameCode.GDDeckCardObjects3[i].getBehavior("Animation").getAnimationIndex() > 2 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDDeckCardObjects3[k] = gdjs.maingameCode.GDDeckCardObjects3[i];
        ++k;
    }
}
gdjs.maingameCode.GDDeckCardObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9857908);
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDDeckCardObjects3 */
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDDeckCardObjects3Objects);
}

{ //Subevents
gdjs.maingameCode.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DeckCard"), gdjs.maingameCode.GDDeckCardObjects2);
gdjs.copyArray(runtimeScene.getObjects("deck_scroll_right"), gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects2);
gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.maingameCode.GDtraceObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDdeck_95959595scroll_95959595rightObjects2Objects, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtraceObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDDeckCardObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDDeckCardObjects2[i].getVariableNumber(gdjs.maingameCode.GDDeckCardObjects2[i].getVariables().getFromIndex(0)) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDDeckCardObjects2[k] = gdjs.maingameCode.GDDeckCardObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDDeckCardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDDeckCardObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDDeckCardObjects2[i].getBehavior("Animation").getAnimationIndex() < 13 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDDeckCardObjects2[k] = gdjs.maingameCode.GDDeckCardObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDDeckCardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10042540);
}
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDDeckCardObjects2 */
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDDeckCardObjects2Objects);
}

{ //Subevents
gdjs.maingameCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.maingameCode.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13432836);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "card_hovered.mp3", 4, false, 100, 1);
}
}

}


};gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtraceObjects2Objects = Hashtable.newFrom({"trace": gdjs.maingameCode.GDtraceObjects2});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDDeckCardObjects2Objects = Hashtable.newFrom({"DeckCard": gdjs.maingameCode.GDDeckCardObjects2});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDACardObjects3Objects = Hashtable.newFrom({"ACard": gdjs.maingameCode.GDACardObjects3});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDPlayerHandObjects3Objects = Hashtable.newFrom({"PlayerHand": gdjs.maingameCode.GDPlayerHandObjects3});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDACardObjects2Objects = Hashtable.newFrom({"ACard": gdjs.maingameCode.GDACardObjects2});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDPlayerHandObjects2Objects = Hashtable.newFrom({"PlayerHand": gdjs.maingameCode.GDPlayerHandObjects2});
gdjs.maingameCode.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.maingameCode.GDDeckCardObjects2, gdjs.maingameCode.GDDeckCardObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDDeckCardObjects3.length;i<l;++i) {
    if ( !(gdjs.maingameCode.GDDeckCardObjects3[i].getBehavior("Animation").getAnimationIndex() <= 1) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDDeckCardObjects3[k] = gdjs.maingameCode.GDDeckCardObjects3[i];
        ++k;
    }
}
gdjs.maingameCode.GDDeckCardObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDDeckCardObjects3 */
gdjs.copyArray(gdjs.maingameCode.GDPlayerHandObjects2, gdjs.maingameCode.GDPlayerHandObjects3);

gdjs.maingameCode.GDACardObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDACardObjects3Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects3[i].activateBehavior("PlatformerObject", false);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects3[i].setCenterPositionInScene((( gdjs.maingameCode.GDPlayerHandObjects3.length === 0 ) ? 0 :gdjs.maingameCode.GDPlayerHandObjects3[0].getCenterXInScene()),(( gdjs.maingameCode.GDPlayerHandObjects3.length === 0 ) ? 0 :gdjs.maingameCode.GDPlayerHandObjects3[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects3[i].getBehavior("Sticker").Stick(gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDPlayerHandObjects3Objects, null);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects3[i].getBehavior("Animation").setAnimationIndex((( gdjs.maingameCode.GDDeckCardObjects3.length === 0 ) ? 0 :gdjs.maingameCode.GDDeckCardObjects3[0].getBehavior("Animation").getAnimationIndex()));
}
}
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects3[i].returnVariable(gdjs.maingameCode.GDPlayerHandObjects3[i].getVariables().getFromIndex(1)).add(1);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects3[i].returnVariable(gdjs.maingameCode.GDACardObjects3[i].getVariables().getFromIndex(1)).setNumber(((gdjs.maingameCode.GDPlayerHandObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.maingameCode.GDPlayerHandObjects3[0].getVariables()).getFromIndex(1).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).getChild((( gdjs.maingameCode.GDACardObjects3.length === 0 ) ? "" :gdjs.maingameCode.GDACardObjects3[0].getBehavior("Animation").getAnimationName())).setNumber((( gdjs.maingameCode.GDACardObjects3.length === 0 ) ? 0 :gdjs.maingameCode.GDACardObjects3[0].getBehavior("Animation").getAnimationIndex()));
}
}

}


{

/* Reuse gdjs.maingameCode.GDDeckCardObjects2 */
/* Reuse gdjs.maingameCode.GDPlayerHandObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDDeckCardObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDDeckCardObjects2[i].getBehavior("Animation").getAnimationIndex() <= 1 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDDeckCardObjects2[k] = gdjs.maingameCode.GDDeckCardObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDDeckCardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects2[i].getVariableBoolean(gdjs.maingameCode.GDPlayerHandObjects2[i].getVariables().getFromIndex(4), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects2[k] = gdjs.maingameCode.GDPlayerHandObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDDeckCardObjects2 */
/* Reuse gdjs.maingameCode.GDPlayerHandObjects2 */
gdjs.maingameCode.GDACardObjects2.length = 0;

{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects2[i].returnVariable(gdjs.maingameCode.GDPlayerHandObjects2[i].getVariables().getFromIndex(4)).setBoolean(true);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDACardObjects2Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects2[i].activateBehavior("PlatformerObject", false);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects2[i].setCenterPositionInScene((( gdjs.maingameCode.GDPlayerHandObjects2.length === 0 ) ? 0 :gdjs.maingameCode.GDPlayerHandObjects2[0].getCenterXInScene()),(( gdjs.maingameCode.GDPlayerHandObjects2.length === 0 ) ? 0 :gdjs.maingameCode.GDPlayerHandObjects2[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects2[i].getBehavior("Sticker").Stick(gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDPlayerHandObjects2Objects, null);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects2[i].getBehavior("Animation").setAnimationIndex((( gdjs.maingameCode.GDDeckCardObjects2.length === 0 ) ? 0 :gdjs.maingameCode.GDDeckCardObjects2[0].getBehavior("Animation").getAnimationIndex()));
}
}
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects2[i].returnVariable(gdjs.maingameCode.GDPlayerHandObjects2[i].getVariables().getFromIndex(1)).add(1);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects2[i].returnVariable(gdjs.maingameCode.GDACardObjects2[i].getVariables().getFromIndex(1)).setNumber(((gdjs.maingameCode.GDPlayerHandObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.maingameCode.GDPlayerHandObjects2[0].getVariables()).getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects2[i].returnVariable(gdjs.maingameCode.GDACardObjects2[i].getVariables().getFromIndex(4)).setBoolean(true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).getChild((( gdjs.maingameCode.GDACardObjects2.length === 0 ) ? "" :gdjs.maingameCode.GDACardObjects2[0].getBehavior("Animation").getAnimationName())).setNumber((( gdjs.maingameCode.GDACardObjects2.length === 0 ) ? 0 :gdjs.maingameCode.GDACardObjects2[0].getBehavior("Animation").getAnimationIndex()));
}
}

}


};gdjs.maingameCode.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DeckCard"), gdjs.maingameCode.GDDeckCardObjects3);
gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDDeckCardObjects3.length;i<l;++i) {
    if ( gdjs.maingameCode.GDDeckCardObjects3[i].isCollidingWithPoint(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0)) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDDeckCardObjects3[k] = gdjs.maingameCode.GDDeckCardObjects3[i];
        ++k;
    }
}
gdjs.maingameCode.GDDeckCardObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects3.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects3[i].getVariableBoolean(gdjs.maingameCode.GDPlayerHandObjects3[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects3[k] = gdjs.maingameCode.GDPlayerHandObjects3[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) > 0;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDDeckCardObjects3 */
{for(var i = 0, len = gdjs.maingameCode.GDDeckCardObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDDeckCardObjects3[i].setColor("109;109;109");
}
}

{ //Subevents
gdjs.maingameCode.eventsList29(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DeckCard"), gdjs.maingameCode.GDDeckCardObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDDeckCardObjects3.length;i<l;++i) {
    if ( !(gdjs.maingameCode.GDDeckCardObjects3[i].isCollidingWithPoint(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0))) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDDeckCardObjects3[k] = gdjs.maingameCode.GDDeckCardObjects3[i];
        ++k;
    }
}
gdjs.maingameCode.GDDeckCardObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) > 0;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDDeckCardObjects3 */
{for(var i = 0, len = gdjs.maingameCode.GDDeckCardObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDDeckCardObjects3[i].setColor("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DeckCard"), gdjs.maingameCode.GDDeckCardObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects2);
gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.maingameCode.GDtraceObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtraceObjects2Objects, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDDeckCardObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects2[i].getVariableBoolean(gdjs.maingameCode.GDPlayerHandObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects2[k] = gdjs.maingameCode.GDPlayerHandObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(7), (( gdjs.maingameCode.GDDeckCardObjects2.length === 0 ) ? "" :gdjs.maingameCode.GDDeckCardObjects2[0].getBehavior("Animation").getAnimationName())));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10769860);
}
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.maingameCode.eventsList30(runtimeScene);} //End of subevents
}

}


};gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtraceObjects2Objects = Hashtable.newFrom({"trace": gdjs.maingameCode.GDtraceObjects2});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDDrop_95959595cards_95959595promptObjects2Objects = Hashtable.newFrom({"Drop_cards_prompt": gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDACardObjects2Objects = Hashtable.newFrom({"ACard": gdjs.maingameCode.GDACardObjects2});
gdjs.maingameCode.eventsList32 = function(runtimeScene) {

{

/* Reuse gdjs.maingameCode.GDACardObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects2[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects2[k] = gdjs.maingameCode.GDACardObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDACardObjects2 */
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects2[i].setAngle(gdjs.maingameCode.GDACardObjects2[i].getAngle() + (7.5));
}
}
}

}


};gdjs.maingameCode.eventsList33 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.maingameCode.GDACardObjects2, gdjs.maingameCode.GDACardObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects3.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects3[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects3[i].getVariables().getFromIndex(4), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects3[k] = gdjs.maingameCode.GDACardObjects3[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.maingameCode.GDPlayerHandObjects2, gdjs.maingameCode.GDPlayerHandObjects3);

{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects3[i].returnVariable(gdjs.maingameCode.GDPlayerHandObjects3[i].getVariables().getFromIndex(4)).setBoolean(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.maingameCode.GDACardObjects2 */
/* Reuse gdjs.maingameCode.GDPlayerHandObjects2 */
{gdjs.evtTools.variable.variableRemoveChild(runtimeScene.getScene().getVariables().getFromIndex(7), (( gdjs.maingameCode.GDACardObjects2.length === 0 ) ? "" :gdjs.maingameCode.GDACardObjects2[0].getBehavior("Animation").getAnimationName()));
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects2[i].returnVariable(gdjs.maingameCode.GDPlayerHandObjects2[i].getVariables().getFromIndex(1)).sub(1);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(((gdjs.maingameCode.GDPlayerHandObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.maingameCode.GDPlayerHandObjects2[0].getVariables()).getFromIndex(1).getAsNumber());
}
{gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDACardObjects2Objects);
}

{ //Subevents
gdjs.maingameCode.eventsList32(runtimeScene);} //End of subevents
}

}


};gdjs.maingameCode.eventsList34 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ACard"), gdjs.maingameCode.GDACardObjects2);
/* Reuse gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2 */
/* Reuse gdjs.maingameCode.GDPlayerHandObjects2 */
gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.maingameCode.GDtraceObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtraceObjects2Objects, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDDrop_95959595cards_95959595promptObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects2[i].getVariableNumber(gdjs.maingameCode.GDACardObjects2[i].getVariables().getFromIndex(1)) == ((gdjs.maingameCode.GDPlayerHandObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.maingameCode.GDPlayerHandObjects2[0].getVariables()).getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects2[k] = gdjs.maingameCode.GDACardObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects2[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects2[k] = gdjs.maingameCode.GDACardObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10690172);
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.maingameCode.eventsList33(runtimeScene);} //End of subevents
}

}


};gdjs.maingameCode.eventsList35 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects2[i].getVariableNumber(gdjs.maingameCode.GDPlayerHandObjects2[i].getVariables().getFromIndex(1)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects2[k] = gdjs.maingameCode.GDPlayerHandObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Drop_cards_prompt"), gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2);
{for(var i = 0, len = gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2[i].hide(false);
}
}

{ //Subevents
gdjs.maingameCode.eventsList34(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects1.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects1[i].getVariableNumber(gdjs.maingameCode.GDPlayerHandObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects1[k] = gdjs.maingameCode.GDPlayerHandObjects1[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Drop_cards_prompt"), gdjs.maingameCode.GDDrop_9595cards_9595promptObjects1);
{for(var i = 0, len = gdjs.maingameCode.GDDrop_9595cards_9595promptObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDDrop_9595cards_9595promptObjects1[i].hide();
}
}
}

}


};gdjs.maingameCode.eventsList36 = function(runtimeScene) {

{


gdjs.maingameCode.eventsList28(runtimeScene);
}


{


gdjs.maingameCode.eventsList31(runtimeScene);
}


{


gdjs.maingameCode.eventsList35(runtimeScene);
}


};gdjs.maingameCode.asyncCallback12263228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(gdjs.randomWithStep(-1, 1, 2));
}
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(12263228, gdjs.maingameCode.asyncCallback12263228);
gdjs.maingameCode.eventsList37 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomFloatInRange(2, 20)), (runtimeScene) => (gdjs.maingameCode.asyncCallback12263228(runtimeScene, asyncObjectsList)), 12263228, asyncObjectsList);
}
}

}


};gdjs.maingameCode.eventsList38 = function(runtimeScene) {

};gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDdollar_95959595bill_95959595uispriteObjects4Objects = Hashtable.newFrom({"dollar_bill_uisprite": gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects4});
gdjs.maingameCode.eventsList39 = function(runtimeScene, asyncObjectsList) {

};gdjs.maingameCode.eventsList40 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ACard"), gdjs.maingameCode.GDACardObjects4);
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects4.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects4[i].activateBehavior("PlatformerObject", true);
}
}
}

}


{


const repeatCount4 = 5;
for (let repeatIndex4 = 0;repeatIndex4 < repeatCount4;++repeatIndex4) {
gdjs.copyArray(runtimeScene.getObjects("Plr_NetCash"), gdjs.maingameCode.GDPlr_9595NetCashObjects4);
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDdollar_95959595bill_95959595uispriteObjects4Objects, gdjs.randomFloatInRange(0, 1280), gdjs.randomFloatInRange(0, 720), "");
}
{for(var i = 0, len = gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects4.length ;i < len;++i) {
    gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects4[i].addForceTowardObject((gdjs.maingameCode.GDPlr_9595NetCashObjects4.length !== 0 ? gdjs.maingameCode.GDPlr_9595NetCashObjects4[0] : null), 1400, 1);
}
}
}
}

}


};gdjs.maingameCode.asyncCallback9542596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "hmmm_maletone_funny.mp3", false, 700, 1);
}

{ //Subevents
gdjs.maingameCode.eventsList40(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(9542596, gdjs.maingameCode.asyncCallback9542596);
gdjs.maingameCode.eventsList41 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.25), (runtimeScene) => (gdjs.maingameCode.asyncCallback9542596(runtimeScene, asyncObjectsList)), 9542596, asyncObjectsList);
}
}

}


};gdjs.maingameCode.eventsList42 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("curr_action", variable);
}
gdjs.maingameCode.localVariables.push(variables);
}
const valueIteratorReference4 = gdjs.maingameCode.localVariables[0].getFromIndex(0);
const iterableReference4 = runtimeScene.getScene().getVariables().getFromIndex(13).getChild("Actions");
if(!iterableReference4.isPrimitive()) {
for(
    const iteratorKey4 in 
    iterableReference4.getType() === "structure"
      ? iterableReference4.getAllChildren()
      : iterableReference4.getType() === "array"
        ? iterableReference4.getAllChildrenArray()
        : []
) {
    const structureChildVariable4 = iterableReference4.getChild(iteratorKey4)
    valueIteratorReference4.castTo(structureChildVariable4.getType())
    if(structureChildVariable4.isPrimitive()) {
        valueIteratorReference4.setValue(structureChildVariable4.getValue());
    } else if (structureChildVariable4.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference4.replaceChildren(structureChildVariable4.getAllChildren());
    } else if (structureChildVariable4.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference4.replaceChildrenArray(structureChildVariable4.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(runtimeScene.getObjects("Goal_Celebration_Text"), gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.maingameCode.localVariables[0].getFromIndex(0).getAsString() == "Goal");
}
if (isConditionTrue_0)
{
{gdjs.evtTools.sound.playSound(runtimeScene, "gooaal.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects4.length ;i < len;++i) {
    gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects4[i].setPosition(0,360);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects4.length ;i < len;++i) {
    gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects4[i].hide(false);
}
}
{for(var i = 0, len = gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects4.length ;i < len;++i) {
    gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects4[i].getBehavior("Tween").addObjectPositionXTween2("Gooaal_Slide_Right", 0 - (gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects4[i].getWidth()), "linear", 3.5, false);
}
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 3.5, 0, 0, null);
}
}
}
}
gdjs.maingameCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("Goal_Celebration_Text"), gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects3.length;i<l;++i) {
    if ( !(gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects3[i].getBehavior("InOnScreen").IsOnScreen(-20, null)) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects3[k] = gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects3[i];
        ++k;
    }
}
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects3 */
{for(var i = 0, len = gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects3[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("green_confetti"), gdjs.maingameCode.GDgreen_9595confettiObjects2);
gdjs.copyArray(runtimeScene.getObjects("red_confetti"), gdjs.maingameCode.GDred_9595confettiObjects2);
gdjs.copyArray(runtimeScene.getObjects("white_confetti"), gdjs.maingameCode.GDwhite_9595confettiObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(13).getChild("Team").setString("");
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(13).getChild("Actions"));
}
{runtimeScene.getScene().getVariables().getFromIndex(13).getChild("Time(m)").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(13).getChild("Outcome").setString("NoResultYet");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "cash_register.mp3", false, 100, 1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "money_stats_increasing.mp3", 1, false, 700, 1);
}
{for(var i = 0, len = gdjs.maingameCode.GDred_9595confettiObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDred_9595confettiObjects2[i].startEmission();
}
for(var i = 0, len = gdjs.maingameCode.GDwhite_9595confettiObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDwhite_9595confettiObjects2[i].startEmission();
}
for(var i = 0, len = gdjs.maingameCode.GDgreen_9595confettiObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDgreen_9595confettiObjects2[i].startEmission();
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confetti.mp3", false, 700, 1);
}
{for(var i = 0, len = gdjs.maingameCode.GDred_9595confettiObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDred_9595confettiObjects2[i].setMaxParticlesCount(500);
}
for(var i = 0, len = gdjs.maingameCode.GDwhite_9595confettiObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDwhite_9595confettiObjects2[i].setMaxParticlesCount(500);
}
for(var i = 0, len = gdjs.maingameCode.GDgreen_9595confettiObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDgreen_9595confettiObjects2[i].setMaxParticlesCount(500);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(8).add(5);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 1.5, 0, 0.75, null);
}

{ //Subevents
gdjs.maingameCode.eventsList41(runtimeScene);} //End of subevents
}

}


};gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDdollar_95959595bill_95959595uispriteObjects2Objects = Hashtable.newFrom({"dollar_bill_uisprite": gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDPlr_95959595NetCashObjects2Objects = Hashtable.newFrom({"Plr_NetCash": gdjs.maingameCode.GDPlr_9595NetCashObjects2});
gdjs.maingameCode.mapOfEmptyGDdollar_9595bill_9595uispriteObjects = Hashtable.newFrom({"dollar_bill_uisprite": []});
gdjs.maingameCode.asyncCallback9559428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ACard"), gdjs.maingameCode.GDACardObjects6);

{for(var i = 0, len = gdjs.maingameCode.GDACardObjects6.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects6[i].activateBehavior("PlatformerObject", true);
}
}
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(9559428, gdjs.maingameCode.asyncCallback9559428);
gdjs.maingameCode.eventsList43 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
for (const obj of gdjs.maingameCode.GDACardObjects4) asyncObjectsList.addObject("ACard", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomFloatInRange(0.25, 1.25)), (runtimeScene) => (gdjs.maingameCode.asyncCallback9559428(runtimeScene, asyncObjectsList)), 9559428, asyncObjectsList);
}
}

}


};gdjs.maingameCode.eventsList44 = function(runtimeScene, asyncObjectsList) {

{

gdjs.copyArray(asyncObjectsList.getObjects("ACard"), gdjs.maingameCode.GDACardObjects3);


for (gdjs.maingameCode.forEachIndex4 = 0;gdjs.maingameCode.forEachIndex4 < gdjs.maingameCode.GDACardObjects3.length;++gdjs.maingameCode.forEachIndex4) {
gdjs.maingameCode.GDACardObjects4.length = 0;


gdjs.maingameCode.forEachTemporary4 = gdjs.maingameCode.GDACardObjects3[gdjs.maingameCode.forEachIndex4];
gdjs.maingameCode.GDACardObjects4.push(gdjs.maingameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDACardObjects4.length;i<l;++i) {
    if ( gdjs.maingameCode.GDACardObjects4[i].getVariableBoolean(gdjs.maingameCode.GDACardObjects4[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDACardObjects4[k] = gdjs.maingameCode.GDACardObjects4[i];
        ++k;
    }
}
gdjs.maingameCode.GDACardObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.maingameCode.eventsList43(runtimeScene, asyncObjectsList);} //Subevents end.
}
}

}


};gdjs.maingameCode.asyncCallback10245796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "F_off_manvoice.mp3", false, 100, 1);
}

{ //Subevents
gdjs.maingameCode.eventsList44(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(10245796, gdjs.maingameCode.asyncCallback10245796);
gdjs.maingameCode.eventsList45 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
for (const obj of gdjs.maingameCode.GDACardObjects2) asyncObjectsList.addObject("ACard", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.maingameCode.asyncCallback10245796(runtimeScene, asyncObjectsList)), 10245796, asyncObjectsList);
}
}

}


};gdjs.maingameCode.asyncCallback10215772 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "maingame", false);
}
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(10215772, gdjs.maingameCode.asyncCallback10215772);
gdjs.maingameCode.eventsList46 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.maingameCode.asyncCallback10215772(runtimeScene, asyncObjectsList)), 10215772, asyncObjectsList);
}
}

}


};gdjs.maingameCode.eventsList47 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDPlayerHandObjects2.length;i<l;++i) {
    if ( gdjs.maingameCode.GDPlayerHandObjects2[i].getVariableBoolean(gdjs.maingameCode.GDPlayerHandObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDPlayerHandObjects2[k] = gdjs.maingameCode.GDPlayerHandObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDPlayerHandObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13804796);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.maingameCode.eventsList37(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Plr_NetCash"), gdjs.maingameCode.GDPlr_9595NetCashObjects2);
{for(var i = 0, len = gdjs.maingameCode.GDPlr_9595NetCashObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDPlr_9595NetCashObjects2[i].getBehavior("Text").setText("$" + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14534692);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(false);
}

{ //Subevents
gdjs.maingameCode.eventsList42(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Plr_NetCash"), gdjs.maingameCode.GDPlr_9595NetCashObjects2);
gdjs.copyArray(runtimeScene.getObjects("dollar_bill_uisprite"), gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDdollar_95959595bill_95959595uispriteObjects2Objects, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDPlr_95959595NetCashObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2 */
{for(var i = 0, len = gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("dollar_bill_uisprite"), gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2.length;i<l;++i) {
    if ( !(gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2[i].getBehavior("InOnScreen").IsOnScreen(0, null)) ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2[k] = gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2[i];
        ++k;
    }
}
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2 */
{for(var i = 0, len = gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.maingameCode.mapOfEmptyGDdollar_9595bill_9595uispriteObjects) < 2);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() == -1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9903220);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ACard"), gdjs.maingameCode.GDACardObjects2);
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.maingameCode.GDBGObjects2);
gdjs.copyArray(runtimeScene.getObjects("DeckCard"), gdjs.maingameCode.GDDeckCardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Drop_cards_prompt"), gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects2);
gdjs.copyArray(runtimeScene.getObjects("reference"), gdjs.maingameCode.GDreferenceObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(13).getChild("Team").setString("");
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(13).getChild("Actions"));
}
{runtimeScene.getScene().getVariables().getFromIndex(13).getChild("Time(m)").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(13).getChild("Outcome").setString("NoResultYet");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "lost_bet.mp3", false, 100, 1);
}
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects2[i].getBehavior("FlashColor").Flash(1.5, "184;184;184", null);
}
for(var i = 0, len = gdjs.maingameCode.GDreferenceObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDreferenceObjects2[i].getBehavior("FlashColor").Flash(1.5, "184;184;184", null);
}
for(var i = 0, len = gdjs.maingameCode.GDACardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects2[i].getBehavior("FlashColor").Flash(1.5, "184;184;184", null);
}
for(var i = 0, len = gdjs.maingameCode.GDDeckCardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDDeckCardObjects2[i].getBehavior("FlashColor").Flash(1.5, "184;184;184", null);
}
for(var i = 0, len = gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2[i].getBehavior("FlashColor").Flash(1.5, "184;184;184", null);
}
for(var i = 0, len = gdjs.maingameCode.GDBGObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDBGObjects2[i].getBehavior("FlashColor").Flash(1.5, "184;184;184", null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(8).sub(5);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0);
}

{ //Subevents
gdjs.maingameCode.eventsList45(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14227524);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "game_over.mp3", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.1);
}

{ //Subevents
gdjs.maingameCode.eventsList46(runtimeScene);} //End of subevents
}

}


};gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtraceObjects2Objects = Hashtable.newFrom({"trace": gdjs.maingameCode.GDtraceObjects2});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtprompt_95959595leftselectionObjects2Objects = Hashtable.newFrom({"tprompt_leftselection": gdjs.maingameCode.GDtprompt_9595leftselectionObjects2});
gdjs.maingameCode.asyncCallback10961964 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(false);
}
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(10961964, gdjs.maingameCode.asyncCallback10961964);
gdjs.maingameCode.eventsList48 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber()), (runtimeScene) => (gdjs.maingameCode.asyncCallback10961964(runtimeScene, asyncObjectsList)), 10961964, asyncObjectsList);
}
}

}


};gdjs.maingameCode.eventsList49 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.maingameCode.GDtimeprompt_9595bgObjects1, gdjs.maingameCode.GDtimeprompt_9595bgObjects3);

gdjs.copyArray(gdjs.maingameCode.GDtprompt_9595leftselectionObjects2, gdjs.maingameCode.GDtprompt_9595leftselectionObjects3);

gdjs.copyArray(gdjs.maingameCode.GDtprompt_9595rightselectionObjects1, gdjs.maingameCode.GDtprompt_9595rightselectionObjects3);

{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}
{for(var i = 0, len = gdjs.maingameCode.GDtimeprompt_9595bgObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDtimeprompt_9595bgObjects3[i].hide();
}
for(var i = 0, len = gdjs.maingameCode.GDtprompt_9595leftselectionObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDtprompt_9595leftselectionObjects3[i].hide();
}
for(var i = 0, len = gdjs.maingameCode.GDtprompt_9595rightselectionObjects3.length ;i < len;++i) {
    gdjs.maingameCode.GDtprompt_9595rightselectionObjects3[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(300);
}

{ //Subevents
gdjs.maingameCode.eventsList48(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12522572);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(13).getChild("Time(m)").setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}
}

}


};gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtraceObjects1Objects = Hashtable.newFrom({"trace": gdjs.maingameCode.GDtraceObjects1});
gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtprompt_95959595rightselectionObjects1Objects = Hashtable.newFrom({"tprompt_rightselection": gdjs.maingameCode.GDtprompt_9595rightselectionObjects1});
gdjs.maingameCode.asyncCallback13799596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.maingameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(false);
}
gdjs.maingameCode.localVariables.length = 0;
}
gdjs.maingameCode.idToCallbackMap.set(13799596, gdjs.maingameCode.asyncCallback13799596);
gdjs.maingameCode.eventsList50 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.maingameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber()), (runtimeScene) => (gdjs.maingameCode.asyncCallback13799596(runtimeScene, asyncObjectsList)), 13799596, asyncObjectsList);
}
}

}


};gdjs.maingameCode.eventsList51 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.maingameCode.GDtimeprompt_9595bgObjects1, gdjs.maingameCode.GDtimeprompt_9595bgObjects2);

gdjs.copyArray(gdjs.maingameCode.GDtprompt_9595leftselectionObjects1, gdjs.maingameCode.GDtprompt_9595leftselectionObjects2);

gdjs.copyArray(gdjs.maingameCode.GDtprompt_9595rightselectionObjects1, gdjs.maingameCode.GDtprompt_9595rightselectionObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}
{for(var i = 0, len = gdjs.maingameCode.GDtimeprompt_9595bgObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDtimeprompt_9595bgObjects2[i].hide();
}
for(var i = 0, len = gdjs.maingameCode.GDtprompt_9595leftselectionObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDtprompt_9595leftselectionObjects2[i].hide();
}
for(var i = 0, len = gdjs.maingameCode.GDtprompt_9595rightselectionObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDtprompt_9595rightselectionObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(600);
}

{ //Subevents
gdjs.maingameCode.eventsList50(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9470540);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(13).getChild("Time(m)").setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}
}

}


};gdjs.maingameCode.eventsList52 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.maingameCode.GDtprompt_9595leftselectionObjects1, gdjs.maingameCode.GDtprompt_9595leftselectionObjects2);

gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.maingameCode.GDtraceObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtraceObjects2Objects, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtprompt_95959595leftselectionObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14842892);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.maingameCode.eventsList49(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.maingameCode.GDtprompt_9595rightselectionObjects1 */
gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.maingameCode.GDtraceObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtraceObjects1Objects, gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDtprompt_95959595rightselectionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14747764);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.maingameCode.eventsList51(runtimeScene);} //End of subevents
}

}


};gdjs.maingameCode.eventsList53 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DeckCard"), gdjs.maingameCode.GDDeckCardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Drop_cards_prompt"), gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2);
gdjs.copyArray(runtimeScene.getObjects("deck_bg"), gdjs.maingameCode.GDdeck_9595bgObjects2);
gdjs.copyArray(runtimeScene.getObjects("deck_scroll_left"), gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects2);
gdjs.copyArray(runtimeScene.getObjects("deck_scroll_right"), gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects2);
gdjs.copyArray(runtimeScene.getObjects("hand_hold"), gdjs.maingameCode.GDhand_9595holdObjects2);
{for(var i = 0, len = gdjs.maingameCode.GDDeckCardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDDeckCardObjects2[i].hide();
}
for(var i = 0, len = gdjs.maingameCode.GDhand_9595holdObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDhand_9595holdObjects2[i].hide();
}
for(var i = 0, len = gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects2[i].hide();
}
for(var i = 0, len = gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects2[i].hide();
}
for(var i = 0, len = gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2[i].hide();
}
for(var i = 0, len = gdjs.maingameCode.GDdeck_9595bgObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDdeck_9595bgObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DeckCard"), gdjs.maingameCode.GDDeckCardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Drop_cards_prompt"), gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2);
gdjs.copyArray(runtimeScene.getObjects("deck_bg"), gdjs.maingameCode.GDdeck_9595bgObjects2);
gdjs.copyArray(runtimeScene.getObjects("deck_scroll_left"), gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects2);
gdjs.copyArray(runtimeScene.getObjects("deck_scroll_right"), gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects2);
gdjs.copyArray(runtimeScene.getObjects("hand_hold"), gdjs.maingameCode.GDhand_9595holdObjects2);
{for(var i = 0, len = gdjs.maingameCode.GDDeckCardObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDDeckCardObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.maingameCode.GDhand_9595holdObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDhand_9595holdObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.maingameCode.GDdeck_9595bgObjects2.length ;i < len;++i) {
    gdjs.maingameCode.GDdeck_9595bgObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("timeprompt_bg"), gdjs.maingameCode.GDtimeprompt_9595bgObjects1);
gdjs.copyArray(runtimeScene.getObjects("tprompt_leftselection"), gdjs.maingameCode.GDtprompt_9595leftselectionObjects1);
gdjs.copyArray(runtimeScene.getObjects("tprompt_rightselection"), gdjs.maingameCode.GDtprompt_9595rightselectionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDtimeprompt_9595bgObjects1.length;i<l;++i) {
    if ( gdjs.maingameCode.GDtimeprompt_9595bgObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDtimeprompt_9595bgObjects1[k] = gdjs.maingameCode.GDtimeprompt_9595bgObjects1[i];
        ++k;
    }
}
gdjs.maingameCode.GDtimeprompt_9595bgObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDtprompt_9595leftselectionObjects1.length;i<l;++i) {
    if ( gdjs.maingameCode.GDtprompt_9595leftselectionObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDtprompt_9595leftselectionObjects1[k] = gdjs.maingameCode.GDtprompt_9595leftselectionObjects1[i];
        ++k;
    }
}
gdjs.maingameCode.GDtprompt_9595leftselectionObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.maingameCode.GDtprompt_9595rightselectionObjects1.length;i<l;++i) {
    if ( gdjs.maingameCode.GDtprompt_9595rightselectionObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.maingameCode.GDtprompt_9595rightselectionObjects1[k] = gdjs.maingameCode.GDtprompt_9595rightselectionObjects1[i];
        ++k;
    }
}
gdjs.maingameCode.GDtprompt_9595rightselectionObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) == 0;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.maingameCode.eventsList52(runtimeScene);} //End of subevents
}

}


};gdjs.maingameCode.eventsList54 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects1);
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects1[i].getBehavior("Animation").setAnimationName("HandOpen_1");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects1);
{for(var i = 0, len = gdjs.maingameCode.GDPlayerHandObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDPlayerHandObjects1[i].getBehavior("Animation").setAnimationName("HandOpen_2");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ACard"), gdjs.maingameCode.GDACardObjects1);
gdjs.copyArray(runtimeScene.getObjects("Drop_cards_prompt"), gdjs.maingameCode.GDDrop_9595cards_9595promptObjects1);
gdjs.copyArray(runtimeScene.getObjects("Goal_Celebration_Text"), gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHand"), gdjs.maingameCode.GDPlayerHandObjects1);
gdjs.copyArray(runtimeScene.getObjects("reference"), gdjs.maingameCode.GDreferenceObjects1);
gdjs.copyArray(runtimeScene.getObjects("timeprompt_bg"), gdjs.maingameCode.GDtimeprompt_9595bgObjects1);
gdjs.copyArray(runtimeScene.getObjects("tprompt_leftselection"), gdjs.maingameCode.GDtprompt_9595leftselectionObjects1);
gdjs.copyArray(runtimeScene.getObjects("tprompt_rightselection"), gdjs.maingameCode.GDtprompt_9595rightselectionObjects1);
gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.maingameCode.GDtraceObjects1);
{for(var i = 0, len = gdjs.maingameCode.GDtraceObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDtraceObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.maingameCode.GDDrop_9595cards_9595promptObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDDrop_9595cards_9595promptObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.maingameCode.GDtimeprompt_9595bgObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDtimeprompt_9595bgObjects1[i].hide();
}
for(var i = 0, len = gdjs.maingameCode.GDtprompt_9595leftselectionObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDtprompt_9595leftselectionObjects1[i].hide();
}
for(var i = 0, len = gdjs.maingameCode.GDtprompt_9595rightselectionObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDtprompt_9595rightselectionObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.maingameCode.GDreferenceObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDreferenceObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects1[i].hide();
}
}
{gdjs.evtTools.input.showCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects1[i].setCenterPositionInScene((( gdjs.maingameCode.GDPlayerHandObjects1.length === 0 ) ? 0 :gdjs.maingameCode.GDPlayerHandObjects1[0].getCenterXInScene()),(( gdjs.maingameCode.GDPlayerHandObjects1.length === 0 ) ? 0 :gdjs.maingameCode.GDPlayerHandObjects1[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.maingameCode.GDACardObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDACardObjects1[i].getBehavior("Sticker").Stick(gdjs.maingameCode.mapOfGDgdjs_9546maingameCode_9546GDPlayerHandObjects1Objects, null);
}
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.1, "", 0);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "game_start.mp3", false, 100, 1);
}

{ //Subevents
gdjs.maingameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MatchLiveStatus_Text"), gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1280, 720, "", 0);
}
{for(var i = 0, len = gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(11).getChild("Name").getAsString() + " " + runtimeScene.getScene().getVariables().getFromIndex(11).getChild("Goals").getAsString() + " - " + runtimeScene.getScene().getVariables().getFromIndex(12).getChild("Goals").getAsString() + " " + runtimeScene.getScene().getVariables().getFromIndex(12).getChild("Name").getAsString() + " " + "・" + runtimeScene.getScene().getVariables().getFromIndex(10).getAsString() + "'" + "・LIVE🔴");
}
}

{ //Subevents
gdjs.maingameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.maingameCode.GDtraceObjects1);
{for(var i = 0, len = gdjs.maingameCode.GDtraceObjects1.length ;i < len;++i) {
    gdjs.maingameCode.GDtraceObjects1[i].setCenterPositionInScene(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "GetFixtureID", "https://txline.txodds.com/api/fixtures/snapshot", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "GetFixtureID", "GET", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODU2MzkwNTEsInNlc3Npb25JZCI6IjI4YmFlYmNmLWM1NWQtNDZmMS1hZGVkLTE1ZjhkYzdkOTQxOSIsInJvbGUiOiJndWVzdCIsIm1heWJlQ2xpZW50SXAiOiIxOC42OC40MC41MCJ9.7L1KlCxNEIbwKjKrJ6guB88HmuXfMiDR8ISWjvQXG_DrIKLKrHOTuzSq7NoSdqaBDZFaqj3YVhQdoHIYfFyDxw", "GetFixtureID", "Authorization", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "txoracle_api_7f2b43d845354a3db2753d9a08f83ef6", "GetFixtureID", "X-Api-Token", null);
}

{ //Subevents
gdjs.maingameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "call_match_data", 5, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13035804);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "GetMatchData", "https://txline.txodds.com/api/scores/snapshot/" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(22).getAsNumber()), null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "GetMatchData", "GET", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODU2MzkwNTEsInNlc3Npb25JZCI6IjI4YmFlYmNmLWM1NWQtNDZmMS1hZGVkLTE1ZjhkYzdkOTQxOSIsInJvbGUiOiJndWVzdCIsIm1heWJlQ2xpZW50SXAiOiIxOC42OC40MC41MCJ9.7L1KlCxNEIbwKjKrJ6guB88HmuXfMiDR8ISWjvQXG_DrIKLKrHOTuzSq7NoSdqaBDZFaqj3YVhQdoHIYfFyDxw", "GetMatchData", "Authorization", null);
}
{gdjs.evtsExt__AdvancedHTTP__SetRequestHeader.func(runtimeScene, "txoracle_api_7f2b43d845354a3db2753d9a08f83ef6", "GetMatchData", "X-Api-Token", null);
}
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(23));
}

{ //Subevents
gdjs.maingameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 8));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10895708);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.maingameCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


gdjs.maingameCode.userFunc0xad0300(runtimeScene);

}


{


gdjs.maingameCode.eventsList23(runtimeScene);
}


{


gdjs.maingameCode.eventsList25(runtimeScene);
}


{


gdjs.maingameCode.eventsList36(runtimeScene);
}


{


gdjs.maingameCode.eventsList47(runtimeScene);
}


{


gdjs.maingameCode.eventsList53(runtimeScene);
}


};

gdjs.maingameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.maingameCode.GDACardObjects1.length = 0;
gdjs.maingameCode.GDACardObjects2.length = 0;
gdjs.maingameCode.GDACardObjects3.length = 0;
gdjs.maingameCode.GDACardObjects4.length = 0;
gdjs.maingameCode.GDACardObjects5.length = 0;
gdjs.maingameCode.GDACardObjects6.length = 0;
gdjs.maingameCode.GDACardObjects7.length = 0;
gdjs.maingameCode.GDACardObjects8.length = 0;
gdjs.maingameCode.GDreferenceObjects1.length = 0;
gdjs.maingameCode.GDreferenceObjects2.length = 0;
gdjs.maingameCode.GDreferenceObjects3.length = 0;
gdjs.maingameCode.GDreferenceObjects4.length = 0;
gdjs.maingameCode.GDreferenceObjects5.length = 0;
gdjs.maingameCode.GDreferenceObjects6.length = 0;
gdjs.maingameCode.GDreferenceObjects7.length = 0;
gdjs.maingameCode.GDreferenceObjects8.length = 0;
gdjs.maingameCode.GDBGObjects1.length = 0;
gdjs.maingameCode.GDBGObjects2.length = 0;
gdjs.maingameCode.GDBGObjects3.length = 0;
gdjs.maingameCode.GDBGObjects4.length = 0;
gdjs.maingameCode.GDBGObjects5.length = 0;
gdjs.maingameCode.GDBGObjects6.length = 0;
gdjs.maingameCode.GDBGObjects7.length = 0;
gdjs.maingameCode.GDBGObjects8.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects1.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects2.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects3.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects4.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects5.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects6.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects7.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects8.length = 0;
gdjs.maingameCode.GDDeckCardObjects1.length = 0;
gdjs.maingameCode.GDDeckCardObjects2.length = 0;
gdjs.maingameCode.GDDeckCardObjects3.length = 0;
gdjs.maingameCode.GDDeckCardObjects4.length = 0;
gdjs.maingameCode.GDDeckCardObjects5.length = 0;
gdjs.maingameCode.GDDeckCardObjects6.length = 0;
gdjs.maingameCode.GDDeckCardObjects7.length = 0;
gdjs.maingameCode.GDDeckCardObjects8.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects1.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects3.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects4.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects5.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects6.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects7.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects8.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects1.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects2.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects3.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects4.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects5.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects6.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects7.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects8.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects1.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects2.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects3.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects4.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects5.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects6.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects7.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects8.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects1.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects2.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects3.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects4.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects5.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects6.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects7.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects8.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects1.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects2.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects3.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects4.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects5.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects6.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects7.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects8.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects1.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects2.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects3.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects4.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects5.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects6.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects7.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects8.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects1.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects2.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects3.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects4.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects5.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects6.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects7.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects8.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects1.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects2.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects3.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects4.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects5.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects6.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects7.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects8.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects1.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects2.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects3.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects4.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects5.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects6.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects7.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects8.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects1.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects2.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects3.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects4.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects5.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects6.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects7.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects8.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects1.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects2.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects3.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects4.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects5.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects6.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects7.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects8.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects1.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects3.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects4.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects5.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects6.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects7.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects8.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects1.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects2.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects3.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects4.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects5.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects6.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects7.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects8.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects1.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects2.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects3.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects4.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects5.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects6.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects7.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects8.length = 0;
gdjs.maingameCode.GDtraceObjects1.length = 0;
gdjs.maingameCode.GDtraceObjects2.length = 0;
gdjs.maingameCode.GDtraceObjects3.length = 0;
gdjs.maingameCode.GDtraceObjects4.length = 0;
gdjs.maingameCode.GDtraceObjects5.length = 0;
gdjs.maingameCode.GDtraceObjects6.length = 0;
gdjs.maingameCode.GDtraceObjects7.length = 0;
gdjs.maingameCode.GDtraceObjects8.length = 0;
gdjs.maingameCode.GDPlayerHandObjects1.length = 0;
gdjs.maingameCode.GDPlayerHandObjects2.length = 0;
gdjs.maingameCode.GDPlayerHandObjects3.length = 0;
gdjs.maingameCode.GDPlayerHandObjects4.length = 0;
gdjs.maingameCode.GDPlayerHandObjects5.length = 0;
gdjs.maingameCode.GDPlayerHandObjects6.length = 0;
gdjs.maingameCode.GDPlayerHandObjects7.length = 0;
gdjs.maingameCode.GDPlayerHandObjects8.length = 0;

gdjs.maingameCode.eventsList54(runtimeScene);
gdjs.maingameCode.GDACardObjects1.length = 0;
gdjs.maingameCode.GDACardObjects2.length = 0;
gdjs.maingameCode.GDACardObjects3.length = 0;
gdjs.maingameCode.GDACardObjects4.length = 0;
gdjs.maingameCode.GDACardObjects5.length = 0;
gdjs.maingameCode.GDACardObjects6.length = 0;
gdjs.maingameCode.GDACardObjects7.length = 0;
gdjs.maingameCode.GDACardObjects8.length = 0;
gdjs.maingameCode.GDreferenceObjects1.length = 0;
gdjs.maingameCode.GDreferenceObjects2.length = 0;
gdjs.maingameCode.GDreferenceObjects3.length = 0;
gdjs.maingameCode.GDreferenceObjects4.length = 0;
gdjs.maingameCode.GDreferenceObjects5.length = 0;
gdjs.maingameCode.GDreferenceObjects6.length = 0;
gdjs.maingameCode.GDreferenceObjects7.length = 0;
gdjs.maingameCode.GDreferenceObjects8.length = 0;
gdjs.maingameCode.GDBGObjects1.length = 0;
gdjs.maingameCode.GDBGObjects2.length = 0;
gdjs.maingameCode.GDBGObjects3.length = 0;
gdjs.maingameCode.GDBGObjects4.length = 0;
gdjs.maingameCode.GDBGObjects5.length = 0;
gdjs.maingameCode.GDBGObjects6.length = 0;
gdjs.maingameCode.GDBGObjects7.length = 0;
gdjs.maingameCode.GDBGObjects8.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects1.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects2.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects3.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects4.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects5.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects6.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects7.length = 0;
gdjs.maingameCode.GDhand_9595holdObjects8.length = 0;
gdjs.maingameCode.GDDeckCardObjects1.length = 0;
gdjs.maingameCode.GDDeckCardObjects2.length = 0;
gdjs.maingameCode.GDDeckCardObjects3.length = 0;
gdjs.maingameCode.GDDeckCardObjects4.length = 0;
gdjs.maingameCode.GDDeckCardObjects5.length = 0;
gdjs.maingameCode.GDDeckCardObjects6.length = 0;
gdjs.maingameCode.GDDeckCardObjects7.length = 0;
gdjs.maingameCode.GDDeckCardObjects8.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects1.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects2.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects3.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects4.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects5.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects6.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects7.length = 0;
gdjs.maingameCode.GDDrop_9595cards_9595promptObjects8.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects1.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects2.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects3.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects4.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects5.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects6.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects7.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595leftObjects8.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects1.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects2.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects3.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects4.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects5.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects6.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects7.length = 0;
gdjs.maingameCode.GDdeck_9595scroll_9595rightObjects8.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects1.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects2.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects3.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects4.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects5.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects6.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects7.length = 0;
gdjs.maingameCode.GDdeck_9595bgObjects8.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects1.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects2.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects3.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects4.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects5.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects6.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects7.length = 0;
gdjs.maingameCode.GDtimeprompt_9595bgObjects8.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects1.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects2.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects3.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects4.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects5.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects6.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects7.length = 0;
gdjs.maingameCode.GDtprompt_9595rightselectionObjects8.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects1.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects2.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects3.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects4.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects5.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects6.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects7.length = 0;
gdjs.maingameCode.GDtprompt_9595leftselectionObjects8.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects1.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects2.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects3.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects4.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects5.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects6.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects7.length = 0;
gdjs.maingameCode.GDred_9595confettiObjects8.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects1.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects2.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects3.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects4.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects5.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects6.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects7.length = 0;
gdjs.maingameCode.GDwhite_9595confettiObjects8.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects1.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects2.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects3.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects4.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects5.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects6.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects7.length = 0;
gdjs.maingameCode.GDgreen_9595confettiObjects8.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects1.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects2.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects3.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects4.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects5.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects6.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects7.length = 0;
gdjs.maingameCode.GDMatchLiveStatus_9595TextObjects8.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects1.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects2.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects3.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects4.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects5.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects6.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects7.length = 0;
gdjs.maingameCode.GDdollar_9595bill_9595uispriteObjects8.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects1.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects2.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects3.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects4.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects5.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects6.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects7.length = 0;
gdjs.maingameCode.GDPlr_9595NetCashObjects8.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects1.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects2.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects3.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects4.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects5.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects6.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects7.length = 0;
gdjs.maingameCode.GDGoal_9595Celebration_9595TextObjects8.length = 0;
gdjs.maingameCode.GDtraceObjects1.length = 0;
gdjs.maingameCode.GDtraceObjects2.length = 0;
gdjs.maingameCode.GDtraceObjects3.length = 0;
gdjs.maingameCode.GDtraceObjects4.length = 0;
gdjs.maingameCode.GDtraceObjects5.length = 0;
gdjs.maingameCode.GDtraceObjects6.length = 0;
gdjs.maingameCode.GDtraceObjects7.length = 0;
gdjs.maingameCode.GDtraceObjects8.length = 0;
gdjs.maingameCode.GDPlayerHandObjects1.length = 0;
gdjs.maingameCode.GDPlayerHandObjects2.length = 0;
gdjs.maingameCode.GDPlayerHandObjects3.length = 0;
gdjs.maingameCode.GDPlayerHandObjects4.length = 0;
gdjs.maingameCode.GDPlayerHandObjects5.length = 0;
gdjs.maingameCode.GDPlayerHandObjects6.length = 0;
gdjs.maingameCode.GDPlayerHandObjects7.length = 0;
gdjs.maingameCode.GDPlayerHandObjects8.length = 0;


return;

}

gdjs['maingameCode'] = gdjs.maingameCode;
