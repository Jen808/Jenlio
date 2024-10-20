exports.handler = async function(event, context) {
  try {
    const geoData = JSON.parse(event.body);

    // Log the Geolocation data
    console.log('Geolocation data:', {
      city: geoData.city,
      region: geoData.region,
      country: geoData.country,
      loc: geoData.loc,
      postal: geoData.postal,
      timezone: geoData.timezone
    });

    // Log the ASN information
    console.log('ASN data:', {
      asn: geoData.asn.asn,
      name: geoData.asn.name,
      domain: geoData.asn.domain,
      route: geoData.asn.route,
      type: geoData.asn.type
    });

    // Log the Company Information
    console.log('Company data:', {
      name: geoData.company.name,
      domain: geoData.company.domain,
      type: geoData.company.type
    });

    // Log the Privacy information
    console.log('Privacy data:', {
      vpn: geoData.privacy.vpn,
      proxy: geoData.privacy.proxy,
      tor: geoData.privacy.tor,
      relay: geoData.privacy.relay,
      hosting: geoData.privacy.hosting
    });

    // Log the Abuse Contact Information
    console.log('Abuse contact data:', {
      address: geoData.abuse.address,
      country: geoData.abuse.country,
      email: geoData.abuse.email,
      name: geoData.abuse.name,
      network: geoData.abuse.network,
      phone: geoData.abuse.phone
    });

    // Log the Domains associated with the IP
    console.log('Domains data:', {
      ip: geoData.ip,
      totalDomains: geoData.domains.total,
      domainList: geoData.domains.domains
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Geolocation, ASN, and abuse data received successfully',
        data: geoData
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred', error: error.toString() })
    };
  }
};
