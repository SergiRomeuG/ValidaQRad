import { html, render } from 'lit-html';
import { log } from '../log'
import { CWT } from "../components/cwt"
import { AbstractPage } from './abstractpage'
import { verifyHcert } from '../components/verifications'
//import { T } from '../i18n/translate';
//import { gotoPage } from '../router';
import ok_image from "../img/ok.jpg"
import error_image from "../img/error.jpg"
import warning_image from "../img/warning.png"

var gotoPage = window.gotoPage

export class DisplayHcert extends AbstractPage {

    constructor(id) {
        console.log("HCERT: Constructor")
        super(id)
    }

    async enter(qrContent, historyData) {
        console.log("PRESENT Enter", qrContent)
//        if (historyData) { gotoPage("verifier"); return;}
        // let qrContent = pageData.text
        let hcert = undefined
        let verified = false
        let thehtml = ""

        // Decode credential verifying it at the same time
        try {
            hcert = await CWT.decodeHC1QR(qrContent, true);
            verified = hcert[3]
        } catch (error) {
            log.myerror("Error verifying credential", error)
            this.render(this.renderGeneralError(error))
            return;
        }

        // Build the verification structure
        let verification = {
            result: "OK",
            message: T("The certificate is valid.")
        }

        if (verified === false) {
            verification.result = "ERROR"
            verification.message = T("Signature validation failed. The certificate is not valid.")
        } else if (verified === "PRE") {
            verification.result = "WARNING"
            verification.message = T("$warningmsg")
        }

        // If basic verification was OK, apply additional verifications
        console.log(verification)
        if ((verified === true) || (verified === "PRE")) {
            console.log("Additional verifications")
            verified = verifyHcert(hcert)
            console.log(verified)
            if (verified != true) {
                verification.result = "ERROR",
                verification.message = T(verified)
            }
        }

        console.log(verification)

        try {
            // Render the credential
            thehtml = this.renderDetail(hcert, verification);
        } catch (error) {
            log.myerror("Error rendering credential", error)
            this.render(this.renderGeneralError(error))
            return;
        }

        let fullPage = html`
        ${thehtml}
        <div class="sect-white">
            <button @click=${()=> gotoPage("verifier")} class="w3-button btn-color-primary btn-hover-color-primary
            w3-xlarge w3-round-xlarge">
            ${T("Verify another")}</button>
        </div>
        `
        this.render(fullPage)

    }

    renderGeneralError(error) {
        return html`
            <div id="hcertFailed" class="w3-panel bkg-fail">
                <h3>Failed!</h3>
                <p>The credential has an invalid format.</p>
            </div>
            `
    }

    renderDetail(cred, verification) {
        // The credential
        let payload = cred[1];

        let title = "VALIDATED"
        let image = ok_image
        let color = "text-color-success"

        if (verification.result === "WARNING") {
            title = "Warning"
            image = warning_image
            color = "text-color-warning"
        } else if (verification.result === "ERROR") {
            title = "Not Validated"
            image = error_image
            color = "text-color-error"
        }

        let thehtml = html`

            <div class="container">

                <div id="hcertWarning" class="w3-panel" style="text-align: center;">
                    <img style="width: 100px;" src=${image}  alt="">
                    <div id="validationResultText" style="margin-top: 10px; margin-bottom: 10px;">
                        <p class="${color}" style="font-size: 24px;">${T(title)}</p>
                        <p class="${color}" style="font-size: 24px;">${verification.message}</p>
                    </div>
                </div>

                <div class="section text-color">
                    <div class="subsection">
                        <div class="etiqueta">${T("Surname and forename")}</div>
                        <div class="valor" style="font-size: 24px;">${payload.fullName}</div>
                    </div>
                    <hr>
                    <div class="subsection">
                        <div class="etiqueta">${T("Date of birth")}</div>
                        <div class="valor" style="font-size: 24px;">${payload.dateOfBirth}</div>
                    </div>
                </div>
           
            </div>
        `;
    
        return thehtml;
    }

}


