/*! For license information please see main.8d744276a74a33c92ac3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateoguzsancaktar("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var n=s("./node_modules/lodash/each.js"),l=s.n(n),o=s("./node_modules/gsap/index.js");class i{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t},this.id=s}create(){this.element=document.querySelector(this.selector),this.elements={},l()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:this.elements[t]=this.element.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=this.elements[t][0])}))}show(){return new Promise((e=>{o.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1,duration:1,onComplete:e})}))}hide(){return new Promise((e=>{o.default.to(this.element,{autoAlpha:0,duration:1,onComplete:e})}))}}}},(function(e){e.h=()=>"53081ffefdf4d53f1c19"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ZDc0NDI3NmE3NGEzM2M5MmFjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OE1BR2UsTUFBTUEsRUFDbkJDLGFBQWEsUUFBRUMsRUFBTyxTQUFFQyxFQUFRLEdBQUVDLElBQ2hDQyxLQUFLQyxTQUFXSixFQUNoQkcsS0FBS0UsaUJBQW1CLElBQUtKLEdBQzdCRSxLQUFLRCxHQUFLQSxDQUNaLENBRUFJLFNBQ0VILEtBQUtILFFBQVVPLFNBQVNDLGNBQWNMLEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLENBQUMsRUFFakJRLElBQUtOLEtBQUtFLGtCQUFrQixDQUFDSyxFQUFPQyxLQUM5QkQsYUFBaUJFLE9BQU9DLGFBQWVILGFBQWlCRSxPQUFPRSxVQUFZQyxNQUFNQyxRQUFRTixHQUMzRlAsS0FBS0YsU0FBU1UsR0FBT0QsRUFFckJQLEtBQUtGLFNBQVNVLEdBQU9SLEtBQUtILFFBQVFpQixpQkFBaUJQLEdBR25CLElBQTlCUCxLQUFLRixTQUFTVSxHQUFLTyxPQUNyQmYsS0FBS0YsU0FBU1UsR0FBTyxLQUNrQixJQUE5QlIsS0FBS0YsU0FBU1UsR0FBS08sU0FDNUJmLEtBQUtGLFNBQVNVLEdBQU9SLEtBQUtGLFNBQVNVLEdBQUssR0FDMUMsR0FFSixDQUVBUSxPQUNFLE9BQU8sSUFBSUMsU0FBUUMsSUFDakJDLEVBQUFBLFFBQUFBLE9BQVluQixLQUFLSCxRQUNmLENBQ0V1QixVQUFXLEdBRWIsQ0FDRUEsVUFBVyxFQUNYQyxTQUFVLEVBQ1ZDLFdBQVlKLEdBQ1osR0FFUixDQUVBSyxPQUNFLE9BQU8sSUFBSU4sU0FBUUMsSUFDakJDLEVBQUFBLFFBQUFBLEdBQVFuQixLQUFLSCxRQUFTLENBQ3BCdUIsVUFBVyxFQUNYQyxTQUFVLEVBQ1ZDLFdBQVlKLEdBQ1osR0FFTixrQkNuREZNLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZ3V6c2FuY2FrdGFyLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9vZ3V6c2FuY2FrdGFyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvciAoeyBlbGVtZW50LCBlbGVtZW50cywgaWQgfSkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0geyAuLi5lbGVtZW50cyB9XG4gICAgdGhpcy5pZCA9IGlkXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcilcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8IGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8IEFycmF5LmlzQXJyYXkoZW50cnkpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IHRoaXMuZWxlbWVudHNba2V5XVswXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzaG93ICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBHU0FQLmZyb21Ubyh0aGlzLmVsZW1lbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUgKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIEdTQVAudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTMwODFmZmVmZGY0ZDUzZjFjMTlcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJHU0FQIiwiYXV0b0FscGhhIiwiZHVyYXRpb24iLCJvbkNvbXBsZXRlIiwiaGlkZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==