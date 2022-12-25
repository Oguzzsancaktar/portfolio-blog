/*! For license information please see main.6494842ace374a105d8d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateoguzsancaktar("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./node_modules/lodash/each.js"),n=s.n(i),l=s("./node_modules/gsap/index.js"),r=s("./node_modules/prefix/index.js"),o=s.n(r);class a{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t},this.id=s,this.transformPrefix=o()("transform"),this.onMouseWheel=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},n()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:this.elements[t]=this.element.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=this.elements[t][0])}))}show(){return new Promise((e=>{this.animationIn=l.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1,duration:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.animationOut=l.default.timeline(),this.animationOut.to(this.element,{autoAlpha:0,duration:1}),this.animationOut.call((t=>{this.removeEventListeners(),e()}))}))}onResize(){this.elements?.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight)}onMouseWheel(e){const{deltaY:t}=e;this.scroll.target+=t}update(){this.scroll.target=l.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=l.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(${-this.scroll.current}px)`)}addEventListeners(){window.addEventListener("wheel",this.onMouseWheel)}removeEventListeners(){window.removeEventListener("wheel",this.onMouseWheel)}}}},(function(e){e.h=()=>"68c7c57b403a58a482db"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NDk0ODQyYWNlMzc0YTEwNWQ4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NlBBSWUsTUFBTUEsRUFDbkJDLGFBQWEsUUFBRUMsRUFBTyxTQUFFQyxFQUFRLEdBQUVDLElBQ2hDQyxLQUFLQyxTQUFXSixFQUNoQkcsS0FBS0UsaUJBQW1CLElBQUtKLEdBQzdCRSxLQUFLRCxHQUFLQSxFQUVWQyxLQUFLRyxnQkFBa0JDLElBQU8sYUFFOUJKLEtBQUtLLGFBQWVMLEtBQUtLLGFBQWFDLEtBQUtOLEtBQzdDLENBRUFPLFNBQ0VQLEtBQUtILFFBQVVXLFNBQVNDLGNBQWNULEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLENBQUMsRUFFakJFLEtBQUtVLE9BQVMsQ0FDWkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sRUFDTkMsTUFBTyxHQUdUQyxJQUFLZixLQUFLRSxrQkFBa0IsQ0FBQ2MsRUFBT0MsS0FDOUJELGFBQWlCRSxPQUFPQyxhQUFlSCxhQUFpQkUsT0FBT0UsVUFBWUMsTUFBTUMsUUFBUU4sR0FDM0ZoQixLQUFLRixTQUFTbUIsR0FBT0QsRUFFckJoQixLQUFLRixTQUFTbUIsR0FBT2pCLEtBQUtILFFBQVEwQixpQkFBaUJQLEdBR25CLElBQTlCaEIsS0FBS0YsU0FBU21CLEdBQUtPLE9BQ3JCeEIsS0FBS0YsU0FBU21CLEdBQU8sS0FDa0IsSUFBOUJqQixLQUFLRixTQUFTbUIsR0FBS08sU0FDNUJ4QixLQUFLRixTQUFTbUIsR0FBT2pCLEtBQUtGLFNBQVNtQixHQUFLLEdBQzFDLEdBRUosQ0FFQVEsT0FDRSxPQUFPLElBQUlDLFNBQVFDLElBQ2pCM0IsS0FBSzRCLFlBQWNDLEVBQUFBLFFBQUFBLFdBRW5CN0IsS0FBSzRCLFlBQVlFLE9BQU85QixLQUFLSCxRQUMzQixDQUNFa0MsVUFBVyxHQUViLENBQ0VBLFVBQVcsRUFDWEMsU0FBVSxJQUlkaEMsS0FBSzRCLFlBQVlLLE1BQUtDLElBQ3BCbEMsS0FBS21DLG9CQUNMUixHQUFTLEdBQ1QsR0FFTixDQUVBUyxPQUNFLE9BQU8sSUFBSVYsU0FBUUMsSUFDakIzQixLQUFLcUMsYUFBZVIsRUFBQUEsUUFBQUEsV0FFcEI3QixLQUFLcUMsYUFBYUMsR0FBR3RDLEtBQUtILFFBQVMsQ0FDakNrQyxVQUFXLEVBQ1hDLFNBQVUsSUFHWmhDLEtBQUtxQyxhQUFhSixNQUFLQyxJQUNyQmxDLEtBQUt1Qyx1QkFDTFosR0FBUyxHQUNULEdBRU4sQ0FFQWEsV0FDTXhDLEtBQUtGLFVBQVUyQyxVQUNqQnpDLEtBQUtVLE9BQU9JLE1BQVFkLEtBQUtGLFNBQVMyQyxRQUFRQyxhQUFleEIsT0FBT3lCLFlBRXBFLENBRUF0QyxhQUFjdUMsR0FDWixNQUFNLE9BQUVDLEdBQVdELEVBRW5CNUMsS0FBS1UsT0FBT0UsUUFBVWlDLENBQ3hCLENBRUFDLFNBQ0U5QyxLQUFLVSxPQUFPRSxPQUFTaUIsRUFBQUEsUUFBQUEsTUFBQUEsTUFBaUIsRUFBRzdCLEtBQUtVLE9BQU9JLE1BQU9kLEtBQUtVLE9BQU9FLFFBRXhFWixLQUFLVSxPQUFPQyxRQUFVa0IsRUFBQUEsUUFBQUEsTUFBQUEsWUFBdUI3QixLQUFLVSxPQUFPQyxRQUFTWCxLQUFLVSxPQUFPRSxPQUFRLElBRWxGWixLQUFLVSxPQUFPQyxRQUFVLE1BQ3hCWCxLQUFLVSxPQUFPQyxRQUFVLEdBR3BCWCxLQUFLRixTQUFTMkMsVUFDaEJ6QyxLQUFLRixTQUFTMkMsUUFBUU0sTUFBTS9DLEtBQUtHLGlCQUFvQixlQUFjSCxLQUFLVSxPQUFPQyxhQUVuRixDQUVBd0Isb0JBQ0VqQixPQUFPOEIsaUJBQWlCLFFBQVNoRCxLQUFLSyxhQUN4QyxDQUVBa0MsdUJBQ0VyQixPQUFPK0Isb0JBQW9CLFFBQVNqRCxLQUFLSyxhQUMzQyxrQkM5R0Y2QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2d1enNhbmNha3Rhci8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vb2d1enNhbmNha3Rhci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuICBjb25zdHJ1Y3RvciAoeyBlbGVtZW50LCBlbGVtZW50cywgaWQgfSkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0geyAuLi5lbGVtZW50cyB9XG4gICAgdGhpcy5pZCA9IGlkXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblxuICAgIHRoaXMub25Nb3VzZVdoZWVsID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKVxuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fCBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fCBBcnJheS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGxcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSB0aGlzLmVsZW1lbnRzW2tleV1bMF1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2hvdyAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmZyb21Ubyh0aGlzLmVsZW1lbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgICBkdXJhdGlvbjogMVxuXG4gICAgICAgIH0pXG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbChfID0+IHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgaGlkZSAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKClcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgZHVyYXRpb246IDFcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0LmNhbGwoXyA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uUmVzaXplICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cz8ud3JhcHBlcikge1xuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVdoZWVsIChldmVudCkge1xuICAgIGNvbnN0IHsgZGVsdGFZIH0gPSBldmVudFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRlbHRhWVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKDAsIHRoaXMuc2Nyb2xsLmxpbWl0LCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIDAuMSlcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4wMSkge1xuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IDBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoJHstdGhpcy5zY3JvbGwuY3VycmVudH1weClgXG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsKVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2OGM3YzU3YjQwM2E1OGE0ODJkYlwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJvbk1vdXNlV2hlZWwiLCJiaW5kIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsaW1pdCIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uSW4iLCJHU0FQIiwiZnJvbVRvIiwiYXV0b0FscGhhIiwiZHVyYXRpb24iLCJjYWxsIiwiXyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsImFuaW1hdGlvbk91dCIsInRvIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJvblJlc2l6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImV2ZW50IiwiZGVsdGFZIiwidXBkYXRlIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==