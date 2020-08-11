(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{565:function(t,e,o){"use strict";o.r(e);var i=o(25),r=Object(i.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),o("p",[t._v("This library is a JS based dice roller that can roll various types of dice and modifiers, along with mathematical equations.")]),t._v(" "),o("p",[t._v("It's main purpose is for use in pen and paper / tabletop RPGs, like Dungeons & Dragons, Pathfinder, Cyberpunk, Warhammer etc., where players have to roll complicated combinations of dice.")]),t._v(" "),o("h2",{attrs:{id:"how-it-works"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),o("p",[t._v('Dice can be rolled through the use of "notations", which are strings of characters that tell the parser which dice and modifiers to roll.')]),t._v(" "),o("p",[t._v("You can read more about it in the "),o("RouterLink",{attrs:{to:"/guide/notation/"}},[t._v("Notation section")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"how-random-is-it"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-random-is-it"}},[t._v("#")]),t._v(" How random is it?")]),t._v(" "),o("p",[t._v("This library uses "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Pseudorandom_number_generator",target:"_blank",rel:"noopener noreferrer"}},[t._v("psudeo random number generation"),o("OutboundLink")],1),t._v(" (PRNG) to determine die rolls. It is not "),o("em",[t._v("true")]),t._v(" random but it is suitable for most purposes. PRNGs are used globally for computer-based random number generation.")]),t._v(" "),o("p",[t._v("It is more than sufficient for the vast majority of uses. However, if your needs require, you can "),o("RouterLink",{attrs:{to:"/guide/customisation.html#random-number-generation"}},[t._v("modify the RNG engine")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"features"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),o("p",[o("strong",[t._v("Different dice types")])]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/notation/dice.html#standard-dn"}},[t._v("Standard dice")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/notation/dice.html#percentile-dice-d"}},[t._v("Percentile dice")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/notation/dice.html#fudge--fate-dice-df--df2--df1"}},[t._v("Fudge / fate dice")])],1)]),t._v(" "),o("p",[o("strong",[t._v("Roll modifiers")])]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/notation/modifiers.html#exploding---cp"}},[t._v("Exploding")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/notation/modifiers.html#compounding---cp"}},[t._v("Compounding")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/notation/modifiers.html#penetrating-p--p--pcp--pcp"}},[t._v("Penetrating")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/notation/modifiers.html#keep-kn--khn--kln"}},[t._v("Keep rolls")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/notation/modifiers.html#drop-dn--dhn--dln"}},[t._v("Drop rolls")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/notation/modifiers.html#re-roll-r--ro--rcp--rocp"}},[t._v("Re-roll")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/notation/modifiers.html#target-success--dice-pool-cp"}},[t._v("Target success")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/notation/modifiers.html#target-failures--dice-pool-fcp"}},[t._v("Target failure")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/notation/modifiers.html#max-max-n"}},[t._v("Max")]),t._v(" "),o("Badge",{attrs:{text:"New",vertical:"middle"}})],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/notation/modifiers.html#min-min-n"}},[t._v("Min")]),t._v(" "),o("Badge",{attrs:{text:"New",vertical:"middle"}})],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/notation/modifiers.html#sorting-s--sa--sd"}},[t._v("Sort dice")])],1)]),t._v(" "),o("p",[o("strong",[t._v("Mathematical equations")])]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/notation/maths.html#operators"}},[t._v("Operators")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/notation/maths.html#functions"}},[t._v("Functions")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/usage.html#roll-totals"}},[t._v("Easy min / max / average total calculations")]),t._v(" "),o("Badge",{attrs:{text:"New",vertical:"middle"}})],1)]),t._v(" "),o("p",[o("strong",[t._v("Customisation")])]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/customisation.html#random-number-generator"}},[t._v("Random number generator")]),t._v(" "),o("Badge",{attrs:{text:"New",vertical:"middle"}})],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/guide/usage.html#export-rolls"}},[t._v("Exporting")]),t._v(" / "),o("RouterLink",{attrs:{to:"/guide/usage.html#import-rolls"}},[t._v("importing rolls")])],1)]),t._v(" "),o("p",[o("strong",[t._v("Coming soon")])]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/guide/notation/group-rolls.html"}},[t._v("Group rolls")])],1)]),t._v(" "),o("h2",{attrs:{id:"browser-support"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#browser-support"}},[t._v("#")]),t._v(" Browser support")]),t._v(" "),o("p",[t._v("This library uses ES6+ and native JS modules, which work in all the latest browsers, and Node.js.")]),t._v(" "),o("p",[t._v("We also provide a bundled UMD version that can be used in environments that don't support ES modules.")]),t._v(" "),o("p",[t._v("We actively support the latest versions of Firefox, Chrome, Opera, Safari, Microsoft Edge, and Node.js.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("Node.js")]),t._v(" "),o("p",[t._v("We recommend Node.js >= 12, but it should work on 11 as well.\nThere's no guarantee that it will work on older versions.")])]),t._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[t._v("Internet Explorer")]),t._v(" "),o("p",[t._v("We do "),o("strong",[t._v("not")]),t._v(" support IE, and the library will "),o("strong",[t._v("not")]),t._v(" work in IE.")]),t._v(" "),o("p",[t._v("It "),o("em",[t._v("may")]),t._v(" be possible to make it work by creating polyfills for functionality that is missing in IE, but we cannot guarantee it.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);