
let env_kitUrl = '';
let env_ccsFilesUrl = '';
let env_ccsSearchUrl = '';
let env_bucketName = '';
let programsUrl = '';
let mailingUrl = '';
let loginUrl = '';
let securityRemoteHost = '';

// uat
const uat_kitUrl = 'https://awsenterpriseapiuat.cap.org/insilico/api/kit/';
const uat_ccsFilesUrl = 'https://7i4wayeupe.execute-api.us-east-1.amazonaws.com/uat/files';
const uat_ccsSearchUrl = 'https://7i4wayeupe.execute-api.us-east-1.amazonaws.com/uat/files/search';
const uat_bucketName = 'capuat-insilico';
const uat_programsUrl = 'https://awsenterpriseapiuat.cap.org/insilico/api/program/mailings';
const uat_mailingUrl = 'https://awsenterpriseapiuat.cap.org/insilico/api/mailing/';
const uat_loginUrl = 'https://uatlogin.cap.org/oamfed/idp/initiatesso?providerid=cap.security.mule&returnurl=';
const uat_securityRemoteHost = 'https://apisuat.cap.org/security';

// tst
const tst_kitUrl = 'http://insilico-external-nlb2-0eeefec1bd559e4c.elb.us-east-1.amazonaws.com/insilico/api/kit/';
const tst_ccsFilesUrl = 'https://r6nl4dvzc7.execute-api.us-east-1.amazonaws.com/tst/files';
const tst_ccsSearchUrl = 'https://r6nl4dvzc7.execute-api.us-east-1.amazonaws.com/tst/files/search';
const tst_bucketName = 'captst-insilico';
const tst_programsUrl = 'http://insilico-external-nlb2-0eeefec1bd559e4c.elb.us-east-1.amazonaws.com/insilico/api/program/mailings';
const tst_mailingUrl = 'http://insilico-external-nlb2-0eeefec1bd559e4c.elb.us-east-1.amazonaws.com/insilico/api/mailing/';
const tst_loginUrl = 'https://tstlogin.cap.org/oamfed/idp/initiatesso?providerid=cap.security.mule&returnurl=';
const tst_securityRemoteHost = 'https://apistst.cap.org/security';

// dev
const dev_kitUrl = 'http://insilico-business-service-nlb-2dc0b48eef3b93a3.elb.us-east-1.amazonaws.com/insilico/api/kit/';
const dev_ccsFilesUrl = 'https://ftmp243cch.execute-api.us-east-1.amazonaws.com/dev/files';
const dev_ccsSearchUrl = 'https://ftmp243cch.execute-api.us-east-1.amazonaws.com/dev/files/search';
const dev_bucketName = 'capdev-insilico';
const dev_programsUrl = 'http://insilico-business-service-nlb-2dc0b48eef3b93a3.elb.us-east-1.amazonaws.com/insilico/api/program/mailings';
const dev_mailingUrl = 'http://insilico-business-service-nlb-2dc0b48eef3b93a3.elb.us-east-1.amazonaws.com/insilico/api/mailing/';
const dev_loginUrl = 'https://dev2login.cap.org/oamfed/idp/initiatesso?providerid=cap.security.mule&returnurl=';
const dev_securityRemoteHost = 'https://apisdev.cap.org/security';

// dev
const local_kitUrl = 'http://192.168.99.100:8080/insilico/api/kit/';
const local_ccsFilesUrl = 'https://ftmp243cch.execute-api.us-east-1.amazonaws.com/dev/files';
const local_ccsSearchUrl = 'https://ftmp243cch.execute-api.us-east-1.amazonaws.com/dev/files/search';
const local_bucketName = 'capdev-insilico';
const local_programsUrl = 'http://192.168.99.100:8080/insilico/api/program/mailings';
const local_mailingUrl = 'http://192.168.99.100:8080/insilico/api/mailing/';
const local_loginUrl = 'https://dev2login.cap.org/oamfed/idp/initiatesso?providerid=cap.security.mule&returnurl=';
const local_securityRemoteHost = 'https://apisdev.cap.org/security';


