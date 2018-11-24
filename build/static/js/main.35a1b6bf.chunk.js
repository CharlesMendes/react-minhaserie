(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(53)},29:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),i=a.n(s),c=(a(29),a(7)),l=a(8),o=a(11),m=a(9),u=a(10),d=a(56),h=a(54),v=a(55),E=a(23),p=a.n(E).a.create({baseURL:"http://localhost:3001"}),f={loadGenres:function(){return p.get("genres")},saveSeries:function(e){return p.post("series",e)},loadSeriesByGenre:function(e){return p.get("series?genre="+e)},deleteSeries:function(e){return p.delete("series/"+e)},loadSeriesById:function(e){return p.get("series/"+e)},updateSeries:function(e){return p.put("series/"+e.id,e)}},g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={genres:[],isLoading:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.loadGenres().then(function(t){e.setState({isLoading:!1,genres:t.data})})}},{key:"renderGenreLink",value:function(e){return r.a.createElement("span",{key:e},"\xa0",r.a.createElement(h.a,{to:"/series/".concat(e)},e))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{id:"intro",className:"intro-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h1",null,r.a.createElement("img",{src:"images/logo.png",alt:""})),r.a.createElement("p",null,"Nunca mais esque\xe7a uma s\xe9rie que voc\xea assistiu ou que algu\xe9m lhe indicou."))))),r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},this.state.isLoading&&r.a.createElement("center",null,"Carregando..."),!this.state.isLoading&&r.a.createElement("div",null,"Ver s\xe9ries do g\xeanero:",this.state.genres.map(this.renderGenreLink)))))))}}]),t}(n.Component),b=a(4),N=a(57),S={watched:"Assistido",watching:"Assistindo",toWatch:"Assistir"},j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={genres:[],isLoading:!1,redirect:!1},a.salvar=a.salvar.bind(Object(b.a)(Object(b.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.loadGenres().then(function(t){e.setState({isLoading:!1,genres:t.data})})}},{key:"salvar",value:function(){var e=this,t={name:this.refs.nome.value,status:this.refs.status.value,genre:this.refs.genero.value,comments:this.refs.comentario.value};f.saveSeries(t).then(function(t){e.setState({redirect:"/series/"+e.refs.genero.value})})}},{key:"render",value:function(){return r.a.createElement("section",{className:"intro-section"},this.state.redirect&&r.a.createElement(N.a,{to:this.state.redirect}),r.a.createElement("h1",null,"Nova S\xe9rie"),r.a.createElement("form",null,"Nome: ",r.a.createElement("input",{type:"text",ref:"nome",className:"form-control"})," ",r.a.createElement("br",null),"Status:",r.a.createElement("select",{ref:"status"},Object.keys(S).map(function(e){return r.a.createElement("option",{key:e,value:e},S[e])}))," ",r.a.createElement("br",null),"G\xeanero:",r.a.createElement("select",{ref:"genero"},this.state.genres.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))," ",r.a.createElement("br",null),"Coment\xe1rios: ",r.a.createElement("textarea",{ref:"comentario",className:"form-control"})," ",r.a.createElement("br",null),r.a.createElement("button",{type:"button",onClick:this.salvar},"Salvar")))}}]),t}(n.Component),O={watched:"Assistido",watching:"Assistindo",toWatch:"Assistir"},y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={series:[],isLoading:!1},a.renderSeries=a.renderSeries.bind(Object(b.a)(Object(b.a)(a))),a.loadData=a.loadData.bind(Object(b.a)(Object(b.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;this.setState({isLoading:!0}),f.loadSeriesByGenre(this.props.match.params.genre).then(function(t){e.setState({isLoading:!1,series:t.data})})}},{key:"deleteSeries",value:function(e){var t=this;f.deleteSeries(e).then(function(e){return t.loadData()})}},{key:"renderSeries",value:function(e){var t=this;return r.a.createElement("div",{key:e.id,className:"item col-xs-4 col-lg-4"},r.a.createElement("div",{className:"thumbnail"},r.a.createElement("img",{className:"group list-group-image",src:"http://placehold.it/400x250/000/fff",alt:""}),r.a.createElement("div",{className:"caption"},r.a.createElement("h4",{className:"group inner list-group-item-heading"},e.name),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-md-12"},r.a.createElement("p",{className:"lead"},e.genre," / ",O[e.status])),r.a.createElement("div",{className:"col-xs-12 col-md-12"},r.a.createElement(h.a,{className:"btn btn-success",to:"/series-editar/"+e.id},"Editar"),r.a.createElement("a",{className:"btn btn-danger",onClick:function(){return t.deleteSeries(e.id)}},"Excluir"))))))}},{key:"render",value:function(){return r.a.createElement("section",{id:"intro",className:"intro-section"},r.a.createElement("h1",null,"S\xe9rie ",this.props.match.params.genre),this.state.isLoading&&r.a.createElement("p",null,"Carregando, aguarde..."),0===this.state.series.length&&r.a.createElement("div",{className:"alert alert-danger"},"Nenhuma s\xe9rie de ",this.props.match.params.genre," encontrada"),r.a.createElement("div",{id:"series",className:"row list-group"},!this.state.isLoading&&this.state.series.map(this.renderSeries)))}}]),t}(n.Component),k={watched:"Assistido",watching:"Assistindo",toWatch:"Assistir"},w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={genres:[],isLoading:!1,redirect:!1,serie:{}},a.salvar=a.salvar.bind(Object(b.a)(Object(b.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.loadSeriesById(this.props.match.params.id).then(function(t){e.setState({serie:t.data}),e.refs.nome.value=e.state.serie.name,e.refs.comentario.value=e.state.serie.comments,e.refs.genero.value=e.state.serie.genre,e.refs.status.value=e.state.serie.status}),f.loadGenres().then(function(t){e.setState({isLoading:!1,genres:t.data})})}},{key:"salvar",value:function(){var e=this,t={id:this.props.match.params.id,name:this.refs.nome.value,status:this.refs.status.value,genre:this.refs.genero.value,comments:this.refs.comentario.value};f.updateSeries(t).then(function(t){e.setState({redirect:"/series/"+e.refs.genero.value})})}},{key:"render",value:function(){return r.a.createElement("section",{className:"intro-section"},this.state.redirect&&r.a.createElement(N.a,{to:this.state.redirect}),r.a.createElement("h1",null,"Editar S\xe9rie"),r.a.createElement("form",null,"Nome: ",r.a.createElement("input",{type:"text",ref:"nome",className:"form-control"})," ",r.a.createElement("br",null),"Status:",r.a.createElement("select",{ref:"status"},Object.keys(k).map(function(e){return r.a.createElement("option",{key:e,value:e},k[e])}))," ",r.a.createElement("br",null),"G\xeanero:",r.a.createElement("select",{ref:"genero"},this.state.genres.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))," ",r.a.createElement("br",null),"Coment\xe1rios: ",r.a.createElement("textarea",{defaultValue:this.state.serie.name,ref:"comentario",className:"form-control"})," ",r.a.createElement("br",null),r.a.createElement("button",{type:"button",onClick:this.salvar},"Salvar")))}}]),t}(n.Component),L=function(){return r.a.createElement("section",{className:"intro-section"},r.a.createElement("h1",null,"Sobre"))},x=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar navbar-default navbar-fixed-top",role:"navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header page-scroll"},r.a.createElement("a",{className:"navbar-brand page-scroll",href:"#page-top"},r.a.createElement("img",{src:"/images/logo.png",height:"30",alt:""}))),r.a.createElement("div",{className:"collapse navbar-collapse navbar-ex1-collapse"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",null,r.a.createElement(h.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(h.a,{to:"/nova"},"Nova S\xe9rie")),r.a.createElement("li",null,r.a.createElement(h.a,{to:"/sobre"},"Sobre")))))),r.a.createElement(v.a,{exact:!0,path:"/",component:g}),r.a.createElement(v.a,{path:"/series-editar/:id",component:w}),r.a.createElement(v.a,{path:"/series/:genre",component:y}),r.a.createElement(v.a,{exact:!0,path:"/nova",component:j}),r.a.createElement(v.a,{exact:!0,path:"/sobre",component:L})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.35a1b6bf.chunk.js.map