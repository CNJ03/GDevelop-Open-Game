gdjs.IntroCode = {};
gdjs.IntroCode.GDfade_95tiled_95spriteObjects1= [];
gdjs.IntroCode.GDfade_95tiled_95spriteObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};
gdjs.IntroCode.conditionTrue_1 = {val:false};
gdjs.IntroCode.condition0IsTrue_1 = {val:false};
gdjs.IntroCode.condition1IsTrue_1 = {val:false};
gdjs.IntroCode.condition2IsTrue_1 = {val:false};


gdjs.IntroCode.eventsList0x5b7a48 = function(runtimeScene) {

{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)) == "toggled";
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)) == "untoggled";
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}}

}


{


{
{}}

}


{


{
{}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{}{}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
if (gdjs.IntroCode.condition0IsTrue_0.val) {
{}}

}


{


{
}

}


{



}


{



}


{



}


{



}


{


{
{}}

}


{


{
{}}

}


{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition1IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(30557036);
}
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__CompanionAppCommunication__connectToCompanion.func(runtimeScene, gdjs.evtsExt__DebugMessages__prompt.func(runtimeScene, "Enter the Companion app connection ID", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtsExt__CompanionAppCommunication__onEventType.func(runtimeScene, "SayHi", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__DebugMessages__popup.func(runtimeScene, "Hi", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{



}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


{
}

}


{



}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(true);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__RoomManager__registerRoom.func(runtimeScene, -(1), 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


}; //End of gdjs.IntroCode.eventsList0x5b7a48


gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDfade_95tiled_95spriteObjects1.length = 0;
gdjs.IntroCode.GDfade_95tiled_95spriteObjects2.length = 0;

gdjs.IntroCode.eventsList0x5b7a48(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
