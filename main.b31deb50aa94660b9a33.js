(()=>{"use strict";var e=document.querySelector(".page"),t=e.querySelector(".elements"),n=e.querySelector(".element-template"),r=e.querySelector(".popup__link-card"),o=e.querySelector(".popup__name-card"),a=e.querySelector(".popup__photo"),c=e.querySelector(".popup__name-photo"),u=e.querySelector(".popup-map-enlargement"),i=e.querySelector(".profile__edit-button"),l=e.querySelector(".popup-profile"),s=e.querySelector(".popup__form-profile"),p=e.querySelector(".popup__name"),f=e.querySelector(".popup__description"),d=e.querySelector(".profile__name"),v=e.querySelector(".profile__description"),_=e.querySelector(".profile__add-button"),m=e.querySelector(".popup-card"),y=e.querySelector(".popup__form-card"),h=document.querySelectorAll(".popup__close"),S={saveAvatarButton:e.querySelector(".popup__save-avatar"),saveProfileButton:e.querySelector(".popup__save-profile"),saveCardButton:e.querySelector(".popup__save-card")},b=e.querySelector(".popup__save-card"),q=e.querySelector(".popup__save-avatar"),g=e.querySelector(".profile__avatar-replacement_hidden"),C=e.querySelector(".popup-avatar"),k=e.querySelector(".popup__form-avatar"),E=e.querySelector(".popup__link-avatar"),L=e.querySelector(".profile__url"),A=Array.from(e.querySelectorAll(".popup"));function j(e){e.classList.add("popup_opened"),document.addEventListener("keydown",w)}function x(e){e.classList.remove("popup_opened"),document.addEventListener("keydown",w)}function w(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");null!==t&&x(t)}}function P(e){e.classList.add("popup__save_inactive"),e.setAttribute("disabled",!0)}var B={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-10",headers:{authorization:"7ca6e575-6c23-4ba6-b3c7-38c09561d9da","Content-Type":"application/json"}};function U(e){return fetch("".concat(B.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:B.headers}).then((function(e){if(e.ok)return e.json();new Promise.reject("Ошибка: ".concat(e.status))}))}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){var r=n.content.querySelector(".element").cloneNode(!0),o=r.querySelector(".element__icon-heart"),i=r.querySelector(".element__number-of-likes");r.querySelector(".element__name").textContent=e.name,r.querySelector(".element__photo").src=e.link,r.querySelector(".element__photo").alt=e.name,i.textContent=e.likes.length,o.addEventListener("click",(function(t){var n;t.target.classList.toggle("element__icon-heart_active"),t.target.classList.contains("element__icon-heart_active")?U(e._id).then((function(e){i.textContent=e.likes.length,console.log(U)})):(n=e._id,fetch("".concat(B.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:B.headers}).then((function(e){if(e.ok)return e.json();new Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){i.textContent=e.likes.length}))}));var l,s=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw a}}}}(e.likes);try{for(s.s();!(l=s.n()).done;)l.value._id===t&&o.classList.toggle("element__icon-heart_active")}catch(e){s.e(e)}finally{s.f()}return e.owner._id===t&&(r.querySelector(".element__urn").classList.add("element__urn_hidden"),r.querySelector(".element__urn").addEventListener("click",(function(t){var n;(n=e._id,fetch("".concat(B.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:B.headers}).then((function(e){if(e.ok)return e.json();new Promise.reject("Ошибка: ".concat(e.status))}))).then((function(){t.target.parentNode.remove()})).catch((function(e){return console.log(e)}))}))),r.querySelector(".element__photo").addEventListener("click",(function(){j(u),a.src=e.link,a.alt=e.name,c.textContent=e.name})),r}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([fetch("".concat(B.baseUrl,"/cards"),{headers:B.headers}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status))})),fetch("".concat(B.baseUrl,"/users/me"),{headers:B.headers}).then((function(e){if(e.ok)return e.json();Promise.reject("Ошибка: ".concat(e.status))}))]).then((function(e){var n,a,c=(a=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,u=[],i=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return u}}(n,a)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=c[0],i=c[1];u.forEach((function(e){var n=T(e,i._id);t.append(n)})),d.textContent=i.name,v.textContent=i.about,L.setAttribute("src",i.avatar),y.addEventListener("submit",(function(e){var n,a;e.preventDefault(),S.saveCardButton.textContent="Сохранение...",(n=o.value,a=r.value,fetch("".concat(B.baseUrl,"/cards"),{method:"POST",headers:B.headers,body:JSON.stringify({name:n,link:a})}).then((function(e){return e.ok?e.json():new Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){!function(e,n){var r=T(e,n);t.prepend(r),x(m)}(e,i._id)})).catch((function(e){console.log(e)})).finally((function(){S.saveCardButton.textContent="Сохранить"})),e.target.reset()}))})),s.addEventListener("submit",(function(e){var t,n;e.preventDefault(),S.saveProfileButton.textContent="Сохранение...",(t=p.value,n=f.value,fetch("".concat(B.baseUrl,"/users/me"),{method:"PATCH",headers:B.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){if(e.ok)return e.json();new Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){!function(e){d.textContent=e.name,v.textContent=e.about,x(l)}(e)})).catch((function(e){console.log(e)})).finally((function(){S.saveProfileButton.textContent="Сохранить"}))})),k.addEventListener("submit",(function(e){var t;e.preventDefault(),S.saveAvatarButton.textContent="Сохранение...",(t=E.value,fetch("".concat(B.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:B.headers,body:JSON.stringify({avatar:t})}).then((function(e){if(e.ok)return e.json();new Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){!function(e){L.setAttribute("src",e.avatar),x(C)}(e)})).catch((function(e){console.log(e)})).finally((function(){S.saveAvatarButton.textContent="Сохранить"})),e.target.reset()})),h.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return x(t)}))})),A.forEach((function(e){e.addEventListener("click",(function(t){t.target.classList.contains("popup")&&x(e)}))})),_.addEventListener("click",(function(){j(m),P(b)})),i.addEventListener("click",(function(){j(l),p.value=d.textContent,f.value=v.textContent})),g.addEventListener("click",(function(){j(C),P(q)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent="",r.classList.remove(n.errorClass)}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled",!0))}(n,r,t)}))}))}(t,e)}))}({formSelector:".popup__form",inputSelector:".popup__filler",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_inactive",inputErrorClass:"popup__filler_type_error",errorClass:"popup__input-error_active"})})();