(window.webpackJsonp=window.webpackJsonp||[]).push([["4dcf","12da"],{"0i1j":function(e,t,a){"use strict";a.d(t,"b",function(){return c}),a.d(t,"a",function(){return d});var p,n=a("17x9"),i=a.n(n),m=a("q1tI"),g=a.n(m),r=a("xk4V"),h=a.n(r),o=a("j/eu"),_=a.n(o),v=a("GtZL"),b=a("8jB+"),s=(a("9pTB"),a("T4Uw")),f=a.n(s),w=a("vkc8"),y=a("KA7r"),P=a("Qzaj"),T=a("GS5Z"),I=a("lVss"),S=a("RTPL"),j=a("PBfr"),k=a("o9ly"),N=a("CWGs"),c={isInteractive:i.a.bool};function d(e){var r=e.universalPageName,i=e.testIfInteractive,o=e.buildEventDataFromProps,s=e.eventDataSchema,t=e.trackReplaceNavigationsToNewPathnames,c=void 0!==t&&t,a=e.skipSettingIsInteractive,d=void 0!==a&&a,u=e.ignorePathnameUpdate,n=e.wasEverInteractiveOverride,l=void 0===n?function(){return!1}:n;if(!r)throw new Error("AirbnbInteractive: No page name provided.");if("function"!=typeof r&&!Object.values(v.a).includes(r))throw new Error("AirbnbInteractive: Invalid page name: ".concat(r,"."));if(o&&!s)throw new Error("AirbnbInteractive: You must supply an event data schema if you supply an event data function.");return function(n){var e=function(a){function e(e){var i;(i=a.call(this,e)||this).handleNewPageMount=function(){var e=i.props.history;var t=Object(P.b)(),a=Object(y.a)();_.a.addContext({client_session_id:a,amp_client_session_id:t}),Object(T.b)(window.document.URL,i.evaluatedUniversalPageName);var n=i.generateEventData();_.a.setImpressionMetadata({eventDataSchema:i.evaluatedEventDataSchema,initialEventData:n,impressionUuid:i.impressionUuid}),S.a.logImpression({universalPageName:i.evaluatedUniversalPageName,eventData:n,eventDataSchema:i.evaluatedEventDataSchema,impressionUuid:i.impressionUuid}),e&&S.a.setHistoryListener(e,function(e,t){if(S.a.hasMovedToNewPage(e,t,c)){if(i.pageTransitionAcknowledgedByRender)return void(i.pageTransitionAcknowledgedByRender=!1);S.a.logStartPageTransition({universalPageName:i.evaluatedUniversalPageName}),i.isInPageTransition=!0}else Object(T.b)(window.document.URL,i.evaluatedUniversalPageName)}),i.logIfInteractive(),i.timestampOfRenderTimeoutID=setTimeout(function(){var e={universalPageName:i.evaluatedUniversalPageName,impressionUuid:i.impressionUuid,timestampOfFCP:Object(I.b)().now()};N.a.updateCurrentRecorderWithHOCProps(e)}),"function"==typeof i.ignorePathnameUpdate&&N.a.setIgnorePathnameUpdate(i.ignorePathnameUpdate)},i.state={isInteractive:!1},i.suppliedUniversalPageName=r,i.eventDataSchema=s,i.buildEventDataFromProps=o,i.evaluatedUniversalPageName=Object(k.b)(r,e),i.evaluatedEventDataSchema=Object(k.a)(s,e),i.isInPageTransition=!1,i.wasSetInteractive=!1,i.timestampOfInteractivity=null,i.previousPathname=e.location&&e.location.pathname,i.pageTransitionAcknowledgedByRender=!1,i.impressionUuid=h()();var t=f.a.get("api_logging_context");if(i.bootstrappedApiLoggingContext=void 0,i.clearRavenInit=null,i.ignorePathnameUpdate=u,t)try{"object"===babelHelpers.typeof(t)?i.bootstrappedApiLoggingContext=t:"string"==typeof t&&(i.bootstrappedApiLoggingContext=JSON.parse(t))}catch(e){_.a.logJitneyEvent({schema:b.a,event_data:{payload:t,impression_uuid:i.impressionUuid}})}return i.logIfInteractive=i.logIfInteractive.bind(babelHelpers.assertThisInitialized(i)),i.handlePageTransition=i.handlePageTransition.bind(babelHelpers.assertThisInitialized(i)),i.generateEventData=i.generateEventData.bind(babelHelpers.assertThisInitialized(i)),i.setContextForPage=i.setContextForPage.bind(babelHelpers.assertThisInitialized(i)),i.setContextForPage(),i}babelHelpers.inheritsLoose(e,a);var t=e.prototype;return t.componentDidMount=function(){this.handleNewPageMount()},t.componentDidUpdate=function(e){this.logIfInteractive(e)},t.componentWillUnmount=function(){this.wasSetInteractive||l(this.props)||(this.timestampOfInteractivity=null,S.a.logAirbnbInteractive({methodology:j.a,universalPageName:this.evaluatedUniversalPageName,eventData:this.generateEventData(),eventDataSchema:this.evaluatedEventDataSchema,impressionUuid:this.impressionUuid})),this.timeout&&window.clearTimeout(this.timeout),this.clearRavenInit&&this.clearRavenInit(),this.timestampOfRenderTimeoutID&&clearTimeout(this.timestampOfRenderTimeoutID),N.a.clearIgnorePathnameUpdate()},t.setContextForPage=function(){var t=this;this.clearRavenInit||(this.clearRavenInit=Object(w.c)(function(e){e.setTagsContext({universalPageName:t.evaluatedUniversalPageName})})),_.a.addContext({page_name:this.evaluatedUniversalPageName,impression_uuid:this.impressionUuid}),p&&_.a.addContext({previous_page_name:p}),p=this.evaluatedUniversalPageName},t.logIfInteractive=function(e){var t=this,a=0<arguments.length&&void 0!==e?e:{},n=this.state.isInteractive;this.wasSetInteractive||i&&!i(this.props,a)||(this.wasSetInteractive=!0,window.performance&&"function"==typeof window.performance.mark&&window.performance.mark("with_airbnb_interactive_did_mount"),this.timeout=setTimeout(function(){t.timestampOfInteractivity=Object(I.b)().now(),S.a.logAirbnbInteractive({methodology:j.b,universalPageName:t.evaluatedUniversalPageName,eventData:t.generateEventData(),eventDataSchema:t.evaluatedEventDataSchema,impressionUuid:t.impressionUuid,tti:window.__getMarkedInlineTTI&&window.__getMarkedInlineTTI()}),window.__clearMarkedInlineTTI&&window.__clearMarkedInlineTTI(),t.timeout=setTimeout(function(){t.timeout=null,n||d||t.setState({isInteractive:!0})})}))},t.handlePageTransition=function(){this.isInPageTransition=!1,this.previousPathname=this.props.location&&this.props.location.pathname,this.timestampOfInteractivity=null,this.wasSetInteractive=!1,this.evaluatedUniversalPageName=Object(k.b)(r,this.props),this.evaluatedEventDataSchema=Object(k.a)(s,this.props),this.impressionUuid=h()(),this.setContextForPage(),_.a.setImpressionMetadata({eventDataSchema:this.evaluatedEventDataSchema,initialEventData:this.generateEventData(),impressionUuid:this.impressionUuid}),this.handleNewPageMount()},t.generateEventData=function(){var e=o&&o(this.props);return!(!e&&!this.bootstrappedApiLoggingContext)&&babelHelpers.objectSpread({},e,{},this.bootstrappedApiLoggingContext)},t.render=function(){var e=this.props,t=e.history,a=e.location;return this.isInPageTransition&&this.handlePageTransition(),a&&t&&this.previousPathname!==a.pathname&&(this.previousPathname=a.pathname,S.a.hasMovedToNewPage(a,t.action,c)?(S.a.logStartPageTransition({universalPageName:this.evaluatedUniversalPageName}),this.handlePageTransition(),this.pageTransitionAcknowledgedByRender=!0):Object(T.b)(window.document.URL,this.evaluatedUniversalPageName)),g.a.createElement(n,babelHelpers.extends({},this.props,{isInteractive:this.state.isInteractive}))},e}(m.Component),t=n.displayName||n.name||"Component";return n.propTypes,n.defaultProps&&(e.defaultProps=babelHelpers.objectSpread({},n.defaultProps)),e.displayName="withAirbnbInteractive(".concat(t,")"),e}}},GS5Z:function(e,t,a){"use strict";a.d(t,"a",function(){return g}),a.d(t,"b",function(){return h});var n=a("tl9J"),i=a.n(n),r=a("Ty5D"),o=a("GtZL"),s=a("KqEl"),c=a.n(s),d="jitney_page_name_",u=36e5,l=[{path:"/experiences/:id",pageName:o.a.PdpExperience,exact:!0},{path:"/rooms/plus/:id",pageName:o.a.PdpHomeSelect,exact:!0},{path:"/rooms/:id",pageName:o.a.PdpHomeMarketplace,exact:!0},{path:"/s/guidebooks",pageName:o.a.Guidebook,exact:!0},{path:"/s/:string",pageName:o.a.SearchResults,exact:!0}];function p(t){var e=l.find(function(e){return Object(r.matchPath)(t,e)});return e?e.pageName:null}function m(e){return c()(e).pathname}function g(e){return p(t=m(e))||i()(d+t);var t}function h(e,t){var a=m(e);p(a)||i()(d+a,t,{expires:u})}},KA7r:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a("xk4V"),r=a.n(n),i=a("8dvS"),o=a.n(i),s=a("64m5"),c=0,d=null;function u(e){if(e-c<1800)return!0;var t=o()("jitney_client_session_id"),a=o()("jitney_client_session_created_at"),n=o()("jitney_client_session_updated_at");return(d=t)&&a&&n&&e-parseInt(a,10)<86400&&e-parseInt(n,10)<1800}function l(){var e,t,a,n,i=parseInt((new Date).getTime()/1e3,10);return u(i)?(n=i,requestIdleCallback(function(){o()("jitney_client_session_updated_at",n,{path:"/",domain:Object(s.b)()})}),c=n):(e=i,t=Object(s.b)(),a=r()(),o()("jitney_client_session_id",a,{path:"/",domain:t}),o()("jitney_client_session_created_at",e,{path:"/",domain:t}),o()("jitney_client_session_updated_at",e,{path:"/",domain:t}),c=e,d=a),d}},PBfr:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i});var n="validated-airbnb-interactive",i="never-interactive"},Qzaj:function(e,t,a){"use strict";a.d(t,"a",function(){return d}),a.d(t,"b",function(){return u});var n=a("8dvS"),i=a.n(n),r=a("64m5"),o=0,s=null;function c(e){if(e-o<1800)return!0;var t=i()("amp_session_id"),a=i()("amp_session_created_at"),n=i()("amp_session_updated_at");return(s=t)&&a&&n&&e-parseInt(a,10)<86400&&e-parseInt(n,10)<1800}function d(){return c(parseInt((new Date).getTime()/1e3,10))?i()("amp_session_id"):null}function u(){var e,t=parseInt((new Date).getTime()/1e3,10);return c(t)&&(e=t,requestIdleCallback(function(){i()("amp_session_updated_at",e,{path:"/",domain:Object(r.b)()})}),o=e),s}},RTPL:function(e,a,n){"use strict";(function(y){var e=n("j/eu"),P=n.n(e),T=n("4D4G"),s=n("sl/x"),I=n("lVss"),S=n("28/g"),j=n("yv6Y"),k=n("euM8"),p="Time to AirbnbInteractive",t=function(){function e(){this.pageTransitionStart=void 0,this.history=void 0,this.unlistenHistory=void 0,this.historyCallback=void 0,this.lastLoggedPathname=void 0}var t=e.prototype;return t.setHistoryListener=function(e,t){this.history||(this.history=e,this.unlistenHistory=e.listen(this.onHistoryChange.bind(this)),void 0===this.lastLoggedPathname&&this.history.location&&(this.lastLoggedPathname=this.history.location.pathname)),t&&t!==this.historyCallback&&(this.historyCallback=t)},t.onHistoryChange=function(e,t){this.historyCallback&&this.historyCallback(e,t)},t.logImpression=function(e){var a=e.universalPageName,n=e.eventData,i=e.eventDataSchema,r=e.impressionUuid,o=e.pageRequestMethod;Object(S.b)(!!this.pageTransitionStart).then(function(e){var t={schema:s.UniversalPageImpressionEvent,event_data:{page_name:a,referrer:document.referrer||"unknown",page_request_method:o||e,event_data:n,event_data_schema:i,impression_uuid:r,navigation_type:Object(I.e)(),url:document.location.href}};P.a.logJitneyEvent(t)})},t.logAirbnbInteractive=function(e){var t=e.methodology,a=e.eventData,n=e.eventDataSchema,i=e.universalPageName,r=e.impressionUuid,o=e.pageRequestMethod,s=e.tti,c=y.window&&Object(I.b)();if(c&&c.timing&&c.timing.requestStart){var d,u=Object(I.f)();if(!s){if(this.pageTransitionStart)d=u-this.pageTransitionStart.startTime,this.pageTransitionStart.doNotOverrwiteUntilLogged=!1;else{var l=c.getEntriesByName&&c.getEntriesByName(p,"measure");d=l&&0<l.length?l[0].duration-(c.timing.requestStart-c.timing.navigationStart):u-c.timing.requestStart}c.getEntriesByName&&0<c.getEntriesByName("client side route","mark").length?c.measure(p,"client side route"):c.getEntriesByName&&0===c.getEntriesByName(p,"measure").length&&c.measure(p),"function"==typeof c.clearMarks&&c.clearMarks("client side route")}this.logTime({methodology:t,tti:s||d,endTime:u,eventData:a,eventDataSchema:n,universalPageName:i,impressionUuid:r,providedPageRequestMethod:o})}},t.logTime=function(e){var r=this,o=e.methodology,s=e.tti,c=e.universalPageName,d=e.eventData,u=e.eventDataSchema,l=e.impressionUuid,p=e.providedPageRequestMethod,m=y.window&&Object(I.b)(),g=y.location.pathname,h=y.location.host,_=Object(j.f)(),v=Object(j.c)(),b=Object(j.h)(),f=Object(j.b)(),w=Object(j.a)(m);Object(S.b)(!!this.pageTransitionStart).then(function(e){var t=r.pageTransitionStart?r.pageTransitionStart.startTime:m.timing.requestStart,a=babelHelpers.objectSpread({},Object(j.j)(m.timing||{}),{},Object(j.g)(m),{},Object(j.i)(),{},Object(j.e)(m),{},Object(j.d)()),n=babelHelpers.objectSpread({methodology:o},Object(k.a)({startTime:t})),i={schema:T.PerformanceAirbnbWebInteractiveEvent,event_data:{information:n,web_page_name:"deprecated",domain_and_path:"".concat(h).concat(g),page_request_method:p||e,time_to_airbnb_interactive_in_ms:s,web_performance_timing:a,universal_page_name:c,event_data:d,event_data_schema:u,impression_uuid:l,network_information:_,device_profile:v,visibility_state:b,bundler_type:f,assets_size:w,navigation_type:Object(I.e)()}};P.a.logJitneyEvent(i)})},t.logStartPageTransition=function(e){var t=e.universalPageName,a=e.doNotOverrwiteUntilLogged;if(y.window){var n=y.window&&Object(I.b)();this.pageTransitionStart&&this.pageTransitionStart.doNotOverrwiteUntilLogged||(this.history&&this.history.location&&(this.lastLoggedPathname=this.history.location.pathname),this.pageTransitionStart={doNotOverrwiteUntilLogged:a,valid:!0,initialRoute:t,startTime:Object(I.f)()},n&&("function"==typeof n.clearMarks&&"function"==typeof n.clearMeasures&&(n.clearMarks("client side route"),n.clearMarks("core_execution_start"),n.clearMarks("core_execution_end"),n.clearMarks("common_execution_start"),n.clearMarks("common_execution_end"),n.clearMarks("spa_execution_start"),n.clearMarks("spa_execution_end"),n.clearMarks("component_render_start"),n.clearMarks("component_render_end"),n.clearMarks("with_airbnb_interactive_did_mount"),n.clearMeasures(p)),n.mark("client side route"))),n&&n.clearResourceTimings&&"complete"===document.readyState&&n.clearResourceTimings()}},t.hasMovedToNewPage=function(e,t,a){return"POP"===t||"PUSH"===t||!!a&&"REPLACE"===t&&e.pathname!==this.lastLoggedPathname},e}();a.a=new t}).call(this,n("cNzE"))},euM8:function(e,t,a){"use strict";a.d(t,"a",function(){return f});var n=a("eyJb"),s=a.n(n),i=a("9pTB"),c=a.n(i),r=a("I9Za"),d=a.n(r),o=a("j/eu"),u=a.n(o),l=a("Ri7V"),p=a("k0/h"),m=a("yv6Y");function g(e,t){var a=1<arguments.length&&void 0!==t?t:window.performance.timing.requestStart;return e+window.performance.timing.navigationStart-a}var h=function(i,e){var r=e.startTime;return[{name:"api_v2_explore_tab",url:"api/v2/explore_tabs"},{name:"api_v2_pdp_listing_detail",url:"api/v2/pdp_listing_details"},{name:"lightmoweb_hyperloop_p2_api",url:p.a},{name:"lightmoweb_hyperloop_p3_api",url:p.b},{name:"lightmoweb_hyperloop_p4_api",url:p.c}].reduce(function(e,t){var a,n=i.find(function(e){return e.name.includes(t.url)&&"resource"===e.entryType});return n?babelHelpers.objectSpread({},e,(a={},babelHelpers.defineProperty(a,"".concat(t.name,"_start"),String(g(n.fetchStart,r))),babelHelpers.defineProperty(a,"".concat(t.name,"_duration"),String(n.duration)),a)):e},{})},_=function(i){return[{name:"js_download_initializer",url:"packages/initializers"},{name:"js_download_index",url:"packages/china-guest/hyperloop/index"},{name:"js_download_vendor",url:"packages/vendor"},{name:"js_download_home",url:"packages/webcot-china-Home_async"},{name:"js_download_pdp",url:"packages/webcot-ChinaHomesPDPContainer"},{name:"js_download_lightmoweb_home",url:"packages/china-light-moweb-home"},{name:"js_download_lightmoweb_search",url:"packages/china-light-moweb-search"},{name:"js_download_lightmoweb_pdp",url:"packages/china-light-moweb-pdp"}].reduce(function(e,t){var a,n=i.find(function(e){return e.name.includes(t.url)&&"resource"===e.entryType});return n?babelHelpers.objectSpread({},e,(a={},babelHelpers.defineProperty(a,"".concat(t.name,"_start"),String(g(n.fetchStart))),babelHelpers.defineProperty(a,"".concat(t.name,"_fetch_to_request_duration"),String(n.requestStart-n.fetchStart)),babelHelpers.defineProperty(a,"".concat(t.name,"_request_to_response_duration"),String(n.responseStart-n.requestStart)),babelHelpers.defineProperty(a,"".concat(t.name,"_response_duration"),String(n.responseEnd-n.responseStart)),babelHelpers.defineProperty(a,"".concat(t.name,"_duration"),String(n.duration)),babelHelpers.defineProperty(a,"".concat(t.name,"_size"),String(n.encodedBodySize)),a)):e},{})},v=function(e,t){var a,n=t.startMark,i=t.endMark,r=t.timingName,o=t.startTime,s=e.find(function(e){return e.name===n}),c=e.find(function(e){return e.name===i});return s&&c?(a={},babelHelpers.defineProperty(a,"".concat(r,"_start"),String(g(s.startTime,o))),babelHelpers.defineProperty(a,"".concat(r,"_duration"),String(c.startTime-s.startTime+c.duration)),a):{}},b=function(){var e={},t=c.a.get(p.e),a=c.a.get(p.f),n=c.a.get(p.d),i=c.a.get(p.a),r=c.a.get(p.b),o=c.a.get(p.c);return t&&(u.a.logEvent({event_name:"china",event_data:{datadog_key:"china_web_explore_api_source",datadog_tags:["api_source:".concat(t)]}}),e.p2_api_source=t),a&&(u.a.logEvent({event_name:"china",event_data:{datadog_key:"china_web_pdp_api_source",datadog_tags:["api_source:".concat(a),"visibility:".concat(Object(m.h)())]}}),e.p3_api_source=a),n&&(u.a.logEvent({event_name:"china",event_data:{datadog_key:"china_web_checkout_api_source",datadog_tags:["api_source:".concat(n)]}}),e.p4_api_source=n),i&&(e.lightmoweb_p2_api_source=i),r&&(e.lightmoweb_p3_api_source=r),o&&(e.lightmoweb_p4_api_source=o),e};function f(e){var t=e.startTime;if(l.a.getBootstrap("disable_china_frontend_performance_timings")||"zh"!==d.a.locale())return{};var a=window.performance;if("function"!=typeof a.getEntries)return{};var n=a.getEntries().reverse(),i=t===a.timing.requestStart,r=s()("webpack"),o=babelHelpers.objectSpread({},h(n,{startTime:t}),{},v(n,{timingName:"component_render",startMark:"component_render_start",endMark:"component_render_end",startTime:t}),{},b(),{},v(n,{timingName:"wait_tti",startMark:"component_render_end",endMark:"Time to AirbnbInteractive",startTime:t}));return i?babelHelpers.objectSpread({},o,{},_(n),{},v(n,{timingName:"initialize_execution",startMark:"core_execution_start",endMark:"core_execution_end",startTime:t}),{},v(n,{timingName:"index_import",startMark:"index_import_start",endMark:"index_import_end",startTime:t}),{},v(n,{timingName:"component_import",startMark:"component_import_start",endMark:"component_render_start",startTime:t}),{initial_js_bundle_count:r&&r.renderedAsyncChunkIds?String(r.renderedAsyncChunkIds.length):""}):o}},"k0/h":function(e,t,a){"use strict";a.d(t,"e",function(){return n}),a.d(t,"f",function(){return i}),a.d(t,"d",function(){return r}),a.d(t,"a",function(){return o}),a.d(t,"b",function(){return s}),a.d(t,"c",function(){return c});var n="api_v2_explore_tabs",i="api_v2_pdp_listing_detail",r="api_v2_p4_lite_api",o="/china-guest-moweb-loop/cls_result",s="/china-guest-moweb-loop/clr_result",c="/api/v2/homes_checkout_lite_flows"},o9ly:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i});a("GtZL");function n(e,t){return"function"!=typeof e?e:e(t)}function i(e,t){if("object"===babelHelpers.typeof(e))return e;if("function"==typeof e){var a=e(t);return"object"!==babelHelpers.typeof(a)&&void 0!==a?void 0:a}}}}]);
//# sourceMappingURL=https://sourcemaps.d.musta.ch/airbnb/static/packages/4dcf-9e5b05f5.js.map