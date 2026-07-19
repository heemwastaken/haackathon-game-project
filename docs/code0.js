gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.idToCallbackMap = new Map();
gdjs.MainMenuCode.GDBackgroundObjects1= [];
gdjs.MainMenuCode.GDBackgroundObjects2= [];
gdjs.MainMenuCode.GDBackgroundObjects3= [];
gdjs.MainMenuCode.GDVignetteObjects1= [];
gdjs.MainMenuCode.GDVignetteObjects2= [];
gdjs.MainMenuCode.GDVignetteObjects3= [];
gdjs.MainMenuCode.GDdotObjects1= [];
gdjs.MainMenuCode.GDdotObjects2= [];
gdjs.MainMenuCode.GDdotObjects3= [];
gdjs.MainMenuCode.GDQuit_9595ButtonObjects1= [];
gdjs.MainMenuCode.GDQuit_9595ButtonObjects2= [];
gdjs.MainMenuCode.GDQuit_9595ButtonObjects3= [];
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1= [];
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects2= [];
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects3= [];
gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects1= [];
gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects2= [];
gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects3= [];
gdjs.MainMenuCode.GDSplashLogoTextObjects1= [];
gdjs.MainMenuCode.GDSplashLogoTextObjects2= [];
gdjs.MainMenuCode.GDSplashLogoTextObjects3= [];
gdjs.MainMenuCode.GDPlayButtonObjects1= [];
gdjs.MainMenuCode.GDPlayButtonObjects2= [];
gdjs.MainMenuCode.GDPlayButtonObjects3= [];
gdjs.MainMenuCode.GDQuit_9595text_9595descObjects1= [];
gdjs.MainMenuCode.GDQuit_9595text_9595descObjects2= [];
gdjs.MainMenuCode.GDQuit_9595text_9595descObjects3= [];
gdjs.MainMenuCode.GDtraceObjects1= [];
gdjs.MainMenuCode.GDtraceObjects2= [];
gdjs.MainMenuCode.GDtraceObjects3= [];
gdjs.MainMenuCode.GDPlayerHandObjects1= [];
gdjs.MainMenuCode.GDPlayerHandObjects2= [];
gdjs.MainMenuCode.GDPlayerHandObjects3= [];


gdjs.MainMenuCode.mapOfEmptyGDVignetteObjects = Hashtable.newFrom({"Vignette": []});
gdjs.MainMenuCode.mapOfEmptyGDSplashLogoTextObjects = Hashtable.newFrom({"SplashLogoText": []});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuit_95959595ButtonObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDRace_95959595Select_95959595IconObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDdotObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"Quit_Button": gdjs.MainMenuCode.GDQuit_9595ButtonObjects1, "Race_Select_Icon": gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1, "dot": gdjs.MainMenuCode.GDdotObjects1, "PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDdotObjects1Objects = Hashtable.newFrom({"dot": gdjs.MainMenuCode.GDdotObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuit_95959595ButtonObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDRace_95959595Select_95959595IconObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDdotObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"Quit_Button": gdjs.MainMenuCode.GDQuit_9595ButtonObjects1, "Race_Select_Icon": gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1, "dot": gdjs.MainMenuCode.GDdotObjects1, "PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuit_95959595ButtonObjects1Objects = Hashtable.newFrom({"Quit_Button": gdjs.MainMenuCode.GDQuit_9595ButtonObjects1});
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuit_95959595ButtonObjects1Objects = Hashtable.newFrom({"Quit_Button": gdjs.MainMenuCode.GDQuit_9595ButtonObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRace_95959595Select_95959595IconObjects1Objects = Hashtable.newFrom({"Race_Select_Icon": gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1});
gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11181428);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16337964);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1, gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects2);

