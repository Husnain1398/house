const stagingEnvironment = "development";
function CreateConfig(baseURL) {
    return {
        baseURL:
            process.env.NODE_ENV === stagingEnvironment ||
                process.env.REACT_APP_CI_DEPLOY
                ? `${baseURL}staging/`
                : baseURL,
        headers: {
            "x-access-token": localStorage.getItem("token"),
            "x-refresh-token": localStorage.getItem("refresh"),
        },
    };
}
export const STAGING_URL = "https://rts-staging.co/";

const PRODUCTION_URL = "https://rts.production.co/";

const STAGING_FOUNDATION = "https://rts-staging.co/";

const PRODUCTION_FOUNDATION = "https://rts.production.co/";

export const axiosConfigOptions = CreateConfig(
    process.env.NODE_ENV === stagingEnvironment || process.env.REACT_APP_CI_DEPLOY
        ? STAGING_URL
        : PRODUCTION_URL
);

export const axiosFoundationOptions = CreateConfig(
    process.env.NODE_ENV === stagingEnvironment || process.env.REACT_APP_CI_DEPLOY
        ? STAGING_FOUNDATION
        : PRODUCTION_FOUNDATION
);
