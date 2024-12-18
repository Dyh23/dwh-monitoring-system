const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;

passport.use(new OIDCStrategy({
    identityMetadata: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT_ID}/.well-known/openid-configuration`,
    clientID: process.env.REACT_APP_AZURE_CLIENT_ID,
    responseType: 'code id_token',
    responseMode: 'form_post',
    redirectUrl: 'https://a224-2404-160-8174-29ee-21fa-ac1-137f-951.ngrok-free.app/auth/callback', // Replace with your new ngrok URL

    clientSecret: process.env.REACT_APP_AZURE_CLIENT_SECRET,
    validateIssuer: false,
    passReqToCallback: false,
    scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],
    loggingLevel: 'info',
    nonceLifetime: null,
    nonceMaxAmount: 5,
    clockSkew: null,
}, (iss, sub, profile, accessToken, refreshToken, done) => {
    if (!profile.oid) {
        return done(new Error("No OID found"), null);
    }
    return done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
