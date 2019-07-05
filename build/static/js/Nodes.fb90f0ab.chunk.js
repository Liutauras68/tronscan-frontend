webpackJsonp([16],{1419:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,o){try{var l=t[r](o),u=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(u).then(function(e){a("next",e)},function(e){a("throw",e)});e(u)}return a("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),s=a(i),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=n(0),m=a(f),p=n(24),y=a(p),h=n(17),v=n(477),b=n(16),_=n(13),E=n(20),g=n(2030),N=n(135),w=(n(2043),n(2044)),O=a(w),x=n(19),j=function(e){function t(e){var n=this;o(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.buildNodeList=function(){var e=a.state.nodes,t={},n=!0,r=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var c=l.value;t[c.country]||(t[c.country]={name:c.country,nodes:[],total:0}),t[c.country].nodes.push(c),t[c.country].total++}}catch(e){r=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw o}}var i=Object.values(t);return i=(0,b.sortBy)(i,function(e){return e.total}),i=(0,b.filter)(i,function(e){return""!==e.name}),i.reverse(),i},a.setCountryHover=function(e){a.setState({activeCountry:e})},a.loadNodes=r(s.default.mark(function e(){var t,r;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.default.get(x.API_URL+"/api/nodemap");case 2:t=e.sent,r=t.data,a.setState({nodes:r.data,syncStatus:null});case 5:case"end":return e.stop()}},e,n)})),a.state={showAllCountries:!1,size:5,nodes:[],syncStatus:"waiting",show3D:"3d"===(0,N.getQueryParam)(e.location,"mode")},a}return u(t,e),d(t,[{key:"renderList",value:function(){var e=this.state,t=e.showAllCountries,n=e.size,a=this.state.nodes,r=this.buildNodeList();return t||(r=r.slice(0,n)),0===a.length?m.default.createElement("div",{className:"d-flex justify-content-center p-4"},m.default.createElement(E.TronLoader,null)):m.default.createElement("ul",{className:"list-group list-group-flush"},r.map(function(e,t){return m.default.createElement("li",{key:e.name,className:"list-group-item d-flex"},e.name,m.default.createElement("span",{className:"ml-auto"},e.total))}))}},{key:"componentDidMount",value:function(){this.loadNodes()}},{key:"render",value:function(){var e=this.state,t=e.nodes,n=e.syncStatus,a=this.buildNodeList();return"waiting_for_first_sync"===n?m.default.createElement("main",{className:"container header-overlap"},m.default.createElement("div",{className:"card"},m.default.createElement(E.TronLoader,null,(0,_.tu)("first_node_sync_message")))):0===t.length?m.default.createElement("main",{className:"container header-overlap"},m.default.createElement("div",{className:"card"},m.default.createElement(E.TronLoader,null,(0,_.tu)("loading_nodes")))):m.default.createElement("main",{className:"container header-overlap _nodemap"},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-6"},m.default.createElement("div",{className:"card h-100 text-left widget-icon bg-line_red bg-image_node"},m.default.createElement("div",{className:"card-body _node",style:{marginLeft:"50px"}},m.default.createElement("h3",{className:"text-secondary"},t.length),(0,_.tu)("nodes")))),m.default.createElement("div",{className:"col-md-6 mt-3 mt-md-0"},m.default.createElement("div",{className:"card h-100 text-left widget-icon bg-line_green bg-image_nodest"},m.default.createElement("div",{className:"card-body _node",style:{marginLeft:"50px"}},a.length>0?m.default.createElement("h3",{className:"text-primary"},(0,b.maxBy)(a,function(e){return e.total}).name):m.default.createElement("h3",{className:"text-primary"},"Unknown"),(0,_.tu)("most_nodes"))))),m.default.createElement("div",{className:"row mt-3"},m.default.createElement("div",{className:"col-md-12"},m.default.createElement("div",{className:"card",style:{padding:"20px"}},m.default.createElement(g.NodeMapAsync,{nodes:t,countries:a})))),m.default.createElement("div",{className:"row mt-3"},m.default.createElement("div",{className:"col-md-12"},m.default.createElement("div",{className:"card"},m.default.createElement("div",{className:"card-body _node"},m.default.createElement("h5",{className:"card-title text-center"},(0,_.tu)("nodes_ranking"),m.default.createElement("br",null),(0,_.tu)("split_by_country")),m.default.createElement("div",{style:{height:500}},null===a?m.default.createElement(E.TronLoader,null):m.default.createElement(O.default,{style:{height:500},data:a})))))))}}]),t}(f.Component),C={loadNodes:v.loadNodes};t.default=(0,h.connect)(c,C)(j)},2030:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeMapAsync=void 0;var a=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(a),o=n(468),l=n(20),u=n(13),c=n(469);t.NodeMapAsync=(0,o.asyncComponent)({LoadingComponent:function(){return r.default.createElement("div",{className:"card"},r.default.createElement(l.TronLoader,null,(0,u.tu)("loading_map")))},resolve:function(){return new Promise(function(e){return n.e(32).then(function(t){c("",function(){e(n(2031))})}.bind(null,n)).catch(n.oe)})}})},2043:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e){var t=e.className,n=a(e,["className"]);return l.default.createElement("span",Object.assign({className:"icon-big"},n),l.default.createElement("i",{className:" fa-7x "+t}))}Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetIcon=r;var o=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(o)},2044:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.BarReact=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),s=a(i),d=n(12),f=n(168),m=a(f),p=n(137),y=a(p);n(558),n(169),n(138);var h=n(17),v=t.BarReact=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=("_"+Math.random()).replace(".","_");return n.state={barId:"bar"+a},n}return l(t,e),c(t,[{key:"initBar",value:function(e){var t=this.props,n=(t.intl,t.data),a=y.default.getInstanceByDom(document.getElementById(e));void 0===a&&(a=y.default.init(document.getElementById(e))),m.default.barChart.title.text="",m.default.barChart.yAxis.data=[],m.default.barChart.series[0].data=[],m.default.barChart.series[0].itemStyle={normal:{color:new y.default.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#ed213a"},{offset:1,color:"#93291e"}])},emphasis:{color:new y.default.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0052d4"},{offset:1,color:"#0052d4"}])}};var r=[],o={name:"Others",total:0};n.map(function(e){e.total>10&&null!==e.name?r.push(e):o.total=o.total+e.total}),r.push(o),r&&r.length>0&&r.map(function(e){m.default.barChart.yAxis.data.push(e.name),m.default.barChart.series[0].data.push(e.total)}),r&&0===r.length&&(m.default.barChart.title.text="No data"),a.setOption(m.default.barChart)}},{key:"componentDidMount",value:function(){this.initBar(this.state.barId)}},{key:"componentDidUpdate",value:function(){this.initBar(this.state.barId)}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("div",{id:this.state.barId,style:this.props.style}))}}]),t}(s.default.Component),b={};t.default=(0,h.connect)(u,b,null,{pure:!1})((0,d.injectIntl)(v))}});