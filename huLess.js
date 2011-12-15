//huLess

var D = ['#recommended-videos', '#description-container', '#show-and-watch-container', '#footer', '#watch_page_social', '.subscription-links'],
    huLess = {$: function(id) {return document.querySelector(id);}},
    player = huLess.$('#player-container'),
    bottomDim = huLess.$('#overlay-bottom'),
    bs = bottomDim.style,
    topDim = huLess.$('#overlay-top'),
    ts = topDim.style,
    padding = (window.innerHeight - player.offsetHeight) / 2,
    offset = padding - (huLess.$('#top-sec-nv').offsetHeight + huLess.$('#container').offsetHeight),
    logo_white = 'iVBORw0KGgoAAAANSUhEUgAAAF4AAAAqCAYAAAA6Yey5AAACQ0lEQVRo3u2YvaoqMRSFz8PZCjZqZecPioKVpeJfIQiChY0PoIWFhZXY+ACChZWN2IiNWGhlk8sKZNjmjma83Hs941kLNplkx4Bf9qxEvxT1Fn0RAcETPEXwBE8RPMFTBE/wFMETPEXwBE/wIVOtVlPVapXg/7dKpZIqFAoE/0zNZlPHI3W7XdXv919as1gsErxLuVxOZTKZh/lGo6Gi0SjB/wvw6XT6r4KH1eTzeYJ/R8UTvEPZbJYV/07wp9PJi/P57LU2+Ol0qsOWHPPz+MvlosbjsapUKjrwjDF7znA49PK2XPnQgQdYVxjF43HVbrfv1phMJnrObrfzrXgAQz8SiXjg8YwxCR/9WCzmzbXhuvKhAm8O19FopL+IbBF2xQN8q9V6Ct72eFQpQG23W29suVzewVutVrqPcdOXcuVDCf6VwzWRSAQCL60mlUrpKgcsGWYcOhwO3ltg4Eq58qGt+KDgg1S8bTUA9ihgHfItwGZgHK1d1a78R4NPJpP6vxip+Xyu5+z3e1+rASjYTVDNZjMNFptiH8BB8h9hNfV6/Q58uVz+bX6n09FzbrebL3hsHkDZkHq9noYo7cTIeLqsalf+oyreBm9sZTAYqPV6rRaLhe4brzZWIz3eQDL+jD42Qx6uaE0feawnK9qV/3irgXCdlFdNXEml/H65AjhASW+X10FzR5d5+Ta48qED/6e6Xq9qs9mo4/H40udQrfJaaQuAn9mHK//x4H+CCJ7gCZ4ieIKnCJ7gKYIneIrgv7d+ARBUxjvqCNB2AAAAAElFTkSuQmCC',
    logo_grey = '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';

huLess.toggle = function() {

  if (huLess.$(D[0]).style.height === '') {
    for (var i = D.length - 1; i >= 0; --i) {
      var ds = huLess.$(D[i]).style;
      ds.height = '0px';
      ds.opacity = '0';
      ds.display = 'none';
    }

    player.style.marginTop = Math.ceil(offset) + 'px';
    ts.display = bs.display = 'block';
    ts.height = topDim.offsetHeight + offset + 'px';
    setTimeout("huLess.$('embed#player').lightStatusChanged('off')", 5000);
  }
  else {
    for (var i = D.length - 1; i >= 0; --i) {
      var ds = huLess.$(D[i]).style;
      ds.display = 'block';
      ds.height = '';
      ds.opacity = '1';
    }
    huLess.$('#player-container').style.marginTop = '0px';
    ts.display = bs.display = 'none';
  }
};


huLess.$('ul.nv').appendChild(document.createElement('li')).setAttribute('id', 'HuLess');

huLess.$('li#HuLess').innerHTML = '<a href="#"> <img alt="Toggle HuLess" border=0 src="data:image/png;base64,' + logo_white + '" title="Toggle HuLess" style="cursor: pointer; margin-left: 24px" id="huLess_img"  onmouseover="this.src=\'data:image/png;base64,' + logo_grey + '\'" onmouseout="this.src=\'data:image/png;base64,' + logo_white + '\'"></a>';

huLess.$('#HuLess').onclick = huLess.toggle;

huLess.toggle();

bs.height = Math.floor(padding) + 'px';
bs.top = topDim.offsetHeight + player.offsetHeight - 1 + 'px';


for (var i = D.length - 1; i >= 0; --i) {
  huLess.$(D[i]).style.WebkitTransition = 'all 1s ease-in-out';
}
