var ClassScheduleFunctions = require("sdk/page-mod");
var MealCounter = require("sdk/page-mod");
var Registration = require("sdk/page-mod");

ClassScheduleFunctions.PageMod({
  include: "https://accessplus.iastate.edu/*",
  contentScriptFile: [
	  "./AccessPlusPlus/jquery.min.js",
	  "./AccessPlusPlus/ClassScheduleFunctions/dependencies.js",
	  "./AccessPlusPlus/ClassScheduleFunctions/classSchedFunc.js"
  ],
  contentScriptWhen: "ready"
});

MealCounter.PageMod({
  include: "https://accessplus.iastate.edu/servlet/adp.A_Plus",
  contentScriptFile: [
	  "./AccessPlusPlus/jquery.min.js",
	  "./AccessPlusPlus/ClassScheduleFunctions/dependencies.js",
	  "./AccessPlusPlus/MealCounter/meals.js"
  ],
  contentScriptWhen: "end"
});

Registration.PageMod({
  include: "https://accessplus.iastate.edu/*",
  contentScriptFile: [
	  "./AccessPlusPlus/jquery.min.js",
	  "./AccessPlusPlus/Registration/registration.js"
  ],
  contentScriptWhen: "end"
});
