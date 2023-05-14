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
