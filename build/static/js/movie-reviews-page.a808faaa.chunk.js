(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{105:function(e,t,a){e.exports={reviewsList:"MovieReviewsPage_reviewsList__k0cLu",noReviews:"MovieReviewsPage_noReviews__1XFZk"}},108:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(17),i=a(19),s=a(18),c=a(20),o=a(0),u=a.n(o),v=a(21),l=a(105),h=a.n(l),w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={reviews:[]},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match;v.c(t.params.movieID).then((function(t){var a=t.data;return e.setState({reviews:a.results})})).catch((function(e){throw new Error(e)}))}},{key:"render",value:function(){var e=this.state.reviews;return u.a.createElement(u.a.Fragment,null,e.length>0?u.a.createElement("ul",{className:h.a.reviewsList},e.map((function(e){return u.a.createElement("li",{key:e.id},u.a.createElement("h3",null,e.author),u.a.createElement("p",null,e.content))}))):u.a.createElement("p",{className:h.a.noReviews},"We don't have any reviews for this movie."))}}]),t}(o.Component);t.default=w}}]);
//# sourceMappingURL=movie-reviews-page.a808faaa.chunk.js.map