let mockedOuauthValue = null;
// const programsUrl = 'http://localhost:8080/insilico/api/program/mailings';
// const mailingUrl = 'http://localhost:8080/insilico/api/mailing/';

let env = '';
const currentLocation = window.location.href;

if (currentLocation.indexOf('/localhost') > -1 || currentLocation.indexOf('/192.168.99.100') > -1) {
    env = 'local';
    env_kitUrl = local_kitUrl;
    env_ccsFilesUrl = local_ccsFilesUrl;
    env_ccsSearchUrl = local_ccsSearchUrl;
    env_bucketName = local_bucketName;
    programsUrl = local_programsUrl;
    mailingUrl = local_mailingUrl;
    loginUrl = local_loginUrl;
    securityRemoteHost = local_securityRemoteHost;
} else if (currentLocation.indexOf('capdev') > -1) {
    env = 'dev';
    env_kitUrl = dev_kitUrl;
    env_ccsFilesUrl = dev_ccsFilesUrl;
    env_ccsSearchUrl = dev_ccsSearchUrl;
    env_bucketName = dev_bucketName;
    programsUrl = dev_programsUrl;
    mailingUrl = dev_mailingUrl;
    loginUrl = dev_loginUrl;
    securityRemoteHost = dev_securityRemoteHost;
} else if (currentLocation.indexOf('captst') > -1) {
    env = 'tst';
    env_kitUrl = tst_kitUrl;
    env_ccsFilesUrl = tst_ccsFilesUrl;
    env_ccsSearchUrl = tst_ccsSearchUrl;
    env_bucketName = tst_bucketName;
    programsUrl = tst_programsUrl;
    mailingUrl = tst_mailingUrl;
    loginUrl = tst_loginUrl;
    securityRemoteHost = tst_securityRemoteHost;
} else if (currentLocation.indexOf('capuat') > -1 || currentLocation.indexOf('vendoradminuat') > -1) {
    env = 'uat';
    env_kitUrl = uat_kitUrl;
    env_ccsFilesUrl = uat_ccsFilesUrl;
    env_ccsSearchUrl = uat_ccsSearchUrl;
    env_bucketName = uat_bucketName;
    programsUrl = uat_programsUrl;
    mailingUrl = uat_mailingUrl;
    loginUrl = uat_loginUrl;
    securityRemoteHost = uat_securityRemoteHost;
} else if (currentLocation.indexOf('capsup') > -1) {
    env = 'sup';
} else {
    env = 'prd';
}

const userInfoUrl = '/userInfo';
const currentUrl = window.location.href;
getOauthToken();
loadProgram();


// only needed for testing
let kitSummaries = null;


function getOauthToken() {
    console.log('---->>>> mockedOuauthValue', mockedOuauthValue);
    if (!mockedOuauthValue && (!getUrlParameter('access_token'))) {
        window.location.replace(loginUrl + currentUrl);
    } else if (getUrlParameter('access_token')) {
        mockedOuauthValue = getUrlParameter('access_token');
        console.log('set the oauth token to ', mockedOuauthValue);
    }
}

