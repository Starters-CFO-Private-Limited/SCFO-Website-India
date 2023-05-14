// google tag manager
(function (w, d, s, l, i) {
  w[l] = w[l] || []; w[l].push({
    'gtm.start':
      new Date().getTime(), event: 'gtm.js'
  }); var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
      'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-TM334CP');

// google ads
function gtag_report_conversion(type, value) {
  const callback = undefined;
  if (type === "LEAD_FORM") {
    gtag('event', 'conversion', {
      'send_to': 'AW-381900879/shhDCMrK6sYDEM-wjbYB',
      'value': value || 3000.0,
      'currency': 'INR',
      'event_callback': callback
    });
  } else if (type === "APPOINTMENT") {
    gtag('event', 'conversion', {
      'send_to': 'AW-381900879/zW-rCM3K6sYDEM-wjbYB',
      'value': 3000.0,
      'currency': 'INR',
      'event_callback': callback
    });
  } else if (type === "CONTACT") {
    gtag('event', 'conversion', {
      'send_to': 'AW-381900879/IS_VCMPM6sYDEM-wjbYB',
      'value': 3000.0,
      'currency': 'INR',
      'event_callback': callback
    });
  }

  return false;
}
