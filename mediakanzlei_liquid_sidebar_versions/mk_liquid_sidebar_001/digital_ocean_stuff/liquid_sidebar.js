// Schaut wie gross der Browser ist und ladet wenn es genug Platz das Iframe / Werbebanner
var widthscreen = window.innerWidth;

// if (widthscreen > 1615) {
// Schiebt den Content der Seite auf die linke Seite
  document.querySelector(".page.container.container--page")
    .setAttribute("style", "margin-left: 0; margin-right: 0; left: 0; width: 1215px");
// Erstellt das Iframe
  createIframe();
// }

// Funktion für das erstellen des Iframe / Werbebanners
function createIframe() {
  var ifrm = document.createElement("div");
  ifrm.innerHTML = "<iframe src=\"https://mkcdn.ams3.digitaloceanspaces.com/mediakanzlei_liquid_sidebar_test/mediakanzlei_liquid_sidebar001/index.html\" id=\"iframeId\" style=\"position: fixed; top: 0; right: 0; width: calc(100% - 1215px); height: 100vh; z-index: 99999; border: none;\"></iframe>"


  /* Das Iframe wird dem script tag bei dessen Ausführung hinzugefügt. **** Es lässt sich so NICHT in der Console checken, ob es funktioniert und es muss eine Testsite eröffnet werden */

  // document.getElementById('iframe_test').style.display = "block";
  // document.getElementById('iframe_test').appendChild(ifrm);

  /* mit dem Code lässt sich das iframe local testen */

  document.getElementsByClassName("main-wrapper")[0].appendChild(ifrm);

  /* mit dem Code lässt sich das iframe local testen */

  createButton();
  scrollPosition();
  window.addEventListener("scroll", scrollPosition);
}

// Checked bei einer Vergösserung / Verkleinerung des Browsers ob genug Platz für das Iframe
// vorhanden ist und entfernt oder platziert das Iframe gegebenenfalls
// function resize() {
//   var widthscreen = window.innerWidth;;
//   var iframeExist = document.querySelector('#iframeId');
//   if (widthscreen < 1615 && (iframeExist)) {
//     var elem = document.querySelector('#iframeId');
//     elem.parentNode.removeChild(elem);
//     var btn = document.querySelector('#closebutton');
//     btn.parentNode.removeChild(btn);
//     document.querySelector(".page.container.container--page")
//     .setAttribute("style", "margin: auto");
//     window.removeEventListener("scroll", scrollPosition);
//   }
//   if (widthscreen > 1615 && (iframeExist === null)) {
//     document.querySelector(".page.container.container--page")
//     .setAttribute("style", "margin-left: 0; margin-right: 0; left: 0; width: 1215px");
// // Erstellt das Iframe / Werbebanner
//     createIframe();
//     scrollPosition();
//   }
// }

// Checked die Bildschirmposition beim scrollen und passt gegebenenfalls die Position des Iframes an
function scrollPosition(){
  var footerPos = window.pageYOffset + window.innerHeight;
  var adTop = document.body.scrollHeight - 562;
  var closebtn = document.getElementById("closebutton");
  var topFooter = adTop - footerPos;
  var element = document.getElementById("iframeId");

  if(window.pageYOffset >= 0 && window.pageYOffset <= footerPos){
  closebtn.style.setProperty('top', (120 - window.pageYOffset) + 'px');
  }
  if(window.pageYOffset > 120) {
  closebtn.style.top = "0px";
  }
  if(footerPos >= adTop){
  closebtn.style.setProperty('top', topFooter + 'px');
  }

  var element = document.getElementById("iframeId");
  if(window.pageYOffset >= 0 && window.pageYOffset <= footerPos){
    element.style.setProperty('top', (120 - window.pageYOffset) + 'px');
  }
  if(window.pageYOffset > 120) {
    element.style.top = "0px";
  }
  if(footerPos >= adTop){
    element.style.setProperty('top', topFooter + 'px');
  }
}