function loadProgram() {

    const authorizationToken = 'Bearer ' + mockedOuauthValue;
    $.ajax({
        type: 'GET',
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", authorizationToken);
            request.setRequestHeader("caporg-correlation-id", "cap-jquery-test");
        },
        url: programsUrl,
        processData: false,
        error: function (err) {
            console.log('error', err);
        },
        success: function (msg) {
            const $mailingSelect = $('#mailings');
            let _afterInterimDate = false;
            let _capApprovedForDownload = false;
            const $interimDueDateSelect = $('#interim-due-date');
            $interimDueDateSelect.empty().append('<option value="">Please select...</option>');
            $interimDueDateSelect.append('<option value="true">True</option>');
            $interimDueDateSelect.append('<option value="false">False</option>');
            $interimDueDateSelect.change(function () {
                resetFileProcessor();
                _afterInterimDate = ($(this).val() === 'true');
                fileWrapperList = [];
            });
            const $capApprovedSelect = $('#cap-approved');
            $capApprovedSelect.empty().append('<option value="">Please select...</option>');
            $capApprovedSelect.append('<option value="true">True</option>');
            $capApprovedSelect.append('<option value="false">False</option>');
            $capApprovedSelect.change(function () {
                resetFileProcessor();
                _capApprovedForDownload = ($(this).val() === 'true');
                fileWrapperList = [];
            });
            msg.forEach(function (m) {
                $mailingSelect.append('<option value=' + m.mailingId + '>' + m.mailingItemId + '</option>');
            });
            $mailingSelect.unbind('change');
            $mailingSelect.change(function () {
                resetFileProcessor();
                document.getElementById("file-input").value = null;
                let _mailingId = $(this).val();
                const $kitSelect = $('#kits');
                $kitSelect.val('');
                $kitSelect.empty().append('<option value="">Please select...</option>');
                $.ajax({
                    type: 'GET',
                    beforeSend: function (request) {
                        request.setRequestHeader("Authorization", authorizationToken);
                        request.setRequestHeader("caporg-correlation-id", "cap-jquery-test");
                    },
                    url: mailingUrl + _mailingId + '/kits/summary',
                    processData: false,
                    error: function (err) {
                        console.log('error', err);
                    },
                    success: function (val) {
                        kitSummaries = val;
                        val.forEach(function (v) {
                            $kitSelect.append('<option value=' + v.kitId + '>Kit ' + v.kitId + '</option>');
                        });
                        $kitSelect.unbind('change');
                        $kitSelect.change(function () {
                            document.getElementById("file-input").value = null;
                            resetFileProcessor();
                            let _kitId = $(this).val();
                            let _capNumber = kitSummaries.filter(function (ks) {
                                return ks.kitId === _kitId;
                            })[0].capNumber;
                            document.getElementById('file-generator-syntax').innerHTML =
                                'mvn exec:java -Dexec.mainClass="FakeFileGenerator" -Dexec.args="' + _mailingId + ' ' + _kitId + ' ' + mockedOuauthValue + '"';
                            document.getElementById('generated-file-path').innerHTML =
                                'c:\\insilico_test_files\\' + _capNumber + '\\' + _mailingId + '\\' + _kitId + '\\';
                            console.log('**** values populated before real test begins ****');
                            console.log('_mailingId: ', _mailingId);
                            console.log('_kitId: ', _kitId);
                            console.log('_capNumber: ', _capNumber);
                            console.log('**************************************************');
                            // this is what we need to call to load these functions
                            if (_kitId) {

                                // POSSIBLE VALUES FOR CODE:
                                //
                                // NO_FILES_UPLOADED
                                // DEFICIENT_BED_FILE
                                // DEFICIENT_STARTER_FILES
                                // ALL_FILES_UPLOADED

                                const concatString =
                                    mockedOuauthValue + '|' +
                                    _mailingId + '|' +
                                    _kitId + '|' +
                                    _capNumber + '|' +
                                    _afterInterimDate + '|' +
                                    _capApprovedForDownload + '|' +
                                    env_ccsFilesUrl + '|' +
                                    env_ccsSearchUrl + '|' +
                                    env_kitUrl + '|' +
                                  env_bucketName + '|' +
                                    true;
                                loadFileProcessor(concatString);
                            }
                        });
                    }
                });
            });
        }
    });
}

/* this is just junk since ouath should be known in elss */

/* we're just doing what elss will do for us */
function getUrlParameter(sParam) {
    const sPageURL = window.location.search.substring(1);
    const sURLVariables = sPageURL.split('&');
    let sParameterName;
    for (let i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}