{for(var i = 0, len = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects2[i].getBehavior("Animation").setAnimationName("skincolor1");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14679444);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i].getBehavior("Animation").setAnimationName("skincolor2");
}
}
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRace_95959595Select_95959595IconObjects1Objects = Hashtable.newFrom({"Race_Select_Icon": gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1});
gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit_Button"), gdjs.MainMenuCode.GDQuit_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit_text_desc"), gdjs.MainMenuCode.GDQuit_9595text_9595descObjects1);
gdjs.copyArray(runtimeScene.getObjects("Race_Select_Icon"), gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skin_Color_DisplayText"), gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.MainMenuCode.GDdotObjects1);
gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.MainMenuCode.GDtraceObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDtraceObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDtraceObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.MainMenuCode.GDdotObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDdotObjects1[i].getBehavior("Opacity").setOpacity(0);
}
for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDQuit_9595text_9595descObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuit_9595text_9595descObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.input.showCursor(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("trace"), gdjs.MainMenuCode.GDtraceObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDtraceObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDtraceObjects1[i].setCenterPositionInScene(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11374596);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "main_menu_music.mp3", 8, true, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.MainMenuCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackgroundObjects1[i].play();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDVignetteObjects) > 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Vignette"), gdjs.MainMenuCode.GDVignetteObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDVignetteObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDVignetteObjects1[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 0, "easeOutQuart", 1, true);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDVignetteObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDVignetteObjects1[i].getBehavior("Tween").addObjectScaleTween3("scale", 1.5, "easeInOutQuad", 1, false, true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.MainMenuCode.mapOfEmptyGDSplashLogoTextObjects) > 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SplashLogoText"), gdjs.MainMenuCode.GDSplashLogoTextObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDSplashLogoTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSplashLogoTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 0, "easeOutQuart", 1, true);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDSplashLogoTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSplashLogoTextObjects1[i].getBehavior("Tween").addObjectScaleTween3("scale", 5, "easeInOutQuad", 1, false, true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit_Button"), gdjs.MainMenuCode.GDQuit_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Race_Select_Icon"), gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1);
gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.MainMenuCode.GDdotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[k] = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[k] = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDdotObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDdotObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDdotObjects1[k] = gdjs.MainMenuCode.GDdotObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDdotObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("Opacity").getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects1[k] = gdjs.MainMenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDQuit_9595ButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1 */
/* Reuse gdjs.MainMenuCode.GDdotObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 255, "easeOutExpo", 3, false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 255, "easeOutExpo", 3, false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDdotObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDdotObjects1[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 255, "easeOutExpo", 3, false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("Tween").addObjectOpacityTween2("opacity", 255, "easeOutExpo", 3, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit_Button"), gdjs.MainMenuCode.GDQuit_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Race_Select_Icon"), gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1);
gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.MainMenuCode.GDdotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuit_95959595ButtonObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDRace_95959595Select_95959595IconObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDdotObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDdotObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[k] = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[k] = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDdotObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDdotObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDdotObjects1[k] = gdjs.MainMenuCode.GDdotObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDdotObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects1[k] = gdjs.MainMenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11377924);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDQuit_9595ButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1 */
/* Reuse gdjs.MainMenuCode.GDdotObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i].getBehavior("Opacity").setOpacity(150);
}
for(var i = 0, len = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i].getBehavior("Opacity").setOpacity(150);
}
for(var i = 0, len = gdjs.MainMenuCode.GDdotObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDdotObjects1[i].getBehavior("Opacity").setOpacity(150);
}
for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit_Button"), gdjs.MainMenuCode.GDQuit_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Race_Select_Icon"), gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1);
gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.MainMenuCode.GDdotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuit_95959595ButtonObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDRace_95959595Select_95959595IconObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDdotObjects1ObjectsGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i].getBehavior("Opacity").getOpacity() == 150 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[k] = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i].getBehavior("Opacity").getOpacity() == 150 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[k] = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDdotObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDdotObjects1[i].getBehavior("Opacity").getOpacity() == 150 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDdotObjects1[k] = gdjs.MainMenuCode.GDdotObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDdotObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("Opacity").getOpacity() == 150 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects1[k] = gdjs.MainMenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[k] = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[k] = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDdotObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDdotObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDdotObjects1[k] = gdjs.MainMenuCode.GDdotObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDdotObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects1[k] = gdjs.MainMenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11374948);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDQuit_9595ButtonObjects1 */
/* Reuse gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1 */
/* Reuse gdjs.MainMenuCode.GDdotObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i].getBehavior("Opacity").setOpacity(255);
}
for(var i = 0, len = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i].getBehavior("Opacity").setOpacity(255);
}
for(var i = 0, len = gdjs.MainMenuCode.GDdotObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDdotObjects1[i].getBehavior("Opacity").setOpacity(255);
}
for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "maingame", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit_Button"), gdjs.MainMenuCode.GDQuit_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuit_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quit_text_desc"), gdjs.MainMenuCode.GDQuit_9595text_9595descObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDQuit_9595text_9595descObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuit_9595text_9595descObjects1[i].getBehavior("Tween").addObjectOpacityTween2("titlopacity", 255, "linear", 0.5, false);
}
}

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit_Button"), gdjs.MainMenuCode.GDQuit_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Race_Select_Icon"), gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1);
gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.MainMenuCode.GDdotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuit_95959595ButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[k] = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[k] = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDdotObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDdotObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDdotObjects1[k] = gdjs.MainMenuCode.GDdotObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDdotObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects1[k] = gdjs.MainMenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quit_text_desc"), gdjs.MainMenuCode.GDQuit_9595text_9595descObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDQuit_9595text_9595descObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuit_9595text_9595descObjects1[i].getBehavior("Tween").addObjectOpacityTween2("titlopacity", 0, "linear", 0.5, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Race_Select_Icon"), gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRace_95959595Select_95959595IconObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Skin_Color_DisplayText"), gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("skintitlopacity", 255, "linear", 0.5, false);
}
}

{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit_Button"), gdjs.MainMenuCode.GDQuit_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Race_Select_Icon"), gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1);
gdjs.copyArray(runtimeScene.getObjects("dot"), gdjs.MainMenuCode.GDdotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRace_95959595Select_95959595IconObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[k] = gdjs.MainMenuCode.GDQuit_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[k] = gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDdotObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDdotObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDdotObjects1[k] = gdjs.MainMenuCode.GDdotObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDdotObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDPlayButtonObjects1[i].getBehavior("Tween").isPlaying("opacity")) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects1[k] = gdjs.MainMenuCode.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Skin_Color_DisplayText"), gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("skintitlopacity", 0, "linear", 0.5, false);
}
}
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDVignetteObjects1.length = 0;
gdjs.MainMenuCode.GDVignetteObjects2.length = 0;
gdjs.MainMenuCode.GDVignetteObjects3.length = 0;
gdjs.MainMenuCode.GDdotObjects1.length = 0;
gdjs.MainMenuCode.GDdotObjects2.length = 0;
gdjs.MainMenuCode.GDdotObjects3.length = 0;
gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length = 0;
gdjs.MainMenuCode.GDQuit_9595ButtonObjects2.length = 0;
gdjs.MainMenuCode.GDQuit_9595ButtonObjects3.length = 0;
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length = 0;
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects2.length = 0;
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects3.length = 0;
gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects1.length = 0;
gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects2.length = 0;
gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects3.length = 0;
gdjs.MainMenuCode.GDSplashLogoTextObjects1.length = 0;
gdjs.MainMenuCode.GDSplashLogoTextObjects2.length = 0;
gdjs.MainMenuCode.GDSplashLogoTextObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MainMenuCode.GDQuit_9595text_9595descObjects1.length = 0;
gdjs.MainMenuCode.GDQuit_9595text_9595descObjects2.length = 0;
gdjs.MainMenuCode.GDQuit_9595text_9595descObjects3.length = 0;
gdjs.MainMenuCode.GDtraceObjects1.length = 0;
gdjs.MainMenuCode.GDtraceObjects2.length = 0;
gdjs.MainMenuCode.GDtraceObjects3.length = 0;
gdjs.MainMenuCode.GDPlayerHandObjects1.length = 0;
gdjs.MainMenuCode.GDPlayerHandObjects2.length = 0;
gdjs.MainMenuCode.GDPlayerHandObjects3.length = 0;

gdjs.MainMenuCode.eventsList2(runtimeScene);
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDVignetteObjects1.length = 0;
gdjs.MainMenuCode.GDVignetteObjects2.length = 0;
gdjs.MainMenuCode.GDVignetteObjects3.length = 0;
gdjs.MainMenuCode.GDdotObjects1.length = 0;
gdjs.MainMenuCode.GDdotObjects2.length = 0;
gdjs.MainMenuCode.GDdotObjects3.length = 0;
gdjs.MainMenuCode.GDQuit_9595ButtonObjects1.length = 0;
gdjs.MainMenuCode.GDQuit_9595ButtonObjects2.length = 0;
gdjs.MainMenuCode.GDQuit_9595ButtonObjects3.length = 0;
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects1.length = 0;
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects2.length = 0;
gdjs.MainMenuCode.GDRace_9595Select_9595IconObjects3.length = 0;
gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects1.length = 0;
gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects2.length = 0;
gdjs.MainMenuCode.GDSkin_9595Color_9595DisplayTextObjects3.length = 0;
gdjs.MainMenuCode.GDSplashLogoTextObjects1.length = 0;
gdjs.MainMenuCode.GDSplashLogoTextObjects2.length = 0;
gdjs.MainMenuCode.GDSplashLogoTextObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MainMenuCode.GDQuit_9595text_9595descObjects1.length = 0;
gdjs.MainMenuCode.GDQuit_9595text_9595descObjects2.length = 0;
gdjs.MainMenuCode.GDQuit_9595text_9595descObjects3.length = 0;
gdjs.MainMenuCode.GDtraceObjects1.length = 0;
gdjs.MainMenuCode.GDtraceObjects2.length = 0;
gdjs.MainMenuCode.GDtraceObjects3.length = 0;
gdjs.MainMenuCode.GDPlayerHandObjects1.length = 0;
gdjs.MainMenuCode.GDPlayerHandObjects2.length = 0;
gdjs.MainMenuCode.GDPlayerHandObjects3.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