// Erstellt den Close Button für das Iframe / Werbebanner
function createButton() {
  var closeButton = document.createElement("img");
  closeButton.setAttribute("id", "closebutton");
  closeButton.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAQAAABecRxxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCBUPNRKaOwiGAAAY+ElEQVR42u3dT4jd5b3H8e/vmMSLV4hJyDADEi+JNpUS0oVdVBvwupFCNoUyi5tFwLvIKptSKBR6L5iFLlwECmkXTamiDQqlLkLp3XgJF++mLgppMbFG4k1hxhhNg6amyUy+d3HmzJwzc/78/jzP833+vF8LTSaozzzf7+fj70wmM5U4oI/Jk7Ig8zK//tdKlmVJltf/erm64uK/BJRBD8jBkUTNi44kaknerz62PmRPn9GX9KLWcUlf0Wd1m/XFAjHTbfqsvqKXamXqor6kz2jP4pg7dVFf0xu1jjnspp7TY7rb+pqB2OhuPabn9GbjTN3Q13RRd4Y76EF9U+82PuawFX1bD1lfOBALPaRv60qnTN3VN/Wg/4Pu07MdDzqwqq/rfuuLB6zpfn1dV51kakXP6j5/B53T03rHyUE3WuuMLlgPALCiC3qm49P0Znf0tM65P+hOPaVfOD3owG19WXdZDwIITXfpy3rbS6a+0FNOPyagR/QTLwcduKHPWY8DCEmfa/Eh9CY+0SOujnrC8UPKOPf0pPVIgFD0pN7znqm7eqL7QbfrGe8HHTirO6wHA/imO/RssEyd0e1djrpXLwQ7qqrquzpvPR7AJ53Xd4Nm6oLubXvUw3o16FFVVa/pU9YjAnzRp/Ra8Exd1cNtjnrU00coZ/lKF63HBPigi/qVSaZu69GmRz1sFH9V1RU9Zj0qwDU95uhT6NpVQJOnAN1r8PBPBSBjpvFXVb1a+2MBuj3wh/6oAGTOPP6qqhdq/o5AwN/4m4YKQCaiiL+q6pk6hz1hfcp1VAAyEE38VXXmpwbpkQCf9VcfFYDERRV/1bubP0G4GjnsTvlA3P9Joi5W5Xj1hvUhgHb0mLwqD1ifYsR1+Vp1a+Ono19O6IeRxV/kAXmVpwCkKcL4i8zJD4d/OvQEoHNyRR62Pt8YPAUgQVHGX0TkSzlQXR/8ZPgJ4MdRxp+nACQo2viLPCw/3vjJ+hOA7pMP5EHrs03EUwASEnH8RUT+IU9U1/o/3HgC+I+I489TABISefxFHpT/HPxw7QlAD8qfoz6yCE8BSEL08RcRWZVvVJdFNp4AXoz+yDwFIAFJxF/kAXmx/4NKRER3yqfS5SuHhMNTACKWSPxFRO7J3urW4Ang+UTiz1MAIpZQ/EW2y/MigwJo+uUCLFEBiFJS8RdZS30loj25LnusT9MILwQQmeTiL/KZzFX3eyLy7cTiz1MAIpNg/EX2yLf7LwFSegEwQAUgGknGX0TkaLoFQAUgEsnGX+SoSKWPyVXrc7TGxwJgLOH4i4j8S0+etD5DBzwFwFTi8Rd5sidpf3tuKgBmko+/yEJPUv9mXFQATGQQf5H59AuACoCBLOIvMp/6S4A+KgBBZRL/LF4C9FEBCCab+GfyEqCPCkAQGcVfZL7SLyL9SoBt8HkB8Cyr+It82Rv9zgCJ4ykAXmUWf5GqJ8vWZ3CKCoA32cVfZLknS9ZncIwKgBcZxl9kKbcnABEqAB5kGX+R5RwLgAqAY5nGP8uXAH1UAJzJNv6ZvgToowLgRMbxz/YlQB8VgM6yjr/Ick8uW5/BIyoAnWQef5HLveoKFQCMk3/8qys9ETlvfQ6vqAC0kn38Rc73vyho3gVABaCFAuIvcr7/jUG2yafyiPVZPOOPCaGBIuL/N9lbrfREqhX5vfVZvOMpALUVEX+R31crg+8NmPuLABEqADUVEv+11Pe/PfhuuV7Eu8wLAcxQTPxXZa76fO0JoPq8iGcAngIwQzHxFzlffS4igy8Hoofkj2svB3LHUwAmKCj+9+Wb1UWRwccApLoo56zPFAhPARiroPiLnOvHXza+IJjul0uy3fpcgfAUgE2Kiv89+Xr1Uf+H64/91UfyC+tzBcNTAEYUFX+RXwziL8NfElQX5EN5yPpswfAUgDWFxf/v8ni1/lVAhj7wVy3JT63PFhBPARCR4uIv8tNq6IsAjXxRcN0lf5E91ucLiKeA4hUX/8/kiermxk9HfuuvuimLsmJ9woB4CihccfFfkcXh+Mvm3/uv3pEfWJ8xKCqgYMXFX+QH1TujbxjzfYH0rLxgfc6geCFQpALj/8vq3ze/aVwB7JD/lqetzxoUFVCcAuP/v/Kv1d3Nbxz7nQF1Xv4gj1qfNygqoCgFxv+v8q1qzBcAHvv5/9WyfE/uWJ84KD4WUJAC439HvleN/frfE/4AUPWeHJdV61MHRQUUosD4r8rx6r3xvzTxTwBWb1EByE+h8X9r0i9W0/7JQi+LjwVki43erJr+T3NhyAfbvFU169/ApSEPbPI4MwuAi0MO2OLxahQAl4fUscGT1CoALhApY3snq1kAXCJSxeZOU7sAuEikiK2drkEBcJlIDRs7S6MC4EKRErZ1toYFwKUiFWxqHY0LgItFCtjSeloUAJeL2LGhdbUqAC4YMWM762tZAFwyYsVmNtG6ALhoxIitbKZDAXDZiA0b2VSnAuDCERO2sbmOBcClIxZsYhudC4CLRwzYwnYcFACXD2tsYFtOCoABwBLb156jAmAIsMLmdeGsABgELLB13TgsAIaB0Ni4rpwWAANBSGxbd44LgKEgFDbNBecFwGAQAlvmhocCYDjwjQ1zxUsBMCD4xHa546kAGBJ8YbNc8lYADAo+sFVueSwAhgXX2CjXvBYAA4NLbJN7nguAocEVNskH7wXA4OACW+RHgAJgeOiKDfIlSAEwQHTB9vgTqAAYItpic3wKVgAMEm2wNX4FLACGiabYGN+CFgADRRNsi3+BC4Choi42JYTgBcBgUQdbEoZBATBczMKGhGJSAAwY07Ad4RgVAEPGJGxGSGYFwKAxDlsRlmEBMGxsxkaEZloADBzD2IbwjAuAoWOATbBgXgAMHiJsgZUICoDhgw2wEkUBsABlY/p2IikAlqBcTN5SNAXAIpSJqduKqABYhvIwcWtRFQALURambS+yAmApysGkYxBdAbAYZWDKcYiwAFiO/DHhWERZACxI3phuPCItAJYkX0w2JtEWAIuSJ6Yal4gLgGXJDxONTdQFwMLkhWnGJ/ICYGnywSRjFH0BsDh5YIpxSqAAWJ70McFYJVEALFDamF68EikAlihdTC5myRQAi5Qmpha3hAqAZUoPE4tdUgXAQqWFacUvsQJgqdLBpFKQXAGwWGlgSmlIsABYrvgxoVQkWQAsWNyYTjoSLQCWLF5MJiXJFgCLFiemkpaEC4Bliw8TSU3SBcDCxYVppCfxAmDp4sEkUpR8AbB4cWAKacqgAFg+e0wgVVkUAAtoi9tPVyYFwBLa4eZTlk0BsIg2uPW0ZVQALGN43HjqsioAFjIsbjt9mRUASxkON52D7AqAxQyDW85DhgXAcvrHDeciywJgQf3idvORaQGwpP5wsznJtgBYVD+41bxkXAAsq3vcaG6yLgAW1i1uMz+ZFwBL6w43maPsC4DFdYNbzFMBBcDydscN5qqIAmCBu+H28lVIAbDE7XFzOSumAFjkdri1vBVUACxzc9xY7ooqABa6GW4rf4UVAEtdHzdVguIKgMWuh1sqQ4EFwHLPxg2VosgCYMGn43bKUWgBsOSTcTMlKbYAWPTxuJWyFFwALPtW3Ehpii4AFp7bKDv+xRcAS89NWB/CVvEFwOJzCyWjAITl5wbKRQGISOkBKPu9LxsFsKbcEJT7noMCGFJmEERKfK+J/wAFMKTICpDi3mPiP4QCGFFgBZSF+G9CAWxCBWSM+G9BAWxBBWSK+I9BAYxBBWSI+I9FAYxFBWSG+E9AAUxABWSE+E9EAUxEBWSC+E9BAUxBBWSA+E9FAUxFBSSO+M9AAcxABSSM+M9EAcxEBSSK+NdAAdRABSSI+NdCAdRCBSSG+NdEAdREBSSE+NdGAdRGBSSC+DdAATRABSSA+DdCATRCBUSO+DdEATREBUSM+DdGATRGBUSK+LdAAbRABUSI+LdCAbRCBUSG+LdEAbREBUSE+LdGAbRGBUSC+HdAAXRABUSA+HdCAXRCBRgj/h1RAB1RAYaIf2cUQGdUgBHi7wAF4AAVYID4O0EBOEEFBEb8HaEAHKECAiL+zlAAzlABgRB/hygAh6iAAIi/UxSAU1SAZ8TfMQrAMSrAI+LvHAXgHBXgCfH3gALwgArwgPh7QQF4QQU4Rvw9oQA8oQIcIv7eUADeUAGOEH+PKACPqAAHiL9XFIBXVEBHxN8zCsAzKqAD4u8dBeAdFdAS8Q+AAgiACmiB+AdBAQRBBTRE/AOhAAKhAhog/sFQAMFQATUR/4AogICogBqIf1AUQFBUwAzEPzAKIDAqYAriHxwFEBwVMAHxN0ABGKACxiD+JigAE1TAJsTfCAVghAoYQvzNUABmqIA1xN8QBWCIChDib4wCMFV8BRB/YxSAsaIrgPibowDMFVsBxD8CFEAEiqwA4h+FnvUBANjhCcBckf//F+EZIAoUgLFi4y9CBUSAAjBVdPxFqABzFICh4uMvQgUYowDMEP81VIAhCsAI8R9CBZihAEwQ/02oACMUgAHiPwYVYIICCI74T0AFGKAAAiP+U1ABwVEAQRH/GaiAwCiAgIh/DVRAUBRAMMS/JiogIAogEOLfABUQDAUQBPFviAoIhAIIgPi3QAUEQQF4R/xbogICoAA8I/4dUAHeUQBeEf+OqADPKACPiL8DVIBXFIA3xN8RKsAjCsAT4u8QFeANBeAF8XeMCvCEAvCA+HtABXhBAThH/D2hAjygABwj/h5RAc5RAE4Rf8+oAMcoAIeIfwBUgFMUgDPEPxAqwCEKwBHiHxAV4AwF4ATxD4wKcIQCcID4G6ACnKAAOiP+RqgAByiAjoi/ISqgMwqgE+JvjAroiALogPhHgArohAJojfhHggrogAJoifhHhApojQJohfhHhgpoiQJogfhHiApohQJojPhHigpogQJoiPhHjApojAJohPhHjgpoiAJogPgngApohAKojfgnggpogAKoifgnhAqojQKohfgnhgqoiQKogfgniAqohQKYifgnigqogQKYgfgnjAqYiQKYivgnjgqYgQKYgvhngAqYigKYiPhnggqYggKYgPhnhAqYiAIYi/hnhgqYgAIYg/hniAoYiwLYgvhnigoYgwLYhPhnjArYggIYQfwzRwVsQgEMKTD+qyLFvcdUwBAKYF2R8T8uUuJ7TQUMbLM+QCzKjH/1hoiWVgEPyKsqVEAfTwAiUnL8ee/LRgEIAeAGykUBsPzcQsGKLwAWn5soWeEFwNJzG2VXQNEFwMJvxo2UpuACYNnH4VbKUmwBsOiTcDMlKbQAWPJpuJ1yFFkALPgs3FApCiwAlrsObqkMxRUAi10XN1WCwgqApW6C28pfUQXAQjfFjeWuoAJgmdvg1vJWTAGwyG1xczkrpABY4i64vXwVUQAscFfcYK4KKACW1wVuMU/ZFwCL6wo3maPMC4CldYnbzE/WBcDCusaN5ibjAmBZfeBW85JtAbCovnCzOcm0AFhSn7jdfGRZACyob9xwLjIsAJYzBG45D9kVAIsZCjedg8wKgKUMidtOX1YFwEKGxo2nLqMCYBktcOtpy6YAWEQr3HzKMikAltASt5+uLAqABbTGBFKVQQGwfDFgCmlKvgBYvFgwiRQlXgAsXUyYRnqSLgAWLjZMJDUJFwDLFiOmkpZkC4BFixWTSUmiBcCSxYzppCPJAmDBYseEUpFgAbBcKWBKaUiuAFisVDCpFCRWACxVSphW/JIqABYqNUwsdgkVAMuUIqYWt2QKgEVKFZOLWSIFwBKljOnFK4kCYIFSxwRjlUABsDw5YIpxir4AWJxcMMkYRV4ALE1OmGZ8oi4AFiY3TDQ2ERcAy5IjphqXaAuARckVk41JpAXAkuSM6cYjygJgQXLHhGMRYQGwHCVgynGIrgBYjFIw6RhEVgAsRUmYtr2oCoCFKA0TtxZRAbAMJWLqtqIpABahVEzeUiQFwBKUjOnbiaIAWIDSsQFWIigAhg+2wIp5ATB49LEJFowLgKFjA9sQnmkBMHCMYiNCMywAho2t2IqwzAqAQWM8NiMkowJgyJiM7QjHpAAYMKZjQ0IxKACGi9nYkjCCFwCDRT1sSgiBC4Choj62xb+gBcBA0Qwb41vAAmCYaI6t8StYATBItMPm+BSoABgi2mN7/AlSAAwQ3bBBvgQoAIaH7tgiP7wXAIODG2ySD54LgKHBHbbJPa8FwMDgFhvlmscCYFhwj61yy1sBMCj4wWa55KkAGBL8Ybvc8VIADAh+sWGueCgAhgP/2DI3nBcAg0EYbJoLjguAoSActq07pwXAQBAWG9eVwwJgGAiPrevGWQEwCNhg87pwVAAMAXbYvvacFAADgC02sC0HBcDlwx5b2E7nAuDiEQc2sY2OBcClIx5sY3OdCoALR1zYyKY6FACXjfiwlc20LgAuGnFiM5toWQBcMuLFdtbXqgC4YMSNDa2rRQFwuYgfW1pP4wLgYpEGNrWOhgXApSIdbOtsjQqAC0Va2NhZGhQAl4n0sLXT1S4ALhJpYnOnqVkAXCLSxfZOVqsAuECkjQ2epEYBcHlIH1s83swC4OKQBzZ5nBkFwKUhH2zzVlMLgAtDXtjozaYUAJeF/LDVoyYWgC7Kr7ko5KfICvi36q3xvzShAPQp+R/5J+tzB0X8i1FgBdyRI9V7435hbAHovPxBHrU+c1DEvygFVsBf5VvV8tY397a+SXfIb4g/cla9Icdl1foUQT0qv9EdW988pgDkZ/K09WmDIv4FKrACnpafbX3jlgLQk/KC9UmDIv6FKrACXtCTW25h9Kf6nPyXbLM+Z0DEv2jFfSxgRZ6v3hl+w0gB6C75i+yxPmNAxL94xVXAZ/JEdXPjp6MvAX5E/FGW4l4I7JEfjbz/Gz/UBflQHrI+XzDEH2sKewr4uzxeLQ1+MvwE8BPijxIV9hTwkPxk6H0f/ED3yyXZbn22QIg/NinqKeCefL36qP/DjSeAF4k/ylXUU8B2eXH9/e7/TQ/JH8d+UlB+iD8mKOgp4L58s7oosvEEcIr4o3QFPQX05NTa+ywiorvlehHNR/wxQzFPAasyV30+eAL4biHvMvHHDMU8BTwg3xUZFMBR69MEQPxRSzEVcFREpBLRbfKpPGJ9Gs+IPxoo4oXA32RvtdITke8Qf2BYEU8Bj8h3+i8Bcn8BQPzRWBEVcLSEAiD+aKWACjgqUukB+dD6HB4Rf3SQ/ccCHu/JQeszeET80Un2TwEHezJvfQZviD86y7wC5vMtAOIPJ7KugPmeLFifwQviD2cyroCFPJ8AiD+cyrYCsnwJQPzhXKYVkOFLAOIPL7KsgIVKv5R/tj6FQ8QfHmX3eQG3e6LWZ3CI+MOr7J4CtCdL3f8tkSD+8C6zCljqyXL3f0sUiD+CyKoClnMpAOKPYDKqgOU8XgIQfwSVTQVk8RKA+CO4TCogg5cAxB8msqiA5F8CEH+YyaAClnryvvUZOiD+MJV8Bbzfqz6WP1mfoiXiD3NJV8Cfqo97InLe+hytEH9EIeEKON//oqApFgDxRzSSrYDz/W8M0pPrssf6LI0Qf0QmwT8m9JnMVfd7ItV9+Z31WRoh/ohOgk8Bv6vuD743YEovAog/opRcBZwXGXx78J3yqWy3Pk8txB8RS+iFwD3ZW91aewKobslvrc9TC/FH1BJ6CvhtdUtk7QlARA/Kn6NvLuKPBCTxFLAq36guiww+BiDVZfmV9ZlmHpn4IwFJPAX8qh//9ScAEd0nH8iD1ueaiPgjIZE/BfxDnqiu9X/YG7yt+j/5ufW5JiL+SErkTwE/H8R/6AlAROfkijxsfbYxiD8SFO1TwJdyoLo++Elv4+3VdTltfbYxiD+SFO1TwOmN+I88AYjoTvlA5qzPN4L4I2ERPgVcl6/1fwOwrzf8a9Ut+b7csz7hEOKPpEX3FHBPvj8c/zH0hMZiRY9Z3xfQlR7TFesorTtR58BnrE+pqsQf2YimAs7UO+52vWB9UuKPnERRARe07p/30b16lfgD7phXwFXd2+S4h/U28QfcMa2A23q46XGPGlXAV7poPSrAB13Ur4zif7TNcQ8bvBC4pk9ZjwnwRZ/Sa8EzdbXx//3Xj7s38IcD39V56xEBPum8vhs0UxcavfbfctztAX9T8KzusB4P4Jvu0LPBMnWm9kf+pxz4hN71ftB7etJ6MEAoelLvec/U3Vqf9lPruEf0E69HvaHPWY8ECEmf0xteM/WJHnF53J16Sr/wctDb+rLush4HEJru0pc9/U7bF3pKd7o/8Jye1jtOD3pXz+iC9SAAK7qgZxy/wL6jp9Xfn+jVfXrW0aczrOrrut96AIA13a+v66qTTK3oWd3n/8AH9c2OrbWib+sh64sHYqGH9O2O/2O9q2/qwXAH3qmL+lqLD2Pc1HN6THdbXzgQG92tx/Sc3mycqRv6mi56eM1f48g9fUZf0ou1jnlJX9FndZv1NQMx0236rL6il2pl6qK+pM9or8t/r+ryD68f+jF5UhZkXubX/1rJsizJ8vpfL1dXrK8WSIcekIMjiZoXHUnUkrxffdz9v/P/c5P6DAkOf2sAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDgtMjFUMTU6NTM6MTgrMDI6MDD/w6ZKAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA4LTIxVDE1OjUzOjE4KzAyOjAwjp4e9gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=");
  closeButton.style.position = "fixed";
  closeButton.style.top = "120px";
  closeButton.style.right = "0";
  closeButton.style.width = "1vw";
  closeButton.style.height = "1vw";
  closeButton.style.marginRight = "1%";
  closeButton.style.marginTop = "1%";
  closeButton.style.zIndex = "99999";
  closeButton.style.cursor = "pointer";
  document.body.appendChild(closeButton);
  document.getElementById("closebutton").addEventListener("click", function() {
    var elem = document.querySelector('#iframeId');
    elem.parentNode.removeChild(elem);
    document.querySelector(".page.container.container--page")
    .setAttribute("style", "margin: auto");
    var btn = document.querySelector('#closebutton');
    btn.parentNode.removeChild(btn);
  //  window.removeEventListener("resize", resize);
    window.removeEventListener("scroll", scrollPosition);
    }
)};

  // Funktion für die aktuelle Breite des Browers
  // window.addEventListener("resize", resize);
