gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS = {};

gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.conditionTrue_0 = {val:false};
gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.userFunc0x1bc5dc0 = function(runtimeScene, eventsFunctionContext) {
//custom function in custom fonction ~~Woow~~
var format_time = function (time_second) {
    date = new Date(null);
    date.setSeconds(time_second);
    if (time_second >= 3600) {
        return date.toISOString().substr(11, 8); // MM:SS
    } else {
        return date.toISOString().substr(14, 5); // HH:MM:SS
    }
}

eventsFunctionContext.returnValue = format_time(eventsFunctionContext.getArgument("TimeInSeconds"));
};
gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.eventsList0x5b7f48 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.userFunc0x1bc5dc0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.eventsList0x5b7f48


gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.func = function(runtimeScene, TimeInSeconds, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "TimeInSeconds") return TimeInSeconds;
    return "";
  }
};


gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.eventsList0x5b7f48(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}

