<configuration>
    <applications>
        <application>
            <md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" entityID="http://www.okta.com/kh7zCAQGBWGUMQONCYNP">
              <md:IDPSSODescriptor WantAuthnRequestsSigned="true" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
                <md:KeyDescriptor use="signing">
                  <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
                    <ds:X509Data>
                      <ds:X509Certificate>MIICnTCCAgagAwIBAgIGASlMNawDMA0GCSqGSIb3DQEBBQUAMIGRMQswCQYDVQQGEwJVUzETMBEG
                        {/* <!-- x509 certificate goes here --> */}
                      </ds:X509Certificate>
                    </ds:X509Data>
                  </ds:KeyInfo>
                </md:KeyDescriptor>
                <md:NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress</md:NameIDFormat>
                <md:NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified</md:NameIDFormat>
                <md:SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="http://rain.okta1.com:1802/app/jira_onprem/kh7zCAQGBWGUMQONCYNP/sso/saml"/><md:SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://acme.okta.com/app/jira_onprem/1234567890/sso/saml"/>
              </md:IDPSSODescriptor>
            </md:EntityDescriptor>
        </application>
    </applications>
 
    <allowedAddresses>
        {/* <!--If this section defined, it describes which IP addresses can use Okta Authenticator to log into Jira.
                This block takes precedence over spUsers block below.--> */}
        <oktaUsers>
            <ipFrom>192.168.3.10</ipFrom>
            <ipTo>192.168.3.220</ipTo>
        </oktaUsers>
 
        {/* <!--If this section defined, it describes which IP addresses can use Native Jira autheticator (login/pass) to log into Jira. */}
        {/* This block has lower priority than oktaUsers block.--> */}
        <spUsers>
            <ipFrom>*.*.*.*</ipFrom>
            <ipTo>*.*.*.*</ipTo>
        </spUsers>
    </allowedAddresses>
 
    {/* <!--If this section defined, SP flow can be disabled for users,
        listed below. In this case they will be forced to login using their login/pass. --> */}
    <spUsers>
        <username>user1</username>
        <username>user2</username>
        <username>user3</username>
    </spUsers>
 
    {/* <!--If this section defined, SP flow can be disabled for users assigned to groups in Jira,
       listed below. In this case they will be forced to login using their login/pass. --> */}
    <spGroups>
        <groupname>group1</groupname>
        <groupname>group2</groupname>
        <groupname>group3</groupname>
    </spGroups>
 
    {/* <!-- If this section defined, authenticator won't be used for URLs listed below --> */}
    <spUrls>
        <url>servicedesk/customer/portal</url>
    </spUrls>
 
    {/* <!-- This field is used to define whether you need to send LoginEvent to Jira.
        Some Jira plugins may rely on this event, so you can enable it if needed.
        Default value is false, which means no events will be sent
        Allowed values: true or false --> */}
    <fireLoginEvent>false</fireLoginEvent>
 
    {/* <!-- This field is used to define whether you need to send UserAuthenticatedEvent to Jira.
        If you have configured any Directories in Jira
        and you want to apply deafult group settings configured in this Directory,
        you have to turn this flag on. Once it turned on - UserAuthenticatedEvent will be sent to Jira on first user login,
        and this event will trigger default group assignment process.
        Default value is false, which means no events will be sent
        Allowed values: true or false --> */}
    <fireUserAuthenticatedEvent>false</fireUserAuthenticatedEvent>
 
    {/* <!-- This is requred section.
        Okta will use SAML authentication for URLs matching with listed below patterns --> */}
    <oktaProtectedUrls>
        <url>/secure/</url>
        <url>/browse/</url>
    </oktaProtectedUrls>
 
    {/* <!-- This is required section. */}
        {/* It is used to let Jira know to what URL it should redirect user for authentication --> */}
    <loginUri>https://acme.okta.com/app/jira_onprem/1234567890/sso/saml</loginUri>
 
</configuration>
